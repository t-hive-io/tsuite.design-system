import type { Meta, StoryObj } from '@storybook/react';
import { NotificationSuccess } from './NotificationSuccess';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/NotificationSuccess',
  component: NotificationSuccess,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Notification: Success']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Notification: Success',
  },
};
