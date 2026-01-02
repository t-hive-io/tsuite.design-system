import type { Meta, StoryObj } from '@storybook/react';
import { translate } from './translate';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/translate',
  component: translate,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['translate']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof translate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'translate',
  },
};
