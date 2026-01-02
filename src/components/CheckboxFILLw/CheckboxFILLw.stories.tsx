import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxFILLw } from './CheckboxFILLw';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/CheckboxFILLw',
  component: CheckboxFILLw,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['check_box_FILL_w']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxFILLw>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'check_box_FILL_w',
  },
};
