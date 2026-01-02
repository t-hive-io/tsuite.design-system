import type { Meta, StoryObj } from '@storybook/react';
import { Scalesection } from './Scalesection';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Scalesection',
  component: Scalesection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Scale section']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Scalesection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Scale section',
  },
};
