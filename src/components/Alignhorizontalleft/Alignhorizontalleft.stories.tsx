import type { Meta, StoryObj } from '@storybook/react';
import { Alignhorizontalleft } from './Alignhorizontalleft';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Alignhorizontalleft',
  component: Alignhorizontalleft,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['align_horizontal_left']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alignhorizontalleft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'align_horizontal_left',
  },
};
