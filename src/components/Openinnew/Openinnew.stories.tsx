import type { Meta, StoryObj } from '@storybook/react';
import { Openinnew } from './Openinnew';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Openinnew',
  component: Openinnew,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['open_in_new']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Openinnew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'open_in_new',
  },
};
