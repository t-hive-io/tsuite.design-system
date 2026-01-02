import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
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
    docs: {
      description: {
        component: `Text and number input component with validation states.

## Usage
\`\`\`tsx
import { Input } from './components/Input';

const [value, setValue] = useState('');

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
  label="Username"
/>
\`\`\`

## States
- **default**: Normal input state
- **error**: Shows validation errors
- **disabled**: Non-interactive state
- **readonly**: View-only mode

Type in the input below - all changes are logged in the **Actions** panel.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'onChange',
      description: 'Change handler (logged in Actions panel)',
    },
    value: {
      control: 'text',
      description: 'Input value (updated live when you type)',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
    unit: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'number', 'icon+val', 'val+unit', 'val+icon'],
    },
    state: {
      control: 'select',
      options: ['enabled', 'disabled', 'error', 'focused'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const InteractiveTemplate: Story = {
  render: (args: any) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Input
        {...args}
        value={String(value ?? '')}
        onChange={(nextValue: string) => {
          args.onChange?.(nextValue);
          updateArgs({ value: nextValue });
        }}
      />
    );
  },
};

export const Text: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'enabled',
    value: '',
    placeholder: 'Enter text...',
    label: 'Text Input',
  },
};

export const Number: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'number',
    state: 'enabled',
    value: '',
    placeholder: '0',
    label: 'Number Input',
  },
};

export const IconValue: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'icon+val',
    state: 'enabled',
    value: '',
    icon: '🔍',
    placeholder: 'Search...',
    label: 'Icon + Value',
  },
};

export const ValueUnit: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'val+unit',
    state: 'enabled',
    value: '',
    unit: 'px',
    placeholder: '100',
    label: 'Value + Unit',
  },
};

export const ValueIcon: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'val+icon',
    state: 'enabled',
    value: '',
    icon: '📍',
    placeholder: 'Enter location...',
    label: 'Value + Icon',
  },
};

export const Disabled: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'disabled',
    value: 'Disabled input',
    label: 'Disabled State',
  },
};

export const Error: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'error',
    value: 'Invalid input',
    label: 'Error State',
  },
};

export const Focused: Story = {
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'focused',
    value: 'Focused input',
    label: 'Focused State',
  },
};
