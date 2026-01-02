import type { Meta, StoryObj } from '@storybook/react';
import { add } from './add';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/add',
  component: add,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['add']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof add>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'add',
  },
};
