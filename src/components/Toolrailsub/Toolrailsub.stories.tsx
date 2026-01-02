import type { Meta, StoryObj } from '@storybook/react';
import { Toolrailsub } from './Toolrailsub';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Toolrailsub',
  component: Toolrailsub,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Tool rail sub']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toolrailsub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tool rail sub',
  },
};
