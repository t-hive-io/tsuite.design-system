import type { Meta, StoryObj } from '@storybook/react';
import { Alignhorizontalcenter } from './Alignhorizontalcenter';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Alignhorizontalcenter',
  component: Alignhorizontalcenter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['align_horizontal_center']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alignhorizontalcenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'align_horizontal_center',
  },
};
