import type { Meta, StoryObj } from '@storybook/react';
import { Obstacle } from './Obstacle';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Obstacle',
  component: Obstacle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Obstacle']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Obstacle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Obstacle',
  },
};
