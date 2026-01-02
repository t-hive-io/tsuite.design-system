import type { Meta, StoryObj } from '@storybook/react';
import { LargeScreenshot } from './LargeScreenshot';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/LargeScreenshot',
  component: LargeScreenshot,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Large Screenshot']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LargeScreenshot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Large Screenshot',
  },
};
