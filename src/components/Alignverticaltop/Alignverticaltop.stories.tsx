import type { Meta, StoryObj } from '@storybook/react';
import { Alignverticaltop } from './Alignverticaltop';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Alignverticaltop',
  component: Alignverticaltop,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['align_vertical_top']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alignverticaltop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'align_vertical_top',
  },
};
