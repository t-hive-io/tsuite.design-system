import type { Meta, StoryObj } from '@storybook/react';
import { Rotate2 } from './Rotate2';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Rotate2',
  component: Rotate2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Rotate2']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rotate2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Rotate2',
  },
};
