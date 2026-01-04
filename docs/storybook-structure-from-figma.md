# Storybook structure proposal (from Figma)

- Source Figma file: T-Suite Design System
- File key: `XKxVlFf9TfWBHosOInkJXA`

This mirrors Figma “Pages (summary)” as:

- Level 1 (Storybook): **Category** (Foundations / Components / Other)
- Level 2 (Storybook): **Page** (Figma page name without prefix `●` / `❖`)
- Level 3 (Storybook): **Top-level nodes** on that page, filtered to `FRAME`, `SECTION`, `COMPONENT_SET`, `GROUP`

### Layer-3 rule (to guide Figma restructuring)

- Included as Layer-3: `FRAME`, `SECTION`, `COMPONENT_SET`, `GROUP`
- Excluded (not shown as Layer-3): everything else (commonly `TEXT`, `VECTOR`, `INSTANCE`, `RECTANGLE`, etc.)
- Each page below includes an “excluded top-level” summary so you can spot pages that need more container structure in Figma.

## Proposed nav (titles)

### Foundations

- Foundations/Colors _(Figma page: ● Colors | 5168:44092 | top-level nodes: 8 | excluded top-level: VECTOR×1, TEXT×1)_
  - Foundations/Colors/Digital Twin color range _(SECTION | 5276:38473)_
  - Foundations/Colors/MacBook Air - 1 _(FRAME | 5536:24130)_
  - Foundations/Colors/MacBook Air - 4 _(FRAME | 5536:24209)_
  - Foundations/Colors/MacBook Air - 5 _(FRAME | 5536:24300)_
  - Foundations/Colors/MacBook Air - 6 _(FRAME | 5536:24306)_
  - Foundations/Colors/MacBook Air - 2 _(FRAME | 5536:24291)_
- Foundations/Corner radius _(Figma page: ● Corner radius | 5276:39119 | top-level nodes: 1)_
  - Foundations/Corner radius/Corner radius _(SECTION | 5281:31214)_
- Foundations/COVER _(Figma page: ● COVER | 822:6329 | top-level nodes: 1)_
  - Foundations/COVER/Thumbnail DIGITAL TWIN _(FRAME | 5591:6)_
- Foundations/Elevation _(Figma page: ● Elevation | 5267:23379 | top-level nodes: 1)_
  - Foundations/Elevation/Shadows _(FRAME | 5276:39747)_
- Foundations/Grid system _(Figma page: ● Grid system | 5301:31219 | top-level nodes: 33 | excluded top-level: VECTOR×16, TEXT×14, INSTANCE×3)_
  - (no top-level FRAME/SECTION/COMPONENT_SET/GROUP found)
- Foundations/Logotype _(Figma page: ● Logotype | 5276:38948 | top-level nodes: 2)_
  - Foundations/Logotype/Logo _(FRAME | 5276:38949)_
  - Foundations/Logotype/Raw _(FRAME | 5276:38955)_
- Foundations/Sandbox _(Figma page: ● Sandbox | 5193:41099 | top-level nodes: 7)_
  - Foundations/Sandbox/Sandbox: New Property panel _(SECTION | 5193:41100)_
  - Foundations/Sandbox/Sandbox: Tooltip, Hover and Focused _(SECTION | 5193:41122)_
  - Foundations/Sandbox/Sandbox _(SECTION | 5194:45515)_
  - Foundations/Sandbox/Sandbox _(SECTION | 5235:35487)_
  - Foundations/Sandbox/Process flow + regular flow _(SECTION | 5378:20114)_
  - Foundations/Sandbox/Typography – clean up _(SECTION | 5426:17318)_
  - Foundations/Sandbox/Color – clean up _(SECTION | 5426:17418)_
- Foundations/Typography _(Figma page: ● Typography | 5168:44044 | top-level nodes: 1)_
  - Foundations/Typography/Typography _(FRAME | 5168:44045)_

### Components

- Components/Accordion _(Figma page: ❖ Accordion | 5193:36784 | top-level nodes: 1)_
  - Components/Accordion/Accordion _(SECTION | 5193:36807)_
