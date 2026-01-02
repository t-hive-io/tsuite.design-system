import type { Meta, StoryObj } from '@storybook/react';
import { NotificationError } from './NotificationError';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/NotificationError',
  component: NotificationError,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Notification: Error']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Notification: Error',
  },
};
