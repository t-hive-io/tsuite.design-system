import type { Meta, StoryObj } from '@storybook/react';

const CanvasObject = ({ type = 'area' }: { type?: string }) => (
  <div style={{ 
    width: '200px',
    height: '150px',
    border: '2px dashed #1976d2',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui',
    flexDirection: 'column',
    gap: '0.5rem',
    backgroundColor: '#e3f2fd'
  }}>
    <div style={{ fontSize: '1.5rem' }}>
      {type === 'area' && '📐'}
      {type === 'road' && '🛣️'}
      {type === 'wall' && '🧱'}
      {type === 'obstacle' && '⚠️'}
    </div>
    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1565c0', textTransform: 'capitalize' }}>
      {type}
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Canvas objects',
  component: CanvasObject,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45525',
      components: 16,
      totalVariants: 89,
      description: 'Largest section (7523×16456px) with layout objects for canvas'
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['area', 'road', 'wall', 'obstacle'],
      description: 'Canvas object type',
    },
  },
} satisfies Meta<typeof CanvasObject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Area: Story = { render: () => <CanvasObject type="area" />, name: 'Area (24 variants)' };
export const Road: Story = { render: () => <CanvasObject type="road" />, name: 'Road (8 variants)' };
export const Wall: Story = { render: () => <CanvasObject type="wall" />, name: 'Wall (2 variants)' };
export const Obstacle: Story = { render: () => <CanvasObject type="obstacle" />, name: 'Obstacle (3 variants)' };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <CanvasObject type="area" />
      <CanvasObject type="road" />
      <CanvasObject type="wall" />
      <CanvasObject type="obstacle" />
    </div>
  ),
  name: 'All Variants',
};
