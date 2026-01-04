import type { Meta, StoryObj } from '@storybook/react';
import Typerowswithtagselectedselected315810505 from '../../assets/icons/Typerowswithtagselectedselected--3158-10505.svg?react';
import Typerowtagselecteddefault315810488 from '../../assets/icons/Typerowtagselecteddefault--3158-10488.svg?react';
import Typetablerowselectedfalse17598339 from '../../assets/icons/Typetablerowselectedfalse--1759-8339.svg?react';
import Typetablerowselectedtrue17598346 from '../../assets/icons/Typetablerowselectedtrue--1759-8346.svg?react';

const Tablerows = (
  {
    Type,
    Selected,
  }: {
    Type?: 'Table row' | 'Rows with tag' | 'Row tag';
    Selected?: 'False' | 'True' | 'Default' | 'Selected';
  } = {
    Type: 'Table row',
    Selected: 'False',
  }
) => {
  // Table row type combinations
  if (Type === 'Table row' && Selected === 'False')
    return <Typetablerowselectedfalse17598339 />;
  if (Type === 'Table row' && Selected === 'True')
    return <Typetablerowselectedtrue17598346 />;

  // Row tag type
  if (Type === 'Row tag' && Selected === 'Default')
    return <Typerowtagselecteddefault315810488 />;

  // Rows with tag type
  if (Type === 'Rows with tag' && Selected === 'Selected')
    return <Typerowswithtagselectedselected315810505 />;

  // Default fallback
  return <Typetablerowselectedfalse17598339 />;
};

const meta = {
  title: 'Components/Data Table/Table rows',
  component: Tablerows,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45461',
      componentId: '1759:8338',
      figmaComponent: 'Table rows',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1759-8338',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: ['Table row', 'Rows with tag', 'Row tag'],
      description: 'Matches Figma "Type" property',
    },
    Selected: {
      control: 'select',
      options: ['False', 'True', 'Default', 'Selected'],
      description: 'Matches Figma "Selected" property',
    },
  },
  args: {
    Type: 'Table row',
    Selected: 'False',
  },
} satisfies Meta<typeof Tablerows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Table row type
export const TableRowUnselected: Story = {
  args: { Type: 'Table row', Selected: 'False' },
};

export const TableRowSelected: Story = {
  args: { Type: 'Table row', Selected: 'True' },
};

// Row tag type
export const RowTag: Story = {
  args: { Type: 'Row tag', Selected: 'Default' },
};

// Rows with tag type
export const RowsWithTag: Story = {
  args: { Type: 'Rows with tag', Selected: 'Selected' },
};
