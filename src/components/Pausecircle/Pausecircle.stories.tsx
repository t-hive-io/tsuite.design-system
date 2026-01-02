import type { Meta, StoryObj } from '@storybook/react';
import { Pausecircle } from './Pausecircle';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Pausecircle',
  component: Pausecircle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['pause_circle']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pausecircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'pause_circle',
  },
};
