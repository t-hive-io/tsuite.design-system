import{j as M,a as Q}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const d=({variant:u="primary",size:E="medium",children:H,onClick:J,disabled:K=!1,active:U=!1,icon:m=!1})=>{const G=["btn",`btn--${u}`,`btn--${E}`,U&&"btn--active",m&&"btn--with-icon"].filter(Boolean).join(" ");return M("button",{className:G,onClick:J,disabled:K,children:[m&&Q("span",{className:"btn__icon",children:"+"}),H]})};try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"link"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"false"},description:"",name:"icon",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Button",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:"Primary UI component for user actions. Synced from T-Suite Design System in Figma."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","outlined","link"],description:"Button style variant"},size:{control:"select",options:["small","medium","large"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},active:{control:"boolean",description:"Active state"},icon:{control:"boolean",description:"Show icon"}}},e={args:{variant:"primary",children:"Primary Button"}},r={args:{variant:"secondary",children:"Secondary Button"}},a={args:{size:"large",children:"Large Button"}},n={args:{size:"small",children:"Small Button"}},t={args:{variant:"tertiary",children:"Tertiary Button"}},s={args:{variant:"outlined",children:"Outlined Button"}},o={args:{variant:"link",children:"Link Button"}},i={args:{variant:"primary",children:"Active Button",active:!0}},c={args:{variant:"primary",children:"Button with Icon",icon:!0}},l={args:{disabled:!0,children:"Disabled Button"}};var p,g,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var B,S,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var _,k,z;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(z=(k=n.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var L,T,w;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,I,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined Button'
  }
}`,...(V=(I=s.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var q,A,O;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}`,...(O=(A=o.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var x,P,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Active Button',
    active: true
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,C,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button with Icon',
    icon: true
  }
}`,...(W=(C=c.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var F,X,$;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...($=(X=l.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const ee=["Primary","Secondary","Large","Small","Tertiary","Outlined","Link","Active","WithIcon","Disabled"];export{i as Active,l as Disabled,a as Large,o as Link,s as Outlined,e as Primary,r as Secondary,n as Small,t as Tertiary,c as WithIcon,ee as __namedExportsOrder,Z as default};