- Components/Badge _(Figma page: ❖ Badge | 5168:44095 | top-level nodes: 1)_
  - Components/Badge/Badges _(SECTION | 5168:44096)_
- Components/Banner _(Figma page: ❖ Banner | 5248:20526 | top-level nodes: 1)_
  - Components/Banner/Section 1 _(SECTION | 5248:20528)_
- Components/Bottom bars _(Figma page: ❖ Bottom bars | 5168:44729 | top-level nodes: 1)_
  - Components/Bottom bars/Bottom menus _(SECTION | 5168:44730)_
- Components/Bread crumbs _(Figma page: ❖ Bread crumbs | 5170:45474 | top-level nodes: 1)_
  - Components/Bread crumbs/Bread crumbs _(SECTION | 5257:22403)_
- Components/Buttons _(Figma page: ❖ Buttons | 5170:45280 | top-level nodes: 1)_
  - Components/Buttons/Buttons _(SECTION | 5170:45325)_
- Components/Canvas objects _(Figma page: ❖ Canvas objects | 5170:45525 | top-level nodes: 1)_
  - Components/Canvas objects/Canvas objects _(SECTION | 5170:45526)_
- Components/Cards _(Figma page: ❖ Cards | 5171:45784 | top-level nodes: 2)_
  - Components/Cards/Cards _(SECTION | 5171:45785)_
  - Components/Cards/Notification card _(SECTION | 5171:45793)_
- Components/Checkbox / Radio button _(Figma page: ❖ Checkbox / Radio button | 5172:38133 | top-level nodes: 1)_
  - Components/Checkbox / Radio button/Checkbox and Radio button _(SECTION | 5172:38134)_
- Components/Chips / Tags _(Figma page: ❖ Chips / Tags | 5172:38144 | top-level nodes: 1)_
  - Components/Chips / Tags/Chips and tags _(SECTION | 5172:38145)_
- Components/Cursor _(Figma page: ❖ Cursor | 5172:38151 | top-level nodes: 3 | excluded top-level: TEXT×2)_
  - Components/Cursor/Cursors _(SECTION | 5172:38152)_
- Components/Data table _(Figma page: ❖ Data table | 5194:45461 | top-level nodes: 2 | excluded top-level: TEXT×1)_
  - Components/Data table/Table _(SECTION | 5194:45462)_
- Components/Dialogs _(Figma page: ❖ Dialogs | 5175:37036 | top-level nodes: 1)_
  - Components/Dialogs/Dialogs _(SECTION | 5175:37088)_
- Components/Divider _(Figma page: ❖ Divider | 5182:37137 | top-level nodes: 1)_
  - Components/Divider/Dividers _(SECTION | 5182:37138)_
- Components/Icon _(Figma page: ❖ Icon | 5193:37078 | top-level nodes: 1)_
  - Components/Icon/Icons _(SECTION | 5193:37232)_
- Components/Illustrations _(Figma page: ❖ Illustrations | 5246:38377 | top-level nodes: 1)_
  - Components/Illustrations/Storage illustrations _(SECTION | 5246:38432)_
- Components/Input _(Figma page: ❖ Input | 5193:38949 | top-level nodes: 3)_
  - Components/Input/Text fields, Search and Input _(SECTION | 5193:38975)_
  - Components/Input/Search _(SECTION | 5506:233)_
  - Components/Input/Input large list _(SECTION | 5506:235)_
- Components/Large components _(Figma page: ❖ Large components | 5193:39157 | top-level nodes: 1)_
  - Components/Large components/Large components _(SECTION | 5193:39158)_
- Components/Menus _(Figma page: ❖ Menus | 5193:45251 | top-level nodes: 1)_
  - Components/Menus/Menus _(SECTION | 5193:45252)_
- Components/Overlay _(Figma page: ❖ Overlay | 5193:45258 | top-level nodes: 1)_
  - Components/Overlay/Overlay _(SECTION | 5193:45259)_
- Components/Progress indicatiors _(Figma page: ❖ Progress indicatiors | 5193:45265 | top-level nodes: 1)_
  - Components/Progress indicatiors/Progress indicatiors _(SECTION | 5193:45266)_
