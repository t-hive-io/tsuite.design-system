import type { Meta, StoryObj } from '@storybook/react';
import { AreaMarginandgapillustrations } from './AreaMarginandgapillustrations';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/AreaMarginandgapillustrations',
  component: AreaMarginandgapillustrations,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Area: Margin and gap illustrations']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AreaMarginandgapillustrations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Area: Margin and gap illustrations',
  },
};
