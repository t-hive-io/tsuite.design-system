import{a as S,j as t}from"./jsx-runtime-DHuurbBU.js";import{S as V,a as u}from"./Sizehorizontal--1125-9012-Be39aUH5.js";import"./index-uubelm5h.js";const i=({Size:g="Vertical"})=>g==="Horizontal"?t(V,{}):t(u,{}),f={title:"3. Component Category Pages/Divider",component:i,parameters:{layout:"centered",figma:{pageId:"5182:37137",componentId:"1573:9990",figmaComponent:"Dividers",components:1,totalVariants:2}},tags:["autodocs"],argTypes:{Size:{control:"select",options:["Vertical","Horizontal"],description:'Divider size/orientation (matches Figma "Size" property)'}},args:{Size:"Vertical"}},e={args:{Size:"Vertical"}},r={args:{Size:"Horizontal"}},a={render:()=>S("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[t(i,{Size:"Vertical"}),t(i,{Size:"Horizontal"})]}),name:"All Variants"};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    Size: 'Vertical'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    Size: 'Horizontal'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,z;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Divider Size="Vertical" />
      <Divider Size="Horizontal" />
    </div>,
  name: 'All Variants'
}`,...(z=(d=a.parameters)==null?void 0:d.docs)==null?void 0:z.source}}};const x=["Vertical","Horizontal","AllVariants"];export{a as AllVariants,r as Horizontal,e as Vertical,x as __namedExportsOrder,f as default};
