import{j as I,a as n}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const v=({type:e="text",state:l="enabled",value:b="",placeholder:r="",label:t,icon:y,unit:h,onChange:g,className:k=""})=>{const H=["input-wrapper",`input--${l}`,k].filter(Boolean).join(" ");return I("div",{className:H,children:[t&&n("label",{className:"input-label",children:t}),I("div",{className:"input-container",children:[(e==="icon+val"||e==="val+icon")&&y&&n("span",{className:`input-icon ${e==="val+icon"?"input-icon--right":""}`,children:y}),n("input",{type:e==="number"?"number":"text",className:"input-field",value:b,placeholder:r,disabled:l==="disabled",onChange:J=>g==null?void 0:g(J.target.value)}),e==="val+unit"&&h&&n("span",{className:"input-unit",children:h})]})]})};try{v.displayName="Input",v.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"icon+val"'},{value:'"val+unit"'},{value:'"val+icon"'}]}},state:{defaultValue:{value:"enabled"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"enabled"'},{value:'"error"'},{value:'"focused"'}]}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,z={title:"Components/Input",component:v,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:`Text and number input component with validation states.

## Usage
\`\`\`tsx
import { Input } from './components/Input';

const [value, setValue] = useState('');

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
  label="Username"
/>
\`\`\`

## States
- **default**: Normal input state
- **error**: Shows validation errors
- **disabled**: Non-interactive state
- **readonly**: View-only mode

Type in the input below - all changes are logged in the **Actions** panel.`}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange",description:"Change handler (logged in Actions panel)"},value:{control:"text",description:"Input value (updated live when you type)"},label:{control:"text"},placeholder:{control:"text"},icon:{control:"text"},unit:{control:"text"},type:{control:"select",options:["text","number","icon+val","val+unit","val+icon"]},state:{control:"select",options:["enabled","disabled","error","focused"]}}},a={render:e=>{const[{value:l},b]=L();return n(v,{...e,value:String(l??""),onChange:r=>{var t;(t=e.onChange)==null||t.call(e,r),b({value:r})}})}},s={...a,args:{type:"text",state:"enabled",value:"",placeholder:"Enter text...",label:"Text Input"}},o={...a,args:{type:"number",state:"enabled",value:"",placeholder:"0",label:"Number Input"}},u={...a,args:{type:"icon+val",state:"enabled",value:"",icon:"🔍",placeholder:"Search...",label:"Icon + Value"}},c={...a,args:{type:"val+unit",state:"enabled",value:"",unit:"px",placeholder:"100",label:"Value + Unit"}},i={...a,args:{type:"val+icon",state:"enabled",value:"",icon:"📍",placeholder:"Enter location...",label:"Value + Icon"}},p={...a,args:{type:"text",state:"disabled",value:"Disabled input",label:"Disabled State"}},d={...a,args:{type:"text",state:"error",value:"Invalid input",label:"Error State"}},m={...a,args:{type:"text",state:"focused",value:"Focused input",label:"Focused State"}};var f,x,V;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'enabled',
    value: '',
    placeholder: 'Enter text...',
    label: 'Text Input'
  }
}`,...(V=(x=s.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var S,T,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'number',
    state: 'enabled',
    value: '',
    placeholder: '0',
    label: 'Number Input'
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var _,N,E;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'icon+val',
    state: 'enabled',
    value: '',
    icon: '🔍',
    placeholder: 'Search...',
    label: 'Icon + Value'
  }
}`,...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var q,w,C;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'val+unit',
    state: 'enabled',
    value: '',
    unit: 'px',
    placeholder: '100',
    label: 'Value + Unit'
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var F,U,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'val+icon',
    state: 'enabled',
    value: '',
    icon: '📍',
    placeholder: 'Enter location...',
    label: 'Value + Icon'
  }
}`,...(A=(U=i.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var O,j,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'disabled',
    value: 'Disabled input',
    label: 'Disabled State'
  }
}`,...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var K,P,R;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'error',
    value: 'Invalid input',
    label: 'Error State'
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,X,$;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    type: 'text',
    state: 'focused',
    value: 'Focused input',
    label: 'Focused State'
  }
}`,...($=(X=m.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const G=["Text","Number","IconValue","ValueUnit","ValueIcon","Disabled","Error","Focused"];export{p as Disabled,d as Error,m as Focused,u as IconValue,o as Number,s as Text,i as ValueIcon,c as ValueUnit,G as __namedExportsOrder,z as default};
