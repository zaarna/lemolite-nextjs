/**
 * Example usage of useResponsive hook
 * This file demonstrates various ways to use the responsive hook
 */

import { useResponsive } from './useResponsive';

// Example 1: Basic usage
export function BasicResponsiveExample() {
  const { width, height, breakpoint, isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div>
      <h2>Basic Responsive Info</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      <p>Current Breakpoint: {breakpoint}</p>
      <p>Is Mobile: {isMobile ? 'Yes' : 'No'}</p>
      <p>Is Tablet: {isTablet ? 'Yes' : 'No'}</p>
      <p>Is Desktop: {isDesktop ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Example 2: Conditional rendering based on breakpoints
export function ConditionalRenderingExample() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div>
      {isMobile && <div>Mobile Content</div>}
      {isTablet && <div>Tablet Content</div>}
      {isDesktop && <div>Desktop Content</div>}
    </div>
  );
}

// Example 3: Using getResponsiveValue for dynamic values
export function ResponsiveValuesExample() {
  const { getResponsiveValue } = useResponsive();

  const fontSize = getResponsiveValue({
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
    '2xl': '24px'
  });

  const padding = getResponsiveValue({
    xs: '10px',
    sm: '15px',
    md: '20px',
    lg: '25px',
    xl: '30px'
  });

  return (
    <div style={{ fontSize, padding }}>
      Responsive text with dynamic font size and padding
    </div>
  );
}

// Example 4: Using isBreakpoint and isBelowBreakpoint
export function BreakpointCheckExample() {
  const { isBreakpoint, isBelowBreakpoint } = useResponsive();

  return (
    <div>
      <p>Is at least medium: {isBreakpoint('md') ? 'Yes' : 'No'}</p>
      <p>Is below large: {isBelowBreakpoint('lg') ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Example 5: Custom breakpoints
export function CustomBreakpointsExample() {
  const customBreakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1200,
    wide: 1600
  };

  const { breakpoint, width } = useResponsive(customBreakpoints);

  return (
    <div>
      <p>Custom breakpoint: {breakpoint}</p>
      <p>Width: {width}px</p>
    </div>
  );
}

// Example 6: Responsive grid columns
export function ResponsiveGridExample() {
  const { getResponsiveValue } = useResponsive();

  const gridCols = getResponsiveValue({
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    '2xl': 6
  });

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        gap: '1rem'
      }}
    >
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} style={{ padding: '1rem', border: '1px solid #ccc' }}>
          Item {i + 1}
        </div>
      ))}
    </div>
  );
}

// Example 7: Responsive image sizes
export function ResponsiveImageExample() {
  const { getResponsiveValue } = useResponsive();

  const imageSize = getResponsiveValue({
    xs: '100%',
    sm: '80%',
    md: '60%',
    lg: '50%',
    xl: '40%'
  });

  return (
    <img 
      src="/your-image.jpg" 
      alt="Responsive image"
      style={{ 
        width: imageSize,
        height: 'auto',
        display: 'block',
        margin: '0 auto'
      }}
    />
  );
}
