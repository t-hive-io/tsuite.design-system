import{a,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const t=({variant:g="primary",size:ee="medium",disabled:te=!1,children:ae,onClick:re,type:ne="button",fullWidth:ie=!1,iconLeft:y,iconRight:v})=>{const se=["tsuite-button",`tsuite-button--${g}`,`tsuite-button--${ee}`,ie&&"tsuite-button--full-width"].filter(Boolean).join(" ");return a("button",{type:ne,className:se,disabled:te,onClick:re,children:[y&&e("span",{className:"tsuite-button__icon-left",children:y}),e("span",{className:"tsuite-button__text",children:ae}),v&&e("span",{className:"tsuite-button__icon-right",children:v})]})};try{t.displayName="Button",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"Button variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"medium"},description:"Button size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"Is button disabled?",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Button contents",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}},type:{defaultValue:{value:"button"},description:"Button type",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Full width button",name:"fullWidth",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"Icon to display before text",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"Icon to display after text",name:"iconRight",required:!1,type:{name:"ReactNode"}}}}}catch{}const de={title:"3. Component Category Pages/Buttons",component:t,parameters:{layout:"centered",figma:{pageId:"5170:45280",components:3,totalVariants:36}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outlined","text"],description:"Button variant style"},size:{control:"select",options:["small","medium","large"],description:"Button size"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},r={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},i={args:{variant:"outlined",children:"Outlined Button"}},s={args:{variant:"text",children:"Text Button"}},l={args:{size:"small",children:"Small Button"}},o={args:{size:"medium",children:"Medium Button"}},d={args:{size:"large",children:"Large Button"}},u={args:{disabled:!0,children:"Disabled Button"}},c={args:{fullWidth:!0,children:"Full Width Button"},parameters:{layout:"padded"}},m={args:{children:"Button with Icon",iconLeft:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M8 0a8 8 0 100 16A8 8 0 008 0zm1 11H7V7h2v4zm0-5H7V4h2v2z"})})}},p={args:{children:"Button with Icon",iconRight:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"})})}},h={render:()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"2rem"},children:[e("h3",{style:{marginBottom:"0.5rem"},children:"All Button Variants"}),a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(t,{variant:"primary",children:"Primary"}),e(t,{variant:"secondary",children:"Secondary"}),e(t,{variant:"outlined",children:"Outlined"}),e(t,{variant:"text",children:"Text"})]}),e("h3",{style:{marginBottom:"0.5rem",marginTop:"1rem"},children:"All Sizes"}),a("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[e(t,{size:"small",children:"Small"}),e(t,{size:"medium",children:"Medium"}),e(t,{size:"large",children:"Large"})]}),e("h3",{style:{marginBottom:"0.5rem",marginTop:"1rem"},children:"Disabled States"}),a("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e(t,{variant:"primary",disabled:!0,children:"Primary Disabled"}),e(t,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),e(t,{variant:"outlined",disabled:!0,children:"Outlined Disabled"}),e(t,{variant:"text",disabled:!0,children:"Text Disabled"})]})]}),parameters:{layout:"fullscreen"}};var B,f,b;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,S,z;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,L,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined Button'
  }
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var V,D,I;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Text Button'
  }
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var _,T,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(M=(T=l.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var N,O,P;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    children: 'Medium Button'
  }
}`,...(P=(O=o.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var q,A,C;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var R,F,j;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(j=(F=u.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var H,k,$;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  },
  parameters: {
    layout: 'padded'
  }
}`,...($=(k=c.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var E,U,G;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Button with Icon',
    iconLeft: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 11H7V7h2v4zm0-5H7V4h2v2z" />
      </svg>
  }
}`,...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: 'Button with Icon',
    iconRight: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
      </svg>
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem'
  }}>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>All Button Variants</h3>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
      
      <h3 style={{
      marginBottom: '0.5rem',
      marginTop: '1rem'
    }}>All Sizes</h3>
      <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      
      <h3 style={{
      marginBottom: '0.5rem',
      marginTop: '1rem'
    }}>Disabled States</h3>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="outlined" disabled>Outlined Disabled</Button>
        <Button variant="text" disabled>Text Disabled</Button>
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ue=["Primary","Secondary","Outlined","Text","Small","Medium","Large","Disabled","FullWidth","WithIconLeft","WithIconRight","AllVariants"];export{h as AllVariants,u as Disabled,c as FullWidth,d as Large,o as Medium,i as Outlined,r as Primary,n as Secondary,l as Small,s as Text,m as WithIconLeft,p as WithIconRight,ue as __namedExportsOrder,de as default};
