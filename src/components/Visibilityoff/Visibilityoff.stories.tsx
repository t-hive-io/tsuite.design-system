import type { Meta, StoryObj } from '@storybook/react';
import { Visibilityoff } from './Visibilityoff';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Visibilityoff',
  component: Visibilityoff,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['visibility_off']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Visibilityoff>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'visibility_off',
  },
};
