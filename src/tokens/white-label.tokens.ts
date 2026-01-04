/**
 * White-label Brand Tokens
 * Auto-generated from Figma Variables
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

export const white_labelTokens = {
  colors: {
    'Brand/Brand 800': '#F2A900',
    'Brand/Brand 700': '#FFC338',
    'Brand/Brand 600': '#FFDD8F',
    'Brand/Brand 500': '#FFE8B2',
    'Brand/Brand 400': '#FFF4DB',
    'Brand/Brand 100': '#FFFCF5',
    'Primary/Primary 800': '#DA0C8E',
    'Primary/Primary 700': '#F325A7',
    'Primary/Primary 600': '#F656BB',
    'Primary/Primary 500': '#F995D4',
    'Primary/Primary 400': '#FCCFEC',
    'Primary/Primary 300': '#FDE2F3',
    'Primary/Primary 200': '#FEF5FB',
    'Neutral/Neutral 800': '#222222',
    'Neutral/Neutral 700': '#808080',
    'Neutral/Neutral 600': '#B3B3B3',
    'Neutral/Neutral 500': '#D9D9D9',
    'Neutral/Neutral 400': '#E6E6E6',
    'Neutral/Neutral 300': '#F7F7F7',
    'Neutral/Neutral 200': '#FCFCFC',
    'Neutral/Neutral 100': '#FFFFFF',
    'Neutral/Neutral 50': '#222222',
  },

  radius: {
    sm: '2px',
    md: '4px',
  },

  font: {
    family: {
      Title: 'Inter',
      Body: 'Inter',
    },
    weight: {
      Regular: 'Regular',
      Normal: 'Normal',
      Medium: 'Medium',
      Semibold: 'Semibold',
    },
    size: {
      xxxs: 10,
      xxs: 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 28,
    },
  },
} as const;

export type White_labelColorKey = keyof typeof white_labelTokens.colors;
export type White_labelRadiusKey = keyof typeof white_labelTokens.radius;
export type White_labelFontFamilyKey =
  keyof typeof white_labelTokens.font.family;
export type White_labelFontWeightKey =
  keyof typeof white_labelTokens.font.weight;
export type White_labelFontSizeKey = keyof typeof white_labelTokens.font.size;
