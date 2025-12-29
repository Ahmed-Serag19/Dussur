# Design Document

## Overview

This design document outlines the solution for fixing Next.js warnings and errors in the application. The issues include image optimization warnings, container positioning warnings, and WebGL BufferGeometry errors. The solution will address each category of warnings systematically while maintaining the existing functionality and visual appearance of the application.

## Architecture

The fix will be implemented across multiple component layers:

1. **Image Component Layer**: Modifications to Next.js Image components in Navbar.tsx and AppleCard.tsx
2. **Container Layer**: Updates to parent containers in components that use scroll-based animations (HeroParallax, GlobeComponent)
3. **WebGL Layer**: Enhanced validation and error handling in the Globe component's data processing pipeline

The architecture maintains the existing component structure while adding proper configurations and validations.

## Components and Interfaces

### Image Components

**Affected Files:**

- `components/Navbar.tsx` - Logo images with aspect ratio issues
- `components/AppleCard.tsx` - Card images with missing sizes prop

**Changes Required:**

1. Add `height: "auto"` or `width: "auto"` style to logo images to maintain aspect ratio
2. Add `sizes` prop to all images using the `fill` attribute with appropriate viewport-based values

### Container Components

**Affected Files:**

- `components/ui/hero-parallax.tsx` - Parallax container
- `components/GlobeComponent.tsx` - Globe wrapper container

**Changes Required:**

1. Add `position: "relative"` style to containers that wrap animated content
2. Ensure scroll offset calculations work correctly for framer-motion animations

### Globe Component

**Affected Files:**

- `components/ui/globe.tsx` - ThreeGlobe implementation

**Current Implementation:**

- Already has extensive validation with `isValidCoordinate` and `validateArc` functions
- Has error handling with `hasError` state
- Includes fallback UI for error states

**Changes Required:**

1. Review and enhance coordinate validation to prevent NaN values
2. Add additional safety checks before BufferGeometry operations
3. Ensure all position attributes contain valid numeric values

## Data Models

### Image Configuration

```typescript
interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  fill?: boolean;
  sizes?: string; // Required when fill is true
  style?: {
    width?: string | number;
    height?: string | number;
  };
}
```

### Container Configuration

```typescript
interface ContainerProps {
  style?: {
    position: "relative" | "absolute" | "fixed";
  };
  className?: string;
}
```

### Globe Data Validation

```typescript
interface Position {
  order: number;
  startLat: number; // Must be valid number, -90 to 90
  startLng: number; // Must be valid number, -180 to 180
  endLat: number; // Must be valid number, -90 to 90
  endLng: number; // Must be valid number, -180 to 180
  arcAlt: number; // Must be valid number >= 0
  color: string; // Must be valid hex color
}
```

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property Reflection

After reviewing the prework analysis, I've identified the following redundancies:

- Properties 4.1, 4.2, and 4.3 are related: If all position attributes are valid numbers (4.1), then BufferGeometry won't encounter NaN values (4.2), and no console errors will appear (4.3). These can be consolidated into a single comprehensive property.
- Properties 1.1, 1.2 can be covered by the general property 1.3
- Properties 2.1, 2.2, 2.3, 2.4 can be covered by the general property 2.5

The consolidated properties provide unique validation value without redundancy.

### Correctness Properties

Property 1: Image aspect ratio preservation
_For any_ Next.js Image component with modified width or height, the component should include either both width and height styles or use "auto" for one dimension, and no aspect ratio warnings should appear in the console.
**Validates: Requirements 1.1, 1.2, 1.3**

Property 2: Fill images have sizes prop
_For any_ Next.js Image component using the fill attribute, the component should include a sizes prop with appropriate viewport-based values, and no missing sizes prop warnings should appear in the console.
**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

Property 3: Animated containers have non-static positioning
_For any_ container element that wraps animated or scrollable content, the container should have a non-static position style (relative, fixed, or absolute), and scroll offset calculations should work correctly without console warnings.
**Validates: Requirements 3.1, 3.2**

