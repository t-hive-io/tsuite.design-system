import type { Meta, StoryObj } from '@storybook/react';
import { NotificationInformation } from './NotificationInformation';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/NotificationInformation',
  component: NotificationInformation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Notification: Information']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Notification: Information',
  },
};
