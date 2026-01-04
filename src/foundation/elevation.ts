/**
 * Design System Elevation
 *
 * Shadow system for UI depth and hierarchy.
 * Based on Figma Page ID: 5267:23379
 */

export const elevation = {
  none: 'none',
  level0: '0 0 0 rgba(0,0,0,0)',
  level1: '0 1px 2px rgba(0,0,0,0.06)',
  level2: '0 2px 4px rgba(0,0,0,0.07)',
  level3: '0 3px 6px rgba(0,0,0,0.08)',
  level4: '0 4px 8px rgba(0,0,0,0.09)',
  level6: '0 6px 12px rgba(0,0,0,0.11)',
  level8: '0 8px 16px rgba(0,0,0,0.13)',
  level12: '0 12px 24px rgba(0,0,0,0.17)',
  level16: '0 16px 32px rgba(0,0,0,0.21)',
  level24: '0 24px 48px rgba(0,0,0,0.29)',
} as const;

// CSS Custom Properties
export const elevationCss = `
  --elevation-none: ${elevation.none};
  --elevation-level-0: ${elevation.level0};
  --elevation-level-1: ${elevation.level1};
  --elevation-level-2: ${elevation.level2};
  --elevation-level-3: ${elevation.level3};
  --elevation-level-4: ${elevation.level4};
  --elevation-level-6: ${elevation.level6};
  --elevation-level-8: ${elevation.level8};
  --elevation-level-12: ${elevation.level12};
  --elevation-level-16: ${elevation.level16};
  --elevation-level-24: ${elevation.level24};
`;
