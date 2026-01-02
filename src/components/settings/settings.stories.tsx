import type { Meta, StoryObj } from '@storybook/react';
import { settings } from './settings';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/settings',
  component: settings,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['settings']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof settings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'settings',
  },
};
