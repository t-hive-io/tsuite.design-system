import type { Meta, StoryObj } from '@storybook/react';
import { Component3Dmenu } from './Component3Dmenu';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Component3Dmenu',
  component: Component3Dmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['3D menu']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component3Dmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '3D menu',
  },
};
