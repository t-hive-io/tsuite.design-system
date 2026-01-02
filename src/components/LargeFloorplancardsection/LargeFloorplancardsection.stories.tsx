import type { Meta, StoryObj } from '@storybook/react';
import { LargeFloorplancardsection } from './LargeFloorplancardsection';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/LargeFloorplancardsection',
  component: LargeFloorplancardsection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Large Floorplan card section']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LargeFloorplancardsection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Large Floorplan card section',
  },
};
