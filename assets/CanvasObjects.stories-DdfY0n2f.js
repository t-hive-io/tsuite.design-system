import{a as l,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const a=({type:r="area"})=>l("div",{style:{width:"200px",height:"150px",border:"2px dashed #1976d2",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"system-ui",flexDirection:"column",gap:"0.5rem",backgroundColor:"#e3f2fd"},children:[l("div",{style:{fontSize:"1.5rem"},children:[r==="area"&&"📐",r==="road"&&"🛣️",r==="wall"&&"🧱",r==="obstacle"&&"⚠️"]}),e("div",{style:{fontSize:"0.875rem",fontWeight:600,color:"#1565c0",textTransform:"capitalize"},children:r})]}),S={title:"3. Component Category Pages/Canvas objects",component:a,parameters:{layout:"centered",figma:{pageId:"5170:45525",components:16,totalVariants:89,description:"Largest section (7523×16456px) with layout objects for canvas"}},tags:["autodocs"],argTypes:{type:{control:"select",options:["area","road","wall","obstacle"],description:"Canvas object type"}}},t={render:()=>e(a,{type:"area"}),name:"Area (24 variants)"},s={render:()=>e(a,{type:"road"}),name:"Road (8 variants)"},n={render:()=>e(a,{type:"wall"}),name:"Wall (2 variants)"},o={render:()=>e(a,{type:"obstacle"}),name:"Obstacle (3 variants)"},c={render:()=>l("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e(a,{type:"area"}),e(a,{type:"road"}),e(a,{type:"wall"}),e(a,{type:"obstacle"})]}),name:"All Variants"};var d,i,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <CanvasObject type="area" />,
  name: 'Area (24 variants)'
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,y,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <CanvasObject type="road" />,
  name: 'Road (8 variants)'
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var v,b,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <CanvasObject type="wall" />,
  name: 'Wall (2 variants)'
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var C,f,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <CanvasObject type="obstacle" />,
  name: 'Obstacle (3 variants)'
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var O,x,h;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  }}>
      <CanvasObject type="area" />
      <CanvasObject type="road" />
      <CanvasObject type="wall" />
      <CanvasObject type="obstacle" />
    </div>,
  name: 'All Variants'
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const R=["Area","Road","Wall","Obstacle","AllVariants"];export{c as AllVariants,t as Area,o as Obstacle,s as Road,n as Wall,R as __namedExportsOrder,S as default};
