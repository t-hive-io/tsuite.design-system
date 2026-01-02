import type { Meta, StoryObj } from '@storybook/react';
import { Expandless } from './Expandless';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Expandless',
  component: Expandless,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['expand_less']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Expandless>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'expand_less',
  },
};
