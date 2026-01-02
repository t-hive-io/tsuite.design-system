import type { Meta, StoryObj } from '@storybook/react';
import { Shuttle } from './Shuttle';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Shuttle',
  component: Shuttle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Shuttle']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Shuttle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Shuttle',
  },
};
