import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: 'text',
    state: 'enabled',
    placeholder: 'Enter text...',
    label: 'Text Input',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    state: 'enabled',
    placeholder: '0',
    label: 'Number Input',
  },
};

export const IconValue: Story = {
  args: {
    type: 'icon+val',
    state: 'enabled',
    icon: '🔍',
    placeholder: 'Search...',
    label: 'Icon + Value',
  },
};

export const ValueUnit: Story = {
  args: {
    type: 'val+unit',
    state: 'enabled',
    unit: 'px',
    placeholder: '100',
    label: 'Value + Unit',
  },
};

export const ValueIcon: Story = {
  args: {
    type: 'val+icon',
    state: 'enabled',
    icon: '📍',
    placeholder: 'Enter location...',
    label: 'Value + Icon',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    state: 'disabled',
    value: 'Disabled input',
    label: 'Disabled State',
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    state: 'error',
    value: 'Invalid input',
    label: 'Error State',
  },
};
