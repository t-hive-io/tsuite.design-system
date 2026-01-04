# OR Logic Bugs Report

Generated: 2026-01-03T11:46:23.631Z

## Summary

- **Total multi-property components**: 20
- **Components with potential OR logic bugs**: 11
- **Components with proper AND logic**: 9

## Components with OR Logic Bugs (11)

### Layers

- **File**: [`src/components/TreeView/Layers.stories.tsx`](src/components/TreeView/Layers.stories.tsx)
- **Properties**: Selected, \_2ndlevel, Hover, Hide (4 total)
- **If statements**: 8
- **AND operators**: 0
- **Sample conditions**:
  - `Selected === 'False'`
  - `Selected === 'True'`
  - `_2ndlevel === 'True'`
  - `_2ndlevel === 'False'`
  - `Hover === 'True'`

### Road

- **File**: [`src/components/CanvasObjects/Road.stories.tsx`](src/components/CanvasObjects/Road.stories.tsx)
- **Properties**: State, Type, Property3 (3 total)
- **If statements**: 9
- **AND operators**: 0
- **Sample conditions**:
  - `State === 'Area'`
  - `State === 'Highway sugar'`
  - `State === 'Highway large'`
  - `Type === 'Resize'`
  - `Type === 'Default'`

### RightbarExpansionpanel2

- **File**: [`src/components/Accordion/RightbarExpansionpanel2.stories.tsx`](src/components/Accordion/RightbarExpansionpanel2.stories.tsx)
- **Properties**: Instance19040, Property1 (2 total)
- **If statements**: 2
- **AND operators**: 0
- **Sample conditions**:
  - `Property1 === 'True'`
  - `Property1 === 'False'`

### Atomitem

- **File**: [`src/components/Button/Atomitem.stories.tsx`](src/components/Button/Atomitem.stories.tsx)
- **Properties**: Active, Icon (2 total)
- **If statements**: 4
- **AND operators**: 0
- **Sample conditions**:
  - `Active === 'True'`
  - `Active === 'False'`
  - `Icon === 'True'`
  - `Icon === 'False'`

### Layoutobject

- **File**: [`src/components/CanvasObjects/Layoutobject.stories.tsx`](src/components/CanvasObjects/Layoutobject.stories.tsx)
- **Properties**: Horizontal, Forklift (2 total)
- **If statements**: 6
- **AND operators**: 0
- **Sample conditions**:
  - `Horizontal === 'True'`
  - `Horizontal === 'False'`
  - `Forklift === 'Down'`
  - `Forklift === 'Up'`
  - `Forklift === 'Right'`

### Obstacle

- **File**: [`src/components/CanvasObjects/Obstacle.stories.tsx`](src/components/CanvasObjects/Obstacle.stories.tsx)
- **Properties**: State, Type (2 total)
- **If statements**: 4
- **AND operators**: 0
- **Sample conditions**:
  - `State === 'Resize'`
  - `State === 'Default'`
  - `State === 'Flow'`
  - `Type === 'Obstical'`

### Cardvehiclemodels

- **File**: [`src/components/Card/Cardvehiclemodels.stories.tsx`](src/components/Card/Cardvehiclemodels.stories.tsx)
- **Properties**: Hover, Selected (2 total)
- **If statements**: 4
- **AND operators**: 0
- **Sample conditions**:
  - `Hover === 'True'`
  - `Hover === 'False'`
  - `Selected === 'True'`
  - `Selected === 'False'`

### Toolrailmainitems

- **File**: [`src/components/ToolRail/Toolrailmainitems.stories.tsx`](src/components/ToolRail/Toolrailmainitems.stories.tsx)
- **Properties**: State, Expandable (2 total)
- **If statements**: 4
- **AND operators**: 0
- **Sample conditions**:
  - `State === 'Active'`
  - `State === 'Default'`
  - `State === 'Hover'`
  - `Expandable === 'False'`

### Explenationtooltip

- **File**: [`src/components/Tooltip/Explenationtooltip.stories.tsx`](src/components/Tooltip/Explenationtooltip.stories.tsx)
- **Properties**: Arrow, Light (2 total)
- **If statements**: 13
- **AND operators**: 0
- **Sample conditions**:
  - `Arrow === 'Right'`
  - `Arrow === 'Left'`
  - `Arrow === 'Top left'`
  - `Arrow === 'Top right'`
  - `Arrow === 'Top Center shortcutkey'`

### Layerlefticon

- **File**: [`src/components/TreeView/Layerlefticon.stories.tsx`](src/components/TreeView/Layerlefticon.stories.tsx)
- **Properties**: Expanded, Visible (2 total)
- **If statements**: 4
- **AND operators**: 0
- **Sample conditions**:
  - `Expanded === 'True'`
  - `Expanded === 'False'`
  - `Visible === 'True'`
  - `Visible === 'False'`

### Inputtext

- **File**: [`src/components/UIShellRightPanel/inputtext.stories.tsx`](src/components/UIShellRightPanel/inputtext.stories.tsx)
- **Properties**: Text41120, State (2 total)
- **If statements**: 2
- **AND operators**: 0
- **Sample conditions**:
  - `State === 'Default'`
  - `State === 'disabled'`
