import type { Meta, StoryObj } from '@storybook/react';
import { Listsection } from './Listsection';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Listsection',
  component: Listsection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['List section']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Listsection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'List section',
  },
};
