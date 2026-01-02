import type { Meta, StoryObj } from '@storybook/react';

const Dialog = ({ title, width = '400px' }: { title: string; width?: string }) => (
  <div style={{ 
    width,
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    fontFamily: 'system-ui'
  }}>
    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e0e0e0' }}>
      <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h3>
    </div>
    <div style={{ padding: '1.5rem' }}>
      <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>
        Dialog content goes here. This is a placeholder for the actual dialog content.
      </p>
    </div>
    <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e0e0e0', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
      <button style={{ padding: '0.5rem 1rem', border: '1px solid #e0e0e0', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer' }}>
        Cancel
      </button>
      <button style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', backgroundColor: '#1976d2', color: 'white', cursor: 'pointer' }}>
        Confirm
      </button>
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Dialogs',
  component: Dialog,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5175:37036',
      components: 4,
      totalVariants: 10,
    },
  },
  tags: ['autodocs'],  argTypes: {
    title: {
      control: 'text',
      description: 'Dialog title',
    },
    width: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Dialog width',
    },
  },} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderProfileModal: Story = { 
  render: () => <Dialog title="Order Profile" width="600px" />,
  name: 'Order Profile Modal'
};

export const HelpDialog: Story = { 
  render: () => <Dialog title="Help" width="450px" />,
  name: 'Help Dialog'
};

export const SimulationDialog: Story = { 
  render: () => <Dialog title="Simulation Settings" width="450px" />,
  name: 'Simulation Dialog'
};

export const WidthDialog: Story = { 
  render: () => <Dialog title="Set Width" width="350px" />,
  name: 'Width Dialog'
};