- Components/Slider _(Figma page: ❖ Slider | 5194:45447 | top-level nodes: 1)_
  - Components/Slider/Slider _(SECTION | 5194:45448)_
- Components/Snackbar _(Figma page: ❖ Snackbar | 5194:45439 | top-level nodes: 1)_
  - Components/Snackbar/Snackbar and banners _(SECTION | 5194:45440)_
- Components/Switch _(Figma page: ❖ Switch | 5194:45454 | top-level nodes: 1)_
  - Components/Switch/Switch _(SECTION | 5194:45455)_
- Components/Tabs _(Figma page: ❖ Tabs | 5194:45468 | top-level nodes: 1)_
  - Components/Tabs/Tabs _(SECTION | 5194:45469)_
- Components/Tool rail _(Figma page: ❖ Tool rail | 5194:45487 | top-level nodes: 1)_
  - Components/Tool rail/Tool rail _(SECTION | 5194:45488)_
- Components/Tooltip _(Figma page: ❖ Tooltip | 5194:45501 | top-level nodes: 1)_
  - Components/Tooltip/Tool tip _(SECTION | 5194:45502)_
- Components/Tree view _(Figma page: ❖ Tree view | 5200:798 | top-level nodes: 1)_
  - Components/Tree view/Lists _(SECTION | 5200:6494)_
- Components/UI shell header _(Figma page: ❖ UI shell header | 5236:21014 | top-level nodes: 1)_
  - Components/UI shell header/Top bars _(COMPONENT_SET | 1364:9832)_
- Components/UI shell right panel _(Figma page: ❖ UI shell right panel | 5236:21016 | top-level nodes: 1)_
  - Components/UI shell right panel/❖ UI shell right panel _(SECTION | 5238:21813)_

## Table view

