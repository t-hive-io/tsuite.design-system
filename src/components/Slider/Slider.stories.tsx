import type { Meta, StoryObj } from '@storybook/react';
import State0524636963 from '../../assets/icons/State0--5246-36963.svg?react';
import State1524636964 from '../../assets/icons/State1--5246-36964.svg?react';

const Slider = (
  {
    State,
  }: {
    State?: '0' | '+1';
  } = {
    State: '0',
  }
) => {
  if (State === '0') return <State0524636963 />;
  if (State === '+1') return <State1524636964 />;
  return <State0524636963 />;
};

const meta = {
  title: 'Components/❖ Slider/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45447',
      componentId: '5246:36965',
      figmaComponent: '❖ Slider',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5246-36965',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['0', '+1'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: '0',
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const State_0: Story = {
  args: {
    State: '0',
  },
};

export const State_1: Story = {
  args: {
    State: '+1',
  },
};
