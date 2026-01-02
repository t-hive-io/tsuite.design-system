import{j as e,a as y}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const r=({size:w="medium"})=>e("div",{style:{width:w==="large"?"280px":"220px",backgroundColor:"white",border:"1px solid #e0e0e0",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",fontFamily:"system-ui"},children:["Option 1","Option 2","Option 3"].map((x,s)=>e("div",{style:{padding:"0.75rem 1rem",borderBottom:s<2?"1px solid #f5f5f5":"none",cursor:"pointer",fontSize:"0.875rem"},children:x},s))}),D={title:"3. Component Category Pages/Menus",component:r,parameters:{layout:"centered",figma:{pageId:"5180:45799",components:3,totalVariants:26}},tags:["autodocs"],argTypes:{size:{control:"select",options:["medium","large"],description:"Dropdown menu size"}}},o={render:()=>e(r,{size:"medium"}),name:"Medium Dropdown"},a={render:()=>e(r,{size:"large"}),name:"Large Dropdown"},n={render:()=>y("div",{style:{display:"flex",gap:"2rem"},children:[e(r,{size:"medium"}),e(r,{size:"large"})]}),name:"All Variants"};var d,t,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <DropdownMenu size="medium" />,
  name: 'Medium Dropdown'
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <DropdownMenu size="large" />,
  name: 'Large Dropdown'
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,u,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <DropdownMenu size="medium" />
      <DropdownMenu size="large" />
    </div>,
  name: 'All Variants'
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const M=["Medium","Large","AllVariants"];export{n as AllVariants,a as Large,o as Medium,M as __namedExportsOrder,D as default};
