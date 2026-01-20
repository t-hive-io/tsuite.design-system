# Brand Themes

These CSS files define brand-specific design tokens as CSS custom properties.

## Usage

Import the appropriate brand theme in your application entry point:

```tsx
// For Vanderlande brand
import '@tsuite/design-system/themes/vanderlande.css';

// For White-label brand
import '@tsuite/design-system/themes/white-label.css';

// For TMHE brand (uses Titillium Web font)
import '@tsuite/design-system/themes/tmhe.css';

// For Bastian Solutions brand
import '@tsuite/design-system/themes/bastian-solutions.css';
```

## Available CSS Variables

### Colors

- `--color-brand-{800|700|600|500|400|100}` - Brand colors
- `--color-primary-{800|700|600|500|400|300|200}` - Primary colors
- `--color-neutral-{800|700|600|500|400|300|200|100|50}` - Neutral colors

### Typography

- `--font-family-title` - Title font family
- `--font-family-body` - Body font family
- `--font-weight-{regular|normal|medium|semibold}` - Font weights
- `--font-size-{xxxs|xxs|xs|sm|md|lg}` - Font sizes
- `--font-size-body` - Default body font size (12px)
- `--line-height-body` - Default body line height (1.5)

### Border Radius

- `--radius-sm` - Small radius (2px)
- `--radius-md` - Medium radius (4px)

## Brand Differences

### Fonts

- **Vanderlande**: Inter
- **White-label**: Inter
- **TMHE**: Titillium Web ⚠️
- **Bastian Solutions**: Inter

### Colors

Each brand has its own color palette. See individual CSS files for specifics.

## Development

These files are generated from TypeScript token files:

- `src/tokens/vanderlande.tokens.ts`
- `src/tokens/white-label.tokens.ts`
- `src/tokens/tmhe.tokens.ts`
- `src/tokens/bastian-solutions.tokens.ts`

To regenerate: `npm run tokens:transform`
