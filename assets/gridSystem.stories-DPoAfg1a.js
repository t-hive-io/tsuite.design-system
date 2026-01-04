import{j as e}from"./jsx-runtime-CgAaftbv.js";import"./iframe-DwqksJCc.js";import"./preload-helper-E_wDBCPD.js";const i={columns:12,containerWidths:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},gutter:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem"},margin:{xs:"1rem",sm:"1.5rem",md:"2rem",lg:"3rem",xl:"4rem"}},W={title:"Foundation/Grid System",parameters:{layout:"padded",docs:{description:{component:"12-column grid system for responsive layouts. Use these container widths, gutters, and margins to create consistent page structures."}},figma:{pageId:"5301:31219",frames:33}}},t={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Container Widths"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#616161",fontSize:"1rem"},children:"Maximum widths for containers at different breakpoints."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:Object.entries(i.containerWidths).map(([r,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx("div",{style:{width:"100px",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:r}),e.jsx("div",{style:{maxWidth:n,width:"100%",height:"60px",backgroundColor:"#1976d2",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"0.875rem",fontWeight:500},children:n}),e.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#9e9e9e"},children:n})]},r))})]})},o={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Grid Columns"}),e.jsxs("p",{style:{marginBottom:"2rem",color:"#616161",fontSize:"1rem"},children:[i.columns,"-column grid system for flexible layouts."]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i.columns}, 1fr)`,gap:"1rem"},children:Array.from({length:i.columns},(r,n)=>e.jsx("div",{style:{backgroundColor:"#e3f2fd",border:"2px solid #1976d2",borderRadius:"0.25rem",padding:"1rem",textAlign:"center",fontSize:"0.875rem",fontWeight:600,color:"#1565c0"},children:n+1},n))}),e.jsxs("div",{style:{marginTop:"3rem"},children:[e.jsx("h2",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:600},children:"Example: 3 Column Layout"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:Array.from({length:3},(r,n)=>e.jsxs("div",{style:{backgroundColor:"#1976d2",borderRadius:"0.5rem",padding:"2rem 1rem",textAlign:"center",color:"white",fontSize:"0.875rem",fontWeight:500},children:["Column ",n+1,e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.75rem",opacity:.8},children:"4 columns wide"})]},n))})]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:600},children:"Example: 2 Column Layout"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:Array.from({length:2},(r,n)=>e.jsxs("div",{style:{backgroundColor:"#1976d2",borderRadius:"0.5rem",padding:"2rem 1rem",textAlign:"center",color:"white",fontSize:"0.875rem",fontWeight:500},children:["Column ",n+1,e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.75rem",opacity:.8},children:"6 columns wide"})]},n))})]})]})},d={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Gutters"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#616161",fontSize:"1rem"},children:"Spacing between columns in the grid system."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:Object.entries(i.gutter).map(([r,n])=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"0.5rem",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:[r," (",n,")"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:n},children:Array.from({length:4},(j,s)=>e.jsxs("div",{style:{backgroundColor:"#1976d2",borderRadius:"0.25rem",padding:"1.5rem 1rem",textAlign:"center",color:"white",fontSize:"0.75rem",fontWeight:500},children:["Col ",s+1]},s))})]},r))})]})},m={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Margins"}),e.jsx("p",{style:{marginBottom:"2rem",color:"#616161",fontSize:"1rem"},children:"Container margins for different screen sizes."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:Object.entries(i.margin).map(([r,n])=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"0.5rem",fontFamily:"monospace",fontSize:"0.875rem",color:"#757575"},children:[r," (",n,")"]}),e.jsx("div",{style:{border:"2px dashed #bdbdbd",borderRadius:"0.5rem",padding:n},children:e.jsxs("div",{style:{backgroundColor:"#1976d2",borderRadius:"0.25rem",padding:"2rem",textAlign:"center",color:"white",fontSize:"0.875rem",fontWeight:500},children:["Content Area",e.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.75rem",opacity:.8},children:["Margin: ",n]})]})})]},r))})]})};var l,a,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Container Widths
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161',
      fontSize: '1rem'
    }}>
        Maximum widths for containers at different breakpoints.
      </p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
        {Object.entries(gridSystem.containerWidths).map(([key, value]) => <div key={key} style={{
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
          maxWidth: value,
          width: '100%',
          height: '60px',
          backgroundColor: '#1976d2',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
              {value}
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
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var g,p,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Grid Columns
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161',
      fontSize: '1rem'
    }}>
        {gridSystem.columns}-column grid system for flexible layouts.
      </p>

      <div style={{
      display: 'grid',
      gridTemplateColumns: \`repeat(\${gridSystem.columns}, 1fr)\`,
      gap: '1rem'
    }}>
        {Array.from({
        length: gridSystem.columns
      }, (_, i) => <div key={i} style={{
        backgroundColor: '#e3f2fd',
        border: '2px solid #1976d2',
        borderRadius: '0.25rem',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#1565c0'
      }}>
            {i + 1}
          </div>)}
      </div>

      <div style={{
      marginTop: '3rem'
    }}>
        <h2 style={{
        marginBottom: '1rem',
        fontSize: '1.25rem',
        fontWeight: 600
      }}>
          Example: 3 Column Layout
        </h2>
        <div style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(3, 1fr)\`,
        gap: '1rem'
      }}>
          {Array.from({
          length: 3
        }, (_, i) => <div key={i} style={{
          backgroundColor: '#1976d2',
          borderRadius: '0.5rem',
          padding: '2rem 1rem',
          textAlign: 'center',
          color: 'white',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
              Column {i + 1}
              <div style={{
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            opacity: 0.8
          }}>
                4 columns wide
              </div>
            </div>)}
        </div>
      </div>

      <div style={{
      marginTop: '2rem'
    }}>
        <h2 style={{
        marginBottom: '1rem',
        fontSize: '1.25rem',
        fontWeight: 600
      }}>
          Example: 2 Column Layout
        </h2>
        <div style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(2, 1fr)\`,
        gap: '1rem'
      }}>
          {Array.from({
          length: 2
        }, (_, i) => <div key={i} style={{
          backgroundColor: '#1976d2',
          borderRadius: '0.5rem',
          padding: '2rem 1rem',
          textAlign: 'center',
          color: 'white',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
              Column {i + 1}
              <div style={{
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            opacity: 0.8
          }}>
                6 columns wide
              </div>
            </div>)}
        </div>
      </div>
    </div>
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var f,h,u;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Gutters
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161',
      fontSize: '1rem'
    }}>
        Spacing between columns in the grid system.
      </p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    }}>
        {Object.entries(gridSystem.gutter).map(([key, value]) => <div key={key}>
            <div style={{
          marginBottom: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#757575'
        }}>
              {key} ({value})
            </div>
            <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: value
        }}>
              {Array.from({
            length: 4
          }, (_, i) => <div key={i} style={{
            backgroundColor: '#1976d2',
            borderRadius: '0.25rem',
            padding: '1.5rem 1rem',
            textAlign: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 500
          }}>
                  Col {i + 1}
                </div>)}
            </div>
          </div>)}
      </div>
    </div>
}`,...(u=(h=d.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,v,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Margins
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161',
      fontSize: '1rem'
    }}>
        Container margins for different screen sizes.
      </p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        {Object.entries(gridSystem.margin).map(([key, value]) => <div key={key}>
            <div style={{
          marginBottom: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#757575'
        }}>
              {key} ({value})
            </div>
            <div style={{
          border: '2px dashed #bdbdbd',
          borderRadius: '0.5rem',
          padding: value
        }}>
              <div style={{
            backgroundColor: '#1976d2',
            borderRadius: '0.25rem',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 500
          }}>
                Content Area
                <div style={{
              marginTop: '0.5rem',
              fontSize: '0.75rem',
              opacity: 0.8
            }}>
                  Margin: {value}
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>
}`,...(S=(v=m.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const k=["ContainerWidths","GridColumns","Gutters","Margins"];export{t as ContainerWidths,o as GridColumns,d as Gutters,m as Margins,k as __namedExportsOrder,W as default};
