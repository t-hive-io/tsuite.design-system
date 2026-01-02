import type { Meta, StoryObj } from '@storybook/react';
import { Indeterminatecheckbox } from './Indeterminatecheckbox';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Indeterminatecheckbox',
  component: Indeterminatecheckbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['indeterminate_check_box']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Indeterminatecheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'indeterminate_check_box',
  },
};
