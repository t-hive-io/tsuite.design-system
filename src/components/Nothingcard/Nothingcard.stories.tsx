import type { Meta, StoryObj } from '@storybook/react';
import { Nothingcard } from './Nothingcard';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Nothingcard',
  component: Nothingcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Nothing card']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Nothingcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Nothing card',
  },
};
