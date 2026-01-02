import type { Meta, StoryObj } from '@storybook/react';
import { Morehoriz } from './Morehoriz';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Morehoriz',
  component: Morehoriz,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['more_horiz']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Morehoriz>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'more_horiz',
  },
};
