import type { Meta, StoryObj } from '@storybook/react';

const RackingDataSet = ({ variant = '1' }: { variant?: string }) => (
  <div style={{ 
    padding: '1.5rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontFamily: 'system-ui',
    backgroundColor: '#fafafa',
    maxWidth: '400px'
  }}>
    <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem' }}>Francks Racking Data Set</h4>
    <div style={{ fontSize: '0.875rem', color: '#666' }}>
      <p style={{ margin: '0.5rem 0' }}>Variant: {variant}</p>
      <p style={{ margin: '0.5rem 0' }}>Size: 3720×292px</p>
      <p style={{ margin: '0.5rem 0' }}>Racking configuration and specifications</p>
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Racking data',
  component: RackingDataSet,
  parameters: {
    layout: 'centered',
    figma: {
      components: 1,
      totalVariants: 16,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['1', '2', '3', '4'],
      description: 'Racking data variant',
    },
  },
} satisfies Meta<typeof RackingDataSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant1: Story = { render: () => <RackingDataSet variant="1" /> };
export const Variant2: Story = { render: () => <RackingDataSet variant="2" /> };
export const Variant3: Story = { render: () => <RackingDataSet variant="3" /> };
export const Variant4: Story = { render: () => <RackingDataSet variant="4" /> };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <RackingDataSet variant="1" />
      <RackingDataSet variant="2" />
      <RackingDataSet variant="3" />
      <RackingDataSet variant="4" />
    </div>
  ),
  name: 'All Variants',
};
