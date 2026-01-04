import{j as e}from"./jsx-runtime-DQi6FYqY.js";import{S,a as u}from"./Sizehorizontal--1125-9012-CbdRNiWX.js";import"./iframe-BivpKxWP.js";import"./preload-helper-E_wDBCPD.js";const t=({Size:z="Vertical"})=>z==="Horizontal"?e.jsx(S,{}):e.jsx(u,{}),H={title:"Components/Divider",component:t,parameters:{layout:"centered",docs:{description:{component:"⚠️ **Figma Description Missing** - Please add a description in Figma for this component."}},figma:{pageId:"5182:37137",componentId:"1573:9990",figmaComponent:"Dividers",components:1,totalVariants:2}},tags:["autodocs"],argTypes:{Size:{control:"select",options:["Vertical","Horizontal"],description:'Divider size/orientation (matches Figma "Size" property)'}},args:{Size:"Vertical"}},r={args:{Size:"Vertical"}},a={args:{Size:"Horizontal"}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(t,{Size:"Vertical"}),e.jsx(t,{Size:"Horizontal"})]}),name:"All Variants"};var o,s,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    Size: 'Vertical'
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    Size: 'Horizontal'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Divider Size="Vertical" />
      <Divider Size="Horizontal" />
    </div>,
  name: 'All Variants'
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const j=["Vertical","Horizontal","AllVariants"];export{i as AllVariants,a as Horizontal,r as Vertical,j as __namedExportsOrder,H as default};
