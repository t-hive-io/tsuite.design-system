import{a as w,j as s}from"./jsx-runtime-DHuurbBU.js";import{r as e}from"./index-uubelm5h.js";const S=t=>e.createElement("svg",{width:40,height:24,viewBox:"0 0 40 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("rect",{x:.5,y:.5,width:39,height:23,rx:11.5,fill:"white"}),e.createElement("rect",{x:.5,y:.5,width:39,height:23,rx:11.5,stroke:"#808080"}),e.createElement("circle",{cx:12,cy:12,r:9,fill:"#808080"})),x=t=>e.createElement("svg",{width:40,height:24,viewBox:"0 0 40 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("rect",{width:40,height:24,rx:12,fill:"#222222"}),e.createElement("circle",{cx:28,cy:12,r:9,fill:"white"})),o=({State:t="off"})=>t==="on"?s(x,{}):s(S,{}),v={title:"3. Component Category Pages/Switch",component:o,parameters:{layout:"centered",figma:{pageId:"5185:37161",componentId:"1894:8776",components:1,totalVariants:2}},tags:["autodocs"],argTypes:{State:{control:"select",options:["off","on"],description:'Switch state (matches Figma "State" property)'}},args:{State:"off"}},r={args:{State:"off"}},a={args:{State:"on"}},n={render:()=>w("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"},children:[s(o,{State:"off"}),s(o,{State:"on"})]}),name:"All Variants"};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    State: 'off'
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    State: 'on'
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,d,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Switch State="off" />
      <Switch State="on" />
    </div>,
  name: 'All Variants'
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const E=["Off","On","AllVariants"];export{n as AllVariants,r as Off,a as On,E as __namedExportsOrder,v as default};
