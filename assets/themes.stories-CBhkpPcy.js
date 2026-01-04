import{j as e}from"./jsx-runtime-DQi6FYqY.js";import{r as F}from"./iframe-BivpKxWP.js";import"./preload-helper-E_wDBCPD.js";const j={colors:{"Brand/Brand 800":"#5E000F","Brand/Brand 700":"#8C0017","Brand/Brand 600":"#BB001E","Brand/Brand 500":"#CC4056","Brand/Brand 400":"#DD808F","Brand/Brand 100":"#EEBFC7","Primary/Primary 800":"#2B2D42","Primary/Primary 700":"#383A53","Primary/Primary 600":"#535470","Primary/Primary 500":"#74748F","Primary/Primary 400":"#A2A2BB","Primary/Primary 300":"#CBCBDE","Primary/Primary 200":"#EDEDF5","Neutral/Neutral 800":"#222222","Neutral/Neutral 700":"#808080","Neutral/Neutral 600":"#B3B3B3","Neutral/Neutral 500":"#D9D9D9","Neutral/Neutral 400":"#E6E6E6","Neutral/Neutral 300":"#F7F7F7","Neutral/Neutral 200":"#FCFCFC","Neutral/Neutral 100":"#FFFFFF","Neutral/Neutral 50":"#222222"},radius:{sm:"2px",md:"4px"},font:{family:{Title:"Titillium Web",Body:"Titillium Web"},weight:{Regular:"Regular",Normal:"Normal",Medium:"Medium",Semibold:"Semibold"},size:{xxxs:10,xxs:12,xs:14,sm:16,md:18,lg:28}}},v={colors:{"Brand/Brand 800":"#5E000F","Brand/Brand 700":"#8C0017","Brand/Brand 600":"#BB001E","Brand/Brand 500":"#CC4056","Brand/Brand 400":"#DD808F","Brand/Brand 100":"#EEBFC7","Primary/Primary 800":"#BF620D","Primary/Primary 700":"#EF7B10","Primary/Primary 600":"#F29540","Primary/Primary 500":"#F8C596","Primary/Primary 400":"#FCE5CF","Primary/Primary 300":"#FDEDDE","Primary/Primary 200":"#FEFAF5","Neutral/Neutral 800":"#222222","Neutral/Neutral 700":"#808080","Neutral/Neutral 600":"#B3B3B3","Neutral/Neutral 500":"#D9D9D9","Neutral/Neutral 400":"#E6E6E6","Neutral/Neutral 300":"#F7F7F7","Neutral/Neutral 200":"#FCFCFC","Neutral/Neutral 100":"#FFFFFF","Neutral/Neutral 50":"#222222"},radius:{sm:"2px",md:"4px"},font:{family:{Title:"Inter",Body:"Inter"},weight:{Regular:"String value",Normal:"Normal",Medium:"Medium",Semibold:"Semibold"},size:{xxxs:10,xxs:12,xs:14,sm:16,md:18,lg:28}}},T={colors:{"Brand/Brand 800":"#002052","Brand/Brand 700":"#002D72","Brand/Brand 600":"#004DC2","Brand/Brand 500":"#B2D1FF","Brand/Brand 400":"#DBE9FF","Brand/Brand 100":"#F5F9FF","Primary/Primary 800":"#004485","Primary/Primary 700":"#005EB8","Primary/Primary 600":"#0078EB","Primary/Primary 500":"#1F91FF","Primary/Primary 400":"#85C3FF","Primary/Primary 300":"#DBEDFF","Primary/Primary 200":"#F5FAFF","Neutral/Neutral 800":"#222222","Neutral/Neutral 700":"#808080","Neutral/Neutral 600":"#B3B3B3","Neutral/Neutral 500":"#D9D9D9","Neutral/Neutral 400":"#E6E6E6","Neutral/Neutral 300":"#F7F7F7","Neutral/Neutral 200":"#FCFCFC","Neutral/Neutral 100":"#FFFFFF","Neutral/Neutral 50":"#222222"},radius:{sm:"2px",md:"4px"},font:{family:{Title:"Inter",Body:"Inter"},weight:{Regular:"Regular",Normal:"Normal",Medium:"Medium",Semibold:"Semibold"},size:{xxxs:10,xxs:12,xs:14,sm:16,md:18,lg:28}}},N={colors:{"Brand/Brand 800":"#F2A900","Brand/Brand 700":"#FFC338","Brand/Brand 600":"#FFDD8F","Brand/Brand 500":"#FFE8B2","Brand/Brand 400":"#FFF4DB","Brand/Brand 100":"#FFFCF5","Primary/Primary 800":"#DA0C8E","Primary/Primary 700":"#F325A7","Primary/Primary 600":"#F656BB","Primary/Primary 500":"#F995D4","Primary/Primary 400":"#FCCFEC","Primary/Primary 300":"#FDE2F3","Primary/Primary 200":"#FEF5FB","Neutral/Neutral 800":"#222222","Neutral/Neutral 700":"#808080","Neutral/Neutral 600":"#B3B3B3","Neutral/Neutral 500":"#D9D9D9","Neutral/Neutral 400":"#E6E6E6","Neutral/Neutral 300":"#F7F7F7","Neutral/Neutral 200":"#FCFCFC","Neutral/Neutral 100":"#FFFFFF","Neutral/Neutral 50":"#222222"},radius:{sm:"2px",md:"4px"},font:{family:{Title:"Inter",Body:"Inter"},weight:{Regular:"Regular",Normal:"Normal",Medium:"Medium",Semibold:"Semibold"},size:{xxxs:10,xxs:12,xs:14,sm:16,md:18,lg:28}}},o={tmhe:j,vanderlande:v,"bastian-solutions":T,"white-label":N},C={title:"Foundation/Design Tokens",parameters:{layout:"padded",docs:{description:{component:"Multi-brand theme system with support for TMHE, Vanderlande, Bastian Solutions, and White-label. Each brand has unique Primary and Brand colors while sharing Neutral colors."}}}},h=({color:n,name:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"},children:[e.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:n,border:"1px solid #e0e0e0",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:600,fontSize:"0.875rem"},children:i}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:n})]})]}),l=({theme:n})=>{const i=o[n];return e.jsxs("div",{style:{padding:"2rem",border:"2px solid #e0e0e0",borderRadius:"12px",marginBottom:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1.5rem",textTransform:"capitalize"},children:n.replace(/-/g," ")}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Primary"}),Object.entries(i.colors).filter(([r])=>r.startsWith("Primary/")).map(([r,t])=>e.jsx(h,{color:t,name:r.replace("Primary/","")},r))]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Brand"}),Object.entries(i.colors).filter(([r])=>r.startsWith("Brand/")).map(([r,t])=>e.jsx(h,{color:t,name:r.replace("Brand/","")},r))]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Neutral"}),Object.entries(i.colors).filter(([r])=>r.startsWith("Neutral/")).slice(0,6).map(([r,t])=>e.jsx(h,{color:t,name:r.replace("Neutral/","")},r))]})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Border Radius"}),e.jsx("div",{style:{display:"flex",gap:"1rem"},children:Object.entries(i.radius).map(([r,t])=>e.jsxs("div",{style:{padding:"1rem",border:"2px solid #e0e0e0",borderRadius:t,minWidth:"100px",textAlign:"center"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:r}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:t})]},r))})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1rem",fontWeight:600},children:"Typography"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#757575"},children:"Font Families"}),Object.entries(i.font.family).map(([r,t])=>e.jsxs("div",{style:{marginBottom:"0.5rem"},children:[e.jsx("div",{style:{fontFamily:t,fontSize:"1rem"},children:r}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:t})]},r))]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#757575"},children:"Font Weights"}),Object.entries(i.font.weight).map(([r,t])=>e.jsxs("div",{style:{marginBottom:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:t},children:r}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:t})]},r))]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#757575"},children:"Font Sizes"}),Object.entries(i.font.size).map(([r,t])=>e.jsxs("div",{style:{marginBottom:"0.5rem"},children:[e.jsx("div",{style:{fontSize:`${t}px`},children:r}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:[t,"px"]})]},r))]})]})]})]})},s={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem"},children:"Multi-Brand Theme System"}),e.jsx("p",{style:{marginBottom:"3rem",color:"#616161"},children:"Design tokens exported from Figma Variables with support for 4 different brands. Each brand maintains consistent naming while providing unique brand identities."}),e.jsx(l,{theme:"tmhe"}),e.jsx(l,{theme:"vanderlande"}),e.jsx(l,{theme:"bastian-solutions"}),e.jsx(l,{theme:"white-label"})]})},d={render:()=>{const[n,i]=F.useState("tmhe"),r=o[n];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem"},children:"Interactive Theme Switcher"}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("label",{style:{marginRight:"1rem",fontWeight:600},children:"Select Brand:"}),e.jsxs("select",{value:n,onChange:t=>i(t.target.value),style:{padding:"0.5rem 1rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #e0e0e0"},children:[e.jsx("option",{value:"tmhe",children:"TMHE"}),e.jsx("option",{value:"vanderlande",children:"Vanderlande"}),e.jsx("option",{value:"bastian-solutions",children:"Bastian Solutions"}),e.jsx("option",{value:"white-label",children:"White Label"})]})]}),e.jsxs("div",{style:{padding:"3rem",background:`linear-gradient(135deg, ${r.colors["Primary/Primary 500"]} 0%, ${r.colors["Brand/Brand 600"]} 100%)`,borderRadius:"12px",color:"white",marginBottom:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1rem",textTransform:"capitalize"},children:n.replace(/-/g," ")}),e.jsx("p",{children:"Experience our design system with dynamic brand theming"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:["Primary/Primary 500","Brand/Brand 700","Neutral/Neutral 800"].map(t=>e.jsxs("div",{style:{padding:"2rem",backgroundColor:r.colors[t],color:t.includes("Neutral")?"#fff":"#000",borderRadius:"8px",textAlign:"center"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:t.split("/")[1]}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",opacity:.8},children:r.colors[t]})]},t))})]})}},m={render:()=>{const n=["tmhe","vanderlande","bastian-solutions","white-label"],i=["Primary/Primary 500","Brand/Brand 700","Brand/Brand 600"];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem"},children:"Brand Token Comparison"}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Colors"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"3rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),n.map(r=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:r.replace(/-/g," ")},r))]})}),e.jsx("tbody",{children:i.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:r.split("/")[1]}),n.map(t=>{const a=o[t].colors[r];return e.jsx("td",{style:{padding:"1rem",textAlign:"center"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:a,borderRadius:"6px",border:"1px solid #e0e0e0"}}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem"},children:a})]})},t)})]},r))})]}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Border Radius"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"3rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),n.map(r=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:r.replace(/-/g," ")},r))]})}),e.jsx("tbody",{children:Object.keys(o.tmhe.radius).map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:r}),n.map(t=>{const a=o[t].radius[r];return e.jsx("td",{style:{padding:"1rem",textAlign:"center"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:"#f0f0f0",borderRadius:a,border:"2px solid #e0e0e0"}}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem"},children:a})]})},t)})]},r))})]}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Font Families"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"3rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),n.map(r=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:r.replace(/-/g," ")},r))]})}),e.jsx("tbody",{children:Object.keys(o.tmhe.font.family).map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:r}),n.map(t=>{const a=o[t].font.family[r];return e.jsxs("td",{style:{padding:"1rem",textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:a,fontSize:"1rem"},children:"The quick brown fox"}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575",marginTop:"0.25rem"},children:a})]},t)})]},r))})]}),e.jsx("h2",{style:{marginTop:"2rem",marginBottom:"1rem",fontSize:"1.25rem"},children:"Font Sizes"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"1rem"},children:"Token"}),n.map(r=>e.jsx("th",{style:{textAlign:"center",padding:"1rem",textTransform:"capitalize"},children:r.replace(/-/g," ")},r))]})}),e.jsx("tbody",{children:Object.keys(o.tmhe.font.size).map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"1rem",fontWeight:600},children:r}),n.map(t=>{const a=o[t].font.size[r];return e.jsxs("td",{style:{padding:"1rem",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:`${a}px`},children:"Aa"}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575",marginTop:"0.25rem"},children:[a,"px"]})]},t)})]},r))})]})]})}};var c,y,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(y=s.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var x,g,u;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(u=(g=d.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,B,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(B=m.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const z=["AllBrands","ThemeSwitcher","ComparisonTable"];export{s as AllBrands,m as ComparisonTable,d as ThemeSwitcher,z as __namedExportsOrder,C as default};
