import type { Meta, StoryObj } from '@storybook/react';
import { Area } from './Area';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Area',
  component: Area,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Area']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Area>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Area',
  },
};
