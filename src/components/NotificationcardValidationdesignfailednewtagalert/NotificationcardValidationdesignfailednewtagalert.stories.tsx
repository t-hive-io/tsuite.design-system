import type { Meta, StoryObj } from '@storybook/react';
import { NotificationcardValidationdesignfailednewtagalert } from './NotificationcardValidationdesignfailednewtagalert';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/NotificationcardValidationdesignfailednewtagalert',
  component: NotificationcardValidationdesignfailednewtagalert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Notification card: Validation design failed - new tag alert']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationcardValidationdesignfailednewtagalert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Notification card: Validation design failed - new tag alert',
  },
};
