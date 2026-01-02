import type { Meta, StoryObj } from '@storybook/react';
import { CardTag } from './CardTag';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/CardTag',
  component: CardTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Card Tag']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card Tag',
  },
};
