# TSuite Design System

A fully automated design system that syncs design tokens from Figma to code, eliminating manual work for designers and providing developers with an always up-to-date component library.

## 🎯 Overview

This design system automatically:
- **Syncs design tokens** from Figma (colors, spacing, typography)
- **Generates CSS variables** for immediate use
- **Publishes to Storybook** with live Figma previews
- **Deploys automatically** via GitHub Actions

**Designers work exclusively in Figma** - no Git or code knowledge required!

## 🚀 Quick Start

### For Developers

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Figma credentials:**
   ```bash
   cp .env.example .env
   # Edit .env with your Figma credentials
   ```

3. **Start Storybook:**
   ```bash
   npm run dev
   ```

4. **Export tokens from Figma:**
   ```bash
   npm run figma:export
   npm run tokens:build
   ```

### For Designers

**You don't need to do anything!** Just:
1. Design in Figma as usual
2. Use Figma Variables for colors, spacing, typography
3. Push changes will automatically sync daily (or trigger manually)

## 🔧 Setup Guide

### 1. Figma Configuration

#### Get your Figma File Key:
From your Figma URL: `https://www.figma.com/file/FILE_KEY/...`

#### Generate Access Token:
1. Go to Figma → Settings → Account → Personal access tokens
2. Create new token with read access
3. Copy token

#### Set up Figma Variables:
Organize your design tokens in Figma using Variables:
- **Colors**: Primary, secondary, semantic colors
- **Spacing**: xs, sm, md, lg, xl
- **Border Radius**: sm, md, lg
- **Typography**: Font sizes, weights, line heights

### 2. GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets → Actions):

```
FIGMA_FILE_KEY=your_file_key_here
FIGMA_ACCESS_TOKEN=your_access_token_here
```

Optional for deployment:
```
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_SITE_ID=your_site_id
```

### 3. Automation Pipeline

The system runs automatically:

- **Daily at 2 AM UTC**: Syncs tokens from Figma
- **On every push to main**: Rebuilds and deploys Storybook
- **On PR**: Creates preview deployment
- **Manual trigger**: Via GitHub Actions UI
- **Figma webhook** (optional): Instant updates on design changes

## 📚 Integration with Docusaurus

To embed Storybook in your Docusaurus site:

### Option 1: iFrame Embed
```mdx
# Button Component

<iframe 
  src="https://your-storybook-url.com/?path=/story/components-button--primary" 
  width="100%" 
  height="600px"
/>
```

### Option 2: Link to Storybook
```mdx
import Link from '@docusaurus/Link';

<Link to="https://your-storybook-url.com">
  View Interactive Component Library
</Link>
```

### Option 3: Storybook Addon
Install `@storybook/addon-docs` and generate MDX files that can be imported into Docusaurus.

## 🎨 Using Design Tokens

### In CSS:
```css
.my-component {
  color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
}
```

### In React:
```tsx
import { tokens } from '@tsuite/design-system';

const MyComponent = () => (
  <div style={{ color: tokens.color.primary }}>
    Hello World
  </div>
);
```

## 🔄 Workflow

```
┌─────────┐      ┌──────────────┐      ┌─────────────┐
│  Figma  │──────▶│ GitHub       │──────▶│  Storybook  │
│ Design  │ Auto │ Actions      │ Auto │  Published  │
└─────────┘ Sync └──────────────┘ Build └─────────────┘
     │                                          │
     │                                          │
     └──────────────────────────────────────────┘
              Designers                  Developers
           Work Here Only              Consume Here
```

## 📖 Component Structure

Each component includes:
- **React component** with TypeScript
- **Storybook stories** with multiple variants
- **Figma design link** embedded in Storybook
- **Auto-generated documentation**
- **Design tokens** from Figma

Example:
```tsx
// src/components/Button/Button.stories.tsx
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'YOUR_FIGMA_URL_HERE'
    }
  }
};
```

## 🛠️ Development Commands

```bash
npm run dev              # Start Storybook
npm run figma:export     # Fetch tokens from Figma
npm run tokens:build     # Generate CSS/JS from tokens
npm run build           # Build package
npm run build-storybook # Build static Storybook
```

## 🔗 Resources

- [Storybook Documentation](https://storybook.js.org/)
- [Figma API](https://www.figma.com/developers/api)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Design Tokens W3C Spec](https://design-tokens.github.io/community-group/)

## 🤝 Contributing

### For Designers:
1. Make changes in Figma
2. Use Variables for all design tokens
3. Changes sync automatically (or notify a developer to trigger manually)

### For Developers:
1. Create feature branch
2. Add/update components with Figma links
3. Create PR (preview will be generated automatically)
4. Merge to main → automatically deployed

## 📝 License

[Your License Here]

## 🆘 Support

- **Issues**: [GitHub Issues](../../issues)
- **Questions**: [Discussions](../../discussions)
- **Slack**: #design-system channel