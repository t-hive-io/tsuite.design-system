import type { Meta, StoryObj } from '@storybook/react';
import Stateenabledtypeicontext16888237 from '../../assets/icons/Stateenabledtypeicontext--1688-8237.svg?react';
import Statefilledtypeicontext17288538 from '../../assets/icons/Statefilledtypeicontext--1728-8538.svg?react';
import Statefocusedtypeicontext17288537 from '../../assets/icons/Statefocusedtypeicontext--1728-8537.svg?react';
import Statehoveredtypeicontext5306206922 from '../../assets/icons/Statehoveredtypeicontext--5306-206922.svg?react';

const InputSearch = (
  {
    State,
    Type,
  }: {
    State?: 'Enabled' | 'Focused' | 'Hovered' | 'Filled';
    Type?: 'Icon + text';
  } = {
    State: 'Enabled',
    Type: 'Icon + text',
  }
) => {
  // Type only has one option, so we check State + Type combinations
  if (State === 'Enabled' && Type === 'Icon + text')
    return <Stateenabledtypeicontext16888237 />;
  if (State === 'Focused' && Type === 'Icon + text')
    return <Statefocusedtypeicontext17288537 />;
  if (State === 'Hovered' && Type === 'Icon + text')
    return <Statehoveredtypeicontext5306206922 />;
  if (State === 'Filled' && Type === 'Icon + text')
    return <Statefilledtypeicontext17288538 />;

  // Default fallback
  return <Stateenabledtypeicontext16888237 />;
};

const meta = {
  title: 'Components/Input/Input – Search',
  component: InputSearch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:38949',
      componentId: '1728:8539',
      figmaComponent: 'Input – Search',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Enabled', 'Focused', 'Hovered', 'Filled'],
      description: 'Matches Figma "State" property',
    },
    Type: {
      control: 'select',
      options: ['Icon + text'],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    State: 'Enabled',
    Type: 'Icon + text',
  },
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateEnabled: Story = {
  args: {
    State: 'Enabled',
  },
};

export const StateFocused: Story = {
  args: {
    State: 'Focused',
  },
};

export const StateHovered: Story = {
  args: {
    State: 'Hovered',
  },
};

export const StateFilled: Story = {
  args: {
    State: 'Filled',
  },
};

export const TypeIcontext: Story = {
  args: {
    Type: 'Icon + text',
  },
};
