import type { Meta, StoryObj } from '@storybook/react';
import { Orderprofilemodal } from './Orderprofilemodal';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Orderprofilemodal',
  component: Orderprofilemodal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Order profile modal']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Orderprofilemodal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Order profile modal',
  },
};
