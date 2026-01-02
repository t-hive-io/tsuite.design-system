import{j as n,a as e}from"./jsx-runtime-DlfvymUh.js";import{r as k}from"./index-uubelm5h.js";const t=({title:d,children:A,defaultExpanded:S=!1,className:v=""})=>{const[a,I]=k.useState(S);return n("div",{className:`accordion ${v}`,children:[n("button",{className:`accordion-header ${a?"accordion-header--expanded":""}`,onClick:()=>I(!a),"aria-expanded":a,children:[e("span",{className:"accordion-title",children:d}),e("span",{className:"accordion-icon",children:a?"−":"+"})]}),a&&e("div",{className:"accordion-content",children:A})]})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},defaultExpanded:{defaultValue:{value:"false"},description:"",name:"defaultExpanded",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const N={title:"Components/Accordion",component:t,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"}},tags:["autodocs"]},i={args:{title:"Click to expand",children:"This is the accordion content.",defaultExpanded:!1}},c={args:{title:"Already expanded",children:"This content is visible by default.",defaultExpanded:!0}},o={render:()=>n("div",{children:[e(t,{title:"Section 1",defaultExpanded:!0,children:e("p",{children:"Content for section 1"})}),e(t,{title:"Section 2",children:e("p",{children:"Content for section 2"})}),n(t,{title:"Section 3",children:[e("p",{children:"Content for section 3"}),n("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]})]})},r={args:{title:"Rich Content Example",children:n("div",{children:[e("h4",{children:"Detailed Information"}),e("p",{children:"This accordion can contain any React content."}),e("button",{onClick:()=>alert("Button clicked!"),children:"Click me"})]}),defaultExpanded:!1}};var l,s,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Click to expand',
    children: 'This is the accordion content.',
    defaultExpanded: false
  }
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,m,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Already expanded',
    children: 'This content is visible by default.',
    defaultExpanded: true
  }
}`,...(h=(m=c.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,x,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion title="Section 1" defaultExpanded={true}>
        <p>Content for section 1</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content for section 2</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>Content for section 3</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Accordion>
    </div>
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,E,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Rich Content Example',
    children: <div>
        <h4>Detailed Information</h4>
        <p>This accordion can contain any React content.</p>
        <button onClick={() => alert('Button clicked!')}>Click me</button>
      </div>,
    defaultExpanded: false
  }
}`,...(y=(E=r.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const T=["Collapsed","Expanded","Multiple","WithRichContent"];export{i as Collapsed,c as Expanded,o as Multiple,r as WithRichContent,T as __namedExportsOrder,N as default};
