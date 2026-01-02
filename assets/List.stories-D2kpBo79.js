import{a as e,j as i}from"./jsx-runtime-DlfvymUh.js";import"./index-uubelm5h.js";const t=({children:r,selected:u=!1,secondLevel:F=!1,locked:L=!1,hover:j=!1,hide:B=!1,expanded:H=!1,visible:W=!0,onClick:O,className:P=""})=>{if(B||!W)return null;const X=["list-item",u&&"list-item--selected",F&&"list-item--second-level",L&&"list-item--locked",j&&"list-item--hover",H&&"list-item--expanded",P].filter(Boolean).join(" ");return e("div",{className:X,onClick:L?void 0:O,children:r})},s=({children:r,className:u=""})=>e("div",{className:`list ${u}`,children:r});try{t.displayName="ListItem",t.__docgenInfo={description:"",displayName:"ListItem",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},secondLevel:{defaultValue:{value:"false"},description:"",name:"secondLevel",required:!1,type:{name:"boolean"}},locked:{defaultValue:{value:"false"},description:"",name:"locked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"false"},description:"",name:"hover",required:!1,type:{name:"boolean"}},hide:{defaultValue:{value:"false"},description:"",name:"hide",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{s.displayName="List",s.__docgenInfo={description:"",displayName:"List",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const $={title:"Components/Tree view",component:s,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1522:9414"},docs:{description:{component:"Tree/List view component for hierarchical navigation. Supports selection, nesting, locked states, and expand/collapse. Synced from T-Suite Design System in Figma."}}},tags:["autodocs"],argTypes:{children:{description:"ListItem components to display in the tree"}}},n={render:()=>i(s,{children:[e(t,{children:"First item"}),e(t,{children:"Second item"}),e(t,{children:"Third item"})]})},d={render:()=>i(s,{children:[e(t,{selected:!0,children:"Selected item"}),e(t,{children:"Normal item"}),e(t,{children:"Another item"})]})},l={render:()=>i(s,{children:[e(t,{children:"Parent item"}),e(t,{secondLevel:!0,children:"Child item 1"}),e(t,{secondLevel:!0,selected:!0,children:"Child item 2 (selected)"}),e(t,{secondLevel:!0,children:"Child item 3"}),e(t,{children:"Another parent"})]})},a={render:()=>i(s,{children:[e(t,{children:"Normal item"}),e(t,{locked:!0,children:"Locked item"}),e(t,{children:"Another normal item"})]})},c={render:()=>i(s,{children:[e(t,{expanded:!0,visible:!0,children:"Expanded & visible"}),e(t,{secondLevel:!0,children:"Nested item 1"}),e(t,{secondLevel:!0,children:"Nested item 2"}),e(t,{children:"Collapsed parent"})]})},o={render:()=>i(s,{children:[e(t,{children:"Default state"}),e(t,{selected:!0,children:"Selected"}),e(t,{hover:!0,children:"Hover state"}),e(t,{locked:!0,children:"Locked"}),e(t,{secondLevel:!0,children:"Second level"}),e(t,{secondLevel:!0,selected:!0,children:"Second level selected"}),e(t,{expanded:!0,children:"Expanded"})]})},m={render:()=>i(s,{children:[e(t,{expanded:!0,visible:!0,children:"📁 src"}),e(t,{secondLevel:!0,expanded:!0,visible:!0,children:"📁 components"}),e(t,{secondLevel:!0,children:"📄 Button.tsx"}),e(t,{secondLevel:!0,selected:!0,children:"📄 Input.tsx"}),e(t,{secondLevel:!0,children:"📄 Switch.tsx"}),e(t,{secondLevel:!0,children:"📁 assets"}),e(t,{secondLevel:!0,children:"📄 App.tsx"}),e(t,{children:"📁 public"}),e(t,{locked:!0,children:"🔒 node_modules"})]})};var p,I,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
}`,...(h=(I=n.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var v,f,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem selected>Selected item</ListItem>
      <ListItem>Normal item</ListItem>
      <ListItem>Another item</ListItem>
    </List>
}`,...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var S,x,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Parent item</ListItem>
      <ListItem secondLevel>Child item 1</ListItem>
      <ListItem secondLevel selected>Child item 2 (selected)</ListItem>
      <ListItem secondLevel>Child item 3</ListItem>
      <ListItem>Another parent</ListItem>
    </List>
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,g,_;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Normal item</ListItem>
      <ListItem locked>Locked item</ListItem>
      <ListItem>Another normal item</ListItem>
    </List>
}`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var b,k,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem expanded visible>Expanded & visible</ListItem>
      <ListItem secondLevel>Nested item 1</ListItem>
      <ListItem secondLevel>Nested item 2</ListItem>
      <ListItem>Collapsed parent</ListItem>
    </List>
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var A,V,q;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Default state</ListItem>
      <ListItem selected>Selected</ListItem>
      <ListItem hover>Hover state</ListItem>
      <ListItem locked>Locked</ListItem>
      <ListItem secondLevel>Second level</ListItem>
      <ListItem secondLevel selected>Second level selected</ListItem>
      <ListItem expanded>Expanded</ListItem>
    </List>
}`,...(q=(V=o.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var T,w,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const z=["Default","WithSelection","SecondLevel","LockedItems","ExpandedState","AllStates","FileTree"];export{o as AllStates,n as Default,c as ExpandedState,m as FileTree,a as LockedItems,l as SecondLevel,d as WithSelection,z as __namedExportsOrder,$ as default};
