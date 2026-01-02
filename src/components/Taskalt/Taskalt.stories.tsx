import type { Meta, StoryObj } from '@storybook/react';
import { Taskalt } from './Taskalt';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Taskalt',
  component: Taskalt,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['task_alt']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Taskalt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'task_alt',
  },
};
