import type { Meta, StoryObj } from '@storybook/react';
import { Personadd } from './Personadd';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Personadd',
  component: Personadd,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['person_add']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Personadd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'person_add',
  },
};
