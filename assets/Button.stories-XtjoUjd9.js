import{j as R,a as U,f as Y}from"./figma-docs-DQ4WnSMF.js";import"./index-uubelm5h.js";const d=({variant:u="primary",size:H="medium",children:J,onClick:K,disabled:G=!1,active:M=!1,icon:m=!1})=>{const Q=["btn",`btn--${u}`,`btn--${H}`,M&&"btn--active",m&&"btn--with-icon"].filter(Boolean).join(" ");return R("button",{className:Q,onClick:K,disabled:G,children:[m&&U("span",{className:"btn__icon",children:"+"}),J]})};try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"link"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"false"},description:"",name:"icon",required:!1,type:{name:"boolean"}}}}}catch{}var p;const re={title:"Components/Buttons",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1428-9176"},docs:{description:{component:(p=Y.Buttons)==null?void 0:p.description}}},tags:["autodocs"],argTypes:{onClick:{action:"onClick",description:"Click handler (logged in Actions panel)"},variant:{control:"select",options:["primary","secondary","tertiary","outlined","link"],description:"Button style variant"},size:{control:"select",options:["small","medium","large"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},active:{control:"boolean",description:"Active state"},icon:{control:"boolean",description:"Show icon"}}},e={args:{variant:"primary",children:"Primary Button"}},r={args:{variant:"secondary",children:"Secondary Button"}},a={args:{variant:"primary",icon:!0,children:"Button with icon"}},n={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},t={args:{size:"large",children:"Large Button"}},s={args:{size:"small",children:"Small Button"}},i={args:{variant:"tertiary",children:"Tertiary Button"}},o={args:{variant:"outlined",children:"Outlined Button"}},c={args:{variant:"link",children:"Link Button"}},l={args:{variant:"primary",children:"Active Button",active:!0}};var g,v,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(y=(v=e.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,B,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(f=(B=r.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var b,S,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: true,
    children: 'Button with icon'
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var _,z,L;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(L=(z=n.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var w,A,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(D=(A=t.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var T,V,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(q=(V=s.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var C,O,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...(x=(O=i.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var j,I,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined Button'
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,W,X;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}`,...(X=(W=c.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var $,E,F;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Active Button',
    active: true
  }
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const ae=["Primary","Secondary","WithIcon","Disabled","Large","Small","Tertiary","Outlined","Link","Active"];export{l as Active,n as Disabled,t as Large,c as Link,o as Outlined,e as Primary,r as Secondary,s as Small,i as Tertiary,a as WithIcon,ae as __namedExportsOrder,re as default};
