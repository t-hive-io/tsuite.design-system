/**
 * Design System Grid System
 *
 * 12-column grid system for layout structure.
 * Based on Figma Page ID: 5301:31219 (33 frames)
 */

export const gridSystem = {
  columns: 12,
  containerWidths: {
    sm: '640px', // Small devices
    md: '768px', // Medium devices
    lg: '1024px', // Large devices
    xl: '1280px', // Extra large devices
    '2xl': '1536px', // 2X large devices
  },
  gutter: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
  },
  margin: {
    xs: '1rem', // 16px
    sm: '1.5rem', // 24px
    md: '2rem', // 32px
    lg: '3rem', // 48px
    xl: '4rem', // 64px
  },
} as const;

// CSS Custom Properties
export const gridSystemCss = `
  --grid-columns: ${gridSystem.columns};

  --container-width-sm: ${gridSystem.containerWidths.sm};
  --container-width-md: ${gridSystem.containerWidths.md};
  --container-width-lg: ${gridSystem.containerWidths.lg};
  --container-width-xl: ${gridSystem.containerWidths.xl};
  --container-width-2xl: ${gridSystem.containerWidths['2xl']};

  --gutter-xs: ${gridSystem.gutter.xs};
  --gutter-sm: ${gridSystem.gutter.sm};
  --gutter-md: ${gridSystem.gutter.md};
  --gutter-lg: ${gridSystem.gutter.lg};
  --gutter-xl: ${gridSystem.gutter.xl};

  --margin-xs: ${gridSystem.margin.xs};
  --margin-sm: ${gridSystem.margin.sm};
  --margin-md: ${gridSystem.margin.md};
  --margin-lg: ${gridSystem.margin.lg};
  --margin-xl: ${gridSystem.margin.xl};
`;
