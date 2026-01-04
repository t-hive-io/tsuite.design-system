import type { Meta, StoryObj } from '@storybook/react';
import Position115549448 from '../../assets/icons/Position1--1554-9448.svg?react';
import Position215549446 from '../../assets/icons/Position2--1554-9446.svg?react';
import Position315549444 from '../../assets/icons/Position3--1554-9444.svg?react';
import Position415549442 from '../../assets/icons/Position4--1554-9442.svg?react';
import Position515549440 from '../../assets/icons/Position5--1554-9440.svg?react';

const LoadingBar = (
  {
    Position,
  }: {
    Position?: '1' | '2' | '3' | '4' | '5';
  } = {
    Position: '1',
  }
) => {
  if (Position === '1') return <Position115549448 />;
  if (Position === '2') return <Position215549446 />;
  if (Position === '3') return <Position315549444 />;
  if (Position === '4') return <Position415549442 />;
  if (Position === '5') return <Position515549440 />;
  return <Position115549448 />;
};

const meta = {
  title: 'Components/Progress Indicators/Loading Bar',
  component: LoadingBar,
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
      componentId: '1554:9439',
      figmaComponent: 'Loading Bar',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Position: {
      control: 'select',
      options: ['1', '2', '3', '4', '5'],
      description: 'Matches Figma "Position" property',
    },
  },
  args: {
    Position: '1',
  },
} satisfies Meta<typeof LoadingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Position_1: Story = {
  args: {
    Position: '1',
  },
};

export const Position_2: Story = {
  args: {
    Position: '2',
  },
};

export const Position_3: Story = {
  args: {
    Position: '3',
  },
};

export const Position_4: Story = {
  args: {
    Position: '4',
  },
};
