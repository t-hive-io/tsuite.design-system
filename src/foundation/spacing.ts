/**
 * Design System Spacing
 *
 * This file contains all spacing tokens for the design system.
 * Use these tokens for consistent spacing and layout.
 */

export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
  40: '10rem', // 160px
  48: '12rem', // 192px
  56: '14rem', // 224px
  64: '16rem', // 256px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// CSS Custom Properties
export const spacingCss = `
  --spacing-0: ${spacing[0]};
  --spacing-1: ${spacing[1]};
  --spacing-2: ${spacing[2]};
  --spacing-3: ${spacing[3]};
  --spacing-4: ${spacing[4]};
  --spacing-5: ${spacing[5]};
  --spacing-6: ${spacing[6]};
  --spacing-8: ${spacing[8]};
  --spacing-10: ${spacing[10]};
  --spacing-12: ${spacing[12]};
  --spacing-16: ${spacing[16]};
  --spacing-20: ${spacing[20]};
  --spacing-24: ${spacing[24]};
  --spacing-32: ${spacing[32]};
  --spacing-40: ${spacing[40]};
  --spacing-48: ${spacing[48]};
  --spacing-56: ${spacing[56]};
  --spacing-64: ${spacing[64]};
  
  --border-radius-none: ${borderRadius.none};
  --border-radius-sm: ${borderRadius.sm};
  --border-radius-base: ${borderRadius.base};
  --border-radius-md: ${borderRadius.md};
  --border-radius-lg: ${borderRadius.lg};
  --border-radius-xl: ${borderRadius.xl};
  --border-radius-2xl: ${borderRadius['2xl']};
  --border-radius-3xl: ${borderRadius['3xl']};
  --border-radius-full: ${borderRadius.full};
`;
