import type { Meta, StoryObj } from '@storybook/react';
import { notifications } from './notifications';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/notifications',
  component: notifications,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['notifications']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'notifications',
  },
};
