import type { Meta, StoryObj } from '@storybook/react';
import { elevation } from './elevation';

const meta = {
  title: 'Foundation/Elevation',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Shadow system for creating depth and hierarchy in UI components. Use these elevation levels to establish visual importance and layering.',
      },
    },
    figma: {
      pageId: '5267:23379',
      frames: 1,
      frameSize: '1046×487px',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5267-23379',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShadowsSystem: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Elevation
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161', fontSize: '1rem' }}>
        Shadows system showing different elevation levels for UI components.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {Object.entries(elevation)
          .filter(([key]) => key !== 'none')
          .map(([key, value]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  border: '1px solid #e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: value,
                }}
              >
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#666',
                    fontWeight: 500,
                  }}
                >
                  {key}
                </span>
              </div>
              <div
                style={{
                  marginTop: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#9e9e9e',
                  fontFamily: 'monospace',
                }}
              >
                {key}
              </div>
            </div>
          ))}
      </div>
    </div>
  ),
};
