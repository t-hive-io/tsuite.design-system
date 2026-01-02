import type { Meta, StoryObj } from '@storybook/react';
import { Testmoreicon } from './Testmoreicon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Testmoreicon',
  component: Testmoreicon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['test more icon']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Testmoreicon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'test more icon',
  },
};
