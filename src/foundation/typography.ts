/**
 * Design System Typography
 *
 * This file contains all typography tokens for the design system.
 * Use these tokens for consistent text styling.
 */

export const typography = {
  // Font Families
  fontFamily: {
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// CSS Custom Properties
export const typographyCss = `
  --font-family-base: ${typography.fontFamily.base};
  --font-family-heading: ${typography.fontFamily.heading};
  --font-family-mono: ${typography.fontFamily.mono};
  
  --font-size-xs: ${typography.fontSize.xs};
  --font-size-sm: ${typography.fontSize.sm};
  --font-size-base: ${typography.fontSize.base};
  --font-size-lg: ${typography.fontSize.lg};
  --font-size-xl: ${typography.fontSize.xl};
  --font-size-2xl: ${typography.fontSize['2xl']};
  --font-size-3xl: ${typography.fontSize['3xl']};
  --font-size-4xl: ${typography.fontSize['4xl']};
  --font-size-5xl: ${typography.fontSize['5xl']};
  --font-size-6xl: ${typography.fontSize['6xl']};
  
  --font-weight-light: ${typography.fontWeight.light};
  --font-weight-normal: ${typography.fontWeight.normal};
  --font-weight-medium: ${typography.fontWeight.medium};
  --font-weight-semibold: ${typography.fontWeight.semibold};
  --font-weight-bold: ${typography.fontWeight.bold};
  --font-weight-extrabold: ${typography.fontWeight.extrabold};
  
  --line-height-none: ${typography.lineHeight.none};
  --line-height-tight: ${typography.lineHeight.tight};
  --line-height-snug: ${typography.lineHeight.snug};
  --line-height-normal: ${typography.lineHeight.normal};
  --line-height-relaxed: ${typography.lineHeight.relaxed};
  --line-height-loose: ${typography.lineHeight.loose};
  
  --letter-spacing-tighter: ${typography.letterSpacing.tighter};
  --letter-spacing-tight: ${typography.letterSpacing.tight};
  --letter-spacing-normal: ${typography.letterSpacing.normal};
  --letter-spacing-wide: ${typography.letterSpacing.wide};
  --letter-spacing-wider: ${typography.letterSpacing.wider};
  --letter-spacing-widest: ${typography.letterSpacing.widest};
`;
