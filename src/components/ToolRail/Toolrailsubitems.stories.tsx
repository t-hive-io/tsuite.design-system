import type { Meta, StoryObj } from '@storybook/react';
import Stateactive10816468 from '../../assets/icons/Stateactive--1081-6468.svg?react';
import Statedefault10816458 from '../../assets/icons/Statedefault--1081-6458.svg?react';
import Statehover10816463 from '../../assets/icons/Statehover--1081-6463.svg?react';
import Statehoverwithexpandarrow3924109166 from '../../assets/icons/Statehoverwithexpandarrow--3924-109166.svg?react';

const Toolrailsubitems = (
  {
    State,
  }: {
    State?: 'Default' | 'Active' | 'Hover' | 'Hover with expand arrow';
  } = {
    State: 'Default',
  }
) => {
  if (State === 'Default') return <Statedefault10816458 />;
  if (State === 'Active') return <Stateactive10816468 />;
  if (State === 'Hover') return <Statehover10816463 />;
  if (State === 'Hover with expand arrow')
    return <Statehoverwithexpandarrow3924109166 />;
  return <Stateactive10816468 />;
};

const meta = {
  title: 'Components/❖ Tool rail/Tool rail /Tool rail / sub items',
  component: Toolrailsubitems,
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
      componentId: '1081:6457',
      figmaComponent: '❖ Tool rail',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1125-8913',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Active', 'Hover', 'Hover with expand arrow'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Default',
  },
} satisfies Meta<typeof Toolrailsubitems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateDefault: Story = {
  args: {
    State: 'Default',
  },
};

export const StateActive: Story = {
  args: {
    State: 'Active',
  },
};

export const StateHover: Story = {
  args: {
    State: 'Hover',
  },
};

export const StateHoverwithexpandarrow: Story = {
  args: {
    State: 'Hover with expand arrow',
  },
};
