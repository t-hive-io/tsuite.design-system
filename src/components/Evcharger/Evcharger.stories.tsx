import type { Meta, StoryObj } from '@storybook/react';
import { Evcharger } from './Evcharger';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Evcharger',
  component: Evcharger,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['ev_charger']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Evcharger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ev_charger',
  },
};
