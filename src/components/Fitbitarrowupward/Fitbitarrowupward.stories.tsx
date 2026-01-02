import type { Meta, StoryObj } from '@storybook/react';
import { Fitbitarrowupward } from './Fitbitarrowupward';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Fitbitarrowupward',
  component: Fitbitarrowupward,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['fitbit_arrow_upward']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fitbitarrowupward>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'fitbit_arrow_upward',
  },
};
