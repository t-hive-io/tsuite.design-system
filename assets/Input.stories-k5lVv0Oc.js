import{j as I,a as n,f as M}from"./figma-docs-DQ4WnSMF.js";import"./index-uubelm5h.js";const v=({type:e="text",state:l="enabled",value:b="",placeholder:r="",label:t,icon:y,unit:f,onChange:g,className:H=""})=>{const J=["input-wrapper",`input--${l}`,H].filter(Boolean).join(" ");return I("div",{className:J,children:[t&&n("label",{className:"input-label",children:t}),I("div",{className:"input-container",children:[(e==="icon+val"||e==="val+icon")&&y&&n("span",{className:`input-icon ${e==="val+icon"?"input-icon--right":""}`,children:y}),n("input",{type:e==="number"?"number":"text",className:"input-field",value:b,placeholder:r,disabled:l==="disabled",onChange:L=>g==null?void 0:g(L.target.value)}),e==="val+unit"&&f&&n("span",{className:"input-unit",children:f})]})]})};try{v.displayName="Input",v.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"icon+val"'},{value:'"val+unit"'},{value:'"val+icon"'}]}},state:{defaultValue:{value:"enabled"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"enabled"'},{value:'"error"'},{value:'"focused"'}]}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const{useArgs:Y}=__STORYBOOK_MODULE_PREVIEW_API__;var x;const Q={title:"Components/Input",component:v,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:((x=M["Input – Text"])==null?void 0:x.description)||""}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange",description:"Change handler (logged in Actions panel)"},value:{control:"text",description:"Input value (updated live when you type)"},label:{control:"text"},placeholder:{control:"text"},icon:{control:"text"},unit:{control:"text"},type:{control:"select",options:["text","number","icon+val","val+unit","val+icon"]},state:{control:"select",options:["enabled","disabled","error","focused"]}}},a={render:e=>{const[{value:l},b]=Y();return n(v,{...e,value:String(l??""),onChange:r=>{var t;(t=e.onChange)==null||t.call(e,r),b({value:r})}})}},s={...a,args:{type:"text",state:"enabled",value:"",placeholder:"Enter text...",label:"Text Input"}},o={...a,args:{type:"number",state:"enabled",value:"",placeholder:"0",label:"Number Input"}},u={...a,args:{type:"icon+val",state:"enabled",value:"",icon:"🔍",placeholder:"Search...",label:"Icon + Value"}},c={...a,args:{type:"val+unit",state:"enabled",value:"",unit:"px",placeholder:"100",label:"Value + Unit"}},i={...a,args:{type:"val+icon",state:"enabled",value:"",icon:"📍",placeholder:"Enter location...",label:"Value + Icon"}},p={...a,args:{type:"text",state:"disabled",value:"Disabled input",label:"Disabled State"}},d={...a,args:{type:"text",state:"error",value:"Invalid input",label:"Error State"}},m={...a,args:{type:"text",state:"focused",value:"Focused input",label:"Focused State"}};var h,V,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'enabled',
    value: '',
    placeholder: 'Enter text...',
    label: 'Text Input'
  }
}`,...(S=(V=s.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var D,T,_;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'number',
    state: 'enabled',
    value: '',
    placeholder: '0',
    label: 'Number Input'
  }
}`,...(_=(T=o.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var N,E,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'icon+val',
    state: 'enabled',
    value: '',
    icon: '🔍',
    placeholder: 'Search...',
    label: 'Icon + Value'
  }
}`,...(q=(E=u.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var C,F,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'val+unit',
    state: 'enabled',
    value: '',
    unit: 'px',
    placeholder: '100',
    label: 'Value + Unit'
  }
}`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var w,A,U;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'val+icon',
    state: 'enabled',
    value: '',
    icon: '📍',
    placeholder: 'Enter location...',
    label: 'Value + Icon'
  }
}`,...(U=(A=i.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var j,B,K;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'disabled',
    value: 'Disabled input',
    label: 'Disabled State'
  }
}`,...(K=(B=p.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var P,R,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'error',
    value: 'Invalid input',
    label: 'Error State'
  }
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var X,$,k;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'focused',
    value: 'Focused input',
    label: 'Focused State'
  }
}`,...(k=($=m.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const Z=["Text","Number","IconValue","ValueUnit","ValueIcon","Disabled","Error","Focused"];export{p as Disabled,d as Error,m as Focused,u as IconValue,o as Number,s as Text,i as ValueIcon,c as ValueUnit,Z as __namedExportsOrder,Q as default};
