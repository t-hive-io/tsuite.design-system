import type { Meta, StoryObj } from '@storybook/react';
import { Logotypecompleteset } from './Logotypecompleteset';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Logotypecompleteset',
  component: Logotypecompleteset,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Logotype complete set']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logotypecompleteset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Logotype complete set',
  },
};
