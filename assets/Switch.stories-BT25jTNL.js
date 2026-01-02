import{j,a as p}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const u=({checked:e=!1,onChange:r,disabled:a=!1,label:s,size:c="medium"})=>{const W=q=>{!a&&r&&r(q.target.checked)};return j("label",{className:`switch switch--${c} ${a?"switch--disabled":""}`,children:[p("input",{type:"checkbox",checked:e,onChange:W,disabled:a,className:"switch__input"}),p("span",{className:"switch__slider"}),s&&p("span",{className:"switch__label",children:s})]})};try{u.displayName="Switch",u.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,P={title:"Components/Switch",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:`Interactive toggle switch for on/off states.

## Usage
\`\`\`tsx
import { Switch } from './components/Switch';

const [checked, setChecked] = useState(false);

<Switch 
  checked={checked} 
  onChange={setChecked}
  label="Enable notifications"
/>
\`\`\`

## Features
- Fully controlled component
- Accessible keyboard navigation
- Optional labels and disabled state

Try toggling the switch below - onChange events are logged in the **Actions** panel.`}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange",description:"Change handler (logged in Actions panel)"},checked:{control:"boolean",description:"Whether the switch is on or off"},disabled:{control:"boolean",description:"Whether the switch is disabled"},size:{control:"select",options:["small","medium","large"],description:"Size of the switch"},label:{control:"text",description:"Optional label text"}}},t={render:e=>{const[{checked:r},a]=F();return p(u,{...e,checked:r,onChange:s=>{var c;(c=e.onChange)==null||c.call(e,s),a({checked:s})}})}},n={...t,args:{checked:!1}},l={...t,args:{checked:!0}},o={...t,args:{checked:!0,label:"Enable notifications"}},i={args:{checked:!1,disabled:!0,label:"Disabled switch"}},d={args:{checked:!0,disabled:!0,label:"Disabled & Checked"}},m={...t,args:{checked:!0,size:"small",label:"Small switch"}},h={...t,args:{checked:!0,size:"large",label:"Large switch"}};var g,b,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: false
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var k,w,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var _,C,v;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true,
    label: 'Enable notifications'
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var y,D,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled switch'
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,x,z;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled & Checked'
  }
}`,...(z=(x=d.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var O,A,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true,
    size: 'small',
    label: 'Small switch'
  }
}`,...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,V,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...InteractiveTemplate,
  args: {
    checked: true,
    size: 'large',
    label: 'Large switch'
  }
}`,...(N=(V=h.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const R=["Default","Checked","WithLabel","Disabled","DisabledChecked","Small","Large"];export{l as Checked,n as Default,i as Disabled,d as DisabledChecked,h as Large,m as Small,o as WithLabel,R as __namedExportsOrder,P as default};
