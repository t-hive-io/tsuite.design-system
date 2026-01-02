import type { Meta, StoryObj } from '@storybook/react';
import { Widthdialogwithaction } from './Widthdialogwithaction';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Widthdialogwithaction',
  component: Widthdialogwithaction,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Width dialog with action']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Widthdialogwithaction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Width dialog with action',
  },
};
