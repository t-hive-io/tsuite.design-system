import type { Meta, StoryObj } from '@storybook/react';
import { Flowhandle } from './Flowhandle';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Flowhandle',
  component: Flowhandle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Flow handle']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flowhandle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Flow handle',
  },
};
