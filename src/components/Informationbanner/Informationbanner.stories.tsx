import type { Meta, StoryObj } from '@storybook/react';
import { Informationbanner } from './Informationbanner';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Informationbanner',
  component: Informationbanner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Information banner']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Informationbanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Information banner',
  },
};
