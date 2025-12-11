"use client";

import { useEffect } from "react";

export default function RedditPixel() {
  //   useEffect(() => {
  //     // bootstrap rdt if not present
  //     window.rdt =
  //       window.rdt ||
  //       function () {
  //         window.rdt.q = window.rdt.q || [];
  //         window.rdt.q.push(arguments);
  //       };

  //     // load pixel.js manually
  //     const script = document.createElement("script");
  //     script.src = "https://www.redditstatic.com/ads/pixel.js";
  //     script.async = true;

  //     script.onload = () => {
  //       console.log("Reddit pixel loaded");

  //       // now call init AFTER pixel.js is ready
  //       window.rdt("init", "a2_hzse89lydm1c");
  //       window.rdt("track", "PageVisit");

  //       // optional: manually flush leftover queued calls
  //       if (Array.isArray(window.rdt.q)) {
  //         const queue = [...window.rdt.q];
  //         window.rdt.q = []; // clear queue
  //         queue.forEach((args) => {
  //           try {
  //             window.rdt.apply(null, args);
  //           } catch (e) {
  //             console.error("Flush error:", e);
  //           }
  //         });
  //       }
  //     };

  //     script.onerror = (e) => {
  //       console.error("Failed to load Reddit pixel:", e);
  //     };

  //     document.body.appendChild(script);
  //   }, []);

  return null;
}
