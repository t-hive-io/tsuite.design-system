import type { Meta, StoryObj } from '@storybook/react';
import { cancel } from './cancel';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/cancel',
  component: cancel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['cancel']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof cancel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'cancel',
  },
};
