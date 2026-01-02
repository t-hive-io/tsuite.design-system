import{a as e,j as h}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const r=({orientation:t="horizontal",className:g=""})=>e("div",{className:`divider divider--${t} ${g}`,role:"separator","aria-orientation":t});try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Components/Divider",component:r,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"}},tags:["autodocs"]},a={args:{orientation:"horizontal"}},n={render:()=>h("div",{style:{display:"flex",height:"100px",alignItems:"center"},children:[e("span",{children:"Left"}),e(r,{orientation:"vertical"}),e("span",{children:"Right"})]})},i={render:()=>h("div",{children:[e("p",{children:"Section 1"}),e(r,{}),e("p",{children:"Section 2"}),e(r,{}),e("p",{children:"Section 3"})]})};var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '100px',
    alignItems: 'center'
  }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div>
      <p>Section 1</p>
      <Divider />
      <p>Section 2</p>
      <Divider />
      <p>Section 3</p>
    </div>
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const _=["Horizontal","Vertical","InContent"];export{a as Horizontal,i as InContent,n as Vertical,_ as __namedExportsOrder,S as default};
