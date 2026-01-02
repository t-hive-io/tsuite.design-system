import type { Meta, StoryObj } from '@storybook/react';
import { Component3drotation } from './Component3drotation';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Component3drotation',
  component: Component3drotation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['3d_rotation']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component3drotation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '3d_rotation',
  },
};
