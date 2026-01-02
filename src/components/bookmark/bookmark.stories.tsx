import type { Meta, StoryObj } from '@storybook/react';
import { bookmark } from './bookmark';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/bookmark',
  component: bookmark,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['bookmark']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof bookmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'bookmark',
  },
};
