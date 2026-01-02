import type { Meta, StoryObj } from '@storybook/react';
import { Importcontacts } from './Importcontacts';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Importcontacts',
  component: Importcontacts,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['import_contacts']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Importcontacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'import_contacts',
  },
};
