import type { Meta, StoryObj } from '@storybook/react';
import { Donotdisturbon } from './Donotdisturbon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Donotdisturbon',
  component: Donotdisturbon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['do_not_disturb_on']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Donotdisturbon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'do_not_disturb_on',
  },
};
