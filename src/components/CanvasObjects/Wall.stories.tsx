import type { Meta, StoryObj } from '@storybook/react';
import Stateactive29211750 from '../../assets/icons/Stateactive--2921-1750.svg?react';
import Statedefault29211741 from '../../assets/icons/Statedefault--2921-1741.svg?react';

const Wall = ({ State }: {
  State?: 'Default' | 'Active';
} = {
    State: 'Default'
  }) => {
  if (State === 'Default') return <Statedefault29211741 />;
  if (State === 'Active') return <Stateactive29211750 />;
  return <Stateactive29211750 />;
};

const meta = {
  title: '3. Component Category Pages/Canvas Objects/Wall',
  component: Wall,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45525',
      componentId: '2921:1675',
      figmaComponent: 'Wall',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Active'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Default',
  },
} satisfies Meta<typeof Wall>;

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
