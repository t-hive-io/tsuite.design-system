import type { Meta, StoryObj } from '@storybook/react';

const BreadCrumbs = () => (
  <nav style={{ fontFamily: 'system-ui' }}>
    <ol style={{ 
      display: 'flex', 
      listStyle: 'none', 
      padding: 0, 
      margin: 0,
      fontSize: '0.875rem',
      color: '#666'
    }}>
      <li>
        <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>Home</a>
      </li>
      <li style={{ margin: '0 0.5rem' }}>/</li>
      <li>
        <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>Projects</a>
      </li>
      <li style={{ margin: '0 0.5rem' }}>/</li>
      <li style={{ color: '#424242' }}>Current Project</li>
    </ol>
  </nav>
);

const meta = {
  title: '3. Component Category Pages/Bread crumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5170:45474',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BreadCrumbs />,
};
