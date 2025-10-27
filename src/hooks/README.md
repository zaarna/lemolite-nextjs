# Responsive Hooks

This directory contains custom React hooks for responsive design in the Next.js application.

## useResponsive Hook

A comprehensive hook for handling responsive design with breakpoint detection and utility functions.

### Features

- **Breakpoint Detection**: Automatically detects current screen size and breakpoint
- **Device Type Detection**: Quick checks for mobile, tablet, and desktop
- **Responsive Values**: Get different values based on current breakpoint
- **Custom Breakpoints**: Support for custom breakpoint definitions
- **Performance Optimized**: Uses efficient event listeners and cleanup

### Default Breakpoints

The hook uses Tailwind CSS default breakpoints:

```javascript
{
  xs: 0,      // Extra small devices
  sm: 640,    // Small devices
  md: 768,    // Medium devices
  lg: 1024,   // Large devices
  xl: 1280,   // Extra large devices
  '2xl': 1536 // 2X large devices
}
```

### Basic Usage

```javascript
import { useResponsive } from '@/hooks/useResponsive';

function MyComponent() {
  const { width, height, breakpoint, isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div>
      <p>Current breakpoint: {breakpoint}</p>
      <p>Screen width: {width}px</p>
      {isMobile && <div>Mobile content</div>}
      {isDesktop && <div>Desktop content</div>}
    </div>
  );
}
```

### Advanced Usage

#### Responsive Values

```javascript
function ResponsiveComponent() {
  const { getResponsiveValue } = useResponsive();

  const fontSize = getResponsiveValue({
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px'
  });

  return <div style={{ fontSize }}>Responsive text</div>;
}
```

#### Custom Breakpoints

```javascript
function CustomBreakpointComponent() {
  const customBreakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1200,
    wide: 1600
  };

  const { breakpoint, isBreakpoint } = useResponsive(customBreakpoints);

  return (
    <div>
      <p>Current breakpoint: {breakpoint}</p>
      <p>Is desktop or larger: {isBreakpoint('desktop') ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### API Reference

#### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `width` | number | Current window width in pixels |
| `height` | number | Current window height in pixels |
| `breakpoint` | string | Current breakpoint name |
| `isMobile` | boolean | True if width < md breakpoint |
| `isTablet` | boolean | True if width >= md and < lg |
| `isDesktop` | boolean | True if width >= lg |
| `isLargeDesktop` | boolean | True if width >= xl |
| `isBreakpoint(breakpoint)` | function | Check if current width >= breakpoint |
| `isBelowBreakpoint(breakpoint)` | function | Check if current width < breakpoint |
| `getResponsiveValue(values)` | function | Get value based on current breakpoint |
| `breakpoints` | object | All available breakpoints |

#### Methods

##### `isBreakpoint(breakpoint)`
Returns `true` if current screen width is greater than or equal to the specified breakpoint.

```javascript
const { isBreakpoint } = useResponsive();
const isMediumOrLarger = isBreakpoint('md');
```

##### `isBelowBreakpoint(breakpoint)`
Returns `true` if current screen width is less than the specified breakpoint.

```javascript
const { isBelowBreakpoint } = useResponsive();
const isSmallerThanLarge = isBelowBreakpoint('lg');
```

##### `getResponsiveValue(values)`
Returns the appropriate value based on the current breakpoint. Values are checked from largest to smallest breakpoint.

```javascript
const { getResponsiveValue } = useResponsive();

const columns = getResponsiveValue({
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
});
```

### Common Use Cases

1. **Conditional Rendering**: Show/hide components based on screen size
2. **Responsive Styling**: Apply different styles for different breakpoints
3. **Dynamic Layouts**: Change grid columns, spacing, or layout based on screen size
4. **Image Optimization**: Serve different image sizes for different devices
5. **Navigation**: Show different navigation patterns for mobile vs desktop

### Performance Notes

- The hook uses `useEffect` with proper cleanup to prevent memory leaks
- Event listeners are only added on the client side (Next.js compatible)
- Breakpoint calculations are optimized to avoid unnecessary re-renders
- The hook is SSR-safe and handles server-side rendering gracefully

### Examples

See `useResponsive.example.js` for comprehensive usage examples including:
- Basic responsive information display
- Conditional rendering
- Responsive values
- Custom breakpoints
- Responsive grids
- Image optimization
