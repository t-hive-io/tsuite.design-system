import type { Meta, StoryObj } from '@storybook/react';

const ElevationPlaceholder = () => (
  <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
    <h1>● Elevation</h1>
    <p style={{ color: '#666', marginBottom: '2rem' }}>
      Page ID: 5267:23379 | 1 frame | 1046×487px
    </p>
    
    <h2>Description:</h2>
    <p>Shadows system showing different elevation levels for UI components.</p>
    
    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((level) => (
        <div key={level} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '120px',
              height: '120px',
              backgroundColor: 'white',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 ${level}px ${level * 2}px rgba(0,0,0,${0.05 + level * 0.01})`,
            }}
          >
            <span style={{ fontSize: '0.875rem', color: '#666' }}>Level {level}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const meta = {
  title: '2. Main Pages/Elevation',
  component: ElevationPlaceholder,
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5267:23379',
      frames: 1,
      frameSize: '1046×487px',
    },
  },
} satisfies Meta<typeof ElevationPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShadowsSystem: Story = {};
