import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from './InputSearch';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/InputSearch',
  component: InputSearch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Input – Search']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Input – Search',
  },
};
