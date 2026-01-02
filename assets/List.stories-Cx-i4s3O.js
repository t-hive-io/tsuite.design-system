import{a as e,j as i}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const t=({children:r,selected:m=!1,secondLevel:E=!1,locked:L=!1,hover:D=!1,hide:j=!1,expanded:T=!1,visible:w=!0,onClick:F,className:H=""})=>{if(j||!w)return null;const W=["list-item",m&&"list-item--selected",E&&"list-item--second-level",L&&"list-item--locked",D&&"list-item--hover",T&&"list-item--expanded",H].filter(Boolean).join(" ");return e("div",{className:W,onClick:L?void 0:F,children:r})},s=({children:r,className:m=""})=>e("div",{className:`list ${m}`,children:r});try{t.displayName="ListItem",t.__docgenInfo={description:"",displayName:"ListItem",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},secondLevel:{defaultValue:{value:"false"},description:"",name:"secondLevel",required:!1,type:{name:"boolean"}},locked:{defaultValue:{value:"false"},description:"",name:"locked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"false"},description:"",name:"hover",required:!1,type:{name:"boolean"}},hide:{defaultValue:{value:"false"},description:"",name:"hide",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{s.displayName="List",s.__docgenInfo={description:"",displayName:"List",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const P={title:"Components/List",component:s,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1522:9414"}},tags:["autodocs"]},n={render:()=>i(s,{children:[e(t,{children:"First item"}),e(t,{children:"Second item"}),e(t,{children:"Third item"})]})},d={render:()=>i(s,{children:[e(t,{selected:!0,children:"Selected item"}),e(t,{children:"Normal item"}),e(t,{children:"Another item"})]})},l={render:()=>i(s,{children:[e(t,{children:"Parent item"}),e(t,{secondLevel:!0,children:"Child item 1"}),e(t,{secondLevel:!0,selected:!0,children:"Child item 2 (selected)"}),e(t,{secondLevel:!0,children:"Child item 3"}),e(t,{children:"Another parent"})]})},a={render:()=>i(s,{children:[e(t,{children:"Normal item"}),e(t,{locked:!0,children:"Locked item"}),e(t,{children:"Another normal item"})]})},o={render:()=>i(s,{children:[e(t,{expanded:!0,visible:!0,children:"Expanded & visible"}),e(t,{secondLevel:!0,children:"Nested item 1"}),e(t,{secondLevel:!0,children:"Nested item 2"}),e(t,{children:"Collapsed parent"})]})},c={render:()=>i(s,{children:[e(t,{children:"Default state"}),e(t,{selected:!0,children:"Selected"}),e(t,{hover:!0,children:"Hover state"}),e(t,{locked:!0,children:"Locked"}),e(t,{secondLevel:!0,children:"Second level"}),e(t,{secondLevel:!0,selected:!0,children:"Second level selected"}),e(t,{expanded:!0,children:"Expanded"})]})};var u,p,I;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
}`,...(I=(p=n.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var h,v,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem selected>Selected item</ListItem>
      <ListItem>Normal item</ListItem>
      <ListItem>Another item</ListItem>
    </List>
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,y,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Parent item</ListItem>
      <ListItem secondLevel>Child item 1</ListItem>
      <ListItem secondLevel selected>Child item 2 (selected)</ListItem>
      <ListItem secondLevel>Child item 3</ListItem>
      <ListItem>Another parent</ListItem>
    </List>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var N,_,g;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Normal item</ListItem>
      <ListItem locked>Locked item</ListItem>
      <ListItem>Another normal item</ListItem>
    </List>
}`,...(g=(_=a.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var k,b,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem expanded visible>Expanded & visible</ListItem>
      <ListItem secondLevel>Nested item 1</ListItem>
      <ListItem secondLevel>Nested item 2</ListItem>
      <ListItem>Collapsed parent</ListItem>
    </List>
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var V,q,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Default state</ListItem>
      <ListItem selected>Selected</ListItem>
      <ListItem hover>Hover state</ListItem>
      <ListItem locked>Locked</ListItem>
      <ListItem secondLevel>Second level</ListItem>
      <ListItem secondLevel selected>Second level selected</ListItem>
      <ListItem expanded>Expanded</ListItem>
    </List>
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const X=["Default","WithSelection","SecondLevel","LockedItems","ExpandedState","AllStates"];export{c as AllStates,n as Default,o as ExpandedState,a as LockedItems,l as SecondLevel,d as WithSelection,X as __namedExportsOrder,P as default};
