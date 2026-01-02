import type { Meta, StoryObj } from '@storybook/react';
import { lock } from './lock';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/lock',
  component: lock,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['lock']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof lock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'lock',
  },
};
