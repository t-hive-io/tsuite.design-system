import{j as v,a}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const c=({type:e="text",state:d="enabled",value:$="",placeholder:k="",label:p,icon:m,unit:b,onChange:i,className:A=""})=>{const F=["input-wrapper",`input--${d}`,A].filter(Boolean).join(" ");return v("div",{className:F,children:[p&&a("label",{className:"input-label",children:p}),v("div",{className:"input-container",children:[(e==="icon+val"||e==="val+icon")&&m&&a("span",{className:`input-icon ${e==="val+icon"?"input-icon--right":""}`,children:m}),a("input",{type:e==="number"?"number":"text",className:"input-field",value:$,placeholder:k,disabled:d==="disabled",onChange:H=>i==null?void 0:i(H.target.value)}),e==="val+unit"&&b&&a("span",{className:"input-unit",children:b})]})]})};try{c.displayName="Input",c.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"icon+val"'},{value:'"val+unit"'},{value:'"val+icon"'}]}},state:{defaultValue:{value:"enabled"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"enabled"'},{value:'"disabled"'},{value:'"error"'},{value:'"focused"'}]}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Components/Input",component:c,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"}},tags:["autodocs"]},t={args:{type:"text",state:"enabled",placeholder:"Enter text...",label:"Text Input"}},n={args:{type:"number",state:"enabled",placeholder:"0",label:"Number Input"}},r={args:{type:"icon+val",state:"enabled",icon:"🔍",placeholder:"Search...",label:"Icon + Value"}},l={args:{type:"val+unit",state:"enabled",unit:"px",placeholder:"100",label:"Value + Unit"}},s={args:{type:"val+icon",state:"enabled",icon:"📍",placeholder:"Enter location...",label:"Value + Icon"}},o={args:{type:"text",state:"disabled",value:"Disabled input",label:"Disabled State"}},u={args:{type:"text",state:"error",value:"Invalid input",label:"Error State"}};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'text',
    state: 'enabled',
    placeholder: 'Enter text...',
    label: 'Text Input'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,V,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'number',
    state: 'enabled',
    placeholder: '0',
    label: 'Number Input'
  }
}`,...(h=(V=n.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var I,D,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'icon+val',
    state: 'enabled',
    icon: '🔍',
    placeholder: 'Search...',
    label: 'Icon + Value'
  }
}`,...(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var N,_,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'val+unit',
    state: 'enabled',
    unit: 'px',
    placeholder: '100',
    label: 'Value + Unit'
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var E,T,j;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'val+icon',
    state: 'enabled',
    icon: '📍',
    placeholder: 'Enter location...',
    label: 'Value + Icon'
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var w,U,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'text',
    state: 'disabled',
    value: 'Disabled input',
    label: 'Disabled State'
  }
}`,...(B=(U=o.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var C,O,X;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'text',
    state: 'error',
    value: 'Invalid input',
    label: 'Error State'
  }
}`,...(X=(O=u.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};const z=["Text","Number","IconValue","ValueUnit","ValueIcon","Disabled","Error"];export{o as Disabled,u as Error,r as IconValue,n as Number,t as Text,s as ValueIcon,l as ValueUnit,z as __namedExportsOrder,W as default};
