import type { Meta, StoryObj } from '@storybook/react';
import { heat } from './heat';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/heat',
  component: heat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['heat']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof heat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'heat',
  },
};
