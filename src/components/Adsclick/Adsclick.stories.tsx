import type { Meta, StoryObj } from '@storybook/react';
import { Adsclick } from './Adsclick';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Adsclick',
  component: Adsclick,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['ads_click']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Adsclick>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ads_click',
  },
};
