import type { Meta, StoryObj } from '@storybook/react';
import { Eventnote } from './Eventnote';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Eventnote',
  component: Eventnote,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['event_note']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Eventnote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'event_note',
  },
};
