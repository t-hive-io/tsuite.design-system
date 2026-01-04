# Multi-Brand Token System

This directory contains design tokens exported from Figma Variables with support for multiple brand themes.

## Supported Brands

- **TMHE** (Toyota Material Handling Europe) - Default theme
- **Vanderlande** - Logistics automation
- **Bastian Solutions** - Supply chain solutions
- **White-label** - Generic branded theme

## File Structure

```
src/tokens/
├── tmhe.tokens.ts              # TMHE brand tokens
├── vanderlande.tokens.ts       # Vanderlande brand tokens
├── bastian-solutions.tokens.ts # Bastian Solutions brand tokens
├── white-label.tokens.ts       # White-label brand tokens
├── theme.ts                    # Theme system & switcher
├── themes.stories.tsx          # Storybook demo
├── index.ts                    # Main export file
└── README.md                   # This file
```

## Usage

### Basic Usage

```typescript
import { tmheTokens, vanderlandeTokens } from '@tsuite/design-system/tokens';

// Use TMHE colors
const primaryColor = tmheTokens.colors['Primary/Primary 500']; // #74748F

// Use Vanderlande colors
const primaryColor = vanderlandeTokens.colors['Primary/Primary 500']; // #F8C596
```

### Theme Switching

```typescript
import {
  initTheme,
  setTheme,
  getCurrentThemeTokens,
} from '@tsuite/design-system/tokens/theme';

// Initialize with default theme (TMHE)
initTheme();

// Or initialize with specific theme
initTheme('vanderlande');

// Switch theme at runtime
setTheme('bastian-solutions');

// Get current theme tokens
const tokens = getCurrentThemeTokens();
console.log(tokens.colors['Primary/Primary 500']);
```

### Using in Components

```typescript
import { getCurrentThemeTokens } from '@tsuite/design-system/tokens/theme';

function MyComponent() {
  const tokens = getCurrentThemeTokens();

  return (
    <div
      style={{
        backgroundColor: tokens.colors['Primary/Primary 500'],
        borderRadius: tokens.radius.md,
      }}
    >
      Branded Component
    </div>
  );
}
```

### Using CSS Custom Properties

When you call `setTheme()`, CSS custom properties are automatically applied to `document.documentElement`:

```css
/* Available CSS variables after calling setTheme() */
.my-element {
  background-color: var(--color-primary-primary-500);
  border-radius: var(--radius-md);
  color: var(--color-neutral-neutral-800);
}

/* You can also use data-theme attribute */
[data-theme='tmhe'] .branded-button {
  background: var(--color-brand-brand-700);
}

[data-theme='vanderlande'] .branded-button {
  background: var(--color-brand-brand-700);
}
```

## Token Structure

Each brand tokens file exports:

```typescript
export const brandTokens = {
  colors: {
    'Brand/Brand 800': '#5E000F',
    'Brand/Brand 700': '#8C0017',
    // ... more colors
    'Primary/Primary 800': '#2B2D42',
    'Primary/Primary 500': '#74748F',
    // ... more colors
    'Neutral/Neutral 800': '#222222',
    // ... more colors
  },
  radius: {
    sm: '2px',
    md: '4px',
  },
} as const;
```

## Color Categories

- **Brand** - Brand-specific colors (unique per brand)
- **Primary** - Primary UI colors (unique per brand)
- **Neutral** - Neutral grayscale colors (shared across brands)
- **Feedback** - Semantic colors for success, error, warning, info
- **Areas** - Domain-specific colors (warehousing, logistics)

## Updating Tokens

When Figma Variables are updated:

1. Export Variables from Figma (one `.tokens.json` file per brand)
2. Place exported files in `debug/` folder
3. Run transformation script:
   ```bash
   npm run figma:variables
   ```
4. Token files in `src/tokens/` will be regenerated automatically

## Viewing in Storybook

Open Storybook and navigate to:

- **Foundation > Multi-Brand Themes**

This showcases:

- All 4 brand color palettes
- Interactive theme switcher
- Side-by-side brand comparison

## TypeScript Types

```typescript
import type { BrandTheme } from '@tsuite/design-system/tokens/theme';
import type { TmheColorKey } from '@tsuite/design-system/tokens/tmhe.tokens';

// BrandTheme = 'tmhe' | 'vanderlande' | 'bastian-solutions' | 'white-label'
const theme: BrandTheme = 'tmhe';

// Color keys are typed
const colorKey: TmheColorKey = 'Primary/Primary 500';
```

## Brand Color Differences

| Token       | TMHE                  | Vanderlande     | Bastian        | White-label      |
| ----------- | --------------------- | --------------- | -------------- | ---------------- |
| Primary 500 | #74748F (gray-purple) | #F8C596 (peach) | #1F91FF (blue) | #F995D4 (pink)   |
| Brand 700   | #8C0017 (red)         | #8C0017 (red)   | #002D72 (navy) | #FFC338 (yellow) |

## Notes

- **DO NOT** edit token files manually - they are auto-generated
- Token files are marked with "DO NOT EDIT MANUALLY" header
- All tokens use Figma Variable IDs for traceability
- Radius tokens are currently limited (sm, md) - more can be added in Figma