| Category    | Page                    | Page node id | Level-3 (FRAME/SECTION/COMPONENT_SET/GROUP) count | Excluded top-level types       | Level-3 examples                                                                                                                                                                                   |
| ----------- | ----------------------- | ------------ | ------------------------------------------------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foundations | Colors                  | 5168:44092   |                                                 6 | VECTOR×1, TEXT×1               | Digital Twin color range (SECTION), MacBook Air - 1 (FRAME), MacBook Air - 4 (FRAME), MacBook Air - 5 (FRAME), MacBook Air - 6 (FRAME), MacBook Air - 2 (FRAME)                                    |
| Foundations | Corner radius           | 5276:39119   |                                                 1 | (none)                         | Corner radius (SECTION)                                                                                                                                                                            |
| Foundations | COVER                   | 822:6329     |                                                 1 | (none)                         | Thumbnail DIGITAL TWIN (FRAME)                                                                                                                                                                     |
| Foundations | Elevation               | 5267:23379   |                                                 1 | (none)                         | Shadows (FRAME)                                                                                                                                                                                    |
| Foundations | Grid system             | 5301:31219   |                                                 0 | VECTOR×16, TEXT×14, INSTANCE×3 | (none)                                                                                                                                                                                             |
| Foundations | Logotype                | 5276:38948   |                                                 2 | (none)                         | Logo (FRAME), Raw (FRAME)                                                                                                                                                                          |
| Foundations | Sandbox                 | 5193:41099   |                                                 7 | (none)                         | Sandbox: New Property panel (SECTION), Sandbox: Tooltip, Hover and Focused (SECTION), Sandbox (SECTION), Sandbox (SECTION), Process flow + regular flow (SECTION), Typography – clean up (SECTION) |
| Foundations | Typography              | 5168:44044   |                                                 1 | (none)                         | Typography (FRAME)                                                                                                                                                                                 |
| Components  | Accordion               | 5193:36784   |                                                 1 | (none)                         | Accordion (SECTION)                                                                                                                                                                                |
| Components  | Badge                   | 5168:44095   |                                                 1 | (none)                         | Badges (SECTION)                                                                                                                                                                                   |
| Components  | Banner                  | 5248:20526   |                                                 1 | (none)                         | Section 1 (SECTION)                                                                                                                                                                                |
| Components  | Bottom bars             | 5168:44729   |                                                 1 | (none)                         | Bottom menus (SECTION)                                                                                                                                                                             |
| Components  | Bread crumbs            | 5170:45474   |                                                 1 | (none)                         | Bread crumbs (SECTION)                                                                                                                                                                             |
| Components  | Buttons                 | 5170:45280   |                                                 1 | (none)                         | Buttons (SECTION)                                                                                                                                                                                  |
| Components  | Canvas objects          | 5170:45525   |                                                 1 | (none)                         | Canvas objects (SECTION)                                                                                                                                                                           |
| Components  | Cards                   | 5171:45784   |                                                 2 | (none)                         | Cards (SECTION), Notification card (SECTION)                                                                                                                                                       |
| Components  | Checkbox / Radio button | 5172:38133   |                                                 1 | (none)                         | Checkbox and Radio button (SECTION)                                                                                                                                                                |
| Components  | Chips / Tags            | 5172:38144   |                                                 1 | (none)                         | Chips and tags (SECTION)                                                                                                                                                                           |
| Components  | Cursor                  | 5172:38151   |                                                 1 | TEXT×2                         | Cursors (SECTION)                                                                                                                                                                                  |
| Components  | Data table              | 5194:45461   |                                                 1 | TEXT×1                         | Table (SECTION)                                                                                                                                                                                    |
| Components  | Dialogs                 | 5175:37036   |                                                 1 | (none)                         | Dialogs (SECTION)                                                                                                                                                                                  |
| Components  | Divider                 | 5182:37137   |                                                 1 | (none)                         | Dividers (SECTION)                                                                                                                                                                                 |
| Components  | Icon                    | 5193:37078   |                                                 1 | (none)                         | Icons (SECTION)                                                                                                                                                                                    |
| Components  | Illustrations           | 5246:38377   |                                                 1 | (none)                         | Storage illustrations (SECTION)                                                                                                                                                                    |
| Components  | Input                   | 5193:38949   |                                                 3 | (none)                         | Text fields, Search and Input (SECTION), Search (SECTION), Input large list (SECTION)                                                                                                              |
| Components  | Large components        | 5193:39157   |                                                 1 | (none)                         | Large components (SECTION)                                                                                                                                                                         |
| Components  | Menus                   | 5193:45251   |                                                 1 | (none)                         | Menus (SECTION)                                                                                                                                                                                    |
| Components  | Overlay                 | 5193:45258   |                                                 1 | (none)                         | Overlay (SECTION)                                                                                                                                                                                  |
| Components  | Progress indicatiors    | 5193:45265   |                                                 1 | (none)                         | Progress indicatiors (SECTION)                                                                                                                                                                     |
| Components  | Slider                  | 5194:45447   |                                                 1 | (none)                         | Slider (SECTION)                                                                                                                                                                                   |
| Components  | Snackbar                | 5194:45439   |                                                 1 | (none)                         | Snackbar and banners (SECTION)                                                                                                                                                                     |
| Components  | Switch                  | 5194:45454   |                                                 1 | (none)                         | Switch (SECTION)                                                                                                                                                                                   |
| Components  | Tabs                    | 5194:45468   |                                                 1 | (none)                         | Tabs (SECTION)                                                                                                                                                                                     |
| Components  | Tool rail               | 5194:45487   |                                                 1 | (none)                         | Tool rail (SECTION)                                                                                                                                                                                |
| Components  | Tooltip                 | 5194:45501   |                                                 1 | (none)                         | Tool tip (SECTION)                                                                                                                                                                                 |
| Components  | Tree view               | 5200:798     |                                                 1 | (none)                         | Lists (SECTION)                                                                                                                                                                                    |
| Components  | UI shell header         | 5236:21014   |                                                 1 | (none)                         | Top bars (COMPONENT_SET)                                                                                                                                                                           |
| Components  | UI shell right panel    | 5236:21016   |                                                 1 | (none)                         | ❖ UI shell right panel (SECTION)                                                                                                                                                                   |
