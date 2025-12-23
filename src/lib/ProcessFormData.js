// lib/processFormData.js   (create this file in your project root or lib/)

import fs from "fs";
import path from "path";

const parseJsonField = (value, fieldname, expectedType = "object") => {
  if (typeof value === "string" && value.trim() === "[object Object]") {
    throw new Error(`[object Object] received in ${fieldname}`);
  }

  let parsed;
  try {
    parsed = typeof value === "string" ? JSON.parse(value) : value;
  } catch (err) {
    throw new Error(`Invalid JSON in ${fieldname}: ${err.message}`);
  }

  if (
    (expectedType === "array" && !Array.isArray(parsed)) ||
    (expectedType === "object" &&
      (parsed === null || typeof parsed !== "object"))
  ) {
    throw new Error(`Expected ${fieldname} to be a valid ${expectedType}`);
  }

  return parsed;
};

export const processFormData = async (formDataInstance) => {
  const formData = {};
  const fileData = [];

  // Create uploads folder
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Loop through all form fields
  for (const [key, value] of formDataInstance.entries()) {
    // ← native FormData
    if (value instanceof File && value.size > 0) {
      // ─── HANDLE FILE ─────────────────────
      const buffer = Buffer.from(await value.arrayBuffer());
      const filename = `${Date.now()}-${value.name.replace(/\s+/g, "-")}`;
      const filepath = path.join(uploadDir, filename);

      fs.writeFileSync(filepath, buffer);

      const url = `/uploads/${filename}`;

      fileData.push({
        fieldname: key,
        originalName: value.name,
        filename,
        filepath,
        url,
        mimetype: value.type,
        size: value.size,
      });

      // Optional: store URL in formData too
      formData[key] = url;
    }
    // ─── HANDLE TEXT / JSON FIELDS ───────
    else {
      const stringValue = value.toString();

      if (key === "seo" || key === "button") {
        formData[key] = parseJsonField(stringValue, key, "object");
      } else if (key === "tags") {
        formData[key] = parseJsonField(stringValue, key, "array");
      } else if (key === "multiimage") {
        formData.multiimage = formData.multiimage || [];
        formData.multiimage.push(stringValue);
      } else {
        formData[key] = stringValue;
      }
    }
  }

  // ─── RECONSTRUCT sections[] array (exactly like your old code) ───────
  const sectionEntries = Object.entries(formData)
    .filter(([k]) => k.startsWith("sections["))
    .sort(([a], [b]) => {
      const aIdx = parseInt(a.match(/\[(\d+)\]/)[1], 10);
      const bIdx = parseInt(b.match(/\[(\d+)\]/)[1], 10);
      return aIdx - bIdx;
    });

  if (sectionEntries.length > 0) {
    formData.sections = sectionEntries.map(([, v]) => {
      try {
        return JSON.parse(v);
      } catch {
        return v; // keep raw if not JSON
      }
    });

    // Clean up raw sections[0] keys
    sectionEntries.forEach(([k]) => delete formData[k]);
  }

  return { formData, fileData };
};
