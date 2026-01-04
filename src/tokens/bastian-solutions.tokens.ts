/**
 * Bastian Solutions Brand Tokens
 * Auto-generated from Figma Variables
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

export const bastian_solutionsTokens = {
  colors: {
    'Brand/Brand 800': '#002052',
    'Brand/Brand 700': '#002D72',
    'Brand/Brand 600': '#004DC2',
    'Brand/Brand 500': '#B2D1FF',
    'Brand/Brand 400': '#DBE9FF',
    'Brand/Brand 100': '#F5F9FF',
    'Primary/Primary 800': '#004485',
    'Primary/Primary 700': '#005EB8',
    'Primary/Primary 600': '#0078EB',
    'Primary/Primary 500': '#1F91FF',
    'Primary/Primary 400': '#85C3FF',
    'Primary/Primary 300': '#DBEDFF',
    'Primary/Primary 200': '#F5FAFF',
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

export type Bastian_solutionsColorKey =
  keyof typeof bastian_solutionsTokens.colors;
export type Bastian_solutionsRadiusKey =
  keyof typeof bastian_solutionsTokens.radius;
export type Bastian_solutionsFontFamilyKey =
  keyof typeof bastian_solutionsTokens.font.family;
export type Bastian_solutionsFontWeightKey =
  keyof typeof bastian_solutionsTokens.font.weight;
export type Bastian_solutionsFontSizeKey =
  keyof typeof bastian_solutionsTokens.font.size;
