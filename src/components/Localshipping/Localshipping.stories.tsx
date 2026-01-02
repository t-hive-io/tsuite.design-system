import type { Meta, StoryObj } from '@storybook/react';
import { Localshipping } from './Localshipping';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Localshipping',
  component: Localshipping,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['local_shipping']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Localshipping>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'local_shipping',
  },
};
