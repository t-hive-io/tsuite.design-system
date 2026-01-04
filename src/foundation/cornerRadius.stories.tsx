import type { Meta, StoryObj } from '@storybook/react';
import { borderRadius } from './spacing';

const meta = {
  title: 'Foundation/Corner radius',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Border radius system for consistent rounded corners across components. Use these values to maintain design consistency.',
      },
    },
    figma: {
      pageId: '5276:39119',
      frames: 1,
      frameSize: '473×240px',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderRadiusSystem: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Corner Radius
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161', fontSize: '1rem' }}>
        Border radius system for consistent rounded corners across components.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {Object.entries(borderRadius).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#1976d2',
                borderRadius: value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              {key}
            </div>
            <div
              style={{
                marginTop: '0.5rem',
                fontSize: '0.75rem',
                color: '#9e9e9e',
                fontFamily: 'monospace',
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
