import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System',
    },
    docs: {
      description: {
        component: 'Toggle switch component for binary choices. Connected to T-Suite Design System in Figma.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is on or off',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the switch',
    },
    label: {
      control: 'text',
      description: 'Optional label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    checked: true,
    label: 'Enable notifications',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled switch',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled & Checked',
  },
};

export const Small: Story = {
  args: {
    checked: true,
    size: 'small',
    label: 'Small switch',
  },
};

export const Large: Story = {
  args: {
    checked: true,
    size: 'large',
    label: 'Large switch',
  },
};
