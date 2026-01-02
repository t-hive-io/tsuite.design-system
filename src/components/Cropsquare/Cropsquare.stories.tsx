import type { Meta, StoryObj } from '@storybook/react';
import { Cropsquare } from './Cropsquare';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Cropsquare',
  component: Cropsquare,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['crop_square']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cropsquare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'crop_square',
  },
};
