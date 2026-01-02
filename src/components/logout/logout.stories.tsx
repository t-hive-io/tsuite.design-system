import type { Meta, StoryObj } from '@storybook/react';
import { logout } from './logout';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/logout',
  component: logout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['logout']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof logout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'logout',
  },
};
