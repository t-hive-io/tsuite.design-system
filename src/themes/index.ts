/**
 * Theme Exports
 * Import the CSS file for your brand to apply the theme
 *
 * Usage:
 * import '@tsuite/design-system/themes/vanderlande.css';
 * import '@tsuite/design-system/themes/white-label.css';
 * import '@tsuite/design-system/themes/tmhe.css';
 * import '@tsuite/design-system/themes/bastian-solutions.css';
 */

export type Brand =
  | 'vanderlande'
  | 'white-label'
  | 'tmhe'
  | 'bastian-solutions';

export const themes = {
  vanderlande: './vanderlande.css',
  'white-label': './white-label.css',
  tmhe: './tmhe.css',
  'bastian-solutions': './bastian-solutions.css',
} as const;
