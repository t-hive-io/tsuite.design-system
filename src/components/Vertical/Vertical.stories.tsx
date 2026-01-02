import type { Meta, StoryObj } from '@storybook/react';
import { Vertical } from './Vertical';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Vertical',
  component: Vertical,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Vertical']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Vertical>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Vertical',
  },
};
