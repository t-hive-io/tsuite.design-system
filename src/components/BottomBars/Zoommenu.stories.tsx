import type { Meta, StoryObj } from '@storybook/react';
import Statedefault10816486 from '../../assets/icons/Statedefault--1081-6486.svg?react';

const Zoommenu = ({ State }: {
  State?: 'Default';
} = {
    State: 'Default'
  }) => {
  return <Statedefault10816486 />;
};

const meta = {
  title: '3. Component Category Pages/Bottom Bars/Zoom menu',
  component: Zoommenu,
  parameters: {
    layout: 'centered',
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
