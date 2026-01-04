import type { Meta, StoryObj } from '@storybook/react';
import { typography } from './typography';

const meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Typography system including font sizes, weights, line heights, and letter spacing. Use these tokens for consistent text styling across the application.',
      },
    },
    figma: {
      pageId: '5168:44044',
      frames: 1,
      frameSize: '1393×1542px',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSizes: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Font Sizes
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {Object.entries(typography.fontSize).map(([key, value]) => (
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
            <div style={{ fontSize: value }}>
              The quick brown fox jumps over the lazy dog
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

export const FontWeights: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Font Weights
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {Object.entries(typography.fontWeight).map(([key, value]) => (
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
            <div style={{ fontWeight: value, fontSize: '1.125rem' }}>
              The quick brown fox jumps over the lazy dog
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

export const LineHeights: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Line Heights
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {Object.entries(typography.lineHeight).map(([key, value]) => (
          <div key={key}>
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                color: '#757575',
                marginBottom: '0.5rem',
              }}
            >
              {key} ({value})
            </div>
            <div
              style={{
                lineHeight: value,
                border: '1px solid #e0e0e0',
                padding: '1rem',
                borderRadius: '0.375rem',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Letter Spacing
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {Object.entries(typography.letterSpacing).map(([key, value]) => (
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
            <div style={{ letterSpacing: value, fontSize: '1.125rem' }}>
              The quick brown fox jumps over the lazy dog
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
