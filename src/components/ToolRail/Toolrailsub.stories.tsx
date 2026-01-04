import type { Meta, StoryObj } from '@storybook/react';
import Stateareas10816537 from '../../assets/icons/Stateareas--1081-6537.svg?react';
import Statewallandobstacle10816540 from '../../assets/icons/Statewallandobstacle--1081-6540.svg?react';

const Toolrailsub = (
  {
    State,
  }: {
    State?: 'Areas' | 'Wall and obstacle';
  } = {
    State: 'Wall and obstacle',
  }
) => {
  if (State === 'Areas') return <Stateareas10816537 />;
  if (State === 'Wall and obstacle') return <Statewallandobstacle10816540 />;
  return <Stateareas10816537 />;
};

const meta = {
  title: 'Components/Tool Rail/Tool rail sub',
  component: Toolrailsub,
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
      componentId: '1081:6534',
      figmaComponent: 'Tool rail sub',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Areas', 'Wall and obstacle'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Wall and obstacle',
  },
} satisfies Meta<typeof Toolrailsub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateAreas: Story = {
  args: {
    State: 'Areas',
  },
};

export const StateWallandobstacle: Story = {
  args: {
    State: 'Wall and obstacle',
  },
};
