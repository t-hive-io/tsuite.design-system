import type { Meta, StoryObj } from '@storybook/react';

const SandboxPlaceholder = () => (
  <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
    <h1>● Sandbox</h1>
    <p style={{ color: '#666', marginBottom: '2rem' }}>
      Page ID: 5193:41099 | 7 frames | 20 component sets | 207 variants
    </p>

    <h2>Description:</h2>
    <p style={{ marginBottom: '1.5rem' }}>
      Experimental components and work-in-progress designs. This page contains
      components that are being developed, tested, or refined before moving to
      their final categories.
    </p>

    <h2>Experimental Frames:</h2>
    <ul style={{ lineHeight: '1.8' }}>
      <li>
        <strong>New Property panel</strong> (15336×4611px, 33 children)
      </li>
      <li>
        <strong>Tooltip, Hover and Focused</strong> (15336×2104px, 72 children)
      </li>
      <li>
        <strong>Sandbox</strong> (16612×4118px, 175 children)
      </li>
      <li>Plus 4 additional experimental frames</li>
    </ul>

    <div
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#fff3e0',
        borderRadius: '8px',
        border: '2px dashed #ff9800',
      }}
    >
      <strong style={{ color: '#e65100' }}>⚠️ Experimental Area</strong>
      <p style={{ color: '#666', marginTop: '0.5rem', marginBottom: 0 }}>
        Components in this section are under active development and may change
        significantly. Use with caution in production environments.
      </p>
    </div>
  </div>
);

const meta = {
  title: 'Foundation/Sandbox',
  component: SandboxPlaceholder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Experimental components and work-in-progress designs. Contains 207 variants across 20 component sets that are being developed, tested, or refined. Use with caution in production.',
      },
    },
    figma: {
      pageId: '5193:41099',
      frames: 7,
      components: 20,
      totalVariants: 207,
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5193-41099',
    },
  },
} satisfies Meta<typeof SandboxPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExperimentalComponents: Story = {};
