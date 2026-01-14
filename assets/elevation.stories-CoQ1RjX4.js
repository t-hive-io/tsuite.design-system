import{j as e}from"./jsx-runtime-CpTjcqpB.js";import"./iframe-2ir--V1I.js";import"./preload-helper-E_wDBCPD.js";const s={none:"none",level0:"0 0 0 rgba(0,0,0,0)",level1:"0 1px 2px rgba(0,0,0,0.06)",level2:"0 2px 4px rgba(0,0,0,0.07)",level3:"0 3px 6px rgba(0,0,0,0.08)",level4:"0 4px 8px rgba(0,0,0,0.09)",level6:"0 6px 12px rgba(0,0,0,0.11)",level8:"0 8px 16px rgba(0,0,0,0.13)",level12:"0 12px 24px rgba(0,0,0,0.17)",level16:"0 16px 32px rgba(0,0,0,0.21)",level24:"0 24px 48px rgba(0,0,0,0.29)"},m={title:"Foundation/Elevation",parameters:{layout:"padded",docs:{description:{component:"Shadow system for creating depth and hierarchy in UI components. Use these elevation levels to establish visual importance and layering."}},figma:{pageId:"5267:23379",frames:1,frameSize:"1046×487px",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5267-23379"}}},t={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Elevation"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#616161",fontSize:"1rem"},children:"Shadows system showing different elevation levels for UI components."}),e.jsx("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:Object.entries(s).filter(([n])=>n!=="none").map(([n,l])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"120px",height:"120px",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e0e0e0",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:l},children:e.jsx("span",{style:{fontSize:"0.875rem",color:"#666",fontWeight:500},children:n})}),e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#9e9e9e",fontFamily:"monospace"},children:n})]},n))})]})};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Elevation
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161',
      fontSize: '1rem'
    }}>
        Shadows system showing different elevation levels for UI components.
      </p>

      <div style={{
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap'
    }}>
        {Object.entries(elevation).filter(([key]) => key !== 'none').map(([key, value]) => <div key={key} style={{
        textAlign: 'center'
      }}>
              <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          border: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: value
        }}>
                <span style={{
            fontSize: '0.875rem',
            color: '#666',
            fontWeight: 500
          }}>
                  {key}
                </span>
              </div>
              <div style={{
          marginTop: '0.5rem',
          fontSize: '0.75rem',
          color: '#9e9e9e',
          fontFamily: 'monospace'
        }}>
                {key}
              </div>
            </div>)}
      </div>
    </div>
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["ShadowsSystem"];export{t as ShadowsSystem,x as __namedExportsOrder,m as default};
