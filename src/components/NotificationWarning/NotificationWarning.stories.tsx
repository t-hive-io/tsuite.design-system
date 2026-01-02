import type { Meta, StoryObj } from '@storybook/react';
import { NotificationWarning } from './NotificationWarning';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/NotificationWarning',
  component: NotificationWarning,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Notification: Warning']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationWarning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Notification: Warning',
  },
};
