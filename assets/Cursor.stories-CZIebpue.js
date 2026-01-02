import{a as l,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const r=({type:m="default"})=>l("div",{style:{padding:"3rem",textAlign:"center",fontFamily:"system-ui",border:"2px dashed #e0e0e0",borderRadius:"8px",minHeight:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:m},children:[e("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🖱️"}),l("p",{style:{fontSize:"1.125rem",fontWeight:600,marginBottom:"0.5rem"},children:[m.charAt(0).toUpperCase()+m.slice(1)," Cursor"]}),e("p",{style:{fontSize:"0.875rem",color:"#666"},children:"Hover over this area to see the cursor"})]}),U={title:"3. Component Category Pages/Cursor",component:r,parameters:{layout:"padded",figma:{pageId:"5172:38151"}},tags:["autodocs"],argTypes:{type:{control:"select",options:["default","pointer","move","grab","grabbing","crosshair","text","not-allowed"],description:"Cursor type"}}},o={render:()=>e(r,{type:"default"})},t={render:()=>e(r,{type:"pointer"})},s={render:()=>e(r,{type:"move"})},a={render:()=>e(r,{type:"grab"})},n={render:()=>e(r,{type:"grabbing"})},i={render:()=>e(r,{type:"crosshair"})},p={render:()=>e(r,{type:"text"})},d={render:()=>e(r,{type:"not-allowed"}),name:"Not Allowed"},c={render:()=>l("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e(r,{type:"default"}),e(r,{type:"pointer"}),e(r,{type:"move"}),e(r,{type:"grab"}),e(r,{type:"grabbing"}),e(r,{type:"crosshair"}),e(r,{type:"text"}),e(r,{type:"not-allowed"})]}),name:"All Variants"};var u,y,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <CursorPreview type="default" />
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,C,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <CursorPreview type="pointer" />
}`,...(w=(C=t.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var b,f,P;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <CursorPreview type="move" />
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var h,x,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <CursorPreview type="grab" />
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var A,T,j;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <CursorPreview type="grabbing" />
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var G,N,V;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <CursorPreview type="crosshair" />
}`,...(V=(N=i.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var z,D,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <CursorPreview type="text" />
}`,...(B=(D=p.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var H,I,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <CursorPreview type="not-allowed" />,
  name: 'Not Allowed'
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var _,E,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  }}>
      <CursorPreview type="default" />
      <CursorPreview type="pointer" />
      <CursorPreview type="move" />
      <CursorPreview type="grab" />
      <CursorPreview type="grabbing" />
      <CursorPreview type="crosshair" />
      <CursorPreview type="text" />
      <CursorPreview type="not-allowed" />
    </div>,
  name: 'All Variants'
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const W=["Default","Pointer","Move","Grab","Grabbing","Crosshair","Text","NotAllowed","AllVariants"];export{c as AllVariants,i as Crosshair,o as Default,a as Grab,n as Grabbing,s as Move,d as NotAllowed,t as Pointer,p as Text,W as __namedExportsOrder,U as default};
