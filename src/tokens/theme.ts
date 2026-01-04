/**
 * Multi-Brand Theme System
 * Dynamically switch between brand themes
 */

import { tmheTokens } from './tmhe.tokens';
import { vanderlandeTokens } from './vanderlande.tokens';
import { bastian_solutionsTokens } from './bastian-solutions.tokens';
import { white_labelTokens } from './white-label.tokens';

export type BrandTheme =
  | 'tmhe'
  | 'vanderlande'
  | 'bastian-solutions'
  | 'white-label';

export const brandTokens = {
  tmhe: tmheTokens,
  vanderlande: vanderlandeTokens,
  'bastian-solutions': bastian_solutionsTokens,
  'white-label': white_labelTokens,
} as const;

/**
 * Get tokens for a specific brand theme
 */
export function getThemeTokens(theme: BrandTheme) {
  return brandTokens[theme];
}

/**
 * Current active theme (default: tmhe)
 * Can be changed at runtime
 */
let currentTheme: BrandTheme = 'tmhe';

/**
 * Set the active brand theme
 */
export function setTheme(theme: BrandTheme) {
  currentTheme = theme;
  applyThemeToDOM(theme);
}

/**
 * Get the current active theme
 */
export function getTheme(): BrandTheme {
  return currentTheme;
}

/**
 * Get current theme tokens
 */
export function getCurrentThemeTokens() {
  return brandTokens[currentTheme];
}

/**
 * Apply theme CSS custom properties to DOM
 */
function applyThemeToDOM(theme: BrandTheme) {
  const tokens = brandTokens[theme];
  const root = document.documentElement;

  console.log(`[Theme] Applying theme: ${theme}`);

  // Apply color tokens as CSS custom properties
  Object.entries(tokens.colors).forEach(([key, value]) => {
    // Convert "Brand/Brand 800" to "--colors-brand-brand-800"
    const cssVarName = `--colors-${key
      .toLowerCase()
      .replace(/\//g, '-')
      .replace(/\s+/g, '-')}`;
    root.style.setProperty(cssVarName, value);
    if (key.includes('Primary 500')) {
      console.log(`[Theme] Set ${cssVarName} = ${value}`);
    }
  });

  // Apply radius tokens
  Object.entries(tokens.radius).forEach(([key, value]) => {
    const cssVarName = `--radius-${key}`;
    root.style.setProperty(cssVarName, value);
  });

  // Apply font family tokens
  if (tokens.font?.family) {
    Object.entries(tokens.font.family).forEach(([key, value]) => {
      const cssVarName = `--font-family-${key.toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });
  }

  // Set theme data attribute for CSS selectors
  root.setAttribute('data-theme', theme);
}

/**
 * Initialize theme system
 * Call this once when your app starts
 */
export function initTheme(initialTheme: BrandTheme = 'tmhe') {
  setTheme(initialTheme);
}

// Export all brand tokens
export {
  tmheTokens,
  vanderlandeTokens,
  bastian_solutionsTokens,
  white_labelTokens,
};
