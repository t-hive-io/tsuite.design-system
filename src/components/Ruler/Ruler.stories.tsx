import type { Meta, StoryObj } from '@storybook/react';
import { Ruler } from './Ruler';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Ruler',
  component: Ruler,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Ruler']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Ruler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Ruler',
  },
};
