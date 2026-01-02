/** @jsxImportSource react */
import type { Meta } from '@storybook/react';
import colors from '../../../tokens/figma-tokens.json';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System',
    },
    docs: {
      description: {
        component: `Complete color palette from T-Suite Design System, auto-synced from Figma.

## Usage
All colors are available in \`tokens/figma-tokens.json\` and can be imported:

\`\`\`tsx
import colors from './tokens/figma-tokens.json';

const brandPrimary = colors.brand.primary.value; // #007AFF
\`\`\`

## Categories
- **Brand**: Core brand identity colors
- **Primary**: Main UI colors (blue, green, red, yellow)
- **Feedback**: Status colors (success, error, warning, info)
- **Neutral**: Grayscale palette

Browse all colors below and copy the hex values directly.`,
      },
    },
  },
};

export default meta;

export const Overview = () => {
  const allColors = Object.entries(colors.colors);
  const brandCount = allColors.filter(([name]) => name.startsWith('Brand Color')).length;
  const primaryCount = allColors.filter(([name]) => name.startsWith('Primary Color')).length;
  const feedbackCount = allColors.filter(([name]) => name.startsWith('Feedback')).length;
  const neutralCount = allColors.filter(([name]) => name.startsWith('Neutral')).length;

  return (
    <div>
      <h2>Colors</h2>
      <p>Total colors synced from Figma: {allColors.length}</p>
      <ul>
        <li>Brand: {brandCount}</li>
        <li>Primary: {primaryCount}</li>
        <li>Feedback: {feedbackCount}</li>
        <li>Neutral: {neutralCount}</li>
      </ul>
      <p>
        Use the stories below to browse each category. These categories are derived from token naming
        in <code>tokens/figma-tokens.json</code>.
      </p>
    </div>
  );
};

const ColorSwatch = ({ name, value, styleId }: { name: string; value: string; styleId: string }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: 'white',
  }}>
    <div style={{
      width: '100%',
      height: '80px',
      borderRadius: '4px',
      backgroundColor: value,
      border: '1px solid #ccc',
    }} />
    <div style={{ fontSize: '12px', fontWeight: '600' }}>{name}</div>
    <div style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace' }}>
      {value}
    </div>
    <div style={{ fontSize: '10px', color: '#999', fontFamily: 'monospace' }}>
      ID: {styleId.substring(0, 8)}...
    </div>
  </div>
);

export const BrandColors = () => {
  const brandColors = Object.entries(colors.colors)
    .filter(([name]) => name.startsWith('Brand Color'));
  
  return (
    <div>
      <h2>Brand Colors</h2>
      <p>Total: {brandColors.length} colors</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        marginTop: '24px',
      }}>
        {brandColors.map(([name, data]) => (
          <ColorSwatch key={name} name={name} value={data.value} styleId={data.figmaStyleId} />
        ))}
      </div>
    </div>
  );
};

BrandColors.storyName = 'Brand colors';

export const PrimaryColors = () => {
  const primaryColors = Object.entries(colors.colors)
    .filter(([name]) => name.startsWith('Primary Color'));
  
  return (
    <div>
      <h2>Primary Colors</h2>
      <p>Total: {primaryColors.length} colors</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        marginTop: '24px',
      }}>
        {primaryColors.map(([name, data]) => (
          <ColorSwatch key={name} name={name} value={data.value} styleId={data.figmaStyleId} />
        ))}
      </div>
    </div>
  );
};

PrimaryColors.storyName = 'Primary colors';

export const FeedbackColors = () => {
  const feedbackColors = Object.entries(colors.colors)
    .filter(([name]) => name.startsWith('Feedback'));
  
  return (
    <div>
      <h2>Feedback Colors</h2>
      <p>Used for warnings, errors, success states</p>
      <p>Total: {feedbackColors.length} colors</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        marginTop: '24px',
      }}>
        {feedbackColors.map(([name, data]) => (
          <ColorSwatch key={name} name={name} value={data.value} styleId={data.figmaStyleId} />
        ))}
      </div>
    </div>
  );
};

FeedbackColors.storyName = 'Feedback colors';

export const NeutralColors = () => {
  const neutralColors = Object.entries(colors.colors)
    .filter(([name]) => name.startsWith('Neutral'));
  
  return (
    <div>
      <h2>Neutral Colors</h2>
      <p>Total: {neutralColors.length} colors</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        marginTop: '24px',
      }}>
        {neutralColors.map(([name, data]) => (
          <ColorSwatch key={name} name={name} value={data.value} styleId={data.figmaStyleId} />
        ))}
      </div>
    </div>
  );
};

NeutralColors.storyName = 'Neutral colors';

export const AllColors = () => {
  const allColors = Object.entries(colors.colors);
  
  return (
    <div>
      <h2>All T-Suite Colors</h2>
      <p>Complete color palette - {allColors.length} total colors synced from Figma</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '12px',
        marginTop: '24px',
      }}>
        {allColors.map(([name, data]) => (
          <ColorSwatch key={name} name={name} value={data.value} styleId={data.figmaStyleId} />
        ))}
      </div>
    </div>
  );
};

AllColors.storyName = 'All colors';
