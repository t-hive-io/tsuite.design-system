import type { Meta, StoryObj } from '@storybook/react';
import Position115549409 from '../../assets/icons/Position1--1554-9409.svg?react';
import Position215549412 from '../../assets/icons/Position2--1554-9412.svg?react';
import Position315549415 from '../../assets/icons/Position3--1554-9415.svg?react';
import Position415549418 from '../../assets/icons/Position4--1554-9418.svg?react';

const LoadingSpinner3 = (
  {
    Position,
  }: {
    Position?: '1' | '2' | '3' | '4';
  } = {
    Position: '1',
  }
) => {
  if (Position === '1') return <Position115549409 />;
  if (Position === '2') return <Position215549412 />;
  if (Position === '3') return <Position315549415 />;
  if (Position === '4') return <Position415549418 />;
  return <Position115549409 />;
};

const meta = {
  title: 'Components/❖ Progress indicatiors/Loading Spinner 3',
  component: LoadingSpinner3,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:45265',
      componentId: '1554:9408',
      figmaComponent: '❖ Progress indicatiors',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1554-9408',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Position: {
      control: 'select',
      options: ['1', '2', '3', '4'],
      description: 'Animation frame position (1-4)',
    },
  },
  args: {
    Position: '1',
  },
} satisfies Meta<typeof LoadingSpinner3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Frame1: Story = {
  args: { Position: '1' },
};

export const Frame2: Story = {
  args: { Position: '2' },
};

export const Frame3: Story = {
  args: { Position: '3' },
};

export const Frame4: Story = {
  args: { Position: '4' },
};
