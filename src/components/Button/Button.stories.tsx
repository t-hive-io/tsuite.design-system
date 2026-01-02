import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import './Button.css';
import figmaDocs from '../../figma-docs.json';

/**
 * Button component from T-Suite Design System
 * Description automatically synced from Figma
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1428-9176',
    },
    docs: {
      description: {
        component: figmaDocs.Buttons?.description || 'Button component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
      description: 'Click handler (logged in Actions panel)',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outlined', 'link'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    active: {
      control: 'boolean',
      description: 'Active state',
    },
    icon: {
      control: 'boolean',
      description: 'Show icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    icon: true,
    children: 'Button with icon',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Active: Story = {
  args: {
    variant: 'primary',
    children: 'Active Button',
    active: true,
  },
};
