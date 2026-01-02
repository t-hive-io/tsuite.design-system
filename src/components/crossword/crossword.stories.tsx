import type { Meta, StoryObj } from '@storybook/react';
import { crossword } from './crossword';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/crossword',
  component: crossword,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['crossword']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof crossword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'crossword',
  },
};
