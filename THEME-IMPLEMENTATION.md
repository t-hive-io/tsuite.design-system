# Brand Theme Implementation Guide

## ✅ Done

- All 4 brand theme CSS files created (vanderlande, white-label, tmhe, bastian-solutions)
- Components use CSS custom properties (no hardcoded fonts)
- Storybook theme switcher configured
- Theme system updated to apply all typography tokens

## 📋 Summary

### Components are now brand-agnostic

- Use `var(--font-family-body, Inter, sans-serif)` instead of hardcoded `font-family: Inter`
- Use `var(--font-size-body, 12px)` for font sizes
- Use `var(--font-weight-regular, 400)` for weights
- Use `var(--line-height-body, 1.5)` for line heights

### Brand Themes

Located in `src/themes/`:

- `vanderlande.css` - Inter font
- `white-label.css` - Inter font
- **`tmhe.css`** - **Titillium Web font** ⚠️
- `bastian-solutions.css` - Inter font

### Storybook Testing

The toolbar "Brand" selector lets you switch between all 4 brands to test typography rendering.

### Next Steps (if needed)

1. Test Tooltips in Storybook with all 4 brands
2. Verify TMHE uses Titillium Web correctly
3. If OK, remove FILTER_PAGE to generate all 273 components
4. All components will automatically support all brands

### Usage in Apps

```tsx
// Import at app entry point
import '@tsuite/design-system/themes/tmhe.css';

// Or dynamically switch
import { setTheme } from '@tsuite/design-system/tokens/theme';
setTheme('tmhe');
```

## 🎯 Key Files Changed

- `scripts/smart-component-generator.cjs` - Removed hardcoded fonts, use CSS vars
- `src/tokens/theme.ts` - Added font-size, font-weight, line-height mapping
- `src/themes/*.css` - New brand theme files (4 total)
- `src/components/Tooltips*/Tooltips*.css` - Now use CSS custom properties

## Testing Checklist

- [ ] Open Storybook: `npm run storybook`
- [ ] Navigate to Tooltips story
- [ ] Switch brand in toolbar: White Label → TMHE
- [ ] Verify font changes from Inter to Titillium Web
- [ ] Check all 4 brands render correctly
