import{j as e,a as b}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const a=({type:o="main"})=>e("div",{style:{width:o==="main"?"60px":"240px",backgroundColor:"#424242",padding:"0.5rem",borderRadius:"4px",fontFamily:"system-ui"},children:e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[1,2,3].map(t=>e("button",{style:{padding:"0.75rem",backgroundColor:"#616161",color:"white",border:"none",borderRadius:"2px",cursor:"pointer",fontSize:"0.875rem"},children:o==="main"?"⚡":`Tool ${t}`},t))})}),v={title:"3. Component Category Pages/Tool rail",component:a,parameters:{layout:"centered",figma:{pageId:"5193:36766",components:4,totalVariants:12}},tags:["autodocs"],argTypes:{type:{control:"select",options:["main","sub"],description:"Tool rail type"}}},r={render:()=>e(a,{type:"main"}),name:"Main Items (3 variants)"},n={render:()=>e(a,{type:"sub"}),name:"Sub Items (4 variants)"},s={render:()=>b("div",{style:{display:"flex",gap:"2rem"},children:[e(a,{type:"main"}),e(a,{type:"sub"})]}),name:"All Variants"};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ToolRail type="main" />,
  name: 'Main Items (3 variants)'
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ToolRail type="sub" />,
  name: 'Sub Items (4 variants)'
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,y,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <ToolRail type="main" />
      <ToolRail type="sub" />
    </div>,
  name: 'All Variants'
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const I=["MainItems","SubItems","AllVariants"];export{s as AllVariants,r as MainItems,n as SubItems,I as __namedExportsOrder,v as default};
