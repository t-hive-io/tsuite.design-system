import type { Meta, StoryObj } from '@storybook/react';

const CornerRadiusPlaceholder = () => (
  <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
    <h1>● Corner radius</h1>
    <p style={{ color: '#666', marginBottom: '2rem' }}>
      Page ID: 5276:39119 | 1 frame | 473×240px
    </p>
    
    <h2>Description:</h2>
    <p>Border radius system for consistent rounded corners across components.</p>
    
    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {[
        { name: 'None', value: '0px' },
        { name: 'Small', value: '2px' },
        { name: 'Medium', value: '4px' },
        { name: 'Large', value: '8px' },
        { name: 'XL', value: '12px' },
        { name: 'Round', value: '50%' },
      ].map(({ name, value }) => (
        <div key={name} style={{ textAlign: 'center' }}>
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
            }}
          >
            {name}
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#666' }}>
            {value}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const meta = {
  title: '2. Main Pages/Corner radius',
  component: CornerRadiusPlaceholder,
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5276:39119',
      frames: 1,
      frameSize: '473×240px',
    },
  },
} satisfies Meta<typeof CornerRadiusPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderRadiusSystem: Story = {};
