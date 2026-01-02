import type { Meta, StoryObj } from '@storybook/react';
import { nav } from './nav';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/nav',
  component: nav,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['nav']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'nav',
  },
};
