import type { Meta, StoryObj } from '@storybook/react';

const Spinner = ({ size = 'medium' }: { size?: string }) => (
  <div style={{ 
    display: 'inline-block',
    width: size === 'small' ? '20px' : size === 'large' ? '60px' : '40px',
    height: size === 'small' ? '20px' : size === 'large' ? '60px' : '40px',
    border: '3px solid #e0e0e0',
    borderTop: '3px solid #1976d2',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }}>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const LoadingBar = ({ progress = 50 }: { progress?: number }) => (
  <div style={{ 
    width: '300px',
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
    fontFamily: 'system-ui'
  }}>
    <div style={{ 
      width: `${progress}%`,
      height: '100%',
      backgroundColor: '#1976d2',
      transition: 'width 0.3s ease'
    }} />
  </div>
);

const meta = {
  title: '3. Component Category Pages/Progress indicators',
  component: Spinner,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5185:37144',
      components: 2,
      totalVariants: 9,
    },
  },
  tags: ['autodocs'],  argTypes: {
    type: {
      control: 'select',
      options: ['spinner-small', 'spinner-medium', 'spinner-large', 'progress-25', 'progress-50', 'progress-75', 'progress-100'],
      description: 'Progress indicator type',
    },
  },} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerSmall: Story = { render: () => <Spinner size="small" />, name: 'Spinner - Small' };
export const SpinnerMedium: Story = { render: () => <Spinner size="medium" />, name: 'Spinner - Medium' };
export const SpinnerLarge: Story = { render: () => <Spinner size="large" />, name: 'Spinner - Large' };

export const ProgressBar25: Story = { render: () => <LoadingBar progress={25} />, name: 'Progress Bar - 25%' };
export const ProgressBar50: Story = { render: () => <LoadingBar progress={50} />, name: 'Progress Bar - 50%' };
export const ProgressBar75: Story = { render: () => <LoadingBar progress={75} />, name: 'Progress Bar - 75%' };
export const ProgressBar100: Story = { render: () => <LoadingBar progress={100} />, name: 'Progress Bar - 100%' };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
      <LoadingBar progress={25} />
      <LoadingBar progress={50} />
      <LoadingBar progress={75} />
      <LoadingBar progress={100} />
    </div>
  ),
  name: 'All Variants',
};
