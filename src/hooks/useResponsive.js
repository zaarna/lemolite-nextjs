"use client";

import { useState, useEffect, useMemo } from "react";

// Default breakpoints matching Tailwind CSS breakpoints
const defaultBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 * Custom hook for responsive design
 * @param {Object} customBreakpoints - Custom breakpoints object (optional)
 * @returns {Object} Responsive state and utilities
 */
export const useResponsive = (customBreakpoints = {}) => {
  const breakpoints = useMemo(
    () => ({ ...defaultBreakpoints, ...customBreakpoints }),
    [customBreakpoints]
  );

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState("xs");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize((prev) =>
        prev.width !== width || prev.height !== height
          ? { width, height }
          : prev
      );

      const sortedBreakpoints = Object.entries(breakpoints).sort(
        ([, a], [, b]) => b - a
      );

      for (const [bp, minWidth] of sortedBreakpoints) {
        if (width >= minWidth) {
          setCurrentBreakpoint((prev) => (prev !== bp ? bp : prev));
          break;
        }
      }
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  // Helper functions for common responsive checks
  const isMobile = windowSize.width < breakpoints.md;
  const isTablet =
    windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  const isDesktop = windowSize.width >= breakpoints.lg;
  const isLargeDesktop = windowSize.width >= breakpoints.xl;

  // Function to check if current breakpoint matches or is larger than given breakpoint
  const isBreakpoint = (breakpoint) => {
    return windowSize.width >= breakpoints[breakpoint];
  };

  // Function to check if current breakpoint is smaller than given breakpoint
  const isBelowBreakpoint = (breakpoint) => {
    return windowSize.width < breakpoints[breakpoint];
  };

  // Function to get responsive value based on breakpoints
  const getResponsiveValue = (values) => {
    const sortedBreakpoints = Object.entries(breakpoints).sort(
      ([, a], [, b]) => b - a
    );

    for (const [breakpoint, minWidth] of sortedBreakpoints) {
      if (windowSize.width >= minWidth && values[breakpoint] !== undefined) {
        return values[breakpoint];
      }
    }

    // Fallback to the smallest breakpoint value
    return (
      values.xs ||
      values.sm ||
      values.md ||
      values.lg ||
      values.xl ||
      values["2xl"]
    );
  };

  return {
    // Window dimensions
    width: windowSize.width,
    height: windowSize.height,

    // Current breakpoint
    breakpoint: currentBreakpoint,

    // Device type checks
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,

    // Breakpoint utilities
    isBreakpoint,
    isBelowBreakpoint,
    getResponsiveValue,

    // All breakpoints for reference
    breakpoints,
  };
};

export default useResponsive;
