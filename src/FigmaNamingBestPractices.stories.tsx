import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Documentation/Figma Naming Best Practices',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Learn how to name Figma components for automatic conversion to React and Angular components.',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const BestPracticesContent = () => {
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.6',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#000' }}>
        🎯 Figma Naming Best Practices
      </h1>

      <div
        style={{
          background: '#f0f7ff',
          border: '1px solid #0066ff',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '30px',
        }}
      >
        <strong>Why This Matters:</strong> Component names in Figma are
        automatically converted to React and Angular component names. Following
        these conventions ensures clean, readable code without compilation
        errors.
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            marginBottom: '1rem',
            borderBottom: '2px solid #0066ff',
            paddingBottom: '0.5rem',
          }}
        >
          📋 Core Naming Rules
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#0066ff' }}>
            1. Use Descriptive Names
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                background: '#d4edda',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #28a745',
              }}
            >
              <strong style={{ color: '#155724' }}>✅ Good Examples:</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>User Profile</li>
                <li>Search Input</li>
                <li>Navigation Button</li>
                <li>Alert Dialog</li>
              </ul>
            </div>
            <div
              style={{
                background: '#f8d7da',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #dc3545',
              }}
            >
              <strong style={{ color: '#721c24' }}>❌ Avoid:</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>Component 1</li>
                <li>Frame 45</li>
                <li>Group</li>
                <li>Rectangle 23</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#0066ff' }}>
            2. Automatic PascalCase Conversion
          </h3>
          <p>Your Figma names are automatically converted to PascalCase:</p>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '15px',
              border: '1px solid #ddd',
            }}
          >
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th
                  style={{
                    padding: '12px',
                    textAlign: 'left',
                    border: '1px solid #ddd',
                  }}
                >
                  Figma Name
                </th>
                <th
                  style={{
                    padding: '12px',
                    textAlign: 'left',
                    border: '1px solid #ddd',
                  }}
                >
                  React/Angular Component
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>user profile</code>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>&lt;UserProfile /&gt;</code>
                </td>
              </tr>
              <tr style={{ background: '#f9f9f9' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>search-input</code>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>&lt;SearchInput /&gt;</code>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>primary_button</code>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>&lt;PrimaryButton /&gt;</code>
                </td>
              </tr>
              <tr style={{ background: '#f9f9f9' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>Alert Dialog</code>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <code>&lt;AlertDialog /&gt;</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
            Spaces, hyphens (-), and underscores (_) are treated as word
            separators and removed in the final name.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#0066ff' }}>
            3. Avoid Special Characters
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                background: '#d4edda',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #28a745',
              }}
            >
              <strong style={{ color: '#155724' }}>✅ Allowed:</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>Letters (a-z, A-Z)</li>
                <li>Numbers (0-9)</li>
                <li>Spaces, hyphens (-), underscores (_)</li>
              </ul>
            </div>
            <div
              style={{
                background: '#f8d7da',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #dc3545',
              }}
            >
              <strong style={{ color: '#721c24' }}>❌ Avoid:</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>@ # $ % & *</li>
                <li>Parentheses ( )</li>
                <li>Brackets [ ] {'{ }'}</li>
                <li>! ? + =</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            marginBottom: '1rem',
            borderBottom: '2px solid #0066ff',
            paddingBottom: '0.5rem',
          }}
        >
          🔍 Real-World Examples
        </h2>

        <div
          style={{
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>Navigation Components</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
            }}
          >
            <div>
              <strong style={{ color: '#dc3545' }}>❌ Poor naming:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                <li>
                  <code>nav_1</code>
                </li>
                <li>
                  <code>navbar-comp</code>
                </li>
                <li>
                  <code>header_top_menu</code>
                </li>
              </ul>
            </div>
            <div>
              <strong style={{ color: '#28a745' }}>✅ Good naming:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                <li>
                  <code>Main Navigation → MainNavigation</code>
                </li>
                <li>
                  <code>Top Navigation Bar → TopNavigationBar</code>
                </li>
                <li>
                  <code>Header Menu → HeaderMenu</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>Form Components</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
            }}
          >
            <div>
              <strong style={{ color: '#dc3545' }}>❌ Poor naming:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                <li>
                  <code>input_field_1</code>
                </li>
                <li>
                  <code>txt_box</code>
                </li>
                <li>
                  <code>form-component-23</code>
                </li>
              </ul>
            </div>
            <div>
              <strong style={{ color: '#28a745' }}>✅ Good naming:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                <li>
                  <code>Text Input → TextInput</code>
                </li>
                <li>
                  <code>Email Input → EmailInput</code>
                </li>
                <li>
                  <code>Password Field → PasswordField</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <h4 style={{ marginTop: 0 }}>Button Components</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
            }}
          >
            <div>
              <strong style={{ color: '#dc3545' }}>❌ Poor naming:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                <li>
                  <code>btn_primary</code>
                </li>
                <li>
                  <code>Button1</code>
                </li>
                <li>
                  <code>cta-button</code>
                </li>
              </ul>
            </div>
            <div>
              <strong style={{ color: '#28a745' }}>✅ Good naming:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                <li>
                  <code>Primary Button → PrimaryButton</code>
                </li>
                <li>
                  <code>Call To Action Button → CallToActionButton</code>
                </li>
                <li>
                  <code>Submit Button → SubmitButton</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            marginBottom: '1rem',
            borderBottom: '2px solid #0066ff',
            paddingBottom: '0.5rem',
          }}
        >
          ✨ Quick Checklist
        </h2>

        <div
          style={{
            background: '#e7f3ff',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #0066ff',
          }}
        >
          <p>
            <strong>Before publishing your Figma components:</strong>
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>☐ All components have descriptive names</li>
            <li>☐ No special characters (except space, hyphen, underscore)</li>
            <li>☐ Names don&apos;t start with numbers</li>
            <li>☐ Component sets use clear property names</li>
            <li>☐ Naming is consistent across similar components</li>
            <li>
              ☐ No generic names like &quot;Component&quot; or &quot;Frame&quot;
            </li>
            <li>☐ Names are concise but clear (2-4 words ideal)</li>
          </ul>
        </div>
      </section>

      <section
        style={{
          background: '#d1ecf1',
          border: '1px solid #17a2b8',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '40px',
        }}
      >
        <h3 style={{ marginTop: 0, color: '#0c5460' }}>
          📖 Need More Details?
        </h3>
        <p>
          For comprehensive examples, conversion rules, and framework-specific
          guidelines, see the complete documentation:
        </p>
        <a
          href="https://github.com/t-hive-io/tsuite.design-system/blob/main/docs/FIGMA_NAMING_BEST_PRACTICES.md"
          target="_blank"
          style={{
            color: '#0066ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
          rel="noreferrer"
        >
          → Full Figma Naming Best Practices Guide
        </a>
      </section>

      <div
        style={{
          marginTop: '40px',
          padding: '30px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Remember</h2>
        <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>
          Good naming in Figma = Clean code in React/Angular! 🎉
        </p>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <BestPracticesContent />,
};
