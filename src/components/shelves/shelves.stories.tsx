import type { Meta, StoryObj } from '@storybook/react';
import { shelves } from './shelves';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/shelves',
  component: shelves,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['shelves']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof shelves>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'shelves',
  },
};
