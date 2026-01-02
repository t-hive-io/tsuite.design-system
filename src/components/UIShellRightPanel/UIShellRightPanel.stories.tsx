import type { Meta, StoryObj } from '@storybook/react';

const RightPanel = ({ section = 'Properties' }: { section?: string }) => (
  <div style={{ 
    width: '360px',
    height: '600px',
    backgroundColor: '#fafafa',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ 
      padding: '1rem',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: 'white',
      fontWeight: 600
    }}>
      {section}
    </div>
    <div style={{ flex: 1, padding: '1rem', overflow: 'auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem' }}>Section 1</div>
        <div style={{ padding: '0.75rem', backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
          Content area
        </div>
      </div>
      <div>
        <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem' }}>Section 2</div>
        <div style={{ padding: '0.75rem', backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
          Content area
        </div>
      </div>
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/UI shell right panel',
  component: RightPanel,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:36844',
      components: 16,
      totalVariants: 88,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['Properties', 'Setup', 'Layout', 'Simulation'],
      description: 'Panel section',
    },
  },
} satisfies Meta<typeof RightPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Properties: Story = { render: () => <RightPanel section="Properties" /> };
export const Setup: Story = { render: () => <RightPanel section="Setup" /> };
export const Layout: Story = { render: () => <RightPanel section="Layout" /> };
export const Simulation: Story = { render: () => <RightPanel section="Simulation" /> };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <RightPanel section="Properties" />
      <RightPanel section="Setup" />
      <RightPanel section="Layout" />
      <RightPanel section="Simulation" />
    </div>
  ),
  name: 'All Variants',
};
