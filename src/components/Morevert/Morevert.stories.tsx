import type { Meta, StoryObj } from '@storybook/react';
import { Morevert } from './Morevert';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Morevert',
  component: Morevert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['more_vert']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Morevert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'more_vert',
  },
};
