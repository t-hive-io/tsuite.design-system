import type { Meta, StoryObj } from '@storybook/react';
import { Helpcenter } from './Helpcenter';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Helpcenter',
  component: Helpcenter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['help_center']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Helpcenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'help_center',
  },
};
