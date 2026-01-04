# Deployment Guide

This guide covers different deployment options for your Storybook design system.

## Option 1: GitHub Pages (Free, Recommended)

Already configured in `.github/workflows/figma-sync.yml`

### Enable GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / root
4. Save

Your Storybook will be available at:
`https://[your-org].github.io/[your-repo]/`

## Option 2: Netlify

### Setup:

1. Connect your GitHub repo to Netlify
2. Build settings:
   - Build command: `npm run build-storybook`
   - Publish directory: `storybook-static`
3. Add environment variables:
   - `FIGMA_FILE_KEY`
   - `FIGMA_ACCESS_TOKEN`

### Automatic PR Previews:

Already configured in `.github/workflows/pr-preview.yml`

Add these secrets to GitHub:

```
NETLIFY_AUTH_TOKEN=your_token
NETLIFY_SITE_ID=your_site_id
```

## Option 3: Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect via Vercel dashboard.

## Option 4: Chromatic (Recommended for Visual Testing)

Chromatic provides:

- Visual regression testing
- Review workflow
- Hosted Storybook

```bash
npm install --save-dev chromatic
npx chromatic --project-token=your_token
```

Add to GitHub Actions:

```yaml
- name: Publish to Chromatic
  uses: chromaui/action@v1
  with:
    projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

## Custom Domain

### GitHub Pages:

1. Add `CNAME` file to `public/` folder:
   ```
   design-system.yourdomain.com
   ```
2. Configure DNS:
   ```
   CNAME → [your-org].github.io
   ```

### Netlify:

Settings → Domain management → Add custom domain

## CDN Integration

To use components directly from CDN:

```html
<!-- In your Docusaurus or website -->
<script type="module" src="https://your-cdn.com/design-system.js"></script>
<link rel="stylesheet" href="https://your-cdn.com/tokens.css" />
```

## Docusaurus Integration

### Add to docusaurus.config.js:

```javascript
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          to: 'https://your-storybook-url.com',
          label: 'Components',
          position: 'left',
        },
      ],
    },
  },
};
```

### Embed in MDX:

```mdx
---
id: button
title: Button
---

# Button Component

<iframe
  src="https://your-storybook-url.com/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="500px"
  frameBorder="0"
/>

## Usage

\`\`\`jsx
import { Button } from '@tsuite/design-system';

<Button variant="primary">Click me</Button>
\`\`\`
```

## Performance Tips

1. **Enable Storybook lazy compilation:**

   ```javascript
   // .storybook/main.ts
   core: {
     builder: {
       name: '@storybook/builder-vite',
       options: {
         lazyCompilation: true,
       },
     },
   }
   ```

2. **Optimize images:**
   Use WebP format and responsive images

3. **Enable caching:**
   Configure CDN cache headers

4. **Code splitting:**
   Storybook does this automatically

## Monitoring

Track usage with analytics:

```javascript
// .storybook/preview.ts
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');

export const decorators = [
  (Story) => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    return <Story />;
  },
];
```
