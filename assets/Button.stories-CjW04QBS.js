import{j as G,a as Q}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const d=({variant:u="primary",size:E="medium",children:F,onClick:H,disabled:J=!1,active:K=!1,icon:m=!1})=>{const M=["btn",`btn--${u}`,`btn--${E}`,K&&"btn--active",m&&"btn--with-icon"].filter(Boolean).join(" ");return G("button",{className:M,onClick:H,disabled:J,children:[m&&Q("span",{className:"btn__icon",children:"+"}),F]})};try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"link"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"false"},description:"",name:"icon",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Buttons",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:`Primary button component with multiple variants and states.

## Usage
\`\`\`tsx
import { Button } from './components/Button';

<Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
  Click me
</Button>
\`\`\`

## Variants
- **primary**: Main call-to-action buttons
- **secondary**: Secondary actions
- **tertiary**: Tertiary actions
- **outlined**: Outlined style
- **link**: Link style buttons

Use the **Controls** panel below to test different combinations interactively.`}}},tags:["autodocs"],argTypes:{onClick:{action:"onClick",description:"Click handler (logged in Actions panel)"},variant:{control:"select",options:["primary","secondary","tertiary","outlined","link"],description:"Button style variant"},size:{control:"select",options:["small","medium","large"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},active:{control:"boolean",description:"Active state"},icon:{control:"boolean",description:"Show icon"}}},e={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},r={args:{variant:"primary",icon:!0,children:"Button with icon"}},n={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},t={args:{size:"large",children:"Large Button"}},o={args:{size:"small",children:"Small Button"}},i={args:{variant:"tertiary",children:"Tertiary Button"}},s={args:{variant:"outlined",children:"Outlined Button"}},c={args:{variant:"link",children:"Link Button"}},l={args:{variant:"primary",children:"Active Button",active:!0}};var p,y,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,h,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(B=(h=a.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,b,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: true,
    children: 'Button with icon'
  }
}`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,_,w;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(w=(_=n.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var z,C,L;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(L=(C=t.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var T,V,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(A=(V=o.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var O,q,x;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...(x=(q=i.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var D,P,j;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined Button'
  }
}`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var I,N,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}`,...(W=(N=c.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var U,X,$;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Active Button',
    active: true
  }
}`,...($=(X=l.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const ee=["Primary","Secondary","WithIcon","Disabled","Large","Small","Tertiary","Outlined","Link","Active"];export{l as Active,n as Disabled,t as Large,c as Link,s as Outlined,e as Primary,a as Secondary,o as Small,i as Tertiary,r as WithIcon,ee as __namedExportsOrder,Z as default};
