import type { Meta, StoryObj } from '@storybook/react';
import { Arrowdropdowncustomized } from './Arrowdropdowncustomized';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Arrowdropdowncustomized',
  component: Arrowdropdowncustomized,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['arrow_drop_down_customized']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Arrowdropdowncustomized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'arrow_drop_down_customized',
  },
};
