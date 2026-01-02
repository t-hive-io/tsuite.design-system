import{a as e,j as h}from"./jsx-runtime-DlfvymUh.js";import{f as y}from"./figma-docs-BG7XTolv.js";import"./index-uubelm5h.js";const r=({orientation:t="horizontal",className:f=""})=>e("div",{className:`divider divider--${t} ${f}`,role:"separator","aria-orientation":t});try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}var o;const x={title:"Components/Divider",component:r,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:((o=y.Dividers)==null?void 0:o.description)||""}}},tags:["autodocs"]},n={args:{orientation:"horizontal"}},a={render:()=>h("div",{style:{display:"flex",height:"100px",alignItems:"center"},children:[e("span",{children:"Left"}),e(r,{orientation:"vertical"}),e("span",{children:"Right"})]})},i={render:()=>h("div",{children:[e("p",{children:"Section 1"}),e(r,{}),e("p",{children:"Section 2"}),e(r,{}),e("p",{children:"Section 3"})]})};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '100px',
    alignItems: 'center'
  }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,v,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div>
      <p>Section 1</p>
      <Divider />
      <p>Section 2</p>
      <Divider />
      <p>Section 3</p>
    </div>
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const z=["Horizontal","Vertical","InContent"];export{n as Horizontal,i as InContent,a as Vertical,z as __namedExportsOrder,x as default};
