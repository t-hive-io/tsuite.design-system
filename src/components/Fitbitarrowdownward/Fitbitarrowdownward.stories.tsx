import type { Meta, StoryObj } from '@storybook/react';
import { Fitbitarrowdownward } from './Fitbitarrowdownward';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Fitbitarrowdownward',
  component: Fitbitarrowdownward,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['fitbit_arrow_downward']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fitbitarrowdownward>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'fitbit_arrow_downward',
  },
};
