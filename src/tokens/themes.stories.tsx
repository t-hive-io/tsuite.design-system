import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { brandTokens, type BrandTheme } from './theme';

const meta = {
  title: 'Foundation/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Multi-brand theme system with support for TMHE, Vanderlande, Bastian Solutions, and White-label. Each brand has unique Primary and Brand colors while sharing Neutral colors.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '0.5rem',
    }}
  >
    <div
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: color,
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    />
    <div>
      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{name}</div>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#757575',
        }}
      >
        {color}
      </div>
    </div>
  </div>
);

const ThemeShowcase = ({ theme }: { theme: BrandTheme }) => {
  const tokens = brandTokens[theme];

  return (
    <div
      style={{
        padding: '2rem',
        border: '2px solid #e0e0e0',
        borderRadius: '12px',
        marginBottom: '2rem',
      }}
    >
      <h2 style={{ marginBottom: '1.5rem', textTransform: 'capitalize' }}>
        {theme.replace(/-/g, ' ')}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {/* Primary Colors */}
        <div>
          <h3
            style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}
          >
            Primary
          </h3>
          {Object.entries(tokens.colors)
            .filter(([key]) => key.startsWith('Primary/'))
            .map(([key, value]) => (
              <ColorSwatch
                key={key}
                color={value}
                name={key.replace('Primary/', '')}
              />
            ))}
        </div>

        {/* Brand Colors */}
        <div>
          <h3
            style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}
          >
            Brand
          </h3>
          {Object.entries(tokens.colors)
            .filter(([key]) => key.startsWith('Brand/'))
            .map(([key, value]) => (
              <ColorSwatch
                key={key}
                color={value}
                name={key.replace('Brand/', '')}
              />
            ))}
        </div>

        {/* Neutral Colors */}
        <div>
          <h3
            style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}
          >
            Neutral
          </h3>
          {Object.entries(tokens.colors)
            .filter(([key]) => key.startsWith('Neutral/'))
            .slice(0, 6)
            .map(([key, value]) => (
              <ColorSwatch
                key={key}
                color={value}
                name={key.replace('Neutral/', '')}
              />
            ))}
        </div>
      </div>

      {/* Radius */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>
          Border Radius
        </h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {Object.entries(tokens.radius).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: '1rem',
                border: '2px solid #e0e0e0',
                borderRadius: value,
                minWidth: '100px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                {key}
              </div>
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

      {/* Font */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>
          Typography
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          {/* Font Families */}
          <div>
            <h4
              style={{
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                color: '#757575',
              }}
            >
              Font Families
            </h4>
            {Object.entries(tokens.font.family).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '0.5rem' }}>
                <div style={{ fontFamily: value, fontSize: '1rem' }}>{key}</div>
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

          {/* Font Weights */}
          <div>
            <h4
              style={{
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                color: '#757575',
              }}
            >
              Font Weights
            </h4>
            {Object.entries(tokens.font.weight).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '0.5rem' }}>
                <div
                  style={{
                    fontWeight: typeof value === 'number' ? value : value,
                  }}
                >
                  {key}
                </div>
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

          {/* Font Sizes */}
          <div>
            <h4
              style={{
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                color: '#757575',
              }}
            >
              Font Sizes
            </h4>
            {Object.entries(tokens.font.size).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '0.5rem' }}>
                <div style={{ fontSize: `${value}px` }}>{key}</div>
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.75rem',
                    color: '#757575',
                  }}
                >
                  {value}px
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllBrands: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Multi-Brand Theme System</h1>
      <p style={{ marginBottom: '3rem', color: '#616161' }}>
        Design tokens exported from Figma Variables with support for 4 different
        brands. Each brand maintains consistent naming while providing unique
        brand identities.
      </p>

      <ThemeShowcase theme="tmhe" />
      <ThemeShowcase theme="vanderlande" />
      <ThemeShowcase theme="bastian-solutions" />
      <ThemeShowcase theme="white-label" />
    </div>
  ),
};

