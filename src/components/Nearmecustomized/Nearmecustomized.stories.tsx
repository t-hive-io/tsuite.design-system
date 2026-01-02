import type { Meta, StoryObj } from '@storybook/react';
import { Nearmecustomized } from './Nearmecustomized';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Nearmecustomized',
  component: Nearmecustomized,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['near_me_customized']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Nearmecustomized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'near_me_customized',
  },
};
