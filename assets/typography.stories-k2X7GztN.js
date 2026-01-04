import{j as e}from"./jsx-runtime-CgAaftbv.js";import"./iframe-DwqksJCc.js";import"./preload-helper-E_wDBCPD.js";const l={fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeight:{light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},lineHeight:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"}},b={title:"Foundation/Typography",parameters:{layout:"padded",docs:{description:{component:"Typography system including font sizes, weights, line heights, and letter spacing. Use these tokens for consistent text styling across the application."}},figma:{pageId:"5168:44044",frames:1,frameSize:"1393×1542px"}}},t={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Font Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Object.entries(l.fontSize).map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx("div",{style:{width:"100px",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:n}),e.jsx("div",{style:{fontSize:i},children:"The quick brown fox jumps over the lazy dog"}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#9e9e9e"},children:i})]},n))})]})},o={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Font Weights"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Object.entries(l.fontWeight).map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx("div",{style:{width:"100px",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:n}),e.jsx("div",{style:{fontWeight:i,fontSize:"1.125rem"},children:"The quick brown fox jumps over the lazy dog"}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#9e9e9e"},children:i})]},n))})]})},r={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Line Heights"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:Object.entries(l.lineHeight).map(([n,i])=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.875rem",color:"#757575",marginBottom:"0.5rem"},children:[n," (",i,")"]}),e.jsx("div",{style:{lineHeight:i,border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"0.375rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."})]},n))})]})},s={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Letter Spacing"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Object.entries(l.letterSpacing).map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx("div",{style:{width:"100px",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:n}),e.jsx("div",{style:{letterSpacing:i,fontSize:"1.125rem"},children:"The quick brown fox jumps over the lazy dog"}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#9e9e9e"},children:i})]},n))})]})};var m,d,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Font Sizes
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
        {Object.entries(typography.fontSize).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
      }}>
            <div style={{
          width: '100px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#757575'
        }}>
              {key}
            </div>
            <div style={{
          fontSize: value
        }}>
              The quick brown fox jumps over the lazy dog
            </div>
            <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#9e9e9e'
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(a=(d=t.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};var c,p,y;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Font Weights
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
        {Object.entries(typography.fontWeight).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
      }}>
            <div style={{
          width: '100px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#757575'
        }}>
              {key}
            </div>
            <div style={{
          fontWeight: value,
          fontSize: '1.125rem'
        }}>
              The quick brown fox jumps over the lazy dog
            </div>
            <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#9e9e9e'
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Line Heights
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        {Object.entries(typography.lineHeight).map(([key, value]) => <div key={key}>
            <div style={{
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#757575',
          marginBottom: '0.5rem'
        }}>
              {key} ({value})
            </div>
            <div style={{
          lineHeight: value,
          border: '1px solid #e0e0e0',
          padding: '1rem',
          borderRadius: '0.375rem'
        }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
          </div>)}
      </div>
    </div>
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,x,u;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Letter Spacing
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
        {Object.entries(typography.letterSpacing).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
      }}>
            <div style={{
          width: '100px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#757575'
        }}>
              {key}
            </div>
            <div style={{
          letterSpacing: value,
          fontSize: '1.125rem'
        }}>
              The quick brown fox jumps over the lazy dog
            </div>
            <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#9e9e9e'
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const F=["FontSizes","FontWeights","LineHeights","LetterSpacing"];export{t as FontSizes,o as FontWeights,s as LetterSpacing,r as LineHeights,F as __namedExportsOrder,b as default};
