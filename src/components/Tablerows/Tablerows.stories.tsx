import type { Meta, StoryObj } from '@storybook/react';
import { Tablerows } from './Tablerows';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Tablerows',
  component: Tablerows,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Table rows']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tablerows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Table rows',
  },
};
