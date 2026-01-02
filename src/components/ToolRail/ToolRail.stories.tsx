import type { Meta, StoryObj } from '@storybook/react';

const ToolRail = ({ type = 'main' }: { type?: string }) => (
  <div style={{ 
    width: type === 'main' ? '60px' : '240px',
    backgroundColor: '#424242',
    padding: '0.5rem',
    borderRadius: '4px',
    fontFamily: 'system-ui'
  }}>
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      {[1, 2, 3].map((item) => (
        <button 
          key={item}
          style={{ 
            padding: '0.75rem',
            backgroundColor: '#616161',
            color: 'white',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          {type === 'main' ? '⚡' : `Tool ${item}`}
        </button>
      ))}
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Tool rail',
  component: ToolRail,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:36766',
      components: 4,
      totalVariants: 12,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['main', 'sub'],
      description: 'Tool rail type',
    },
  },
} satisfies Meta<typeof ToolRail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainItems: Story = { render: () => <ToolRail type="main" />, name: 'Main Items (3 variants)' };
export const SubItems: Story = { render: () => <ToolRail type="sub" />, name: 'Sub Items (4 variants)' };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <ToolRail type="main" />
      <ToolRail type="sub" />
    </div>
  ),
  name: 'All Variants',
};
