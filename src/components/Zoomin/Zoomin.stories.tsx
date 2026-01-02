import type { Meta, StoryObj } from '@storybook/react';
import { Zoomin } from './Zoomin';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Zoomin',
  component: Zoomin,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['zoom_in']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Zoomin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'zoom_in',
  },
};
