import type { Meta, StoryObj } from '@storybook/react';
import { Verticaldistribute } from './Verticaldistribute';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Verticaldistribute',
  component: Verticaldistribute,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['vertical_distribute']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Verticaldistribute>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'vertical_distribute',
  },
};
