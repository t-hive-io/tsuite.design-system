import type { Meta, StoryObj } from '@storybook/react';
import { Package2 } from './Package2';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Package2',
  component: Package2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['package_2']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Package2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'package_2',
  },
};
