import type { Meta, StoryObj } from '@storybook/react';

const TopBar = ({ variant = 'default' }: { variant?: string }) => (
  <div style={{ 
    width: '100%',
    maxWidth: '1200px',
    height: '60px',
    backgroundColor: '#1976d2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    fontFamily: 'system-ui',
    color: 'white'
  }}>
    <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>T-Suite</div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Menu
      </button>
      <button style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        User
      </button>
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/UI shell header',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
    figma: {
      pageId: '5193:36713',
      components: 1,
      totalVariants: 2,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'alternate'],
      description: 'Header variant',
    },
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <TopBar variant="default" /> };
export const Variant2: Story = { render: () => <TopBar variant="alternate" /> };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TopBar variant="default" />
      <TopBar variant="alternate" />
    </div>
  ),
  name: 'All Variants',
};
