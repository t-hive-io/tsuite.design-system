import type { Meta, StoryObj } from '@storybook/react';
import { Alignverticalcenter } from './Alignverticalcenter';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Alignverticalcenter',
  component: Alignverticalcenter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['align_vertical_center']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alignverticalcenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'align_vertical_center',
  },
};
