import type { Meta, StoryObj } from '@storybook/react';
import { Manualoperation } from './Manualoperation';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Manualoperation',
  component: Manualoperation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Manual operation']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Manualoperation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Manual operation',
  },
};
