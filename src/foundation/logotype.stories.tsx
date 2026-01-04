import type { Meta, StoryObj } from '@storybook/react';

const LogotypePlaceholder = () => (
  <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
    <h1>● Logotype</h1>
    <p style={{ color: '#666', marginBottom: '2rem' }}>
      Page ID: 5276:38948 | 2 frames | 6 component sets | 30 variants
    </p>

    <h2>Logo Variations (2003×4666px):</h2>
    <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
      <li>
        <strong>Favicon</strong> (4 variants) - 65×152px
      </li>
      <li>
        <strong>XS-logo</strong> (3 variants) - 80×230px
      </li>
      <li>
        <strong>Small-logo</strong> (3 variants) - 163×484px
      </li>
      <li>
        <strong>Full-logo-vector</strong> (4 variants) - 105×191px
      </li>
      <li>
        <strong>nav</strong> (4 variants) - 60×196px
      </li>
      <li>
        <strong>Logotype complete set</strong> (12 variants) - 1622×1276px
      </li>
    </ul>

    <h2>Raw Assets (1987×1096px):</h2>
    <p>Original logo files and variations for different use cases.</p>

    <div
      style={{
        marginTop: '2rem',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1976d2' }}>
        T-Suite
      </div>
      <p style={{ color: '#666', marginTop: '1rem' }}>Design System Logotype</p>
    </div>
  </div>
);

const meta = {
  title: 'Foundation/Logotype',
  component: LogotypePlaceholder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Brand logotype variations including favicon, XS, small, full-logo-vector, and nav variations. Total 30 variants across 6 component sets for different use cases.',
      },
    },
    figma: {
      pageId: '5276:38948',
      frames: 2,
      components: 6,
      totalVariants: 30,
    },
  },
} satisfies Meta<typeof LogotypePlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoVariations: Story = {};
