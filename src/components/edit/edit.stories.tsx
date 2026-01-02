import type { Meta, StoryObj } from '@storybook/react';
import { edit } from './edit';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/edit',
  component: edit,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['edit']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof edit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'edit',
  },
};
