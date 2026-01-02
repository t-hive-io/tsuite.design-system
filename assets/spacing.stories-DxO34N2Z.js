import{a as o,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const p={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem",40:"10rem",48:"12rem",56:"14rem",64:"16rem"},g={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},h={title:"2. Main Pages/Grid system",parameters:{layout:"padded",figma:{pageId:"5301:31219",frames:33,description:"Property panel examples with grid overlays and spacing guidelines"}}},i={render:()=>o("div",{style:{padding:"2rem"},children:[e("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Spacing Scale"}),e("p",{style:{marginBottom:"2rem",color:"#616161"},children:"Use these spacing tokens for consistent padding, margins, and gaps."}),e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.entries(p).map(([n,r])=>o("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e("div",{style:{width:"60px",fontFamily:"monospace",fontSize:"0.875rem",fontWeight:600},children:n}),e("div",{style:{width:r,height:"40px",backgroundColor:"#2196f3",border:"1px solid #1976d2"}}),e("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:r})]},n))})]})},t={render:()=>o("div",{style:{padding:"2rem"},children:[e("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Border Radius"}),e("p",{style:{marginBottom:"2rem",color:"#616161"},children:"Use these border radius tokens for consistent rounded corners."}),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"2rem"},children:Object.entries(g).map(([n,r])=>o("div",{children:[e("div",{style:{fontFamily:"monospace",fontSize:"0.875rem",fontWeight:600,marginBottom:"0.5rem"},children:n}),e("div",{style:{width:"120px",height:"120px",backgroundColor:"#2196f3",borderRadius:r,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"monospace",fontSize:"0.75rem"},children:r})]},n))})]})};var s,a,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>Spacing Scale</h1>
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
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,l,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>Border Radius</h1>
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const u=["SpacingScale","BorderRadius"];export{t as BorderRadius,i as SpacingScale,u as __namedExportsOrder,h as default};
