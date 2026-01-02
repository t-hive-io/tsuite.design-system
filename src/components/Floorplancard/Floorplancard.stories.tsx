import type { Meta, StoryObj } from '@storybook/react';
import { Floorplancard } from './Floorplancard';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Floorplancard',
  component: Floorplancard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Floorplan card']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Floorplancard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Floorplan card',
  },
};
