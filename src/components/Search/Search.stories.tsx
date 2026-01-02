import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Search']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Search',
  },
};
