import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Input – Text']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Input – Text',
  },
};
