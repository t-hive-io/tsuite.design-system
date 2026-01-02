import type { Meta, StoryObj } from '@storybook/react';

const DropdownMenu = ({ size = 'medium' }: { size?: string }) => (
  <div style={{ 
    width: size === 'large' ? '280px' : '220px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'system-ui'
  }}>
    {['Option 1', 'Option 2', 'Option 3'].map((option, idx) => (
      <div 
        key={idx}
        style={{ 
          padding: '0.75rem 1rem',
          borderBottom: idx < 2 ? '1px solid #f5f5f5' : 'none',
          cursor: 'pointer',
          fontSize: '0.875rem'
        }}
      >
        {option}
      </div>
    ))}
  </div>
);

const meta = {
  title: '3. Component Category Pages/Menus',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5180:45799',
      components: 3,
      totalVariants: 26,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'Dropdown menu size',
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = { render: () => <DropdownMenu size="medium" />, name: 'Medium Dropdown' };
export const Large: Story = { render: () => <DropdownMenu size="large" />, name: 'Large Dropdown' };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <DropdownMenu size="medium" />
      <DropdownMenu size="large" />
    </div>
  ),
  name: 'All Variants',
};
