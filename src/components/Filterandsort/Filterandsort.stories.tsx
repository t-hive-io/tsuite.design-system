import type { Meta, StoryObj } from '@storybook/react';
import { Filterandsort } from './Filterandsort';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Filterandsort',
  component: Filterandsort,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Filter and sort']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filterandsort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Filter and sort',
  },
};
