import{j as r,a as g}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const s=({size:a="medium"})=>r("div",{style:{display:"inline-block",width:a==="small"?"20px":a==="large"?"60px":"40px",height:a==="small"?"20px":a==="large"?"60px":"40px",border:"3px solid #e0e0e0",borderTop:"3px solid #1976d2",borderRadius:"50%",animation:"spin 1s linear infinite"},children:r("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})}),e=({progress:a=50})=>r("div",{style:{width:"300px",height:"8px",backgroundColor:"#e0e0e0",borderRadius:"4px",overflow:"hidden",fontFamily:"system-ui"},children:r("div",{style:{width:`${a}%`,height:"100%",backgroundColor:"#1976d2",transition:"width 0.3s ease"}})}),F={title:"3. Component Category Pages/Progress indicators",component:s,parameters:{layout:"centered",figma:{pageId:"5185:37144",components:2,totalVariants:9}},tags:["autodocs"],argTypes:{type:{control:"select",options:["spinner-small","spinner-medium","spinner-large","progress-25","progress-50","progress-75","progress-100"],description:"Progress indicator type"}}},n={render:()=>r(s,{size:"small"}),name:"Spinner - Small"},o={render:()=>r(s,{size:"medium"}),name:"Spinner - Medium"},i={render:()=>r(s,{size:"large"}),name:"Spinner - Large"},p={render:()=>r(e,{progress:25}),name:"Progress Bar - 25%"},t={render:()=>r(e,{progress:50}),name:"Progress Bar - 50%"},d={render:()=>r(e,{progress:75}),name:"Progress Bar - 75%"},m={render:()=>r(e,{progress:100}),name:"Progress Bar - 100%"},l={render:()=>g("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[g("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[r(s,{size:"small"}),r(s,{size:"medium"}),r(s,{size:"large"})]}),r(e,{progress:25}),r(e,{progress:50}),r(e,{progress:75}),r(e,{progress:100})]}),name:"All Variants"};var c,u,S;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Spinner size="small" />,
  name: 'Spinner - Small'
}`,...(S=(u=n.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var B,x,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Spinner size="medium" />,
  name: 'Spinner - Medium'
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,h,f;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Spinner size="large" />,
  name: 'Spinner - Large'
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var L,v,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <LoadingBar progress={25} />,
  name: 'Progress Bar - 25%'
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var b,w,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <LoadingBar progress={50} />,
  name: 'Progress Bar - 50%'
}`,...(I=(w=t.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var V,k,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <LoadingBar progress={75} />,
  name: 'Progress Bar - 75%'
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,M,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <LoadingBar progress={100} />,
  name: 'Progress Bar - 100%'
}`,...(j=(M=m.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var D,R,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    }}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
      <LoadingBar progress={25} />
      <LoadingBar progress={50} />
      <LoadingBar progress={75} />
      <LoadingBar progress={100} />
    </div>,
  name: 'All Variants'
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const O=["SpinnerSmall","SpinnerMedium","SpinnerLarge","ProgressBar25","ProgressBar50","ProgressBar75","ProgressBar100","AllVariants"];export{l as AllVariants,m as ProgressBar100,p as ProgressBar25,t as ProgressBar50,d as ProgressBar75,i as SpinnerLarge,o as SpinnerMedium,n as SpinnerSmall,O as __namedExportsOrder,F as default};
