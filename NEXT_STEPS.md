# Next Steps Checklist

## 🚀 Getting Started (Complete these in order)

### 1. Initial Setup (5 minutes)

- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env`
- [ ] Get Figma file key from URL
- [ ] Generate Figma personal access token
- [ ] Add credentials to `.env` file

### 2. Test Locally (10 minutes)

- [ ] Run `npm run figma:export` to test Figma connection
- [ ] Run `npm run tokens:build` to generate CSS variables
- [ ] Run `npm run dev` to start Storybook
- [ ] Open http://localhost:6006
- [ ] View example Button component

### 3. GitHub Configuration (10 minutes)

- [ ] Push code to GitHub
- [ ] Add GitHub Secrets:
  - `FIGMA_FILE_KEY`
  - `FIGMA_ACCESS_TOKEN`
- [ ] Enable GitHub Actions (if disabled)
- [ ] Enable GitHub Pages (Settings → Pages → gh-pages branch)

### 4. First Deployment (15 minutes)

- [ ] Trigger workflow manually (Actions → Figma to Storybook Pipeline → Run workflow)
- [ ] Wait for completion (~5 minutes)
- [ ] Check GitHub Pages URL
- [ ] Verify Storybook is live

### 5. Figma Setup (20 minutes)

- [ ] Organize your Figma file with Variables
- [ ] Create color variables (Primary, Secondary, etc.)
- [ ] Create spacing variables (xs, sm, md, lg, xl)
- [ ] Create typography variables (font sizes)
- [ ] Create border radius variables
- [ ] Test export again: `npm run figma:export`

### 6. Create Your First Component (30 minutes)

- [ ] Design component in Figma
- [ ] Copy the example Button component
- [ ] Update component code
- [ ] Add Figma URL to story parameters
- [ ] Test in Storybook locally
- [ ] Commit and push

### 7. Optional Enhancements

#### Webhook Setup (Real-time updates)

- [ ] Follow `docs/FIGMA_WEBHOOK_SETUP.md`
- [ ] Set up webhook endpoint
- [ ] Configure Figma webhook
- [ ] Test instant sync

#### Advanced Deployment

- [ ] Set up Netlify for PR previews (optional)
- [ ] Configure custom domain (optional)
- [ ] Set up Chromatic for visual testing (optional)

#### Documentation Integration

- [ ] Link Storybook to Docusaurus site
- [ ] Add iFrame embeds in docs
- [ ] Create component usage examples
- [ ] Add to team handbook

### 8. Team Onboarding

#### For Designers:

- [ ] Share `docs/DESIGNER_GUIDE.md`
- [ ] Walk through Figma Variables setup
- [ ] Show Storybook URL
- [ ] Explain automated workflow

#### For Developers:

- [ ] Share main README.md
- [ ] Review component structure
- [ ] Explain token system
- [ ] Demo local development

## 📋 Reference Links

After setup, you'll have:

- **Local Storybook**: http://localhost:6006
- **GitHub Pages**: https://[org].github.io/[repo]
- **GitHub Actions**: https://github.com/[org]/[repo]/actions
- **Figma API**: https://www.figma.com/developers/api

## 🆘 Need Help?

- [ ] Check `docs/TROUBLESHOOTING.md`
- [ ] Review GitHub Actions logs
- [ ] Check browser console
- [ ] Open GitHub issue

## ✅ Success Criteria

You'll know it's working when:

- ✅ Storybook runs locally
- ✅ Figma tokens export successfully
- ✅ GitHub Actions complete without errors
- ✅ Storybook deploys to GitHub Pages
- ✅ Designers can see their changes reflected
- ✅ Developers can consume components easily

## 📚 Additional Resources

- [Storybook Docs](https://storybook.js.org/)
- [Figma Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)

---

**Estimated total setup time**: 1-2 hours
**Maintenance time**: ~0 hours (fully automated!)

Ready to start? Begin with step 1! 🎉
