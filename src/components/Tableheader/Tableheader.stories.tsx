import type { Meta, StoryObj } from '@storybook/react';
import { Tableheader } from './Tableheader';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Tableheader',
  component: Tableheader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Table header']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tableheader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Table header',
  },
};
