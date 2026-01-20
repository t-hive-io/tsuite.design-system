# GitHub Secrets Setup

The pipeline regenerates components from Figma on every build. You need to add these secrets to GitHub:

## Required Secrets

### 1. FIGMA_ACCESS_TOKEN

Your Figma personal access token

**How to get it:**

1. Go to https://www.figma.com/settings
2. Scroll to "Personal access tokens"
3. Click "Generate new token"
4. Copy the token (you won't see it again!)

### 2. FIGMA_FILE_KEY

Your Figma file key (already exists in repo)

**How to find it:**
From Figma file URL: `https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/...`
The key is: `XKxVlFf9TfWBHosOInkJXA`

## Add Secrets to GitHub

1. Go to your repo: https://github.com/t-hive-io/tsuite.design-system
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - Name: `FIGMA_ACCESS_TOKEN`
   - Value: [paste your Figma token]
5. Click **Add secret**

## Verify Setup

After adding secrets, the pipeline will:

1. Fetch latest from Figma on every push to main
2. Generate all components and stories
3. Build Storybook
4. Deploy to GitHub Pages

Check the Actions tab to see if builds succeed: https://github.com/t-hive-io/tsuite.design-system/actions

## Current Status

✅ Workflows updated to use secrets:

- `.github/workflows/figma-sync.yml`
- `.github/workflows/pr-preview.yml`

⚠️ **Action Required:** Add `FIGMA_ACCESS_TOKEN` secret to GitHub repo settings
