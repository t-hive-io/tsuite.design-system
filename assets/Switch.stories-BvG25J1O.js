import{j as F,a as n}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const i=({checked:d=!1,onChange:m,disabled:o=!1,label:u,size:j="medium"})=>{const E=O=>{!o&&m&&m(O.target.checked)};return F("label",{className:`switch switch--${j} ${o?"switch--disabled":""}`,children:[n("input",{type:"checkbox",checked:d,onChange:E,disabled:o,className:"switch__input"}),n("span",{className:"switch__slider"}),u&&n("span",{className:"switch__label",children:u})]})};try{i.displayName="Switch",i.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const $={title:"Components/Switch",component:i,parameters:{design:{type:"figma",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:"Toggle switch component for binary choices. Connected to T-Suite Design System in Figma."}}},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether the switch is on or off"},disabled:{control:"boolean",description:"Whether the switch is disabled"},size:{control:"select",options:["small","medium","large"],description:"Size of the switch"},label:{control:"text",description:"Optional label text"}}},e={args:{checked:!1}},a={args:{checked:!0}},s={args:{checked:!0,label:"Enable notifications"}},r={args:{checked:!1,disabled:!0,label:"Disabled switch"}},c={args:{checked:!0,disabled:!0,label:"Disabled & Checked"}},t={args:{checked:!0,size:"small",label:"Small switch"}},l={args:{checked:!0,size:"large",label:"Large switch"}};var p,h,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,S,_;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Enable notifications'
  }
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var y,D,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled switch'
  }
}`,...(C=(D=r.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var v,x,z;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled & Checked'
  }
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var L,N,V;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'small',
    label: 'Small switch'
  }
}`,...(V=(N=t.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,T,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'large',
    label: 'Large switch'
  }
}`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const A=["Default","Checked","WithLabel","Disabled","DisabledChecked","Small","Large"];export{a as Checked,e as Default,r as Disabled,c as DisabledChecked,l as Large,t as Small,s as WithLabel,A as __namedExportsOrder,$ as default};
