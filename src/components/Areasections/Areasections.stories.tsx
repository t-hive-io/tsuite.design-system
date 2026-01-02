import type { Meta, StoryObj } from '@storybook/react';
import { Areasections } from './Areasections';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Areasections',
  component: Areasections,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Area sections']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Areasections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Area sections',
  },
};
