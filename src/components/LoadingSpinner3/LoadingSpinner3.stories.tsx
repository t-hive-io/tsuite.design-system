import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner3 } from './LoadingSpinner3';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/LoadingSpinner3',
  component: LoadingSpinner3,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Loading Spinner 3']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSpinner3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Loading Spinner 3',
  },
};
