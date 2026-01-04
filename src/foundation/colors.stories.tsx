import type { Meta, StoryObj } from '@storybook/react';
import { colors } from './colors';

const meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Comprehensive color palette with semantic naming for consistent styling. Includes primary, secondary, neutral, and semantic colors (success, error, warning, info).',
      },
    },
    figma: {
      pageId: '5168:44092',
      frames: 8,
      description:
        'Digital Twin color range, palette examples, MacBook mockups',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5168-44092',
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
        width: '80px',
        height: '80px',
        backgroundColor: color,
        border: '1px solid #e0e0e0',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    />
    <div>
      <div
        style={{
          fontWeight: 600,
          fontSize: '0.875rem',
          marginBottom: '0.25rem',
        }}
      >
        {name}
      </div>
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

const ColorGroup = ({
  title,
  colorScale,
}: {
  title: string;
  colorScale: Record<string, string>;
}) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
      {title}
    </h3>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem',
      }}
    >
      {Object.entries(colorScale).map(([key, value]) => (
        <ColorSwatch
          key={key}
          color={value}
          name={`${title.toLowerCase()}-${key}`}
        />
      ))}
    </div>
  </div>
);

export const AllColors: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
        Color System
      </h1>
      <p style={{ marginBottom: '2rem', color: '#616161', fontSize: '1rem' }}>
        Our design system uses a comprehensive color palette with semantic
        naming for consistent styling.
      </p>

      <ColorGroup title="Primary" colorScale={colors.primary} />
      <ColorGroup title="Secondary" colorScale={colors.secondary} />
      <ColorGroup title="Neutral" colorScale={colors.neutral} />
      <ColorGroup title="Success" colorScale={colors.success} />
      <ColorGroup title="Error" colorScale={colors.error} />
      <ColorGroup title="Warning" colorScale={colors.warning} />
      <ColorGroup title="Info" colorScale={colors.info} />
    </div>
  ),
};
