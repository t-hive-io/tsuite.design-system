import type { Meta, StoryObj } from '@storybook/react';
import { Searchoff } from './Searchoff';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Searchoff',
  component: Searchoff,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['search_off']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Searchoff>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'search_off',
  },
};
