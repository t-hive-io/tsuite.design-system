import{a as o,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const r=({variant:f="default"})=>o("div",{style:{width:"100%",maxWidth:"1200px",height:"60px",backgroundColor:"#1976d2",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 1.5rem",fontFamily:"system-ui",color:"white"},children:[e("div",{style:{fontSize:"1.25rem",fontWeight:600},children:"T-Suite"}),o("div",{style:{display:"flex",gap:"1rem"},children:[e("button",{style:{padding:"0.5rem 1rem",backgroundColor:"rgba(255,255,255,0.2)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Menu"}),e("button",{style:{padding:"0.5rem 1rem",backgroundColor:"rgba(255,255,255,0.2)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"User"})]})]}),h={title:"3. Component Category Pages/UI shell header",component:r,parameters:{layout:"fullscreen",figma:{pageId:"5193:36713",components:1,totalVariants:2}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","alternate"],description:"Header variant"}}},a={render:()=>e(r,{variant:"default"})},t={render:()=>e(r,{variant:"alternate"})},n={render:()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(r,{variant:"default"}),e(r,{variant:"alternate"})]}),name:"All Variants"};var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <TopBar variant="default" />
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TopBar variant="alternate" />
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <TopBar variant="default" />
      <TopBar variant="alternate" />
    </div>,
  name: 'All Variants'
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const x=["Default","Variant2","AllVariants"];export{n as AllVariants,a as Default,t as Variant2,x as __namedExportsOrder,h as default};
