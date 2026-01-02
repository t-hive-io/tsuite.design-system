import type { Meta, StoryObj } from '@storybook/react';
import { Referenceimage } from './Referenceimage';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Referenceimage',
  component: Referenceimage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Reference image']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Referenceimage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Reference image',
  },
};
