import type { Meta, StoryObj } from '@storybook/react';
import { Calendaraddon } from './Calendaraddon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Calendaraddon',
  component: Calendaraddon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['calendar_add_on']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendaraddon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'calendar_add_on',
  },
};
