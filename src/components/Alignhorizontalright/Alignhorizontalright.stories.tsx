import type { Meta, StoryObj } from '@storybook/react';
import { Alignhorizontalright } from './Alignhorizontalright';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Alignhorizontalright',
  component: Alignhorizontalright,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['align_horizontal_right']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alignhorizontalright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'align_horizontal_right',
  },
};
