import{a as S,j as i}from"./jsx-runtime-DHuurbBU.js";import{r as o}from"./index-uubelm5h.js";const h=e=>o.createElement("svg",{width:1,height:16,viewBox:"0 0 1 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("rect",{width:1,height:16,fill:"#E6E6E6"})),w=e=>o.createElement("svg",{width:288,height:1,viewBox:"0 0 288 1",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("rect",{width:288,height:1,fill:"#E6E6E6"})),n=({Size:e="Vertical"})=>e==="Horizontal"?i(w,{}):i(h,{}),E={title:"3. Component Category Pages/Divider",component:n,parameters:{layout:"centered",figma:{pageId:"5182:37137",componentId:"1573:9990",figmaComponent:"Dividers",components:1,totalVariants:2}},tags:["autodocs"],argTypes:{Size:{control:"select",options:["Vertical","Horizontal"],description:'Divider size/orientation (matches Figma "Size" property)'}},args:{Size:"Vertical"}},r={args:{Size:"Vertical"}},t={args:{Size:"Horizontal"}},a={render:()=>S("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[i(n,{Size:"Vertical"}),i(n,{Size:"Horizontal"})]}),name:"All Variants"};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    Size: 'Vertical'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    Size: 'Horizontal'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,z,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Divider Size="Vertical" />
      <Divider Size="Horizontal" />
    </div>,
  name: 'All Variants'
}`,...(v=(z=a.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const f=["Vertical","Horizontal","AllVariants"];export{a as AllVariants,t as Horizontal,r as Vertical,f as __namedExportsOrder,E as default};
