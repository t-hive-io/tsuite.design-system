import type { Meta, StoryObj } from '@storybook/react';

const PropertyPanel = ({ section = 'Setup' }: { section?: string }) => (
  <div style={{ 
    width: '320px',
    backgroundColor: '#fafafa',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontFamily: 'system-ui'
  }}>
    <div style={{ 
      padding: '1rem',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: 'white',
      fontWeight: 600
    }}>
      Property Panel - {section}
    </div>
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>
          Property 1
        </label>
        <input 
          type="text" 
          style={{ 
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #e0e0e0',
            borderRadius: '4px'
          }}
          placeholder="Value"
        />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>
          Property 2
        </label>
        <input 
          type="text" 
          style={{ 
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #e0e0e0',
            borderRadius: '4px'
          }}
          placeholder="Value"
        />
      </div>
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Property panels',
  component: PropertyPanel,
  parameters: {
    layout: 'centered',
    figma: {
      components: 11,
      totalVariants: 154,
      description: 'Property panel components with 32 variants for Setup/Layout/Simulation/3D'
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['Setup', 'Layout', 'Simulation', '3D'],
      description: 'Property panel section',
    },
  },
} satisfies Meta<typeof PropertyPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Setup: Story = { render: () => <PropertyPanel section="Setup" /> };
export const Layout: Story = { render: () => <PropertyPanel section="Layout" /> };
export const Simulation: Story = { render: () => <PropertyPanel section="Simulation" /> };
export const ThreeD: Story = { render: () => <PropertyPanel section="3D" />, name: '3D' };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <PropertyPanel section="Setup" />
      <PropertyPanel section="Layout" />
      <PropertyPanel section="Simulation" />
      <PropertyPanel section="3D" />
    </div>
  ),
  name: 'All Variants',
};
