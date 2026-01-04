# Figma Naming Best Practices

## 🎯 Why Naming Matters

Component names in Figma are automatically converted to React and Angular component names. Following these naming conventions ensures:

- ✅ Clean, readable code
- ✅ Proper PascalCase conversion
- ✅ No compilation errors
- ✅ Consistent naming across design and code

## 📋 Core Rules

### 1. Use Descriptive Names

**✅ Good:**

- `User Profile`
- `Search Input`
- `Navigation Button`
- `Alert Dialog`

**❌ Avoid:**

- `Component 1`
- `Frame 45`
- `Group`
- `Rectangle 23`

### 2. Naming Convention: Words Separated by Spaces, Hyphens, or Underscores

Your Figma names will be automatically converted to PascalCase for React/Angular:

| Figma Name       | Exported As   | React/Angular Component |
| ---------------- | ------------- | ----------------------- |
| `user profile`   | UserProfile   | `<UserProfile />`       |
| `search-input`   | SearchInput   | `<SearchInput />`       |
| `primary_button` | PrimaryButton | `<PrimaryButton />`     |
| `Alert Dialog`   | AlertDialog   | `<AlertDialog />`       |

**The conversion logic:**

- Spaces, hyphens (`-`), and underscores (`_`) are treated as word separators
- Each word's first letter is capitalized
- Separators are removed
- Result: PascalCase component name

### 3. Avoid Special Characters

**✅ Allowed:**

- Letters (a-z, A-Z)
- Numbers (0-9)
- Spaces, hyphens (-), underscores (\_)

**❌ Avoid:**

- `@`, `#`, `$`, `%`, `&`, `*`
- Parentheses `()`
- Brackets `[]`, `{}`
- Special symbols `!`, `?`, `+`, `=`

### 4. Don't Start with Numbers

**❌ Bad:**

```
3D View → Component3DView (prefixed with "Component")
24 Hour Clock → Component24HourClock
```

**✅ Good:**

```
View 3D → View3d
Clock 24Hour → Clock24hour
```

## 🎨 Component Sets (Variants)

Component sets use a special format: `Property 1=Value`

**Example: Button Variants**

```
Property 1=Primary
Property 1=Secondary
Property 1=Outlined
```

**Exported as:**

- Filename: `Property1Primary--12345.svg`
- Component: `Property1Primary`

**Best Practice:** Use descriptive property names and values:

```
State=Default
State=Hover
State=Pressed
State=Disabled
```

## 📐 Icon Naming

### Simple Icons

```
✅ search
✅ user_profile
✅ arrow-right
✅ close-button

❌ icon_1
❌ svg_export_23
❌ @search
```

### Icon Variants

For icons with states or variations:

**Option 1: Component Sets (Recommended)**

```
Property 1=Enabled
Property 1=Disabled
Property 1=Hover
```

Becomes: `Property1Enabled`, `Property1Disabled`, `Property1Hover`

**Option 2: Descriptive Naming**

```
search enabled
search disabled
search hover
```

Becomes: `SearchEnabled`, `SearchDisabled`, `SearchHover`

## 🔤 Real-World Examples

### Navigation Components

**❌ Before (Poor naming):**

```
nav_1
navbar-comp
header_top_menu
```

**✅ After (Good naming):**

```
Main Navigation → MainNavigation
Top Navigation Bar → TopNavigationBar
Header Menu → HeaderMenu
```

### Form Components

**❌ Before:**

```
input_field_1
txt_box
form-component-23
```

**✅ After:**

```
Text Input → TextInput
Email Input → EmailInput
Password Field → PasswordField
Form Group → FormGroup
```

### Button Components

**❌ Before:**

```
btn_primary
Button1
cta-button
```

**✅ After:**

```
Primary Button → PrimaryButton
Call To Action Button → CallToActionButton
Submit Button → SubmitButton
```

## 🏗️ Organizational Tips

### 1. Use Prefixes for Categories

```
✅ Button Primary → ButtonPrimary
✅ Button Secondary → ButtonSecondary
✅ Input Text → InputText
✅ Input Email → InputEmail
```

### 2. Hierarchical Naming

```
✅ Navigation Main → NavigationMain
✅ Navigation Footer → NavigationFooter
✅ Card Header → CardHeader
✅ Card Body → CardBody
✅ Card Footer → CardFooter
```

### 3. State Suffixes

```
✅ Button Enabled → ButtonEnabled
✅ Button Disabled → ButtonDisabled
✅ Button Hover → ButtonHover
✅ Button Pressed → ButtonPressed
```

## 🔍 Testing Your Names

Before finalizing your component names, ask:

1. **Is it descriptive?**

   - Can someone understand what it is without seeing it?

2. **Does it follow PascalCase rules?**

   - Will it convert cleanly (no special characters)?

3. **Is it unique?**

   - Does it avoid conflicts with other components?

4. **Is it consistent?**
   - Does it follow the same pattern as similar components?

## 🛠️ Conversion Examples

Here are actual conversions from the export script:

| Figma Name                  | Converted Name           |
| --------------------------- | ------------------------ |
| `ads_click`                 | `AdsClick`               |
| `local-parking`             | `LocalParking`           |
| `user settings`             | `UserSettings`           |
| `3d-view`                   | `Component3dView`        |
| `Home Screen`               | `HomeScreen`             |
| `call-to-action_button`     | `CallToActionButton`     |
| `Property 1=Default`        | `Property1Default`       |
| `State=Active Type=Primary` | `StateActiveTypePrimary` |

## ❗ Common Mistakes

### Mistake 1: Inconsistent Separators

**❌ Bad:**

```
user profile
user-settings
user_avatar
```

**✅ Good (pick one style):**

```
user profile
user settings
user avatar
```

### Mistake 2: Too Generic

**❌ Bad:**

```
Component
Frame
Group
Icon
```

**✅ Good:**

```
User Profile Component
Navigation Frame
Button Group
Search Icon
```

### Mistake 3: Too Long

**❌ Bad:**

```
The Main Navigation Header Component With Dropdown Menu
```

**✅ Good:**

```
Main Navigation Dropdown
```

### Mistake 4: Including File Extensions or Type Suffixes

**❌ Bad:**

```
button.svg
icon-search.png
component_card
```

**✅ Good:**

```
button
search
card
```

## 📚 Framework-Specific Guidelines

### React

- Component names become: `<ComponentName />`
- Must be PascalCase (enforced automatically)
- Exports as: `export default ComponentName;`

### Angular

- Component names become: `<app-component-name></app-component-name>`
- Automatically converted from PascalCase to kebab-case
- Class name: `ComponentNameComponent`

## ✨ Quick Reference Checklist

Before publishing your Figma components:

- [ ] All components have descriptive names
- [ ] No special characters (except space, hyphen, underscore)
- [ ] Names don't start with numbers
- [ ] Component sets use clear property names
- [ ] Naming is consistent across similar components
- [ ] No generic names like "Component" or "Frame"
- [ ] Names are concise but clear (2-4 words ideal)

## 🔗 Related Documentation

- [Designer Workflow Guide](./DESIGNER_GUIDE.md)
- [Figma File Structure](./figma-file-structure.md)
- [Icon Export Process](../scripts/export-figma-svgs.js)

---

**Remember:** Good naming in Figma = Clean code in React/Angular! 🎉
