import type { Meta, StoryObj } from '@storybook/react';
import { bolt } from './bolt';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/bolt',
  component: bolt,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['bolt']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof bolt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'bolt',
  },
};
