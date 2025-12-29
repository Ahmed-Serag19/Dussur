# Implementation Plan

- [ ] 1. Fix image aspect ratio warnings in Navbar component

  - Update lightmode logo image to include `height: "auto"` style
  - Update darkmode logo image to include `height: "auto"` style
  - Verify both logos render correctly in light and dark modes
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 1.1 Write property test for image aspect ratio preservation

  - **Property 1: Image aspect ratio preservation**
  - **Validates: Requirements 1.1, 1.2, 1.3**

- [ ] 2. Add sizes prop to images with fill attribute in AppleCard component

  - Locate all Image components using fill attribute in AppleCard.tsx
  - Add appropriate sizes prop to each image (e.g., "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw")
  - Verify images render correctly at different viewport sizes
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 2.1 Write property test for fill images sizes prop

  - **Property 2: Fill images have sizes prop**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

- [ ] 3. Fix container positioning for scroll-based animations
- [ ] 3.1 Add position style to HeroParallax container

  - Update the main container div in hero-parallax.tsx to include `style={{ position: "relative" }}`
  - Ensure scroll animations continue to work correctly
  - _Requirements: 3.1, 3.2_

- [ ] 3.2 Add position style to GlobeComponent container

  - Update the main container div in GlobeComponent.tsx to include `position: "relative"` in className or style
  - Verify globe animations work correctly
  - _Requirements: 3.1, 3.2_

- [ ] 3.3 Write property test for animated container positioning

  - **Property 3: Animated containers have non-static positioning**
  - **Validates: Requirements 3.1, 3.2**

- [ ] 4. Enhance Globe component validation to prevent NaN errors
- [x] 4.1 Review and strengthen coordinate validation

  - Review existing `isValidCoordinate` and `validateArc` functions
  - Add additional checks for edge cases if needed
  - Ensure all numeric operations are safe from NaN propagation
  - _Requirements: 4.1, 4.2, 4.3_

- [x] 4.2 Add safety checks before BufferGeometry operations

  - Add validation before setting up arcs, points, and rings
  - Ensure empty or invalid data doesn't reach BufferGeometry
  - Add defensive checks in data transformation pipeline
  - _Requirements: 4.1, 4.2, 4.3_

- [ ] 4.3 Write property test for globe position validation

  - **Property 4: Globe position attributes are valid numbers**
  - **Validates: Requirements 4.1, 4.2, 4.3**

- [ ] 4.4 Write unit tests for globe validation functions

  - Test `isValidCoordinate` with boundary values, NaN, infinity
  - Test `validateArc` with invalid arc data
  - Test error state handling and fallback UI
  - _Requirements: 4.1, 4.2, 4.3_

- [ ] 5. Checkpoint - Verify all warnings are resolved
  - Run the development server
  - Check browser console for any remaining warnings
  - Test in both light and dark modes
  - Test in both English and Arabic locales
  - Verify visual appearance is unchanged
  - Ensure all tests pass, ask the user if questions arise
