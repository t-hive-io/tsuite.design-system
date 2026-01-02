import type { Meta, StoryObj } from '@storybook/react';
import { Layerlefticon } from './Layerlefticon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Layerlefticon',
  component: Layerlefticon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Layer left icon']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layerlefticon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Layer left icon',
  },
};
