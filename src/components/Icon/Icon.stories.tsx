import type { Meta, StoryObj } from '@storybook/react';

const IconPreview = ({ name, category }: { name: string; category: string }) => (
  <div style={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontFamily: 'system-ui',
    minWidth: '150px'
  }}>
    <div style={{ fontSize: '2rem' }}>🔷</div>
    <div style={{ fontSize: '0.75rem', fontWeight: 600, textAlign: 'center' }}>{name}</div>
    <div style={{ fontSize: '0.625rem', color: '#666' }}>{category}</div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Icon',
  component: IconPreview,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:37078',
      components: 153,
      totalVariants: 623,
      description: 'Largest component collection - most icons are 64×196px with 4 size variants'
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionIcons: Story = { 
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <IconPreview name="add" category="Action" />
      <IconPreview name="delete" category="Action" />
      <IconPreview name="edit" category="Action" />
    </div>
  ),
  name: 'Action Icons'
};

export const NavigationIcons: Story = { 
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <IconPreview name="arrow_drop_down" category="Navigation" />
      <IconPreview name="chevron_right" category="Navigation" />
    </div>
  ),
  name: 'Navigation Icons'
};

export const StatusIcons: Story = { 
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <IconPreview name="warning" category="Status" />
      <IconPreview name="error" category="Status" />
      <IconPreview name="info" category="Status" />
    </div>
  ),
  name: 'Status Icons'
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontFamily: 'system-ui' }}>Action Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <IconPreview name="add" category="Action" />
          <IconPreview name="delete" category="Action" />
          <IconPreview name="edit" category="Action" />
          <IconPreview name="copy" category="Action" />
        </div>
      </div>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontFamily: 'system-ui' }}>Navigation Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <IconPreview name="arrow_drop_down" category="Navigation" />
          <IconPreview name="chevron_right" category="Navigation" />
          <IconPreview name="expand_more" category="Navigation" />
        </div>
      </div>
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontFamily: 'system-ui' }}>Status Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <IconPreview name="warning" category="Status" />
          <IconPreview name="error" category="Status" />
          <IconPreview name="info" category="Status" />
          <IconPreview name="check_circle" category="Status" />
        </div>
      </div>
    </div>
  ),
  name: 'All Variants',
};
