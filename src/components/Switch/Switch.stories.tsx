import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
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
        component: `Interactive toggle switch for on/off states.

## Usage
\`\`\`tsx
import { Switch } from './components/Switch';

const [checked, setChecked] = useState(false);

<Switch 
  checked={checked} 
  onChange={setChecked}
  label="Enable notifications"
/>
\`\`\`

## Features
- Fully controlled component
- Accessible keyboard navigation
- Optional labels and disabled state

Try toggling the switch below - onChange events are logged in the **Actions** panel.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'onChange',
      description: 'Change handler (logged in Actions panel)',
    },
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

const InteractiveTemplate: Story = {
  render: (args: any) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <Switch
        {...args}
        checked={checked as boolean}
        onChange={(nextChecked: boolean) => {
          args.onChange?.(nextChecked);
          updateArgs({ checked: nextChecked });
        }}
      />
    );
  },
};

export const Default: Story = {
  ...InteractiveTemplate,
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  ...InteractiveTemplate,
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  ...InteractiveTemplate,
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
  ...InteractiveTemplate,
  args: {
    checked: true,
    size: 'small',
    label: 'Small switch',
  },
};

export const Large: Story = {
  ...InteractiveTemplate,
  args: {
    checked: true,
    size: 'large',
    label: 'Large switch',
  },
};
