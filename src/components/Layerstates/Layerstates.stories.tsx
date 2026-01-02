import type { Meta, StoryObj } from '@storybook/react';
import { Layerstates } from './Layerstates';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Layerstates',
  component: Layerstates,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Layer states']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layerstates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Layer states',
  },
};
