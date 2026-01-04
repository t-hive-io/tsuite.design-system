# Troubleshooting Guide

## Common Issues and Solutions

### Figma Export Issues

#### Error: "Missing environment variables"

```bash
❌ Missing environment variables:
   FIGMA_FILE_KEY and FIGMA_ACCESS_TOKEN are required
```

**Solution:**

1. Copy `.env.example` to `.env`
2. Add your Figma credentials
3. For GitHub Actions, add secrets in repo settings

#### Error: "Failed to fetch Figma file"

**Possible causes:**

- Invalid access token
- Wrong file key
- Insufficient permissions

**Solution:**

1. Generate new token at: https://www.figma.com/developers/api#access-tokens
2. Verify file key from URL: `https://www.figma.com/file/FILE_KEY/...`
3. Ensure token has read access to the file

#### Variables not exporting

**Check:**

1. Are you using Figma Variables (not Styles)?
2. Are variables published in the library?
3. Do variables have proper names?

### Build Issues

#### Storybook won't start

```bash
Error: Cannot find module '@storybook/react-vite'
```

**Solution:**

```bash
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript errors

```bash
Error: Cannot find module './tokens/tokens'
```

**Solution:**

1. Run token generation first:
   ```bash
   npm run figma:export
   npm run tokens:build
   ```
2. Restart Storybook

### GitHub Actions Issues

#### Workflow not triggering

**Check:**

1. Workflow file is in `.github/workflows/`
2. Branch protection rules
3. Repository permissions

#### Action fails on token export

**Solution:**

1. Verify GitHub Secrets are set:
   - Settings → Secrets → Actions
   - Add `FIGMA_FILE_KEY` and `FIGMA_ACCESS_TOKEN`
2. Check secret names match exactly

#### Permission denied on commit

**Solution:**
Update workflow permissions:

```yaml
permissions:
  contents: write
```

### Design Token Issues

#### Tokens not updating in Storybook

**Solution:**

1. Check if `tokens.css` was generated:
   ```bash
   ls src/styles/tokens.css
   ```
2. Verify it's imported in `.storybook/preview.ts`
3. Hard refresh browser (Ctrl+Shift+R)

#### CSS variables undefined

**Check:**

1. Token file generated correctly
2. CSS imported in preview
3. Browser console for errors

### Deployment Issues

#### GitHub Pages 404

**Solution:**

1. Check Pages settings: Settings → Pages
2. Select `gh-pages` branch
3. Wait 2-3 minutes for deployment

#### Netlify build fails

**Check:**

1. Build command: `npm run build-storybook`
2. Publish directory: `storybook-static`
3. Node version: 18 or higher

### Performance Issues

#### Storybook slow to load

**Solution:**

1. Enable lazy compilation:

   ```javascript
   // .storybook/main.ts
   core: {
     builder: {
       options: {
         lazyCompilation: true,
       },
     },
   }
   ```

2. Reduce number of stories loaded

#### Large bundle size

**Solution:**

1. Use dynamic imports
2. Split components into separate chunks
3. Optimize images

## Getting Help

### Before asking for help:

1. ✅ Check this troubleshooting guide
2. ✅ Review GitHub Actions logs
3. ✅ Check browser console for errors
4. ✅ Try clearing cache and rebuilding

### When asking for help, include:

- Error message (full text)
- Steps to reproduce
- Environment info:
  ```bash
  node --version
  npm --version
  ```
- Relevant logs or screenshots

### Where to get help:

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and community help
- **Slack/Teams**: #design-system channel
- **Documentation**: Check all docs/ folder guides

## Debug Mode

Enable verbose logging:

```bash
# Local development
DEBUG=* npm run figma:export

# GitHub Actions
# Add to workflow:
env:
  DEBUG: '*'
```

## Useful Commands

```bash
# Check Node version
node --version

# Clear cache
rm -rf node_modules .storybook/cache
npm install

# Test token export locally
npm run figma:export

# Build without running
npm run build-storybook

# Check for TypeScript errors
npx tsc --noEmit
```

## Still Having Issues?

Create a detailed bug report with:

1. **Title**: Brief description
2. **Environment**: OS, Node version, browser
3. **Steps to reproduce**: 1, 2, 3...
4. **Expected behavior**: What should happen
5. **Actual behavior**: What actually happens
6. **Logs**: Error messages, screenshots
7. **Additional context**: Any other relevant info

[Open an issue →](../../issues/new)
