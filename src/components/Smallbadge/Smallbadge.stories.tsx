import type { Meta, StoryObj } from '@storybook/react';
import { Smallbadge } from './Smallbadge';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Smallbadge',
  component: Smallbadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Small badge']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Smallbadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Small badge',
  },
};
