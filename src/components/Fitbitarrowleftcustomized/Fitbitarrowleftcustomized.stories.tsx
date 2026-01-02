import type { Meta, StoryObj } from '@storybook/react';
import { Fitbitarrowleftcustomized } from './Fitbitarrowleftcustomized';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Fitbitarrowleftcustomized',
  component: Fitbitarrowleftcustomized,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['fitbit_arrow_left_customized']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fitbitarrowleftcustomized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'fitbit_arrow_left_customized',
  },
};
