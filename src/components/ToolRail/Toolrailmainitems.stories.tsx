import type { Meta, StoryObj } from '@storybook/react';
import Stateactiveexpandablefalse10816452 from '../../assets/icons/Stateactiveexpandablefalse--1081-6452.svg?react';
import Statedefaultexpandablefalse10816442 from '../../assets/icons/Statedefaultexpandablefalse--1081-6442.svg?react';
import Statehoverexpandablefalse10816447 from '../../assets/icons/Statehoverexpandablefalse--1081-6447.svg?react';

const Toolrailmainitems = ({ State, Expandable }: {
  State?: 'Active' | 'Default' | 'Hover';
  Expandable?: 'False';
} = {
    State: 'Default',
    Expandable: 'False'
  }) => {
  if (State === 'Active') return <Stateactiveexpandablefalse10816452 />;
  if (State === 'Default') return <Statedefaultexpandablefalse10816442 />;
  if (State === 'Hover') return <Statehoverexpandablefalse10816447 />;
  if (Expandable === 'False') return <Stateactiveexpandablefalse10816452 />;
  return <Stateactiveexpandablefalse10816452 />;
};

const meta = {
  title: '3. Component Category Pages/Tool Rail/Tool rail / main items',
  component: Toolrailmainitems,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5194:45487',
      componentId: '1081:6441',
      figmaComponent: 'Tool rail / main items',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Active', 'Default', 'Hover'],
      description: 'Matches Figma "State" property',
    },
    Expandable: {
      control: 'select',
      options: ['False'],
      description: 'Matches Figma "Expandable" property',
    },
  },
  args: {
    State: 'Default',
    Expandable: 'False',
  },
} satisfies Meta<typeof Toolrailmainitems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateActive: Story = { 
  args: {
    State: 'Active',
  },
};

export const StateDefault: Story = { 
  args: {
    State: 'Default',
  },
};

export const StateHover: Story = { 
  args: {
    State: 'Hover',
  },
};

export const ExpandableFalse: Story = { 
  args: {
    Expandable: 'False',
  },
};
