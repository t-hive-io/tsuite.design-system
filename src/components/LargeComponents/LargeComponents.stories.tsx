import type { Meta, StoryObj } from '@storybook/react';

const LargeComponent = ({ title, description }: { title: string; description: string }) => (
  <div style={{ 
    width: '100%',
    maxWidth: '600px',
    padding: '2rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontFamily: 'system-ui',
    backgroundColor: '#fafafa'
  }}>
    <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>{description}</p>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Large components',
  component: LargeComponent,
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5177:45652',
      components: 6,
      totalVariants: 16,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Component title',
    },
    description: {
      control: 'text',
      description: 'Component description',
    },
  },
} satisfies Meta<typeof LargeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FloorplanCard: Story = { 
  render: () => <LargeComponent title="Floorplan Card" description="Large card component for displaying floorplans (1036×272px, 3 variants)" />,
};

export const TitleAndSearch: Story = { 
  render: () => <LargeComponent title="Title and Search" description="Combined title bar with search functionality (1480×284px, 2 variants)" />,
};

export const FilterAndSort: Story = { 
  render: () => <LargeComponent title="Filter and Sort" description="Filter and sorting controls (1480×183px, 2 variants)" />,
};

export const KeyboardShortcuts: Story = { 
  render: () => <LargeComponent title="Keyboard Shortcuts" description="Keyboard shortcuts reference section (1480×1445px, 5 variants)" />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <LargeComponent title="Floorplan Card" description="Large card component for displaying floorplans (1036×272px, 3 variants)" />
      <LargeComponent title="Title and Search" description="Combined title bar with search functionality (1480×284px, 2 variants)" />
      <LargeComponent title="Filter and Sort" description="Filter and sorting controls (1480×183px, 2 variants)" />
      <LargeComponent title="Keyboard Shortcuts" description="Keyboard shortcuts reference section (1480×1445px, 5 variants)" />
    </div>
  ),
  name: 'All Variants',
};
