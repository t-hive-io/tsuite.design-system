import type { Meta, StoryObj } from '@storybook/react';

const TableComponent = ({ variant = 'default' }: { variant?: string }) => (
  <div style={{ fontFamily: 'system-ui', border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: '#f5f5f5' }}>
        <tr>
          <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e0e0e0' }}>Name</th>
          <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e0e0e0' }}>Status</th>
          <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e0e0e0' }}>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: variant === 'selected' ? '#e3f2fd' : 'white' }}>
          <td style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>Item 1</td>
          <td style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>Active</td>
          <td style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>2026-01-02</td>
        </tr>
        <tr style={{ backgroundColor: variant === 'hover' ? '#f5f5f5' : 'white' }}>
          <td style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>Item 2</td>
          <td style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>Pending</td>
          <td style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>2026-01-01</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Data table',
  component: TableComponent,
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5194:45461',
      components: 4,
      totalVariants: 10,
    },
  },
  tags: ['autodocs'],  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected'],
      description: 'Table row state',
    },
  },
  args: {
    state: 'default',
  },
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { state: 'default' } };
export const Hover: Story = { args: { state: 'hover' } };
export const Selected: Story = { args: { state: 'selected' } };
