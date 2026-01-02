import type { Meta, StoryObj } from '@storybook/react';
import { Cardloadcarriertypes } from './Cardloadcarriertypes';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Cardloadcarriertypes',
  component: Cardloadcarriertypes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Card load carrier types']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cardloadcarriertypes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card load carrier types',
  },
};
