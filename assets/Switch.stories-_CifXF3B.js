import{j as B,a as u}from"./jsx-runtime-DlfvymUh.js";import{f as K}from"./figma-docs-BG7XTolv.js";import"./index-uubelm5h.js";const h=({checked:e=!1,onChange:t,disabled:a=!1,label:s,size:c="medium"})=>{const A=j=>{!a&&t&&t(j.target.checked)};return B("label",{className:`switch switch--${c} ${a?"switch--disabled":""}`,children:[u("input",{type:"checkbox",checked:e,onChange:A,disabled:a,className:"switch__input"}),u("span",{className:"switch__slider"}),s&&u("span",{className:"switch__label",children:s})]})};try{h.displayName="Switch",h.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__;var g;const F={title:"Components/Switch",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:((g=K.Switch)==null?void 0:g.description)||""}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange",description:"Change handler (logged in Actions panel)"},checked:{control:"boolean",description:"Whether the switch is on or off"},disabled:{control:"boolean",description:"Whether the switch is disabled"},size:{control:"select",options:["small","medium","large"],description:"Size of the switch"},label:{control:"text",description:"Optional label text"}}},r={render:e=>{const[{checked:t},a]=P();return u(h,{...e,checked:t,onChange:s=>{var c;(c=e.onChange)==null||c.call(e,s),a({checked:s})}})}},n={...r,args:{checked:!1}},l={...r,args:{checked:!0}},o={...r,args:{checked:!0,label:"Enable notifications"}},i={args:{checked:!1,disabled:!0,label:"Disabled switch"}},d={args:{checked:!0,disabled:!0,label:"Disabled & Checked"}},m={...r,args:{checked:!0,size:"small",label:"Small switch"}},p={...r,args:{checked:!0,size:"large",label:"Large switch"}};var b,f,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: false
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,_,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true
  }
}`,...(S=(_=l.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var v,C,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true,
    label: 'Enable notifications'
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var D,I,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled switch'
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var z,x,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled & Checked'
  }
}`,...(L=(x=d.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var O,V,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true,
    size: 'small',
    label: 'Small switch'
  }
}`,...(E=(V=m.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var N,W,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true,
    size: 'large',
    label: 'Large switch'
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const H=["Default","Checked","WithLabel","Disabled","DisabledChecked","Small","Large"];export{l as Checked,n as Default,i as Disabled,d as DisabledChecked,p as Large,m as Small,o as WithLabel,H as __namedExportsOrder,F as default};
