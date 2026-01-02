import type { Meta, StoryObj } from '@storybook/react';
import { warning } from './warning';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/warning',
  component: warning,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['warning']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof warning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'warning',
  },
};
