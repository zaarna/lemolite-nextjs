'use client';

import { useResponsive } from '@/hooks/useResponsive';

/**
 * Demo component showing how to use the useResponsive hook
 * This can be imported and used in any page to test the responsive functionality
 */
export default function ResponsiveDemo() {
  const {
    width,
    height,
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isBreakpoint,
    isBelowBreakpoint,
    getResponsiveValue
  } = useResponsive();

  // Example responsive values
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

  const gridCols = getResponsiveValue({
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Responsive Hook Demo</h2>
      
      {/* Basic Info */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Screen Information</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>Width: <span className="font-mono">{width}px</span></div>
          <div>Height: <span className="font-mono">{height}px</span></div>
          <div>Breakpoint: <span className="font-mono">{breakpoint}</span></div>
        </div>
      </div>

      {/* Device Type */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Device Type</h3>
        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-sm ${isMobile ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Mobile
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${isTablet ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
            Tablet
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${isDesktop ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}>
            Desktop
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${isLargeDesktop ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
            Large Desktop
          </span>
        </div>
      </div>

      {/* Breakpoint Checks */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Breakpoint Checks</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>Is at least medium: <span className="font-mono">{isBreakpoint('md') ? 'Yes' : 'No'}</span></div>
          <div>Is below large: <span className="font-mono">{isBelowBreakpoint('lg') ? 'Yes' : 'No'}</span></div>
        </div>
      </div>

      {/* Responsive Values */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Responsive Values</h3>
        <div className="space-y-2 text-sm">
          <div>Font Size: <span className="font-mono">{fontSize}</span></div>
          <div>Padding: <span className="font-mono">{padding}</span></div>
          <div>Grid Columns: <span className="font-mono">{gridCols}</span></div>
        </div>
      </div>

      {/* Live Demo */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Live Demo</h3>
        <div 
          className="bg-white rounded p-4 border"
          style={{ fontSize, padding }}
        >
          <p>This text has responsive font size and padding!</p>
          <p className="text-sm text-gray-600 mt-2">
            Resize your browser window to see the values change.
          </p>
        </div>
      </div>

      {/* Responsive Grid Demo */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Responsive Grid ({gridCols} columns)</h3>
        <div 
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div 
              key={i} 
              className="bg-blue-100 p-2 rounded text-center text-sm"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Conditional Content */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Conditional Content</h3>
        <div className="space-y-2">
          {isMobile && (
            <div className="bg-red-100 p-3 rounded text-sm">
              📱 Mobile-specific content
            </div>
          )}
          {isTablet && (
            <div className="bg-yellow-100 p-3 rounded text-sm">
              📱 Tablet-specific content
            </div>
          )}
          {isDesktop && (
            <div className="bg-green-100 p-3 rounded text-sm">
              💻 Desktop-specific content
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
