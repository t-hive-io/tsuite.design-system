import type { Meta, StoryObj } from '@storybook/react';
import { Arrowdropup } from './Arrowdropup';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Arrowdropup',
  component: Arrowdropup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['arrow_drop_up']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Arrowdropup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'arrow_drop_up',
  },
};
