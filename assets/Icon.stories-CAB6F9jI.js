import{a as e,j as w}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const a=({name:l,size:I="medium",state:x="enabled",className:_=""})=>e("span",{className:`icon icon--${I} icon--${x} ${_}`,"data-icon":l,"aria-label":l,children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})});try{a.displayName="Icon",a.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},state:{defaultValue:{value:"enabled"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"enabled"'},{value:'"disabled"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Components/Icon",component:a,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1106:6756"}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},state:{control:"select",options:["enabled","disabled"]}}},s={args:{name:"check",size:"small",state:"enabled"}},n={args:{name:"check",size:"medium",state:"enabled"}},r={args:{name:"check",size:"large",state:"enabled"}},t={args:{name:"check",size:"medium",state:"disabled"}},c={render:()=>w("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e(a,{name:"check",size:"small"}),e(a,{name:"check",size:"medium"}),e(a,{name:"check",size:"large"})]})};var i,m,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'check',
    size: 'small',
    state: 'enabled'
  }
}`,...(o=(m=s.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var d,u,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'check',
    size: 'medium',
    state: 'enabled'
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,z;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'check',
    size: 'large',
    state: 'enabled'
  }
}`,...(z=(h=r.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'check',
    size: 'medium',
    state: 'disabled'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,v,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Icon name="check" size="small" />
      <Icon name="check" size="medium" />
      <Icon name="check" size="large" />
    </div>
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const L=["Small","Medium","Large","Disabled","AllSizes"];export{c as AllSizes,t as Disabled,r as Large,n as Medium,s as Small,L as __namedExportsOrder,q as default};
