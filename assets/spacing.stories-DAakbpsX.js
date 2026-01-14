import{j as e}from"./jsx-runtime-CFsNyc72.js";import{s as p,b as c}from"./spacing-ohoDOx-N.js";import"./iframe-BCk0kPqm.js";import"./preload-helper-E_wDBCPD.js";const x={title:"Foundation/Spacing",parameters:{layout:"padded",figma:{pageId:"5301:31219",frames:33,description:"Property panel examples with grid overlays and spacing guidelines",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5301-31219"}}},r={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Spacing Scale"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#616161"},children:"Use these spacing tokens for consistent padding, margins, and gaps."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.entries(p).map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx("div",{style:{width:"60px",fontFamily:"monospace",fontSize:"0.875rem",fontWeight:600},children:n}),e.jsx("div",{style:{width:i,height:"40px",backgroundColor:"#2196f3",border:"1px solid #1976d2"}}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:i})]},n))})]})},t={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Border Radius"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#616161"},children:"Use these border radius tokens for consistent rounded corners."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"2rem"},children:Object.entries(c).map(([n,i])=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.875rem",fontWeight:600,marginBottom:"0.5rem"},children:n}),e.jsx("div",{style:{width:"120px",height:"120px",backgroundColor:"#2196f3",borderRadius:i,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"monospace",fontSize:"0.75rem"},children:i})]},n))})]})};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Spacing Scale
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161'
    }}>
        Use these spacing tokens for consistent padding, margins, and gaps.
      </p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        {Object.entries(spacing).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
      }}>
            <div style={{
          width: '60px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          fontWeight: 600
        }}>
              {key}
            </div>
            <div style={{
          width: value,
          height: '40px',
          backgroundColor: '#2196f3',
          border: '1px solid #1976d2'
        }} />
            <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#757575'
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Border Radius
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161'
    }}>
        Use these border radius tokens for consistent rounded corners.
      </p>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '2rem'
    }}>
        {Object.entries(borderRadius).map(([key, value]) => <div key={key}>
            <div style={{
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
              {key}
            </div>
            <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#2196f3',
          borderRadius: value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'monospace',
          fontSize: '0.75rem'
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const u=["SpacingScale","BorderRadius"];export{t as BorderRadius,r as SpacingScale,u as __namedExportsOrder,x as default};
