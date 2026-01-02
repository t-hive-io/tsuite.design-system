import type { Meta, StoryObj } from '@storybook/react';
import { Fishbone } from './Fishbone';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Fishbone',
  component: Fishbone,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Fishbone']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fishbone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Fishbone',
  },
};
