import type { Meta, StoryObj } from '@storybook/react';
import Statedefault12178498 from '../../assets/icons/Statedefault--1217-8498.svg?react';
import Statedisabled15359375 from '../../assets/icons/Statedisabled--1535-9375.svg?react';

const Inputtext = ({ Text41120, State }: {
  Text41120?: boolean;
  State?: 'Default' | 'disabled';
} = {
    Text41120: false,
    State: 'Default'
  }) => {
  if (State === 'Default') return <Statedefault12178498 />;
  if (State === 'disabled') return <Statedisabled15359375 />;
  return <Statedefault12178498 />;
};

const meta = {
  title: '3. Component Category Pages/U I Shell Right Panel/input text',
  component: Inputtext,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5236:21016',
      componentId: '1535:9374',
      figmaComponent: 'input text',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Text41120: {
      control: 'boolean',
      description: 'Matches Figma "Text#4112:0" property',
    },
    State: {
      control: 'select',
      options: ['Default', 'disabled'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    Text41120: false,
    State: 'Default',
  },
} satisfies Meta<typeof Inputtext>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text41120True: Story = { 
  args: {
    Text41120: true,
  },
};

export const Text41120False: Story = { 
  args: {
    Text41120: false,
  },
};

export const StateDefault: Story = { 
  args: {
    State: 'Default',
  },
};

export const Statedisabled: Story = { 
  args: {
    State: 'disabled',
  },
};
