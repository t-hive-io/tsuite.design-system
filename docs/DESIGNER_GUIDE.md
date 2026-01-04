# Designer Workflow Guide

## 🎨 For Product Designers

**Good news: You don't need to learn Git, code, or any developer tools!**

Your workflow remains exactly the same - design in Figma, and everything else happens automatically.

## 📚 Essential Reading

Before you start, please read:

- **[Figma Naming Best Practices](./FIGMA_NAMING_BEST_PRACTICES.md)** - Learn how to name components for React and Angular

## Daily Workflow

### 1. Design in Figma (as usual)

- Create and update components
- Adjust colors, spacing, typography
- Use Figma Variables for design tokens

### 2. Use Figma Variables

Organize your design decisions in Figma Variables:

#### Colors

```
Primary/500 → #0066FF
Primary/400 → #3385FF
Secondary/500 → #6B7280
Semantic/Success → #10B981
Semantic/Error → #EF4444
```

#### Spacing

```
Spacing/XS → 4
Spacing/SM → 8
Spacing/MD → 16
Spacing/LG → 24
Spacing/XL → 32
```

#### Border Radius

```
Radius/SM → 4
Radius/MD → 8
Radius/LG → 12
```

#### Typography

```
Font Size/XS → 12
Font Size/SM → 14
Font Size/MD → 16
Font Size/LG → 18
Font Size/XL → 24
```

### 3. Changes Sync Automatically

Your changes will sync to the codebase:

- **Automatically**: Every day at 2 AM (you sleep, it syncs!)
- **On-demand**: Ask a developer to trigger manual sync
- **Instantly**: With webhook setup (optional)

## Best Practices

### Naming Components

**⚠️ Important:** Component names in Figma directly become React/Angular component names!

Read the complete guide: **[Figma Naming Best Practices](./FIGMA_NAMING_BEST_PRACTICES.md)**

Quick tips:

- Use descriptive names: `User Profile` not `Component 1`
- Avoid special characters: `@`, `#`, `$`, etc.
- Use spaces, hyphens, or underscores as separators
- Examples: `search_icon` → `SearchIcon`, `primary-button` → `PrimaryButton`

### Design Tokens

### ✅ DO:

- Use Figma Variables for colors, spacing, typography
- Name variables clearly (e.g., "Button/Primary/Background")
- Keep component library organized
- Document design decisions in Figma
- Add descriptions to components

### ❌ DON'T:

- Use hard-coded values instead of variables
- Change variable names frequently (breaks code)
- Delete variables that are in use
- Mix different naming conventions

## How to Check Your Changes

1. **Ask developers** for the Storybook URL
2. **View components** in the browser (no setup needed!)
3. **See your Figma designs** side-by-side with code
4. **Test interactions** without any code

## Naming Conventions

### Colors

```
Semantic: Primary, Secondary, Success, Warning, Error
Shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
Example: "Primary/500", "Error/600"
```

### Spacing

```
Scale: XS, SM, MD, LG, XL, 2XL
Example: "Spacing/MD", "Spacing/XL"
```

### Components

```
Pattern: Component/Variant/Property
Example: "Button/Primary/Background"
```

## Communication with Developers

### When making major changes:

1. Post in Slack/Teams: "Updated button colors in Figma"
2. Developers will sync and update code
3. Review changes in Storybook once deployed

### For new components:

1. Design complete component in Figma
2. Share Figma link with developers
3. They'll build it and link back to your design
4. You review and iterate

## FAQ

**Q: Do I need to learn Git?**
A: No! Never. Keep working in Figma only.

**Q: How do I know if my changes are live?**
A: Check the Storybook URL or ask developers.

**Q: What if I need to update something urgently?**
A: Ping a developer to manually trigger the sync workflow.

**Q: Can I see what the component looks like in code?**
A: Yes! Every Storybook component has your Figma design embedded for comparison.

**Q: What if I rename a variable?**
A: Notify developers first - they may need to update code references.

**Q: How do I add a new component?**
A: Design it in Figma, then coordinate with developers to build it. Link will be added automatically.

## Figma File Organization

Recommended structure:

```
📁 Design System
  📁 Foundation
    📄 Colors (Variables)
    📄 Typography (Variables)
    📄 Spacing (Variables)
    📄 Radius (Variables)
  📁 Components
    📄 Buttons
    📄 Forms
    📄 Cards
    📄 Navigation
  📁 Patterns
    📄 Login Flow
    📄 Dashboard Layout
```

## Support

**Need help?**

- **Slack**: #design-system channel
- **Questions**: Ask developers
- **Documentation**: This guide + Storybook

**Remember**: You're the design expert. Focus on Figma. We handle the code! 🎨
