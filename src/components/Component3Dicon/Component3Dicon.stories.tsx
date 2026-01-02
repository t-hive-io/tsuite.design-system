import type { Meta, StoryObj } from '@storybook/react';
import { Component3Dicon } from './Component3Dicon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Component3Dicon',
  component: Component3Dicon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['3D icon']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component3Dicon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '3D icon',
  },
};
