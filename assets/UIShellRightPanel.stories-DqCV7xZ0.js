import{a as o,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const r=({section:b="Properties"})=>o("div",{style:{width:"360px",height:"600px",backgroundColor:"#fafafa",border:"1px solid #e0e0e0",borderRadius:"4px",fontFamily:"system-ui",display:"flex",flexDirection:"column"},children:[e("div",{style:{padding:"1rem",borderBottom:"1px solid #e0e0e0",backgroundColor:"white",fontWeight:600},children:b}),o("div",{style:{flex:1,padding:"1rem",overflow:"auto"},children:[o("div",{style:{marginBottom:"1rem"},children:[e("div",{style:{fontSize:"0.75rem",color:"#666",marginBottom:"0.5rem"},children:"Section 1"}),e("div",{style:{padding:"0.75rem",backgroundColor:"white",border:"1px solid #e0e0e0",borderRadius:"4px"},children:"Content area"})]}),o("div",{children:[e("div",{style:{fontSize:"0.75rem",color:"#666",marginBottom:"0.5rem"},children:"Section 2"}),e("div",{style:{padding:"0.75rem",backgroundColor:"white",border:"1px solid #e0e0e0",borderRadius:"4px"},children:"Content area"})]})]})]}),w={title:"3. Component Category Pages/UI shell right panel",component:r,parameters:{layout:"centered",figma:{pageId:"5193:36844",components:16,totalVariants:88}},tags:["autodocs"],argTypes:{section:{control:"select",options:["Properties","Setup","Layout","Simulation"],description:"Panel section"}}},t={render:()=>e(r,{section:"Properties"})},a={render:()=>e(r,{section:"Setup"})},n={render:()=>e(r,{section:"Layout"})},i={render:()=>e(r,{section:"Simulation"})},s={render:()=>o("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e(r,{section:"Properties"}),e(r,{section:"Setup"}),e(r,{section:"Layout"}),e(r,{section:"Simulation"})]}),name:"All Variants"};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <RightPanel section="Properties" />
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <RightPanel section="Setup" />
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <RightPanel section="Layout" />
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,P,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <RightPanel section="Simulation" />
}`,...(f=(P=i.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var x,v,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  }}>
      <RightPanel section="Properties" />
      <RightPanel section="Setup" />
      <RightPanel section="Layout" />
      <RightPanel section="Simulation" />
    </div>,
  name: 'All Variants'
}`,...(R=(v=s.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const V=["Properties","Setup","Layout","Simulation","AllVariants"];export{s as AllVariants,n as Layout,t as Properties,a as Setup,i as Simulation,V as __namedExportsOrder,w as default};
