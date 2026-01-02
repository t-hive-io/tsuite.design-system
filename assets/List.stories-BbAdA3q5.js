import{a as e,f as K,j as i}from"./figma-docs-DQ4WnSMF.js";import"./index-uubelm5h.js";const t=({children:r,selected:u=!1,secondLevel:j=!1,locked:L=!1,hover:B=!1,hide:H=!1,expanded:W=!1,visible:O=!0,onClick:P,className:X=""})=>{if(H||!O)return null;const J=["list-item",u&&"list-item--selected",j&&"list-item--second-level",L&&"list-item--locked",B&&"list-item--hover",W&&"list-item--expanded",X].filter(Boolean).join(" ");return e("div",{className:J,onClick:L?void 0:P,children:r})},s=({children:r,className:u=""})=>e("div",{className:`list ${u}`,children:r});try{t.displayName="ListItem",t.__docgenInfo={description:"",displayName:"ListItem",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},secondLevel:{defaultValue:{value:"false"},description:"",name:"secondLevel",required:!1,type:{name:"boolean"}},locked:{defaultValue:{value:"false"},description:"",name:"locked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"false"},description:"",name:"hover",required:!1,type:{name:"boolean"}},hide:{defaultValue:{value:"false"},description:"",name:"hide",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{s.displayName="List",s.__docgenInfo={description:"",displayName:"List",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}var p;const G={title:"Components/Tree view",component:s,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1522:9414"},docs:{description:{component:((p=K.List)==null?void 0:p.description)||""}}},tags:["autodocs"],argTypes:{children:{description:"ListItem components to display in the tree"}}},n={render:()=>i(s,{children:[e(t,{children:"First item"}),e(t,{children:"Second item"}),e(t,{children:"Third item"})]})},d={render:()=>i(s,{children:[e(t,{selected:!0,children:"Selected item"}),e(t,{children:"Normal item"}),e(t,{children:"Another item"})]})},l={render:()=>i(s,{children:[e(t,{children:"Parent item"}),e(t,{secondLevel:!0,children:"Child item 1"}),e(t,{secondLevel:!0,selected:!0,children:"Child item 2 (selected)"}),e(t,{secondLevel:!0,children:"Child item 3"}),e(t,{children:"Another parent"})]})},a={render:()=>i(s,{children:[e(t,{children:"Normal item"}),e(t,{locked:!0,children:"Locked item"}),e(t,{children:"Another normal item"})]})},c={render:()=>i(s,{children:[e(t,{expanded:!0,visible:!0,children:"Expanded & visible"}),e(t,{secondLevel:!0,children:"Nested item 1"}),e(t,{secondLevel:!0,children:"Nested item 2"}),e(t,{children:"Collapsed parent"})]})},o={render:()=>i(s,{children:[e(t,{children:"Default state"}),e(t,{selected:!0,children:"Selected"}),e(t,{hover:!0,children:"Hover state"}),e(t,{locked:!0,children:"Locked"}),e(t,{secondLevel:!0,children:"Second level"}),e(t,{secondLevel:!0,selected:!0,children:"Second level selected"}),e(t,{expanded:!0,children:"Expanded"})]})},m={render:()=>i(s,{children:[e(t,{expanded:!0,visible:!0,children:"📁 src"}),e(t,{secondLevel:!0,expanded:!0,visible:!0,children:"📁 components"}),e(t,{secondLevel:!0,children:"📄 Button.tsx"}),e(t,{secondLevel:!0,selected:!0,children:"📄 Input.tsx"}),e(t,{secondLevel:!0,children:"📄 Switch.tsx"}),e(t,{secondLevel:!0,children:"📁 assets"}),e(t,{secondLevel:!0,children:"📄 App.tsx"}),e(t,{children:"📁 public"}),e(t,{locked:!0,children:"🔒 node_modules"})]})};var I,h,v;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,D,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem selected>Selected item</ListItem>
      <ListItem>Normal item</ListItem>
      <ListItem>Another item</ListItem>
    </List>
}`,...(x=(D=d.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var S,C,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Parent item</ListItem>
      <ListItem secondLevel>Child item 1</ListItem>
      <ListItem secondLevel selected>Child item 2 (selected)</ListItem>
      <ListItem secondLevel>Child item 3</ListItem>
      <ListItem>Another parent</ListItem>
    </List>
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var g,_,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Normal item</ListItem>
      <ListItem locked>Locked item</ListItem>
      <ListItem>Another normal item</ListItem>
    </List>
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var k,N,A;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem expanded visible>Expanded & visible</ListItem>
      <ListItem secondLevel>Nested item 1</ListItem>
      <ListItem secondLevel>Nested item 2</ListItem>
      <ListItem>Collapsed parent</ListItem>
    </List>
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var V,q,T;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Default state</ListItem>
      <ListItem selected>Selected</ListItem>
      <ListItem hover>Hover state</ListItem>
      <ListItem locked>Locked</ListItem>
      <ListItem secondLevel>Second level</ListItem>
      <ListItem secondLevel selected>Second level selected</ListItem>
      <ListItem expanded>Expanded</ListItem>
    </List>
}`,...(T=(q=o.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var E,w,F;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem expanded visible>📁 src</ListItem>
      <ListItem secondLevel expanded visible>📁 components</ListItem>
      <ListItem secondLevel>📄 Button.tsx</ListItem>
      <ListItem secondLevel selected>📄 Input.tsx</ListItem>
      <ListItem secondLevel>📄 Switch.tsx</ListItem>
      <ListItem secondLevel>📁 assets</ListItem>
      <ListItem secondLevel>📄 App.tsx</ListItem>
      <ListItem>📁 public</ListItem>
      <ListItem locked>🔒 node_modules</ListItem>
    </List>
}`,...(F=(w=m.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const M=["Default","WithSelection","SecondLevel","LockedItems","ExpandedState","AllStates","FileTree"];export{o as AllStates,n as Default,c as ExpandedState,m as FileTree,a as LockedItems,l as SecondLevel,d as WithSelection,M as __namedExportsOrder,G as default};
