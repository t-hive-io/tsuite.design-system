import{j as e}from"./jsx-runtime-BKjMO183.js";import{r as v,b as s}from"./iframe-Ct1a4NYa.js";import"./preload-helper-E_wDBCPD.js";const S={title:"Foundation/Design Tokens",parameters:{layout:"padded",docs:{description:{component:"Multi-brand theme system with support for TMHE, Vanderlande, Bastian Solutions, and White-label. Each brand has unique Primary and Brand colors while sharing Neutral colors."}}}},h=({color:r,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"},children:[e.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:r,border:"1px solid #e0e0e0",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:600,fontSize:"0.875rem"},children:i}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:r})]})]}),l=({theme:r})=>{const i=s[r];return e.jsxs("div",{style:{padding:"2rem",border:"2px solid #e0e0e0",borderRadius:"12px",marginBottom:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1.5rem",textTransform:"capitalize"},children:r.replace(/-/g," ")}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Primary"}),Object.entries(i.colors).filter(([t])=>t.startsWith("Primary/")).map(([t,n])=>e.jsx(h,{color:n,name:t.replace("Primary/","")},t))]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Brand"}),Object.entries(i.colors).filter(([t])=>t.startsWith("Brand/")).map(([t,n])=>e.jsx(h,{color:n,name:t.replace("Brand/","")},t))]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Neutral"}),Object.entries(i.colors).filter(([t])=>t.startsWith("Neutral/")).slice(0,6).map(([t,n])=>e.jsx(h,{color:n,name:t.replace("Neutral/","")},t))]})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Border Radius"}),e.jsx("div",{style:{display:"flex",gap:"1rem"},children:Object.entries(i.radius).map(([t,n])=>e.jsxs("div",{style:{padding:"1rem",border:"2px solid #e0e0e0",borderRadius:n,minWidth:"100px",textAlign:"center"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:t}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:n})]},t))})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Typography"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#757575"},children:"Font Families"}),Object.entries(i.font.family).map(([t,n])=>e.jsxs("div",{style:{marginBottom:"0.5rem"},children:[e.jsx("div",{style:{fontFamily:n,fontSize:"1rem"},children:t}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:n})]},t))]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#757575"},children:"Font Weights"}),Object.entries(i.font.weight).map(([t,n])=>e.jsxs("div",{style:{marginBottom:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:n},children:t}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:n})]},t))]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#757575"},children:"Font Sizes"}),Object.entries(i.font.size).map(([t,n])=>e.jsxs("div",{style:{marginBottom:"0.5rem"},children:[e.jsx("div",{style:{fontSize:`${n}px`},children:t}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:[n,"px"]})]},t))]})]})]})]})},d={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem"},children:"Multi-Brand Theme System"}),e.jsx("p",{style:{marginBottom:"3rem",color:"#616161"},children:"Design tokens exported from Figma Variables with support for 4 different brands. Each brand maintains consistent naming while providing unique brand identities."}),e.jsx(l,{theme:"tmhe"}),e.jsx(l,{theme:"vanderlande"}),e.jsx(l,{theme:"bastian-solutions"}),e.jsx(l,{theme:"white-label"})]})},a={render:()=>{const[r,i]=v.useState("tmhe"),t=s[r];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem"},children:"Interactive Theme Switcher"}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("label",{style:{marginRight:"1rem",fontWeight:600},children:"Select Brand:"}),e.jsxs("select",{value:r,onChange:n=>i(n.target.value),style:{padding:"0.5rem 1rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #e0e0e0"},children:[e.jsx("option",{value:"tmhe",children:"TMHE"}),e.jsx("option",{value:"vanderlande",children:"Vanderlande"}),e.jsx("option",{value:"bastian-solutions",children:"Bastian Solutions"}),e.jsx("option",{value:"white-label",children:"White Label"})]})]}),e.jsxs("div",{style:{padding:"3rem",background:`linear-gradient(135deg, ${t.colors["Primary/Primary 500"]} 0%, ${t.colors["Brand/Brand 600"]} 100%)`,borderRadius:"12px",color:"white",marginBottom:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1rem",textTransform:"capitalize"},children:r.replace(/-/g," ")}),e.jsx("p",{children:"Experience our design system with dynamic brand theming"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:["Primary/Primary 500","Brand/Brand 700","Neutral/Neutral 800"].map(n=>e.jsxs("div",{style:{padding:"2rem",backgroundColor:t.colors[n],color:n.includes("Neutral")?"#fff":"#000",borderRadius:"8px",textAlign:"center"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:n.split("/")[1]}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",opacity:.8},children:t.colors[n]})]},n))})]})}},m={render:()=>{const r=["tmhe","vanderlande","bastian-solutions","white-label"],i=["Primary/Primary 500","Brand/Brand 700","Brand/Brand 600"];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem"},children:"Brand Token Comparison"}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Colors"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"3rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),r.map(t=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:t.replace(/-/g," ")},t))]})}),e.jsx("tbody",{children:i.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:t.split("/")[1]}),r.map(n=>{const o=s[n].colors[t];return e.jsx("td",{style:{padding:"1rem",textAlign:"center"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:o,borderRadius:"6px",border:"1px solid #e0e0e0"}}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem"},children:o})]})},n)})]},t))})]}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Border Radius"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"3rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),r.map(t=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:t.replace(/-/g," ")},t))]})}),e.jsx("tbody",{children:Object.keys(s.tmhe.radius).map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:t}),r.map(n=>{const o=s[n].radius[t];return e.jsx("td",{style:{padding:"1rem",textAlign:"center"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:"#f0f0f0",borderRadius:o,border:"2px solid #e0e0e0"}}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem"},children:o})]})},n)})]},t))})]}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Font Families"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"3rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),r.map(t=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:t.replace(/-/g," ")},t))]})}),e.jsx("tbody",{children:Object.keys(s.tmhe.font.family).map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:t}),r.map(n=>{const o=s[n].font.family[t];return e.jsxs("td",{style:{padding:"1rem",textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:o,fontSize:"1rem"},children:"The quick brown fox"}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575",marginTop:"0.25rem"},children:o})]},n)})]},t))})]}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Font Sizes"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),r.map(t=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:t.replace(/-/g," ")},t))]})}),e.jsx("tbody",{children:Object.keys(s.tmhe.font.size).map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:t}),r.map(n=>{const o=s[n].font.size[t];return e.jsxs("td",{style:{padding:"1rem",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:`${o}px`},children:"Aa"}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575",marginTop:"0.25rem"},children:[o,"px"]})]},n)})]},t))})]})]})}};var c,p,y;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem'
    }}>Multi-Brand Theme System</h1>
      <p style={{
      marginBottom: '3rem',
      color: '#616161'
    }}>
        Design tokens exported from Figma Variables with support for 4 different
        brands. Each brand maintains consistent naming while providing unique
        brand identities.
      </p>

      <ThemeShowcase theme="tmhe" />
      <ThemeShowcase theme="vanderlande" />
      <ThemeShowcase theme="bastian-solutions" />
      <ThemeShowcase theme="white-label" />
    </div>
}`,...(y=(p=d.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [selectedTheme, setSelectedTheme] = useState<BrandTheme>('tmhe');
    const tokens = brandTokens[selectedTheme];
    return <div style={{
      padding: '2rem'
    }}>
        <h1 style={{
        marginBottom: '2rem'
      }}>Interactive Theme Switcher</h1>

        <div style={{
        marginBottom: '2rem'
      }}>
          <label style={{
          marginRight: '1rem',
          fontWeight: 600
        }}>
            Select Brand:
          </label>
          <select value={selectedTheme} onChange={e => setSelectedTheme(e.target.value as BrandTheme)} style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          borderRadius: '4px',
          border: '1px solid #e0e0e0'
        }}>
            <option value="tmhe">TMHE</option>
            <option value="vanderlande">Vanderlande</option>
            <option value="bastian-solutions">Bastian Solutions</option>
            <option value="white-label">White Label</option>
          </select>
        </div>

        <div style={{
        padding: '3rem',
        background: \`linear-gradient(135deg, \${tokens.colors['Primary/Primary 500']} 0%, \${tokens.colors['Brand/Brand 600']} 100%)\`,
        borderRadius: '12px',
        color: 'white',
        marginBottom: '2rem'
      }}>
          <h2 style={{
          marginBottom: '1rem',
          textTransform: 'capitalize'
        }}>
            {selectedTheme.replace(/-/g, ' ')}
          </h2>
          <p>Experience our design system with dynamic brand theming</p>
        </div>

        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}>
          {['Primary/Primary 500', 'Brand/Brand 700', 'Neutral/Neutral 800'].map(key => <div key={key} style={{
          padding: '2rem',
          backgroundColor: tokens.colors[key as keyof typeof tokens.colors],
          color: key.includes('Neutral') ? '#fff' : '#000',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
              <div style={{
            fontWeight: 600,
            marginBottom: '0.5rem'
          }}>
                {key.split('/')[1]}
              </div>
              <div style={{
            fontFamily: 'monospace',
            fontSize: '0.75rem',
            opacity: 0.8
          }}>
                {tokens.colors[key as keyof typeof tokens.colors]}
              </div>
            </div>)}
        </div>
      </div>;
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,j,u;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const themes: BrandTheme[] = ['tmhe', 'vanderlande', 'bastian-solutions', 'white-label'];
    const colorKeys = ['Primary/Primary 500', 'Brand/Brand 700', 'Brand/Brand 600'] as const;
    return <div style={{
      padding: '2rem'
    }}>
        <h1 style={{
        marginBottom: '2rem'
      }}>Brand Token Comparison</h1>

        {/* Colors Comparison */}
        <h2 style={{
        marginTop: '2rem',
        marginBottom: '1rem',
        fontSize: '1.25rem'
      }}>
          Colors
        </h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '3rem'
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #e0e0e0'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '1rem'
            }}>Token</th>
              {themes.map(theme => <th key={theme} style={{
              textAlign: 'center',
              padding: '1rem',
              textTransform: 'capitalize'
            }}>
                  {theme.replace(/-/g, ' ')}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {colorKeys.map(key => <tr key={key} style={{
            borderBottom: '1px solid #f0f0f0'
          }}>
                <td style={{
              padding: '1rem',
              fontWeight: 600
            }}>
                  {key.split('/')[1]}
                </td>
                {themes.map(theme => {
              const color = brandTokens[theme].colors[key];
              return <td key={theme} style={{
                padding: '1rem',
                textAlign: 'center'
              }}>
                      <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                        <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: color,
                    borderRadius: '6px',
                    border: '1px solid #e0e0e0'
                  }} />
                        <div style={{
                    fontFamily: 'monospace',
                    fontSize: '0.75rem'
                  }}>
                          {color}
                        </div>
                      </div>
                    </td>;
            })}
              </tr>)}
          </tbody>
        </table>

        {/* Border Radius Comparison */}
        <h2 style={{
        marginTop: '2rem',
        marginBottom: '1rem',
        fontSize: '1.25rem'
      }}>
          Border Radius
        </h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '3rem'
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #e0e0e0'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '1rem'
            }}>Token</th>
              {themes.map(theme => <th key={theme} style={{
              textAlign: 'center',
              padding: '1rem',
              textTransform: 'capitalize'
            }}>
                  {theme.replace(/-/g, ' ')}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {Object.keys(brandTokens.tmhe.radius).map(key => <tr key={key} style={{
            borderBottom: '1px solid #f0f0f0'
          }}>
                <td style={{
              padding: '1rem',
              fontWeight: 600
            }}>{key}</td>
                {themes.map(theme => {
              const value = brandTokens[theme].radius[key as keyof typeof brandTokens.tmhe.radius];
              return <td key={theme} style={{
                padding: '1rem',
                textAlign: 'center'
              }}>
                      <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                        <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: value,
                    border: '2px solid #e0e0e0'
                  }} />
                        <div style={{
                    fontFamily: 'monospace',
                    fontSize: '0.75rem'
                  }}>
                          {value}
                        </div>
                      </div>
                    </td>;
            })}
              </tr>)}
          </tbody>
        </table>

        {/* Font Family Comparison */}
        <h2 style={{
        marginTop: '2rem',
        marginBottom: '1rem',
        fontSize: '1.25rem'
      }}>
          Font Families
        </h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '3rem'
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #e0e0e0'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '1rem'
            }}>Token</th>
              {themes.map(theme => <th key={theme} style={{
              textAlign: 'center',
              padding: '1rem',
              textTransform: 'capitalize'
            }}>
                  {theme.replace(/-/g, ' ')}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {Object.keys(brandTokens.tmhe.font.family).map(key => <tr key={key} style={{
            borderBottom: '1px solid #f0f0f0'
          }}>
                <td style={{
              padding: '1rem',
              fontWeight: 600
            }}>{key}</td>
                {themes.map(theme => {
              const value = brandTokens[theme].font.family[key as keyof typeof brandTokens.tmhe.font.family];
              return <td key={theme} style={{
                padding: '1rem',
                textAlign: 'center'
              }}>
                      <div style={{
                  fontFamily: value,
                  fontSize: '1rem'
                }}>
                        The quick brown fox
                      </div>
                      <div style={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  color: '#757575',
                  marginTop: '0.25rem'
                }}>
                        {value}
                      </div>
                    </td>;
            })}
              </tr>)}
          </tbody>
        </table>

        {/* Font Sizes Comparison */}
        <h2 style={{
        marginTop: '2rem',
        marginBottom: '1rem',
        fontSize: '1.25rem'
      }}>
          Font Sizes
        </h2>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #e0e0e0'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '1rem'
            }}>Token</th>
              {themes.map(theme => <th key={theme} style={{
              textAlign: 'center',
              padding: '1rem',
              textTransform: 'capitalize'
            }}>
                  {theme.replace(/-/g, ' ')}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {Object.keys(brandTokens.tmhe.font.size).map(key => <tr key={key} style={{
            borderBottom: '1px solid #f0f0f0'
          }}>
                <td style={{
              padding: '1rem',
              fontWeight: 600
            }}>{key}</td>
                {themes.map(theme => {
              const value = brandTokens[theme].font.size[key as keyof typeof brandTokens.tmhe.font.size];
              return <td key={theme} style={{
                padding: '1rem',
                textAlign: 'center'
              }}>
                      <div style={{
                  fontSize: \`\${value}px\`
                }}>Aa</div>
                      <div style={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  color: '#757575',
                  marginTop: '0.25rem'
                }}>
                        {value}px
                      </div>
                    </td>;
            })}
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(u=(j=m.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};const z=["AllBrands","ThemeSwitcher","ComparisonTable"];export{d as AllBrands,m as ComparisonTable,a as ThemeSwitcher,z as __namedExportsOrder,S as default};
