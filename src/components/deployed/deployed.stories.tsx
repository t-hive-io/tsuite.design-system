import type { Meta, StoryObj } from '@storybook/react';
import { deployed } from './deployed';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/deployed',
  component: deployed,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['deployed']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof deployed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'deployed',
  },
};
