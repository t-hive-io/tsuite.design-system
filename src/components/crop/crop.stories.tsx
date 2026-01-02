import type { Meta, StoryObj } from '@storybook/react';
import { crop } from './crop';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/crop',
  component: crop,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['crop']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof crop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'crop',
  },
};