export const ThemeSwitcher: Story = {
  render: () => {
    const [selectedTheme, setSelectedTheme] = useState<BrandTheme>('tmhe');
    const tokens = brandTokens[selectedTheme];

    return (
      <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Interactive Theme Switcher</h1>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ marginRight: '1rem', fontWeight: 600 }}>
            Select Brand:
          </label>
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value as BrandTheme)}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #e0e0e0',
            }}
          >
            <option value="tmhe">TMHE</option>
            <option value="vanderlande">Vanderlande</option>
            <option value="bastian-solutions">Bastian Solutions</option>
            <option value="white-label">White Label</option>
          </select>
        </div>

        <div
          style={{
            padding: '3rem',
            background: `linear-gradient(135deg, ${tokens.colors['Primary/Primary 500']} 0%, ${tokens.colors['Brand/Brand 600']} 100%)`,
            borderRadius: '12px',
            color: 'white',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ marginBottom: '1rem', textTransform: 'capitalize' }}>
            {selectedTheme.replace(/-/g, ' ')}
          </h2>
          <p>Experience our design system with dynamic brand theming</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}
        >
          {[
            'Primary/Primary 500',
            'Brand/Brand 700',
            'Neutral/Neutral 800',
          ].map((key) => (
            <div
              key={key}
              style={{
                padding: '2rem',
                backgroundColor:
                  tokens.colors[key as keyof typeof tokens.colors],
                color: key.includes('Neutral') ? '#fff' : '#000',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                {key.split('/')[1]}
              </div>
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  opacity: 0.8,
                }}
              >
                {tokens.colors[key as keyof typeof tokens.colors]}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ComparisonTable: Story = {
  render: () => {
    const themes: BrandTheme[] = [
      'tmhe',
      'vanderlande',
      'bastian-solutions',
      'white-label',
    ];
    const colorKeys = [
      'Primary/Primary 500',
      'Brand/Brand 700',
      'Brand/Brand 600',
    ] as const;

    return (
      <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Brand Token Comparison</h1>

        {/* Colors Comparison */}
        <h2
          style={{
            marginTop: '2rem',
            marginBottom: '1rem',
            fontSize: '1.25rem',
          }}
        >
          Colors
        </h2>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '3rem',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ textAlign: 'left', padding: '1rem' }}>Token</th>
              {themes.map((theme) => (
                <th
                  key={theme}
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {theme.replace(/-/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {colorKeys.map((key) => (
              <tr key={key} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '1rem', fontWeight: 600 }}>
                  {key.split('/')[1]}
                </td>
                {themes.map((theme) => {
                  const color = brandTokens[theme].colors[key];
                  return (
                    <td
                      key={theme}
                      style={{ padding: '1rem', textAlign: 'center' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: color,
                            borderRadius: '6px',
                            border: '1px solid #e0e0e0',
                          }}
                        />
                        <div
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.75rem',
                          }}
                        >
                          {color}
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Border Radius Comparison */}
        <h2
          style={{
            marginTop: '2rem',
            marginBottom: '1rem',
            fontSize: '1.25rem',
          }}
        >
          Border Radius
        </h2>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '3rem',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ textAlign: 'left', padding: '1rem' }}>Token</th>
              {themes.map((theme) => (
                <th
                  key={theme}
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {theme.replace(/-/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(brandTokens.tmhe.radius).map((key) => (
              <tr key={key} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '1rem', fontWeight: 600 }}>{key}</td>
                {themes.map((theme) => {
                  const value =
                    brandTokens[theme].radius[
                      key as keyof typeof brandTokens.tmhe.radius
                    ];
                  return (
                    <td
                      key={theme}
                      style={{ padding: '1rem', textAlign: 'center' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <div
                          style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: value,
                            border: '2px solid #e0e0e0',
                          }}
                        />
                        <div
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.75rem',
                          }}
                        >
                          {value}
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Font Family Comparison */}
        <h2
          style={{
            marginTop: '2rem',
            marginBottom: '1rem',
            fontSize: '1.25rem',
          }}
        >
          Font Families
        </h2>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '3rem',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ textAlign: 'left', padding: '1rem' }}>Token</th>
              {themes.map((theme) => (
                <th
                  key={theme}
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {theme.replace(/-/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(brandTokens.tmhe.font.family).map((key) => (
              <tr key={key} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '1rem', fontWeight: 600 }}>{key}</td>
                {themes.map((theme) => {
                  const value =
                    brandTokens[theme].font.family[
                      key as keyof typeof brandTokens.tmhe.font.family
                    ];
                  return (
                    <td
                      key={theme}
                      style={{ padding: '1rem', textAlign: 'center' }}
                    >
                      <div style={{ fontFamily: value, fontSize: '1rem' }}>
                        The quick brown fox
                      </div>
                      <div
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.75rem',
                          color: '#757575',
                          marginTop: '0.25rem',
                        }}
                      >
                        {value}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Font Sizes Comparison */}
        <h2
          style={{
            marginTop: '2rem',
            marginBottom: '1rem',
            fontSize: '1.25rem',
          }}
        >
          Font Sizes
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ textAlign: 'left', padding: '1rem' }}>Token</th>
              {themes.map((theme) => (
                <th
                  key={theme}
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {theme.replace(/-/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(brandTokens.tmhe.font.size).map((key) => (
              <tr key={key} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '1rem', fontWeight: 600 }}>{key}</td>
                {themes.map((theme) => {
                  const value =
                    brandTokens[theme].font.size[
                      key as keyof typeof brandTokens.tmhe.font.size
                    ];
                  return (
                    <td
                      key={theme}
                      style={{ padding: '1rem', textAlign: 'center' }}
                    >
                      <div style={{ fontSize: `${value}px` }}>Aa</div>
                      <div
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.75rem',
                          color: '#757575',
                          marginTop: '0.25rem',
                        }}
                      >
                        {value}px
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
