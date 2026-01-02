import type { Meta, StoryObj } from '@storybook/react';

const RackIllustration = ({ variant = '1' }: { variant?: string }) => (
  <div style={{ 
    width: '300px',
    height: '150px',
    backgroundColor: '#f5f5f5',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
    <div style={{ fontSize: '2rem' }}>📦</div>
    <div style={{ fontSize: '0.875rem', color: '#666' }}>Rack Illustration {variant}</div>
  </div>
);

const ShuttleIllustration = ({ variant = '1' }: { variant?: string }) => (
  <div style={{ 
    width: '300px',
    height: '150px',
    backgroundColor: '#f5f5f5',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
    <div style={{ fontSize: '2rem' }}>🚀</div>
    <div style={{ fontSize: '0.875rem', color: '#666' }}>Shuttle Illustration {variant}</div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Illustrations',
  component: RackIllustration,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5180:45637',
      components: 2,
      totalVariants: 12,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['rack-1', 'rack-2', 'rack-3', 'rack-4', 'rack-5', 'rack-6', 'rack-7', 'rack-8', 'rack-9', 'shuttle-1', 'shuttle-2', 'shuttle-3'],
      description: 'Illustration variant',
    },
  },
} satisfies Meta<typeof RackIllustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rack1: Story = { render: () => <RackIllustration variant="1" /> };
export const Rack2: Story = { render: () => <RackIllustration variant="2" /> };
export const Rack3: Story = { render: () => <RackIllustration variant="3" /> };
export const Rack4: Story = { render: () => <RackIllustration variant="4" /> };
export const Rack5: Story = { render: () => <RackIllustration variant="5" /> };
export const Rack6: Story = { render: () => <RackIllustration variant="6" /> };
export const Rack7: Story = { render: () => <RackIllustration variant="7" /> };
export const Rack8: Story = { render: () => <RackIllustration variant="8" /> };
export const Rack9: Story = { render: () => <RackIllustration variant="9" /> };

export const Shuttle1: Story = { render: () => <ShuttleIllustration variant="1" /> };
export const Shuttle2: Story = { render: () => <ShuttleIllustration variant="2" /> };
export const Shuttle3: Story = { render: () => <ShuttleIllustration variant="3" /> };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      <RackIllustration variant="1" />
      <RackIllustration variant="2" />
      <RackIllustration variant="3" />
      <RackIllustration variant="4" />
      <RackIllustration variant="5" />
      <RackIllustration variant="6" />
      <RackIllustration variant="7" />
      <RackIllustration variant="8" />
      <RackIllustration variant="9" />
      <ShuttleIllustration variant="1" />
      <ShuttleIllustration variant="2" />
      <ShuttleIllustration variant="3" />
    </div>
  ),
  name: 'All Variants',
};
