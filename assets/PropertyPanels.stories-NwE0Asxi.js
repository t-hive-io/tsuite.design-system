import{a as t,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const r=({section:v="Setup"})=>t("div",{style:{width:"320px",backgroundColor:"#fafafa",border:"1px solid #e0e0e0",borderRadius:"4px",fontFamily:"system-ui"},children:[t("div",{style:{padding:"1rem",borderBottom:"1px solid #e0e0e0",backgroundColor:"white",fontWeight:600},children:["Property Panel - ",v]}),t("div",{style:{padding:"1rem"},children:[t("div",{style:{marginBottom:"1rem"},children:[e("label",{style:{display:"block",fontSize:"0.75rem",color:"#666",marginBottom:"0.25rem"},children:"Property 1"}),e("input",{type:"text",style:{width:"100%",padding:"0.5rem",border:"1px solid #e0e0e0",borderRadius:"4px"},placeholder:"Value"})]}),t("div",{children:[e("label",{style:{display:"block",fontSize:"0.75rem",color:"#666",marginBottom:"0.25rem"},children:"Property 2"}),e("input",{type:"text",style:{width:"100%",padding:"0.5rem",border:"1px solid #e0e0e0",borderRadius:"4px"},placeholder:"Value"})]})]})]}),C={title:"3. Component Category Pages/Property panels",component:r,parameters:{layout:"centered",figma:{components:11,totalVariants:154,description:"Property panel components with 32 variants for Setup/Layout/Simulation/3D"}},tags:["autodocs"],argTypes:{section:{control:"select",options:["Setup","Layout","Simulation","3D"],description:"Property panel section"}}},o={render:()=>e(r,{section:"Setup"})},a={render:()=>e(r,{section:"Layout"})},n={render:()=>e(r,{section:"Simulation"})},s={render:()=>e(r,{section:"3D"}),name:"3D"},i={render:()=>t("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e(r,{section:"Setup"}),e(r,{section:"Layout"}),e(r,{section:"Simulation"}),e(r,{section:"3D"})]}),name:"All Variants"};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <PropertyPanel section="Setup" />
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <PropertyPanel section="Layout" />
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,g,P;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <PropertyPanel section="Simulation" />
}`,...(P=(g=n.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var S,h,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <PropertyPanel section="3D" />,
  name: '3D'
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  }}>
      <PropertyPanel section="Setup" />
      <PropertyPanel section="Layout" />
      <PropertyPanel section="Simulation" />
      <PropertyPanel section="3D" />
    </div>,
  name: 'All Variants'
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const w=["Setup","Layout","Simulation","ThreeD","AllVariants"];export{i as AllVariants,a as Layout,o as Setup,n as Simulation,s as ThreeD,w as __namedExportsOrder,C as default};
