import type { Meta, StoryObj } from '@storybook/react';
import { Titleandsearch } from './Titleandsearch';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Titleandsearch',
  component: Titleandsearch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Title and search']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Titleandsearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Title and search',
  },
};
