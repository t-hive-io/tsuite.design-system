import type { Meta, StoryObj } from '@storybook/react';

const CursorPreview = ({ type = 'default' }: { type?: string }) => (
  <div style={{ 
    padding: '3rem',
    textAlign: 'center',
    fontFamily: 'system-ui',
    border: '2px dashed #e0e0e0',
    borderRadius: '8px',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: type as any
  }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖱️</div>
    <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
      {type.charAt(0).toUpperCase() + type.slice(1)} Cursor
    </p>
    <p style={{ fontSize: '0.875rem', color: '#666' }}>
      Hover over this area to see the cursor
    </p>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Cursor',
  component: CursorPreview,
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5172:38151',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'pointer', 'move', 'grab', 'grabbing', 'crosshair', 'text', 'not-allowed'],
      description: 'Cursor type',
    },
  },
} satisfies Meta<typeof CursorPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <CursorPreview type="default" /> };
export const Pointer: Story = { render: () => <CursorPreview type="pointer" /> };
export const Move: Story = { render: () => <CursorPreview type="move" /> };
export const Grab: Story = { render: () => <CursorPreview type="grab" /> };
export const Grabbing: Story = { render: () => <CursorPreview type="grabbing" /> };
export const Crosshair: Story = { render: () => <CursorPreview type="crosshair" /> };
export const Text: Story = { render: () => <CursorPreview type="text" /> };
export const NotAllowed: Story = { render: () => <CursorPreview type="not-allowed" />, name: 'Not Allowed' };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <CursorPreview type="default" />
      <CursorPreview type="pointer" />
      <CursorPreview type="move" />
      <CursorPreview type="grab" />
      <CursorPreview type="grabbing" />
      <CursorPreview type="crosshair" />
      <CursorPreview type="text" />
      <CursorPreview type="not-allowed" />
    </div>
  ),
  name: 'All Variants',
};
