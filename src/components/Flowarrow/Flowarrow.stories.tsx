import type { Meta, StoryObj } from '@storybook/react';
import { Flowarrow } from './Flowarrow';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Flowarrow',
  component: Flowarrow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Flow arrow']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flowarrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Flow arrow',
  },
};
