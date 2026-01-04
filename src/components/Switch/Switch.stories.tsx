import type { Meta, StoryObj } from '@storybook/react';
import Stateoff18948775 from '../../assets/icons/Stateoff--1894-8775.svg?react';
import Stateon18948777 from '../../assets/icons/Stateon--1894-8777.svg?react';

const Switch = (
  {
    State,
  }: {
    State?: 'off' | 'on';
  } = {
    State: 'off',
  }
) => {
  if (State === 'off') return <Stateoff18948775 />;
  if (State === 'on') return <Stateon18948777 />;
  return <Stateoff18948775 />;
};

const meta = {
  title: 'Components/Switch/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45454',
      componentId: '1894:8776',
      figmaComponent: 'Switch',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['off', 'on'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'off',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stateoff: Story = {
  args: {
    State: 'off',
  },
};

export const Stateon: Story = {
  args: {
    State: 'on',
  },
};
