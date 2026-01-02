import type { Meta, StoryObj } from '@storybook/react';
import { PropertyTopsectionwithexit } from './PropertyTopsectionwithexit';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/PropertyTopsectionwithexit',
  component: PropertyTopsectionwithexit,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Property: Top section with exit']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PropertyTopsectionwithexit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Property: Top section with exit',
  },
};
