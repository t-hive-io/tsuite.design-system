import type { Meta, StoryObj } from '@storybook/react';
import Stateactiveexpandablefalse10816452 from '../../assets/icons/Stateactiveexpandablefalse--1081-6452.svg?react';
import Statedefaultexpandablefalse10816442 from '../../assets/icons/Statedefaultexpandablefalse--1081-6442.svg?react';
import Statehoverexpandablefalse10816447 from '../../assets/icons/Statehoverexpandablefalse--1081-6447.svg?react';

const Toolrailmainitems = (
  {
    State,
    Expandable,
  }: {
    State?: 'Active' | 'Default' | 'Hover';
    Expandable?: 'False';
  } = {
    State: 'Default',
    Expandable: 'False',
  }
) => {
  // Expandable=False combinations (only option available)
  if (State === 'Default' && Expandable === 'False')
    return <Statedefaultexpandablefalse10816442 />;
  if (State === 'Hover' && Expandable === 'False')
    return <Statehoverexpandablefalse10816447 />;
  if (State === 'Active' && Expandable === 'False')
    return <Stateactiveexpandablefalse10816452 />;

  // Default fallback
  return <Statedefaultexpandablefalse10816442 />;
};

const meta = {
  title: 'Components/Tool Rail/Tool rail /Tool rail / main items',
  component: Toolrailmainitems,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45487',
      componentId: '1081:6441',
      figmaComponent: 'Tool rail / main items',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1125-8913',
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

export const Default: Story = {};

// Expandable=False combinations (only option available)
export const DefaultState: Story = {
  args: {
    State: 'Default',
    Expandable: 'False',
  },
};

export const HoverState: Story = {
  args: {
    State: 'Hover',
    Expandable: 'False',
  },
};

export const ActiveState: Story = {
  args: {
    State: 'Active',
    Expandable: 'False',
  },
};
