import type { Meta, StoryObj } from '@storybook/react';
import { Highwaycustomized } from './Highwaycustomized';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Highwaycustomized',
  component: Highwaycustomized,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['highway_customized']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Highwaycustomized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'highway_customized',
  },
};
