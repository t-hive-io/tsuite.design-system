import type { Meta, StoryObj } from '@storybook/react';
import { Rackillustrations } from './Rackillustrations';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Rackillustrations',
  component: Rackillustrations,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Rack illustrations']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rackillustrations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Rack illustrations',
  },
};
