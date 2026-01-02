import type { Meta, StoryObj } from '@storybook/react';
import { DeleteIcon } from './DeleteIcon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/DeleteIcon',
  component: DeleteIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['delete']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeleteIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'delete',
  },
};
