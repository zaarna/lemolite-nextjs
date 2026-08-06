// lib/processFormData.js

import fs from "fs";
import path from "path";
import crypto from "crypto";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // docx
];

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

  // Create uploads directory if it doesn't exist
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  await fs.promises.mkdir(uploadDir, {
    recursive: true,
  });

  for (const [key, value] of formDataInstance.entries()) {
    // -----------------------------
    // FILES
    // -----------------------------
    if (value instanceof File && value.size > 0) {
      // Validate file size
      if (value.size > MAX_FILE_SIZE) {
        throw new Error("File size should not exceed 5MB.");
      }

      // Validate file type
      if (!ALLOWED_FILE_TYPES.includes(value.type)) {
        throw new Error(`Unsupported file type: ${value.type || "Unknown"}`);
      }

      const buffer = Buffer.from(await value.arrayBuffer());

      const cleanName = value.name.replace(/[^a-zA-Z0-9.-]/g, "-");

      const filename = `${Date.now()}-${crypto.randomUUID()}-${cleanName}`;

      const filepath = path.join(uploadDir, filename);

      await fs.promises.writeFile(filepath, buffer);

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

      formData[key] = url;
    }

    // -----------------------------
    // TEXT FIELDS
    // -----------------------------
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

  // -----------------------------
  // Reconstruct sections[]
  // -----------------------------
  const sectionEntries = Object.entries(formData)
    .filter(([key]) => key.startsWith("sections["))
    .sort(([a], [b]) => {
      const aIndex = parseInt(a.match(/\[(\d+)\]/)[1], 10);
      const bIndex = parseInt(b.match(/\[(\d+)\]/)[1], 10);

      return aIndex - bIndex;
    });

  if (sectionEntries.length) {
    formData.sections = sectionEntries.map(([, value]) => {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    });

    sectionEntries.forEach(([key]) => delete formData[key]);
  }

  return {
    formData,
    fileData,
  };
};
