# TODO List for Tomorrow - TSuite Design System

## Priority 1: Fix Component Properties 🔴

### Issue

Many component stories were generated without proper Figma properties (argTypes), making them show only one static SVG instead of being interactive.

### Already Fixed ✅

- **Buttons** - Now has Type, Icon, State properties working perfectly

### Needs Investigation & Fixing

Based on initial review, these components likely need property updates:

#### High Priority (Multi-variant components)

1. **Banner** (Information banner)

   - Currently: Only "Content: Text + X" property
   - Expected: Should have color/type variants
   - Action: Check Figma component properties and add missing ones

2. **CanvasObjects** (Area, Obstacle, Road, Wall, etc.)

   - Has: State, Type properties (may be working)
   - Action: Verify all 16 components have proper properties

3. **Card** (Simulation card, Notifications)

   - 8 card types with Status and State variants
   - Action: Check if properties are properly mapped

4. **DataTable** (Table rows, Table header)

   - Action: Verify table component properties

5. **Dialogs** (4 dialog types)
   - Action: Check modal/dialog property mappings

#### Medium Priority

6. **BottomBars** (Zoom menu, 3D menu)
7. **CheckboxRadio** (Checkbox, Radio button)
8. **ChipsTags** (Input chips, Card Tag, Layout Tag)
9. **Input** (Input Search, Input Text)
10. **Menus** (Dropdown menu variants)
11. **ProgressIndicators** (Loading Bar, Loading Spinner 3)
12. **Tabs** (Tab item)
13. **ToolRail** (4 tool rail components)
14. **Tooltip** (Explanation tooltip)
15. **TreeView** (Layers, Layer states)
16. **UIShellHeader** (Top bars)
17. **UIShellRightPanel** (16 panel components)

#### Low Priority (Simple components)

18. **Badge** (Small badge)
19. **Divider** (Dividers)
20. **Illustrations** (Rack, Shuttle)

### Root Cause

The script `scripts/generate-category-structure.js` reads properties from `node.componentPropertyDefinitions` in the Figma API. When components were generated, some didn't have their properties properly fetched or mapped.

### Solution Approaches

**Option A: Fix Manually** (Like we did with Buttons)

- Read the Figma mapping data from `component-figma-mapping.json`
- Update each .stories.tsx file with proper:
  - TypeScript prop types
  - Conditional SVG rendering logic
  - argTypes for Storybook controls
  - Story examples

**Option B: Fix the Generation Script**

- Update `scripts/generate-category-structure.js` to handle ES modules
- Re-run the script to regenerate all stories with proper properties
- Note: Need to convert CommonJS scripts to ES modules first

**Recommended**: Start with Option A for high-priority components, then fix the script for future regeneration.

---

## Priority 2: Fix Build Script Issues 🟡

### Issue

Adding `"type": "module"` to package.json broke CommonJS scripts.

### Affected Scripts

- `scripts/copy-build-assets.js` - Fails during `npm run build`
- `scripts/get-component-properties.js` - Can't run to inspect components
- `scripts/generate-category-structure.js` - Can't regenerate stories
- Several other utility scripts

### Solution

Convert scripts to ES modules OR rename to `.cjs`:

**Option A**: Rename to .cjs (Quick fix)

```bash
mv scripts/copy-build-assets.js scripts/copy-build-assets.cjs
# Update package.json script reference
```

**Option B**: Convert to ES modules (Better long-term)

```javascript
// Change from:
const fs = require('fs');

// To:
import fs from 'fs';
```

---

## Priority 3: Update Documentation 📝

### Tasks

1. Document the Buttons fix as an example for fixing other components
2. Create a guide: "How to Add Figma Properties to Storybook Components"
3. Update COMPONENT-STATUS.md with current state
4. Add notes about the ES module migration

---

## Priority 4: Test & Validate 🧪

### Components to Test in Storybook

After fixing properties, verify each component:

- [ ] All properties show in Controls panel
- [ ] Changing properties updates the displayed SVG
- [ ] All variant combinations work
- [ ] Figma metadata is correct

### Test Checklist Template

```markdown
## Component: [Name]

- [ ] Properties defined in argTypes
- [ ] TypeScript types match Figma properties
- [ ] Conditional rendering works
- [ ] All variants accessible
- [ ] Matches Figma design
```

---

## Priority 5: Technical Debt & Improvements 🔧

### Low Priority Tasks

1. Fix ESLint warnings in auto-generated code
2. Run Prettier on all story files
3. Consider: Should we generate functional components or keep as visual reference?
4. Plan for when Figma components update - how to sync?
5. Investigate Chromatic for visual regression testing
6. Fix the 16 moderate security vulnerabilities (run `npm audit`)

---

## Quick Wins for Tomorrow 🚀

### Morning (2-3 hours)

1. Check agent analysis report (will have detailed status of all components)
2. Fix top 3 high-priority components manually (Banner, CanvasObjects, Card)
3. Test fixes in Storybook

### Afternoon (2-3 hours)

4. Convert copy-build-assets.js to ES module or .cjs
5. Fix 3-5 more medium-priority components
6. Update documentation

### End of Day

7. Commit all fixes with proper commit messages
8. Create summary of components fixed vs remaining
9. Plan next batch for following day

---

## Notes & Context

### What's Working Well ✅

- Accordion components - have proper properties
- Switch - has State property (off/on)
- Slider - has properties
- Icons - 150+ icons all working (mostly single property: Property1)
- ESLint & Prettier - set up and working
- Pre-commit hooks - auto-formatting code
- Storybook - running smoothly with HMR

### Key Files

- `component-figma-mapping.json` - Contains Figma component property data
- `scripts/generate-category-structure.js` - Script that generates stories
- Individual `.stories.tsx` files - What needs to be fixed

### Reference: Buttons Fix

See `src/components/Button/Buttons.stories.tsx` as the gold standard for:

- Proper TypeScript prop types
- Multiple property combinations
- Conditional SVG rendering
- Full argTypes configuration
- Multiple story examples

---

## Success Metrics

By end of tomorrow, aim for:

- [ ] At least 10 components with proper properties
- [ ] Build script working again
- [ ] Documentation updated
- [ ] All fixes tested in Storybook
- [ ] Clean git history with descriptive commits

---

**Last Updated**: 2026-01-02 23:15
**Status**: Waiting for agent analysis report to complete the detailed component audit
