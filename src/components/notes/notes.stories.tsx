import type { Meta, StoryObj } from '@storybook/react';
import { notes } from './notes';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/notes',
  component: notes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['notes']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof notes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'notes',
  },
};
