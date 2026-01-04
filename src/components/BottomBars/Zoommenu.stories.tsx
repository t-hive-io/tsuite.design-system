import type { Meta, StoryObj } from '@storybook/react';
import Statedefault10816486 from '../../assets/icons/Statedefault--1081-6486.svg?react';

const Zoommenu = () => {
  return <Statedefault10816486 />;
};

const meta = {
  title: 'Components/Bottom Bars/Zoom menu',
  component: Zoommenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5168:44729',
      componentId: '1081:6485',
      figmaComponent: 'Zoom menu',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Default'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Default',
  },
} satisfies Meta<typeof Zoommenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateDefault: Story = {
  args: {
    State: 'Default',
  },
};
