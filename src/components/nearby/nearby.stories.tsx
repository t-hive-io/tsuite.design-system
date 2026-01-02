import type { Meta, StoryObj } from '@storybook/react';
import { nearby } from './nearby';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/nearby',
  component: nearby,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['nearby']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof nearby>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'nearby',
  },
};
