import type { Meta, StoryObj } from '@storybook/react';
import { spacing, borderRadius } from './spacing';

const meta = {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5301:31219',
      frames: 33,
      description:
        'Property panel examples with grid overlays and spacing guidelines',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpacingScale: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Spacing Scale
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161' }}>
        Use these spacing tokens for consistent padding, margins, and gaps.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(spacing).map(([key, value]) => (
          <div
            key={key}
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            <div
              style={{
                width: '60px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              {key}
            </div>
            <div
              style={{
                width: value,
                height: '40px',
                backgroundColor: '#2196f3',
                border: '1px solid #1976d2',
              }}
            />
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                color: '#757575',
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Border Radius
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161' }}>
        Use these border radius tokens for consistent rounded corners.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '2rem',
        }}
      >
        {Object.entries(borderRadius).map(([key, value]) => (
          <div key={key}>
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              {key}
            </div>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#2196f3',
                borderRadius: value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