Property 4: Globe position attributes are valid numbers
_For any_ position attribute in the ThreeGlobe component, all coordinate values (lat, lng) should be valid numbers (not NaN, not infinite), within valid ranges, and BufferGeometry operations should complete without NaN errors in the console.
**Validates: Requirements 4.1, 4.2, 4.3**

## Error Handling

### Image Component Errors

**Strategy**: Preventive configuration

- Add required props and styles at component definition time
- No runtime error handling needed as these are compile-time/render-time configurations

### Container Positioning Errors

**Strategy**: Preventive styling

- Apply position styles directly to container components
- No runtime error handling needed

### Globe Component Errors

**Strategy**: Multi-layered validation and graceful degradation

1. **Input Validation Layer**:

   - Validate all coordinates before processing
   - Filter out invalid data points
   - Log warnings for invalid data

2. **Processing Layer**:

   - Check for NaN values during data transformation
   - Validate color formats
   - Ensure numeric values are finite

3. **Rendering Layer**:

   - Use error state to prevent rendering with invalid data
   - Display fallback UI when errors occur
   - Provide user-friendly error messages

4. **Existing Error Handling** (already implemented):
   ```typescript
   - isValidCoordinate() function validates lat/lng ranges
   - validateArc() function validates complete arc data
   - hasError state prevents rendering when errors occur
   - Fallback UI displays when globe cannot load
   ```

## Testing Strategy

### Unit Testing

Unit tests will verify specific component configurations and edge cases:

1. **Image Component Tests**:

   - Test that logo images have correct style attributes
   - Test that fill images have sizes prop
   - Test edge cases like missing images or invalid paths

2. **Container Tests**:

   - Test that animated containers have correct position styles
   - Test that scroll calculations work with positioned containers

3. **Globe Component Tests**:
   - Test coordinate validation functions with edge cases (boundary values, NaN, infinity)
   - Test arc validation with invalid data
   - Test error state handling
   - Test fallback UI rendering

### Property-Based Testing

Property-based tests will verify universal properties across all inputs using **fast-check** (JavaScript/TypeScript property-based testing library):

1. **Property 1 Test**: Generate random image configurations and verify aspect ratio handling
2. **Property 2 Test**: Generate random fill image configurations and verify sizes prop presence
3. **Property 3 Test**: Generate random container configurations and verify positioning
4. **Property 4 Test**: Generate random coordinate data and verify all values are valid numbers

**Configuration**: Each property-based test will run a minimum of 100 iterations to ensure comprehensive coverage.

**Test Annotations**: Each property-based test will include a comment tag in this format:

- `**Feature: nextjs-warnings-fix, Property 1: Image aspect ratio preservation**`
- `**Feature: nextjs-warnings-fix, Property 2: Fill images have sizes prop**`
- `**Feature: nextjs-warnings-fix, Property 3: Animated containers have non-static positioning**`
- `**Feature: nextjs-warnings-fix, Property 4: Globe position attributes are valid numbers**`

### Manual Testing

Manual verification will be performed by:

1. Running the development server and checking the browser console
2. Verifying no warnings appear for:
   - Image aspect ratios
   - Missing sizes props
   - Container positioning
   - BufferGeometry NaN errors
3. Testing in both light and dark modes (for logo images)
4. Testing in both English and Arabic locales
5. Verifying visual appearance remains unchanged

## Implementation Approach

### Phase 1: Image Component Fixes

1. Update Navbar.tsx logo images with proper styles
2. Update AppleCard.tsx images with sizes prop
3. Verify no image warnings in console

### Phase 2: Container Positioning Fixes

1. Add position: relative to HeroParallax container
2. Add position: relative to GlobeComponent container
3. Verify scroll animations work correctly

### Phase 3: Globe Component Enhancement

1. Review existing validation logic
2. Add additional safety checks if needed
3. Test with various data inputs
4. Verify no BufferGeometry errors

### Phase 4: Testing and Verification

1. Run all unit tests
2. Run all property-based tests
3. Perform manual testing
4. Verify all console warnings are resolved
