# Component Property Audit - TSuite Design System

## Summary

**Total Components**: 30 folders, ~243 story files
**Date**: 2026-01-02
**Status**: In Progress

---

## Quick Reference

### ✅ Components with Proper Properties (Confirmed Working)

1. **Accordion** (3 components)

   - RightbarExpansionpanel1
   - RightbarExpansionpanel2
   - AccordionRightbarTitle
   - Properties: Working correctly

2. **Switch**

   - Properties: State (off/on) ✅

3. **Slider**

   - Properties: Working ✅

4. **Buttons** 🆕 **FIXED TODAY**

   - Properties: Type, Icon, State
   - 25 variant combinations
   - Full interactive controls ✅

5. **Icons** (150+ components)
   - Property1: Enabled, Hovred, Focused, Disable
   - All working correctly ✅

---

## ❌ Components WITHOUT Proper Properties (Need Fixing)

### High Priority - Multi-Variant Components

#### 1. Banner (1 component)

**Current Status**: ❌ Missing properties

- File: `Informationbanner.stories.tsx`
- Has: `Content: 'Text + X'` (only 1 variant)
- **Expected**: Should have color/type variants based on Figma
- **Priority**: HIGH - User mentioned color primitive in Figma
- **Action**: Need to check Figma for actual properties

#### 2. BottomBars (2 components)

**Current Status**: ⚠️ Partially implemented

- Zoommenu.stories.tsx
- \_3Dmenu.stories.tsx
- **Issue**: May have unused State property
- **Action**: Verify properties match Figma

#### 3. CanvasObjects (16 components)

**Expected from Figma mapping**:

- **Area**: State (Default, Flow, Resize), Type (Process, Delivery, Intake, Storage, Charging, Parking, Hand-over, Small, Exit Entry, Manual process area)
- **Other components**: Similar State/Type patterns
- **Action**: Check if Area.stories.tsx has properties, apply same pattern to all 16

#### 4. Card (8 components)

**Expected from Figma mapping**:

- **Simulation card**: Status (Active, Default, Complete, Order profile), State (Default, Hover, Draft)
- **Notification cards**: Different types (Error, Fatal, Information, Success, Warning)
- **Action**: Verify all 8 card components have proper properties

#### 5. DataTable (3 components)

- Tableheader.stories.tsx
- Tablerows.stories.tsx
- Listsection.stories.tsx
- **Action**: Check properties for table components

#### 6. Dialogs (4 components)

- Helpdialog
- Orderprofilemodal
- Simulationdialog
- Widthdialogwithaction
- **Action**: Verify dialog properties

---

### Medium Priority - Standard Components

#### 7. Badge (1 component)

- Smallbadge.stories.tsx
- **Expected**: Likely has variants
- **Action**: Check Figma mapping

#### 8. CheckboxRadio (2 components)

**Expected from Figma mapping**:

- **Checkbox**: State (Checked, Unchecked, Not all checked)
- **Radio button**: Similar states
- **Action**: Verify both have State property

#### 9. ChipsTags (3 components)

- Input chips
- Card Tag
- Layout Tag
- **Action**: Check for variant properties

#### 10. Input (2 components)

- InputText.stories.tsx
- InputSearch.stories.tsx
- **Expected**: State variants (default, focus, error, disabled)
- **Action**: Verify input properties

#### 11. LargeComponents (6 components)

- Filterandsort
- Floorplancard
- Keyboardshortcutssection
- LargeFloorplancardsection
- Selectvehiclesloadcarrier
- Titleandsearch
- **Action**: Check each for properties

#### 12. Menus (3 components)

- Dropdownmenuitem
- LargeDropdownmenu
- MediumDropdownmenu
- **Action**: Verify menu variants

#### 13. ProgressIndicators (2 components)

- LoadingBar
- LoadingSpinner3
- **Expected**: State or progress variants
- **Action**: Check properties

#### 14. Tabs (1 component)

