import type { Meta, StoryObj } from '@storybook/react';
import { tmheTokens } from '../tokens/tmhe.tokens';
import { vanderlandeTokens } from '../tokens/vanderlande.tokens';
import { bastian_solutionsTokens } from '../tokens/bastian-solutions.tokens';
import { white_labelTokens } from '../tokens/white-label.tokens';

const meta = {
  title: 'Foundation/Themes',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Brand Themes

The design system supports 4 brand themes with different color palettes and typography.
Use the **Brand** toolbar switcher (🎨) above to preview components with different themes.

### Theme Architecture

All components use CSS custom properties (CSS variables) for styling, making them brand-agnostic:

\`\`\`css
/* Components reference theme variables */
.tsuite-component {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  color: var(--color-neutral-800, #222);
}
\`\`\`

Each brand theme provides values for these variables. Switch brands using the toolbar to see changes in real-time.

### Usage in Applications

Import the theme CSS file at your application entry point:

\`\`\`tsx
// For TMHE brand
import '@tsuite/design-system/themes/tmhe.css';

// Or dynamically switch themes
import { setTheme } from '@tsuite/design-system/tokens/theme';
setTheme('tmhe');
\`\`\`

### Key Differences

**Typography:**
- **TMHE**: Uses **Titillium Web** font family
- **All others**: Use **Inter** font family

**Colors:** Each brand has unique color palettes (see comparison table below)
        `,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const brands = {
  'White Label': white_labelTokens,
  Vanderlande: vanderlandeTokens,
  TMHE: tmheTokens,
  'Bastian Solutions': bastian_solutionsTokens,
} as const;

export const TypographyComparison: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Typography Tokens</h2>

      {/* Font Family */}
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Font Families</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Token</th>
            {Object.keys(brands).map((brand) => (
              <th key={brand} style={{ textAlign: 'left', padding: '0.75rem' }}>
                {brand}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['Title', 'Body'].map((key) => (
            <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
              <td
                style={{
                  padding: '0.75rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                --font-family-{key.toLowerCase()}
              </td>
              {Object.values(brands).map((tokens, idx) => (
                <td
                  key={idx}
                  style={{
                    padding: '0.75rem',
                    fontFamily: tokens.font.family[key],
                  }}
                >
                  {tokens.font.family[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Font Sizes */}
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Font Sizes</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Token</th>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Value</th>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(white_labelTokens.font.size).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
              <td
                style={{
                  padding: '0.75rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                --font-size-{key}
              </td>
              <td style={{ padding: '0.75rem' }}>{value}px</td>
              <td style={{ padding: '0.75rem', fontSize: `${value}px` }}>
                The quick brown fox
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Font Weights */}
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Font Weights</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Token</th>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Value</th>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(white_labelTokens.font.weight).map(([key, value]) => {
            const numericWeight =
              value === 'Regular' || value === 'Normal'
                ? 400
                : value === 'Medium'
                ? 500
                : value === 'Semibold'
                ? 600
                : value;
            return (
              <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
                <td
                  style={{
                    padding: '0.75rem',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                  }}
                >
                  --font-weight-{key.toLowerCase()}
                </td>
                <td style={{ padding: '0.75rem' }}>{value}</td>
                <td style={{ padding: '0.75rem', fontWeight: numericWeight }}>
                  The quick brown fox
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ),
};

export const ColorComparison: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Brand Colors</h2>

      {/* Brand Colors */}
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Brand Palette</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Token</th>
            {Object.keys(brands).map((brand) => (
              <th key={brand} style={{ textAlign: 'left', padding: '0.75rem' }}>
                {brand}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            'Brand/Brand 800',
            'Brand/Brand 700',
            'Brand/Brand 600',
            'Brand/Brand 500',
            'Brand/Brand 400',
            'Brand/Brand 100',
          ].map((key) => (
            <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
              <td
                style={{
                  padding: '0.75rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                --color-brand-{key.split(' ')[1].toLowerCase()}
              </td>
              {Object.values(brands).map((tokens, idx) => (
                <td key={idx} style={{ padding: '0.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: tokens.colors[key],
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                      }}
                    />
                    <span style={{ fontSize: '0.75rem', color: '#666' }}>
                      {tokens.colors[key]}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Primary Colors */}
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        Primary Palette
      </h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Token</th>
            {Object.keys(brands).map((brand) => (
              <th key={brand} style={{ textAlign: 'left', padding: '0.75rem' }}>
                {brand}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            'Primary/Primary 800',
            'Primary/Primary 700',
            'Primary/Primary 600',
            'Primary/Primary 500',
            'Primary/Primary 400',
          ].map((key) => (
            <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
              <td
                style={{
                  padding: '0.75rem',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                }}
              >
                --color-primary-{key.split(' ')[1].toLowerCase()}
              </td>
              {Object.values(brands).map((tokens, idx) => (
                <td key={idx} style={{ padding: '0.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: tokens.colors[key],
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                      }}
                    />
                    <span style={{ fontSize: '0.75rem', color: '#666' }}>
                      {tokens.colors[key]}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

export const CSSVariables: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Available CSS Variables</h2>

      <p style={{ marginBottom: '2rem', color: '#666' }}>
        All components use these CSS custom properties. Values are set by the
        active brand theme.
      </p>

      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Typography</h3>
      <ul
        style={{
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          lineHeight: '1.8',
        }}
      >
        <li>--font-family-title</li>
        <li>--font-family-body</li>
        <li>
          --font-size-xxxs, --font-size-xxs, --font-size-xs, --font-size-sm,
          --font-size-md, --font-size-lg
        </li>
        <li>--font-size-body (semantic alias for xxs)</li>
        <li>
          --font-weight-regular, --font-weight-normal, --font-weight-medium,
          --font-weight-semibold
        </li>
        <li>--line-height-body</li>
      </ul>

      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Colors</h3>
      <ul
        style={{
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          lineHeight: '1.8',
        }}
      >
        <li>
          --color-brand-800, --color-brand-700, --color-brand-600,
          --color-brand-500, --color-brand-400, --color-brand-100
        </li>
        <li>
          --color-primary-800, --color-primary-700, --color-primary-600,
          --color-primary-500, --color-primary-400, --color-primary-300,
          --color-primary-200
        </li>
        <li>
          --color-neutral-800, --color-neutral-700, --color-neutral-600,
          --color-neutral-500, --color-neutral-400, --color-neutral-300,
          --color-neutral-200, --color-neutral-100, --color-neutral-50
        </li>
      </ul>

      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Border Radius</h3>
      <ul
        style={{
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          lineHeight: '1.8',
        }}
      >
        <li>--radius-sm (2px)</li>
        <li>--radius-md (4px)</li>
      </ul>

      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Example Usage</h3>
      <pre
        style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          borderRadius: '4px',
          fontSize: '0.875rem',
          overflow: 'auto',
        }}
      >
        {`.my-component {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  color: var(--color-neutral-800, #222);
  border-radius: var(--radius-sm, 2px);
}`}
      </pre>
    </div>
  ),
};
