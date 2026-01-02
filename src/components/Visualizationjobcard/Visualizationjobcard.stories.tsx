import type { Meta, StoryObj } from '@storybook/react';
import { Visualizationjobcard } from './Visualizationjobcard';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Visualizationjobcard',
  component: Visualizationjobcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Visualization, job card']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Visualizationjobcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Visualization, job card',
  },
};
