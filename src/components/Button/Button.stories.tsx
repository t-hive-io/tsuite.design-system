import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import './Button.css';

/**
 * Button component from T-Suite Design System
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System',
    },
    docs: {
      description: {
        component: 'Primary UI component for user actions. Synced from T-Suite Design System in Figma.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
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

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Button with Icon',
    icon: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};
