import type { Meta, StoryObj } from '@storybook/react';
import { gridSystem } from './gridSystem';

const meta = {
  title: 'Foundation/Grid System',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '12-column grid system for responsive layouts. Use these container widths, gutters, and margins to create consistent page structures.',
      },
    },
    figma: {
      pageId: '5301:31219',
      frames: 33,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerWidths: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Container Widths
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161', fontSize: '1rem' }}>
        Maximum widths for containers at different breakpoints.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {Object.entries(gridSystem.containerWidths).map(([key, value]) => (
          <div
            key={key}
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            <div
              style={{
                width: '100px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                color: '#757575',
              }}
            >
              {key}
            </div>
            <div
              style={{
                maxWidth: value,
                width: '100%',
                height: '60px',
                backgroundColor: '#1976d2',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                color: '#9e9e9e',
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

export const GridColumns: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Grid Columns
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161', fontSize: '1rem' }}>
        {gridSystem.columns}-column grid system for flexible layouts.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSystem.columns}, 1fr)`,
          gap: '1rem',
        }}
      >
        {Array.from({ length: gridSystem.columns }, (_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #1976d2',
              borderRadius: '0.25rem',
              padding: '1rem',
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#1565c0',
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2
          style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}
        >
          Example: 3 Column Layout
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, 1fr)`,
            gap: '1rem',
          }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#1976d2',
                borderRadius: '0.5rem',
                padding: '2rem 1rem',
                textAlign: 'center',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Column {i + 1}
              <div
                style={{
                  marginTop: '0.5rem',
                  fontSize: '0.75rem',
                  opacity: 0.8,
                }}
              >
                4 columns wide
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2
          style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}
        >
          Example: 2 Column Layout
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(2, 1fr)`,
            gap: '1rem',
          }}
        >
          {Array.from({ length: 2 }, (_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#1976d2',
                borderRadius: '0.5rem',
                padding: '2rem 1rem',
                textAlign: 'center',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Column {i + 1}
              <div
                style={{
                  marginTop: '0.5rem',
                  fontSize: '0.75rem',
                  opacity: 0.8,
                }}
              >
                6 columns wide
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Gutters: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Gutters
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161', fontSize: '1rem' }}>
        Spacing between columns in the grid system.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {Object.entries(gridSystem.gutter).map(([key, value]) => (
          <div key={key}>
            <div
              style={{
                marginBottom: '0.5rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                color: '#757575',
              }}
            >
              {key} ({value})
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: value,
              }}
            >
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#1976d2',
                    borderRadius: '0.25rem',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  Col {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Margins: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Margins
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161', fontSize: '1rem' }}>
        Container margins for different screen sizes.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {Object.entries(gridSystem.margin).map(([key, value]) => (
          <div key={key}>
            <div
              style={{
                marginBottom: '0.5rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                color: '#757575',
              }}
            >
              {key} ({value})
            </div>
            <div
              style={{
                border: '2px dashed #bdbdbd',
                borderRadius: '0.5rem',
                padding: value,
              }}
            >
              <div
                style={{
                  backgroundColor: '#1976d2',
                  borderRadius: '0.25rem',
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                Content Area
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    opacity: 0.8,
                  }}
                >
                  Margin: {value}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
