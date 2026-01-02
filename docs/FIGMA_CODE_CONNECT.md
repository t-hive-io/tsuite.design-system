# Figma Code Connect Setup

## ✅ Example: Button Component Connected

I've created a Code Connect file that links your Button component to Figma.

## 📋 Component Mapping

**Figma Component:** `Buttons` (ID: 1428:9176)
**File:** [Button.figma.tsx](../src/components/Button/Button.figma.tsx)

**Mapped Properties:**
- `Type` (Figma) → `variant` (React): Primary, Secondary, Tertiary, Outlined, Link
- `Icon` (Figma) → `icon` (React): True/False
- `State` (Figma) → `disabled/active` (React): Default, Disabled, Active, Hover

## 🎨 What to Add in Figma

To get documentation flowing from Figma → Storybook:

### 1. Add Component Description in Figma
1. Open Figma file
2. Select the "Buttons" component set
3. In right panel, find **Description** field
4. Add text like:
   ```
   Primary button component for user actions.
   
   Use primary buttons for main actions, secondary for supporting actions.
   Available in multiple sizes and states.
   ```

### 2. Add Property Descriptions
For each property (Type, Icon, State):
1. Click on the property name
2. Add description in the property panel

Example:
- **Type**: Choose button style variant (Primary for main actions, Secondary for supporting)
- **Icon**: Show icon before button text
- **State**: Button interaction state (Default, Hover, Active, Disabled)

### 3. Publish to Figma Code Connect

Run this command to publish the connection:
```bash
npm run figma:connect
```

This will:
- Upload the mapping to Figma
- Show "View code" in Figma for this component
- Pull descriptions into Storybook (when configured)

## 🔄 Next Steps

1. **Add descriptions in Figma** (see above)
2. **Run:** `npm run figma:connect`
3. **Update Story files** to pull from Figma (I'll show you how)
4. **Repeat for other components** (Input, Switch, etc.)

## 📦 All Your Components

Found 271 components in Figma! The main ones:
- ✅ Buttons (1428:9176) - **MAPPED**
- Input – Text (1728:8340)
- Switch (1894:8776)
- Checkbox (1754:8350)
- Dividers (1573:9990)
- And 266 more...

Want me to set up another component?
