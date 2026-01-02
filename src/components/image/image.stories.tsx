import type { Meta, StoryObj } from '@storybook/react';
import { image } from './image';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/image',
  component: image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['image']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'image',
  },
};
