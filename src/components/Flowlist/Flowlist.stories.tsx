import type { Meta, StoryObj } from '@storybook/react';
import { Flowlist } from './Flowlist';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Flowlist',
  component: Flowlist,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Flow list']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flowlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Flow list',
  },
};
