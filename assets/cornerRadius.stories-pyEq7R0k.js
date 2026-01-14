import{j as e}from"./jsx-runtime-BKjMO183.js";import{b as d}from"./spacing-ohoDOx-N.js";import"./iframe-Ct1a4NYa.js";import"./preload-helper-E_wDBCPD.js";const p={title:"Foundation/Corner radius",parameters:{layout:"padded",docs:{description:{component:"Border radius system for consistent rounded corners across components. Use these values to maintain design consistency."}},figma:{pageId:"5276:39119",frames:1,frameSize:"473×240px",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5276-39119"}}},n={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Corner Radius"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#616161",fontSize:"1rem"},children:"Border radius system for consistent rounded corners across components."}),e.jsx("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:Object.entries(d).map(([r,t])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"120px",height:"120px",backgroundColor:"#1976d2",borderRadius:t,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"0.875rem",fontWeight:500},children:r}),e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#9e9e9e",fontFamily:"monospace"},children:t})]},r))})]})};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Corner Radius
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161',
      fontSize: '1rem'
    }}>
        Border radius system for consistent rounded corners across components.
      </p>

      <div style={{
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap'
    }}>
        {Object.entries(borderRadius).map(([key, value]) => <div key={key} style={{
        textAlign: 'center'
      }}>
            <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#1976d2',
          borderRadius: value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
              {key}
            </div>
            <div style={{
          marginTop: '0.5rem',
          fontSize: '0.75rem',
          color: '#9e9e9e',
          fontFamily: 'monospace'
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const f=["BorderRadiusSystem"];export{n as BorderRadiusSystem,f as __namedExportsOrder,p as default};
