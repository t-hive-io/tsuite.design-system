import type { Meta, StoryObj } from '@storybook/react';
import { Locationon } from './Locationon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Locationon',
  component: Locationon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['location_on']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Locationon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'location_on',
  },
};
