import type { Meta, StoryObj } from '@storybook/react';
import { Fulllogovector } from './Fulllogovector';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Fulllogovector',
  component: Fulllogovector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Full-logo-vector']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fulllogovector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Full-logo-vector',
  },
};
