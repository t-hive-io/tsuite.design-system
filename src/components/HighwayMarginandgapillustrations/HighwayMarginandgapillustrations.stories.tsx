import type { Meta, StoryObj } from '@storybook/react';
import { HighwayMarginandgapillustrations } from './HighwayMarginandgapillustrations';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/HighwayMarginandgapillustrations',
  component: HighwayMarginandgapillustrations,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Highway: Margin and gap illustrations']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HighwayMarginandgapillustrations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Highway: Margin and gap illustrations',
  },
};
