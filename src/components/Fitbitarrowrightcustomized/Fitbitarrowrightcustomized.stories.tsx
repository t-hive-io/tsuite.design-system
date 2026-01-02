import type { Meta, StoryObj } from '@storybook/react';
import { Fitbitarrowrightcustomized } from './Fitbitarrowrightcustomized';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Fitbitarrowrightcustomized',
  component: Fitbitarrowrightcustomized,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['fitbit_arrow_right_customized']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fitbitarrowrightcustomized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'fitbit_arrow_right_customized',
  },
};
