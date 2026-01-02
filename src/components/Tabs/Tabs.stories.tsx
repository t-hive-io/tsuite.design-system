import type { Meta, StoryObj } from '@storybook/react';
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
  },
  tags: ['autodocs'],
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
        <div style={{ padding: '20px' }}>
          {selected === 'profile' && <p>Profile content here</p>}
          {selected === 'settings' && <p>Settings content here</p>}
          {selected === 'notifications' && <p>Notifications content here</p>}
        </div>
      </div>
    );
  },
};
