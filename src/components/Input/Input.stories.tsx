import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: '3. Component Category Pages/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5180:45691',
      components: 2,
      totalVariants: 46,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'Disabled value',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithIconLeft: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
      </svg>
    ),
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    iconRight: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
        <path d="M8 0C4.146 0 .986 2.175 0 5.227c.986 3.052 4.146 5.227 8 5.227s7.014-2.175 8-5.227C15.014 2.175 11.854 0 8 0zM1.173 5.227C2.072 2.866 4.85 1 8 1s5.928 1.866 6.827 4.227C13.928 7.588 11.15 9.454 8 9.454s-5.928-1.866-6.827-4.227z" />
      </svg>
    ),
  },
};

export const AllInputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', width: '400px' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>All Input Types</h3>
      <Input type="text" label="Text Input" placeholder="Enter text" />
      <Input type="email" label="Email Input" placeholder="user@example.com" />
      <Input type="password" label="Password Input" placeholder="Enter password" />
      <Input type="number" label="Number Input" placeholder="123" />
      <Input type="tel" label="Phone Input" placeholder="+1 234 567 8900" />
      <Input type="url" label="URL Input" placeholder="https://example.com" />
      <Input type="search" label="Search Input" placeholder="Search..." />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', width: '400px' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>All Sizes</h3>
      <Input size="small" label="Small" placeholder="Small input" />
      <Input size="medium" label="Medium" placeholder="Medium input" />
      <Input size="large" label="Large" placeholder="Large input" />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
