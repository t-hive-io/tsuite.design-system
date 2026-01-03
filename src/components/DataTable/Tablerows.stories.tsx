import type { Meta, StoryObj } from '@storybook/react';
import Typerowswithtagselectedselected315810505 from '../../assets/icons/Typerowswithtagselectedselected--3158-10505.svg?react';
import Typerowtagselecteddefault315810488 from '../../assets/icons/Typerowtagselecteddefault--3158-10488.svg?react';
import Typetablerowselectedfalse17598339 from '../../assets/icons/Typetablerowselectedfalse--1759-8339.svg?react';
import Typetablerowselectedtrue17598346 from '../../assets/icons/Typetablerowselectedtrue--1759-8346.svg?react';

const Tablerows = ({ Type, Selected }: {
  Type?: 'Table row' | 'Rows with tag' | 'Row tag';
  Selected?: 'False' | 'True' | 'Default' | 'Selected';
} = {
    Type: 'Table row',
    Selected: 'False'
  }) => {
  if (Type === 'Table row') return <Typetablerowselectedfalse17598339 />;
  if (Type === 'Rows with tag') return <Typerowswithtagselectedselected315810505 />;
  if (Type === 'Row tag') return <Typerowtagselecteddefault315810488 />;
  if (Selected === 'False') return <Typetablerowselectedfalse17598339 />;
  if (Selected === 'True') return <Typetablerowselectedtrue17598346 />;
  if (Selected === 'Default') return <Typerowtagselecteddefault315810488 />;
  if (Selected === 'Selected') return <Typerowswithtagselectedselected315810505 />;
  return <Typerowswithtagselectedselected315810505 />;
};

const meta = {
  title: '3. Component Category Pages/Data Table/Table rows',
  component: Tablerows,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5194:45461',
      componentId: '1759:8338',
      figmaComponent: 'Table rows',
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

export const TypeTablerow: Story = { 
  args: {
    Type: 'Table row',
  },
};

export const TypeRowswithtag: Story = { 
  args: {
    Type: 'Rows with tag',
  },
};

export const TypeRowtag: Story = { 
  args: {
    Type: 'Row tag',
  },
};

export const SelectedFalse: Story = { 
  args: {
    Selected: 'False',
  },
};

export const SelectedTrue: Story = { 
  args: {
    Selected: 'True',
  },
};

export const SelectedDefault: Story = { 
  args: {
    Selected: 'Default',
  },
};
