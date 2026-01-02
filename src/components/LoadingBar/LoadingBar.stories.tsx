import type { Meta, StoryObj } from '@storybook/react';
import { LoadingBar } from './LoadingBar';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/LoadingBar',
  component: LoadingBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Loading Bar']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Loading Bar',
  },
};
