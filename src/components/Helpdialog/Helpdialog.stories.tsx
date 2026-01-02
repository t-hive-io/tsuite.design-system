import type { Meta, StoryObj } from '@storybook/react';
import { Helpdialog } from './Helpdialog';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Helpdialog',
  component: Helpdialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Help dialog']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Helpdialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Help dialog',
  },
};
