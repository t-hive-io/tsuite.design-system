import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxoutline } from './Checkboxoutline';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Checkboxoutline',
  component: Checkboxoutline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['check_box_outline']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkboxoutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'check_box_outline',
  },
};
