import type { Meta, StoryObj } from '@storybook/react';
import Statedefault12178498 from '../../assets/icons/Statedefault--1217-8498.svg?react';
import Statedisabled15359375 from '../../assets/icons/Statedisabled--1535-9375.svg?react';

const Inputtext = (
  {
    State,
  }: {
    Text41120?: boolean;
    State?: 'Default' | 'disabled';
  } = {
    Text41120: false,
    State: 'Default',
  }
) => {
  // State combinations (Text41120 not used in variants)
  if (State === 'Default') return <Statedefault12178498 />;
  if (State === 'disabled') return <Statedisabled15359375 />;

  // Default fallback
  return <Statedefault12178498 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/input text',
  component: Inputtext,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '1535:9374',
      figmaComponent: 'input text',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1535-9374',
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

export const Default: Story = {};

export const DefaultState: Story = {
  args: {
    State: 'Default',
  },
};

export const DisabledState: Story = {
  args: {
    State: 'disabled',
  },
};
