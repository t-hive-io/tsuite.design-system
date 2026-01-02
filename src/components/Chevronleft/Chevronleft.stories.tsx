import type { Meta, StoryObj } from '@storybook/react';
import { Chevronleft } from './Chevronleft';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Chevronleft',
  component: Chevronleft,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['chevron_left']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chevronleft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'chevron_left',
  },
};
