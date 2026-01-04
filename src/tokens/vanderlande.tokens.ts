/**
 * Vanderlande Brand Tokens
 * Auto-generated from Figma Variables
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

export const vanderlandeTokens = {
  colors: {
    'Brand/Brand 800': '#5E000F',
    'Brand/Brand 700': '#8C0017',
    'Brand/Brand 600': '#BB001E',
    'Brand/Brand 500': '#CC4056',
    'Brand/Brand 400': '#DD808F',
    'Brand/Brand 100': '#EEBFC7',
    'Primary/Primary 800': '#BF620D',
    'Primary/Primary 700': '#EF7B10',
    'Primary/Primary 600': '#F29540',
    'Primary/Primary 500': '#F8C596',
    'Primary/Primary 400': '#FCE5CF',
    'Primary/Primary 300': '#FDEDDE',
    'Primary/Primary 200': '#FEFAF5',
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
      Regular: 'String value',
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

export type VanderlandeColorKey = keyof typeof vanderlandeTokens.colors;
export type VanderlandeRadiusKey = keyof typeof vanderlandeTokens.radius;
export type VanderlandeFontFamilyKey =
  keyof typeof vanderlandeTokens.font.family;
export type VanderlandeFontWeightKey =
  keyof typeof vanderlandeTokens.font.weight;
export type VanderlandeFontSizeKey = keyof typeof vanderlandeTokens.font.size;
