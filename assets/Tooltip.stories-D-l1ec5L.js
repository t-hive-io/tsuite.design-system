import{a,j as y}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const T=({position:o="top"})=>a("div",{style:{position:"relative",display:"inline-block",padding:"3rem",fontFamily:"system-ui"},children:[y("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#1976d2",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Hover me"}),a("div",{style:{position:"absolute",[o]:"100%",left:"50%",transform:"translateX(-50%)",padding:"0.5rem 0.75rem",backgroundColor:"#424242",color:"white",borderRadius:"4px",fontSize:"0.75rem",whiteSpace:"nowrap",marginTop:o==="top"?"0.5rem":0,marginBottom:o==="bottom"?"0.5rem":0},children:["Tooltip - ",o]})]}),v={title:"3. Component Category Pages/Tooltip",component:T,parameters:{layout:"centered",figma:{pageId:"5185:37203",components:1,totalVariants:12}},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"],description:"Tooltip position (matches Figma property)"}},args:{position:"top"}},r={args:{position:"top"}},t={args:{position:"bottom"}},e={args:{position:"left"}},s={args:{position:"right"}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    position: 'top'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,g,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    position: 'left'
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    position: 'right'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const w=["Top","Bottom","Left","Right"];export{t as Bottom,e as Left,s as Right,r as Top,w as __namedExportsOrder,v as default};
