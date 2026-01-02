import{a as t,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const d={fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeight:{light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},lineHeight:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"}},F={title:"2. Main Pages/Typography",parameters:{layout:"padded",figma:{pageId:"5168:44044",frames:1,frameSize:"1393×1542px"}}},r={render:()=>t("div",{style:{padding:"2rem"},children:[e("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Font Sizes"}),e("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Object.entries(d.fontSize).map(([n,i])=>t("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e("div",{style:{width:"100px",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:n}),e("div",{style:{fontSize:i},children:"The quick brown fox jumps over the lazy dog"}),e("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#9e9e9e"},children:i})]},n))})]})},o={render:()=>t("div",{style:{padding:"2rem"},children:[e("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Font Weights"}),e("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Object.entries(d.fontWeight).map(([n,i])=>t("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e("div",{style:{width:"100px",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:n}),e("div",{style:{fontWeight:i,fontSize:"1.125rem"},children:"The quick brown fox jumps over the lazy dog"}),e("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#9e9e9e"},children:i})]},n))})]})},l={render:()=>t("div",{style:{padding:"2rem"},children:[e("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Line Heights"}),e("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:Object.entries(d.lineHeight).map(([n,i])=>t("div",{children:[t("div",{style:{fontFamily:"monospace",fontSize:"0.875rem",color:"#757575",marginBottom:"0.5rem"},children:[n," (",i,")"]}),e("div",{style:{lineHeight:i,border:"1px solid #e0e0e0",padding:"1rem",borderRadius:"0.375rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."})]},n))})]})},m={render:()=>t("div",{style:{padding:"2rem"},children:[e("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Letter Spacing"}),e("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Object.entries(d.letterSpacing).map(([n,i])=>t("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e("div",{style:{width:"100px",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:n}),e("div",{style:{letterSpacing:i,fontSize:"1.125rem"},children:"The quick brown fox jumps over the lazy dog"}),e("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#9e9e9e"},children:i})]},n))})]})};var a,s,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>Font Sizes</h1>
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,y,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>Font Weights</h1>
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
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,f,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>Line Heights</h1>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
          </div>)}
      </div>
    </div>
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var u,x,S;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>Letter Spacing</h1>
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
}`,...(S=(x=m.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const k=["FontSizes","FontWeights","LineHeights","LetterSpacing"];export{r as FontSizes,o as FontWeights,m as LetterSpacing,l as LineHeights,k as __namedExportsOrder,F as default};
