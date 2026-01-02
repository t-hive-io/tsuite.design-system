import type { Meta, StoryObj } from '@storybook/react';
import { Rack } from './Rack';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Rack',
  component: Rack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Rack']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Rack',
  },
};
