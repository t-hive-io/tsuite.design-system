import type { Meta, StoryObj } from '@storybook/react';
import { Bars } from './Bars';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Bars',
  component: Bars,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Bars']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Bars',
  },
};