- Tabitem.stories.tsx
- **Expected**: State (active, inactive, hover)
- **Action**: Verify tab states

#### 15. ToolRail (4 components)

- Toolrailexpandmenu
- Toolrailmainitems
- Toolrailsub
- Toolrailsubitems
- **Action**: Check tool rail properties

#### 16. Tooltip (1 component)

- Explenationtooltip.stories.tsx
- **Expected**: Position or type variants
- **Action**: Verify tooltip properties

#### 17. TreeView (4 components)

- Layers
- Layerstates
- Layergroupsection
- Layerlefticon
- **Expected**: State variants (expanded, collapsed, selected)
- **Action**: Check tree view properties

#### 18. UIShellHeader (1 component)

- Topbars.stories.tsx
- **Action**: Verify header properties

#### 19. UIShellRightPanel (16 components)

- Areasections
- Bars
- Flowlist
- Nothingcard
- PropertiesLabel
- PropertypanelSetupLayoutSimulation3dVisualiationCommissioning
- Referenceimage
- Rightbarinputrow
- Scalesection
- Sliderlist
- Switchlist
- Userangecardsimulation
- Vehicleandloadcarriertypes
- Visualizationjobcard
- inputtext
- **Action**: Check all 16 panel components

---

### Low Priority - Simple Components

#### 20. Divider (2 components)

- Dividers.stories.tsx
- **Expected**: Type variants (horizontal, vertical)
- **Action**: Quick check

#### 21. Illustrations (2 components)

- Rack.stories.tsx
- Shuttle.stories.tsx
- **Expected**: Variant or view properties
- **Action**: Check illustrations

---

## Components to Skip

- **BreadCrumbs**: No stories generated
- **Cursor**: No stories (noted in mapping)
- **PropertyPanels**: No pageId in mapping
- **RackingData**: No pageId in mapping

---

## How to Fix a Component

### Template (Based on Buttons Fix)

1. **Read the component-figma-mapping.json** to see expected properties
2. **Check which SVG files exist** for that component
3. **Update the .stories.tsx file** with:

```typescript
// Add proper TypeScript types
const ComponentName = ({ Property1, Property2 }: {
  Property1?: 'Option1' | 'Option2' | 'Option3';
  Property2?: 'StateA' | 'StateB';
} = {
    Property1: 'Option1',
    Property2: 'StateA'
  }) => {

  // Add conditional rendering for all combinations
  if (Property1 === 'Option1' && Property2 === 'StateA') return <SvgComponent1 />;
  if (Property1 === 'Option1' && Property2 === 'StateB') return <SvgComponent2 />;
  // ... etc

  return <DefaultSvgComponent />;
};

// Add argTypes in meta
argTypes: {
  Property1: {
    control: 'select',
    options: ['Option1', 'Option2', 'Option3'],
    description: 'Matches Figma "Property 1" property',
  },
  Property2: {
    control: 'select',
    options: ['StateA', 'StateB'],
    description: 'Matches Figma "Property 2" property',
  },
},

// Add default args
args: {
  Property1: 'Option1',
  Property2: 'StateA',
},
```

4. **Add story examples** for key variants
5. **Test in Storybook** - verify controls work

---

## Estimation

- **High Priority** (Banner, CanvasObjects, Card): 4-6 hours
- **Medium Priority** (CheckboxRadio, Input, Menus, etc.): 8-12 hours
- **Low Priority** (Divider, Illustrations): 1-2 hours

**Total**: ~15-20 hours of work to fix all components

**Recommended Approach**: Fix 5-10 components per day over 2-3 days

---

## Key Files Reference

- `component-figma-mapping.json` - Figma property data for each component
- `src/components/Button/Buttons.stories.tsx` - Gold standard example
- `scripts/generate-category-structure.js` - Script that generates stories (needs ES module fix)

---

## Notes

- Agent is still analyzing detailed status of each component
- Will update this document when agent analysis completes
- Some components may already have properties - needs verification

**Next Update**: After agent analysis completes
