import type { Meta, StoryObj } from '@storybook/react';
import { Horizontaldistribute1 } from './Horizontaldistribute1';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Horizontaldistribute1',
  component: Horizontaldistribute1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['horizontal_distribute 1']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Horizontaldistribute1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'horizontal_distribute 1',
  },
};
