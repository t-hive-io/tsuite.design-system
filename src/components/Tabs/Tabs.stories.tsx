import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs, Tab } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System',
    },
    docs: {
      description: {
        component: `Tabbed navigation for organizing content into separate views.

## Usage
\`\`\`tsx
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab1', label: 'Overview' },
  { id: 'tab2', label: 'Details' }
];

<Tabs 
  tabs={tabs} 
  activeTab="tab1"
  onChange={(tabId) => console.log('Changed to:', tabId)}
/>
\`\`\`

## Features
- Multiple tab sizes (small, medium, large)
- onChange callback for tab switching
- Keyboard navigation support

Click the tabs below to test switching - events are logged in **Actions** panel.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'onChange',
      description: 'Callback fired when tab changes (logged in Actions panel)',
    },
    defaultValue: {
      control: 'text',
      description: 'Initially selected tab value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tab label="Tab 1" value="tab1" />
      <Tab label="Tab 2" value="tab2" />
      <Tab label="Tab 3" value="tab3" />
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="home">
      <Tab label="Home" value="home" />
      <Tab label="Products" value="products" />
      <Tab label="Services" value="services" />
      <Tab label="About" value="about" />
      <Tab label="Contact" value="contact" />
    </Tabs>
  ),
};

export const WithContent: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('profile');
    return (
      <div>
        <Tabs defaultValue="profile" onChange={setSelected}>
          <Tab label="Profile" value="profile" />
          <Tab label="Settings" value="settings" />
          <Tab label="Notifications" value="notifications" />
        </Tabs>
        <div style={{ padding: '20px', border: '1px solid #e0e0e0', marginTop: '8px', borderRadius: '4px' }}>
          {selected === 'profile' && (
            <div>
              <h3>Profile</h3>
              <p>Manage your profile information and preferences.</p>
            </div>
          )}
          {selected === 'settings' && (
            <div>
              <h3>Settings</h3>
              <p>Configure application settings and options.</p>
            </div>
          )}
          {selected === 'notifications' && (
            <div>
              <h3>Notifications</h3>
              <p>Control your notification preferences.</p>
            </div>
          )}
        </div>
      </div>
    );
  },
};

export const Small: Story = {
  render: () => (
    <Tabs defaultValue="1">
      <Tab label="One" value="1" />
      <Tab label="Two" value="2" />
    </Tabs>
  ),
};
