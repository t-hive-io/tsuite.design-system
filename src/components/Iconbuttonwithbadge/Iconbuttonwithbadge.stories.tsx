import type { Meta, StoryObj } from '@storybook/react';
import { Iconbuttonwithbadge } from './Iconbuttonwithbadge';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Iconbuttonwithbadge',
  component: Iconbuttonwithbadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Icon button with badge']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Iconbuttonwithbadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Icon button with badge',
  },
};
