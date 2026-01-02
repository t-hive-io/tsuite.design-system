import type { Meta, StoryObj } from '@storybook/react';
import { Startnewsimulationsection } from './Startnewsimulationsection';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Startnewsimulationsection',
  component: Startnewsimulationsection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Start new simulation section']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Startnewsimulationsection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Start new simulation section',
  },
};
