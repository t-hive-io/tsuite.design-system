import type { Meta, StoryObj } from '@storybook/react';
import { NotificationFatal } from './NotificationFatal';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/NotificationFatal',
  component: NotificationFatal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Notification: Fatal']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationFatal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Notification: Fatal',
  },
};
