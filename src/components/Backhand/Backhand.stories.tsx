import type { Meta, StoryObj } from '@storybook/react';
import { Backhand } from './Backhand';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Backhand',
  component: Backhand,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['back_hand']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Backhand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'back_hand',
  },
};
