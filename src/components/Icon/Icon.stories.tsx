import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1106:6756',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: 'select',
      options: ['enabled', 'disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Small: Story = {
  args: {
    name: 'check',
    size: 'small',
    state: 'enabled',
  },
};

export const Medium: Story = {
  args: {
    name: 'check',
    size: 'medium',
    state: 'enabled',
  },
};

export const Large: Story = {
  args: {
    name: 'check',
    size: 'large',
    state: 'enabled',
  },
};

export const Disabled: Story = {
  args: {
    name: 'check',
    size: 'medium',
    state: 'disabled',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="check" size="small" />
      <Icon name="check" size="medium" />
      <Icon name="check" size="large" />
    </div>
  ),
};
