import type { Meta, StoryObj } from '@storybook/react';
import { Viewcompact } from './Viewcompact';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Viewcompact',
  component: Viewcompact,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['view_compact']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Viewcompact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'view_compact',
  },
};
