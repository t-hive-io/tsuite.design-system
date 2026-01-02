import type { Meta, StoryObj } from '@storybook/react';
import { AccordionRightbarTitle } from './AccordionRightbarTitle';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/AccordionRightbarTitle',
  component: AccordionRightbarTitle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Accordion: Right bar - Title']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionRightbarTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Accordion: Right bar - Title',
  },
};
