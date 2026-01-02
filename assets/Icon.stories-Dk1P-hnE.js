import{a,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const n=({name:x,category:I})=>a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",padding:"1rem",border:"1px solid #e0e0e0",borderRadius:"8px",fontFamily:"system-ui",minWidth:"150px"},children:[e("div",{style:{fontSize:"2rem"},children:"🔷"}),e("div",{style:{fontSize:"0.75rem",fontWeight:600,textAlign:"center"},children:x}),e("div",{style:{fontSize:"0.625rem",color:"#666"},children:I})]}),A={title:"3. Component Category Pages/Icon",component:n,parameters:{layout:"centered",figma:{pageId:"5193:37078",components:153,totalVariants:623,description:"Largest component collection - most icons are 64×196px with 4 size variants"}},tags:["autodocs"]},r={render:()=>a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(n,{name:"add",category:"Action"}),e(n,{name:"delete",category:"Action"}),e(n,{name:"edit",category:"Action"})]}),name:"Action Icons"},t={render:()=>a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(n,{name:"arrow_drop_down",category:"Navigation"}),e(n,{name:"chevron_right",category:"Navigation"})]}),name:"Navigation Icons"},o={render:()=>a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(n,{name:"warning",category:"Status"}),e(n,{name:"error",category:"Status"}),e(n,{name:"info",category:"Status"})]}),name:"Status Icons"},i={render:()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[a("div",{children:[e("h3",{style:{margin:"0 0 1rem 0",fontFamily:"system-ui"},children:"Action Icons"}),a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(n,{name:"add",category:"Action"}),e(n,{name:"delete",category:"Action"}),e(n,{name:"edit",category:"Action"}),e(n,{name:"copy",category:"Action"})]})]}),a("div",{children:[e("h3",{style:{margin:"0 0 1rem 0",fontFamily:"system-ui"},children:"Navigation Icons"}),a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(n,{name:"arrow_drop_down",category:"Navigation"}),e(n,{name:"chevron_right",category:"Navigation"}),e(n,{name:"expand_more",category:"Navigation"})]})]}),a("div",{children:[e("h3",{style:{margin:"0 0 1rem 0",fontFamily:"system-ui"},children:"Status Icons"}),a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(n,{name:"warning",category:"Status"}),e(n,{name:"error",category:"Status"}),e(n,{name:"info",category:"Status"}),e(n,{name:"check_circle",category:"Status"})]})]})]}),name:"All Variants"};var c,s,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <IconPreview name="add" category="Action" />
      <IconPreview name="delete" category="Action" />
      <IconPreview name="edit" category="Action" />
    </div>,
  name: 'Action Icons'
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var m,l,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <IconPreview name="arrow_drop_down" category="Navigation" />
      <IconPreview name="chevron_right" category="Navigation" />
    </div>,
  name: 'Navigation Icons'
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var y,p,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <IconPreview name="warning" category="Status" />
      <IconPreview name="error" category="Status" />
      <IconPreview name="info" category="Status" />
    </div>,
  name: 'Status Icons'
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,u,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 1rem 0',
        fontFamily: 'system-ui'
      }}>Action Icons</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
          <IconPreview name="add" category="Action" />
          <IconPreview name="delete" category="Action" />
          <IconPreview name="edit" category="Action" />
          <IconPreview name="copy" category="Action" />
        </div>
      </div>
      <div>
        <h3 style={{
        margin: '0 0 1rem 0',
        fontFamily: 'system-ui'
      }}>Navigation Icons</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
          <IconPreview name="arrow_drop_down" category="Navigation" />
          <IconPreview name="chevron_right" category="Navigation" />
          <IconPreview name="expand_more" category="Navigation" />
        </div>
      </div>
      <div>
        <h3 style={{
        margin: '0 0 1rem 0',
        fontFamily: 'system-ui'
      }}>Status Icons</h3>
        <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
          <IconPreview name="warning" category="Status" />
          <IconPreview name="error" category="Status" />
          <IconPreview name="info" category="Status" />
          <IconPreview name="check_circle" category="Status" />
        </div>
      </div>
    </div>,
  name: 'All Variants'
}`,...(w=(u=i.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const P=["ActionIcons","NavigationIcons","StatusIcons","AllVariants"];export{r as ActionIcons,i as AllVariants,t as NavigationIcons,o as StatusIcons,P as __namedExportsOrder,A as default};
