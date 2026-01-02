import type { Meta, StoryObj } from '@storybook/react';
import { Alignverticalbottom } from './Alignverticalbottom';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Alignverticalbottom',
  component: Alignverticalbottom,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['align_vertical_bottom']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alignverticalbottom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'align_vertical_bottom',
  },
};
