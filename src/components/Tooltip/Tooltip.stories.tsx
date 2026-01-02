import type { Meta, StoryObj } from '@storybook/react';

const Tooltip = ({ position = 'top' }: { position?: string }) => (
  <div style={{ 
    position: 'relative',
    display: 'inline-block',
    padding: '3rem',
    fontFamily: 'system-ui'
  }}>
    <button style={{ 
      padding: '0.5rem 1rem',
      backgroundColor: '#1976d2',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      Hover me
    </button>
    <div style={{ 
      position: 'absolute',
      [position]: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '0.5rem 0.75rem',
      backgroundColor: '#424242',
      color: 'white',
      borderRadius: '4px',
      fontSize: '0.75rem',
      whiteSpace: 'nowrap',
      marginTop: position === 'top' ? '0.5rem' : 0,
      marginBottom: position === 'bottom' ? '0.5rem' : 0
    }}>
      Tooltip - {position}
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5185:37203',
      components: 1,
      totalVariants: 12,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position (matches Figma property)',
    },
  },
  args: {
    position: 'top',
  },
} satisfies Meta<typeof TooltipPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = { args: { position: 'top' } };
export const Bottom: Story = { args: { position: 'bottom' } };
export const Left: Story = { args: { position: 'left' } };
export const Right: Story = { args: { position: 'right' } };
