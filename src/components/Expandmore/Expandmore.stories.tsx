import type { Meta, StoryObj } from '@storybook/react';
import { Expandmore } from './Expandmore';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Expandmore',
  component: Expandmore,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['expand_more']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Expandmore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'expand_more',
  },
};
