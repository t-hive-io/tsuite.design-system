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
    name: {
      control: 'text',
      description: 'Icon name (e.g., forklift, pallet-image--epal1, cdi)',
    },
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
    name: 'forklift',
    size: 'small',
    state: 'enabled',
  },
};

export const Medium: Story = {
  args: {
    name: 'forklift',
    size: 'medium',
    state: 'enabled',
  },
};

export const Large: Story = {
  args: {
    name: 'forklift',
    size: 'large',
    state: 'enabled',
  },
};

export const Disabled: Story = {
  args: {
    name: 'forklift',
    size: 'medium',
    state: 'disabled',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="forklift" size="small" />
      <Icon name="forklift" size="medium" />
      <Icon name="forklift" size="large" />
    </div>
  ),
};

export const IconGallery: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
      gap: '16px',
      padding: '16px'
    }}>
      {['forklift', 'charm', 'cdi', 'cb18', 'pallet-image--epal1', 'pallet-image--epal2'].map(iconName => (
        <div key={iconName} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '8px'
        }}>
          <Icon name={iconName} size="medium" />
          <span style={{ fontSize: '10px', textAlign: 'center' }}>{iconName}</span>
        </div>
      ))}
    </div>
  ),
};
