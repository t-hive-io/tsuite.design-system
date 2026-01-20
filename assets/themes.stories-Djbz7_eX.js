import{j as e}from"./jsx-runtime-C87dng0y.js";import{b,t as u,v as j,w as a}from"./iframe-BHhu0b6J.js";import"./preload-helper-E_wDBCPD.js";const v={title:"Foundation/Themes",parameters:{layout:"padded",docs:{description:{component:`
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
        `}}}},o={"White Label":a,Vanderlande:j,TMHE:u,"Bastian Solutions":b},l={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1.5rem"},children:"Typography Tokens"}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Font Families"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Token"}),Object.keys(o).map(n=>e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:n},n))]})}),e.jsx("tbody",{children:["Title","Body"].map(n=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsxs("td",{style:{padding:"0.75rem",fontFamily:"monospace",fontSize:"0.875rem"},children:["--font-family-",n.toLowerCase()]}),Object.values(o).map((t,r)=>e.jsx("td",{style:{padding:"0.75rem",fontFamily:t.font.family[n]},children:t.font.family[n]},r))]},n))})]}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Font Sizes"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Value"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Example"})]})}),e.jsx("tbody",{children:Object.entries(a.font.size).map(([n,t])=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsxs("td",{style:{padding:"0.75rem",fontFamily:"monospace",fontSize:"0.875rem"},children:["--font-size-",n]}),e.jsxs("td",{style:{padding:"0.75rem"},children:[t,"px"]}),e.jsx("td",{style:{padding:"0.75rem",fontSize:`${t}px`},children:"The quick brown fox"})]},n))})]}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Font Weights"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Value"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Example"})]})}),e.jsx("tbody",{children:Object.entries(a.font.weight).map(([n,t])=>{const r=t==="Regular"||t==="Normal"?400:t==="Medium"?500:t==="Semibold"?600:t;return e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsxs("td",{style:{padding:"0.75rem",fontFamily:"monospace",fontSize:"0.875rem"},children:["--font-weight-",n.toLowerCase()]}),e.jsx("td",{style:{padding:"0.75rem"},children:t}),e.jsx("td",{style:{padding:"0.75rem",fontWeight:r},children:"The quick brown fox"})]},n)})})]})]})},i={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1.5rem"},children:"Brand Colors"}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Brand Palette"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Token"}),Object.keys(o).map(n=>e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:n},n))]})}),e.jsx("tbody",{children:["Brand/Brand 800","Brand/Brand 700","Brand/Brand 600","Brand/Brand 500","Brand/Brand 400","Brand/Brand 100"].map(n=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsxs("td",{style:{padding:"0.75rem",fontFamily:"monospace",fontSize:"0.875rem"},children:["--color-brand-",n.split(" ")[1].toLowerCase()]}),Object.values(o).map((t,r)=>e.jsx("td",{style:{padding:"0.75rem"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:t.colors[n],borderRadius:"4px",border:"1px solid #ddd"}}),e.jsx("span",{style:{fontSize:"0.75rem",color:"#666"},children:t.colors[n]})]})},r))]},n))})]}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Primary Palette"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:"Token"}),Object.keys(o).map(n=>e.jsx("th",{style:{textAlign:"left",padding:"0.75rem"},children:n},n))]})}),e.jsx("tbody",{children:["Primary/Primary 800","Primary/Primary 700","Primary/Primary 600","Primary/Primary 500","Primary/Primary 400"].map(n=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsxs("td",{style:{padding:"0.75rem",fontFamily:"monospace",fontSize:"0.875rem"},children:["--color-primary-",n.split(" ")[1].toLowerCase()]}),Object.values(o).map((t,r)=>e.jsx("td",{style:{padding:"0.75rem"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:t.colors[n],borderRadius:"4px",border:"1px solid #ddd"}}),e.jsx("span",{style:{fontSize:"0.75rem",color:"#666"},children:t.colors[n]})]})},r))]},n))})]})]})},s={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1.5rem"},children:"Available CSS Variables"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#666"},children:"All components use these CSS custom properties. Values are set by the active brand theme."}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Typography"}),e.jsxs("ul",{style:{fontFamily:"monospace",fontSize:"0.875rem",lineHeight:"1.8"},children:[e.jsx("li",{children:"--font-family-title"}),e.jsx("li",{children:"--font-family-body"}),e.jsx("li",{children:"--font-size-xxxs, --font-size-xxs, --font-size-xs, --font-size-sm, --font-size-md, --font-size-lg"}),e.jsx("li",{children:"--font-size-body (semantic alias for xxs)"}),e.jsx("li",{children:"--font-weight-regular, --font-weight-normal, --font-weight-medium, --font-weight-semibold"}),e.jsx("li",{children:"--line-height-body"})]}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Colors"}),e.jsxs("ul",{style:{fontFamily:"monospace",fontSize:"0.875rem",lineHeight:"1.8"},children:[e.jsx("li",{children:"--color-brand-800, --color-brand-700, --color-brand-600, --color-brand-500, --color-brand-400, --color-brand-100"}),e.jsx("li",{children:"--color-primary-800, --color-primary-700, --color-primary-600, --color-primary-500, --color-primary-400, --color-primary-300, --color-primary-200"}),e.jsx("li",{children:"--color-neutral-800, --color-neutral-700, --color-neutral-600, --color-neutral-500, --color-neutral-400, --color-neutral-300, --color-neutral-200, --color-neutral-100, --color-neutral-50"})]}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Border Radius"}),e.jsxs("ul",{style:{fontFamily:"monospace",fontSize:"0.875rem",lineHeight:"1.8"},children:[e.jsx("li",{children:"--radius-sm (2px)"}),e.jsx("li",{children:"--radius-md (4px)"})]}),e.jsx("h3",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Example Usage"}),e.jsx("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",fontSize:"0.875rem",overflow:"auto"},children:`.my-component {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  color: var(--color-neutral-800, #222);
  border-radius: var(--radius-sm, 2px);
}`})]})};var d,m,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h2 style={{
      marginBottom: '1.5rem'
    }}>Typography Tokens</h2>

      {/* Font Family */}
      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Font Families</h3>
      <table style={{
      width: '100%',
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #ddd'
        }}>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Token</th>
            {Object.keys(brands).map(brand => <th key={brand} style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>
                {brand}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {['Title', 'Body'].map(key => <tr key={key} style={{
          borderBottom: '1px solid #eee'
        }}>
              <td style={{
            padding: '0.75rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem'
          }}>
                --font-family-{key.toLowerCase()}
              </td>
              {Object.values(brands).map((tokens, idx) => <td key={idx} style={{
            padding: '0.75rem',
            fontFamily: tokens.font.family[key]
          }}>
                  {tokens.font.family[key]}
                </td>)}
            </tr>)}
        </tbody>
      </table>

      {/* Font Sizes */}
      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Font Sizes</h3>
      <table style={{
      width: '100%',
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #ddd'
        }}>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Token</th>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Value</th>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(white_labelTokens.font.size).map(([key, value]) => <tr key={key} style={{
          borderBottom: '1px solid #eee'
        }}>
              <td style={{
            padding: '0.75rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem'
          }}>
                --font-size-{key}
              </td>
              <td style={{
            padding: '0.75rem'
          }}>{value}px</td>
              <td style={{
            padding: '0.75rem',
            fontSize: \`\${value}px\`
          }}>
                The quick brown fox
              </td>
            </tr>)}
        </tbody>
      </table>

      {/* Font Weights */}
      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Font Weights</h3>
      <table style={{
      width: '100%',
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #ddd'
        }}>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Token</th>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Value</th>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(white_labelTokens.font.weight).map(([key, value]) => {
          const numericWeight = value === 'Regular' || value === 'Normal' ? 400 : value === 'Medium' ? 500 : value === 'Semibold' ? 600 : value;
          return <tr key={key} style={{
            borderBottom: '1px solid #eee'
          }}>
                <td style={{
              padding: '0.75rem',
              fontFamily: 'monospace',
              fontSize: '0.875rem'
            }}>
                  --font-weight-{key.toLowerCase()}
                </td>
                <td style={{
              padding: '0.75rem'
            }}>{value}</td>
                <td style={{
              padding: '0.75rem',
              fontWeight: numericWeight
            }}>
                  The quick brown fox
                </td>
              </tr>;
        })}
        </tbody>
      </table>
    </div>
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,h,c;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h2 style={{
      marginBottom: '1.5rem'
    }}>Brand Colors</h2>

      {/* Brand Colors */}
      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Brand Palette</h3>
      <table style={{
      width: '100%',
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #ddd'
        }}>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Token</th>
            {Object.keys(brands).map(brand => <th key={brand} style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>
                {brand}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {['Brand/Brand 800', 'Brand/Brand 700', 'Brand/Brand 600', 'Brand/Brand 500', 'Brand/Brand 400', 'Brand/Brand 100'].map(key => <tr key={key} style={{
          borderBottom: '1px solid #eee'
        }}>
              <td style={{
            padding: '0.75rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem'
          }}>
                --color-brand-{key.split(' ')[1].toLowerCase()}
              </td>
              {Object.values(brands).map((tokens, idx) => <td key={idx} style={{
            padding: '0.75rem'
          }}>
                  <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
                    <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: tokens.colors[key],
                borderRadius: '4px',
                border: '1px solid #ddd'
              }} />
                    <span style={{
                fontSize: '0.75rem',
                color: '#666'
              }}>
                      {tokens.colors[key]}
                    </span>
                  </div>
                </td>)}
            </tr>)}
        </tbody>
      </table>

      {/* Primary Colors */}
      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>
        Primary Palette
      </h3>
      <table style={{
      width: '100%',
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #ddd'
        }}>
            <th style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>Token</th>
            {Object.keys(brands).map(brand => <th key={brand} style={{
            textAlign: 'left',
            padding: '0.75rem'
          }}>
                {brand}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {['Primary/Primary 800', 'Primary/Primary 700', 'Primary/Primary 600', 'Primary/Primary 500', 'Primary/Primary 400'].map(key => <tr key={key} style={{
          borderBottom: '1px solid #eee'
        }}>
              <td style={{
            padding: '0.75rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem'
          }}>
                --color-primary-{key.split(' ')[1].toLowerCase()}
              </td>
              {Object.values(brands).map((tokens, idx) => <td key={idx} style={{
            padding: '0.75rem'
          }}>
                  <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
                    <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: tokens.colors[key],
                borderRadius: '4px',
                border: '1px solid #ddd'
              }} />
                    <span style={{
                fontSize: '0.75rem',
                color: '#666'
              }}>
                      {tokens.colors[key]}
                    </span>
                  </div>
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>
}`,...(c=(h=i.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h2 style={{
      marginBottom: '1.5rem'
    }}>Available CSS Variables</h2>

      <p style={{
      marginBottom: '2rem',
      color: '#666'
    }}>
        All components use these CSS custom properties. Values are set by the
        active brand theme.
      </p>

      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Typography</h3>
      <ul style={{
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      lineHeight: '1.8'
    }}>
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

      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Colors</h3>
      <ul style={{
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      lineHeight: '1.8'
    }}>
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

      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Border Radius</h3>
      <ul style={{
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      lineHeight: '1.8'
    }}>
        <li>--radius-sm (2px)</li>
        <li>--radius-md (4px)</li>
      </ul>

      <h3 style={{
      marginTop: '2rem',
      marginBottom: '1rem'
    }}>Example Usage</h3>
      <pre style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderRadius: '4px',
      fontSize: '0.875rem',
      overflow: 'auto'
    }}>
        {\`.my-component {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  color: var(--color-neutral-800, #222);
  border-radius: var(--radius-sm, 2px);
}\`}
      </pre>
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const w=["TypographyComparison","ColorComparison","CSSVariables"];export{s as CSSVariables,i as ColorComparison,l as TypographyComparison,w as __namedExportsOrder,v as default};
