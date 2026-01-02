import{j as n,a as e}from"./jsx-runtime-DlfvymUh.js";import{r as N}from"./index-uubelm5h.js";const t=({title:d,children:k,defaultExpanded:T=!1,className:I=""})=>{const[o,_]=N.useState(T);return n("div",{className:`accordion ${I}`,children:[n("button",{className:`accordion-header ${o?"accordion-header--expanded":""}`,onClick:()=>_(!o),"aria-expanded":o,children:[e("span",{className:"accordion-title",children:d}),e("span",{className:"accordion-icon",children:o?"−":"+"})]}),o&&e("div",{className:"accordion-content",children:k})]})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},defaultExpanded:{defaultValue:{value:"false"},description:"",name:"defaultExpanded",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Components/Accordion",component:t,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:`Collapsible accordion component for organizing content.

## Usage
\`\`\`tsx
import { Accordion } from './components/Accordion';

<Accordion title="Section Title" defaultExpanded={false}>
  <p>Your content here...</p>
</Accordion>
\`\`\`

## Features
- Click title bar to expand/collapse
- Optional defaultExpanded prop
- Smooth animations
- Accessible keyboard navigation

Click the accordions below to test the expand/collapse behavior.`}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Header text displayed in the accordion"},defaultExpanded:{control:"boolean",description:"Whether the accordion starts expanded"},children:{control:"text",description:"Content shown when expanded"}}},i={args:{title:"Click to expand",children:"This is the accordion content.",defaultExpanded:!1}},a={args:{title:"Already expanded",children:"This content is visible by default.",defaultExpanded:!0}},c={render:()=>n("div",{children:[e(t,{title:"Section 1",defaultExpanded:!0,children:e("p",{children:"Content for section 1"})}),e(t,{title:"Section 2",children:e("p",{children:"Content for section 2"})}),n(t,{title:"Section 3",children:[e("p",{children:"Content for section 3"}),n("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]})]})},r={args:{title:"Rich Content Example",children:n("div",{children:[e("h4",{children:"Detailed Information"}),e("p",{children:"This accordion can contain any React content."}),e("button",{onClick:()=>alert("Button clicked!"),children:"Click me"})]}),defaultExpanded:!1}},l={args:{title:"Documentation",children:n("div",{children:[e("p",{children:"The Accordion component is a collapsible content container that allows users to expand and collapse sections of content."}),e("h4",{children:"Features:"}),n("ul",{children:[e("li",{children:"Expandable/collapsible sections"}),e("li",{children:"Customizable titles"}),e("li",{children:"Support for rich content"}),e("li",{children:"Keyboard accessible"}),e("li",{children:"Automatic state management"})]}),e("h4",{children:"Usage:"}),e("pre",{children:`<Accordion title="My Section">
  Content goes here
</Accordion>`})]}),defaultExpanded:!1}};var s,p,h;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Click to expand',
    children: 'This is the accordion content.',
    defaultExpanded: false
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,m,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Already expanded',
    children: 'This content is visible by default.',
    defaultExpanded: true
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,g,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,A,E;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Rich Content Example',
    children: <div>
        <h4>Detailed Information</h4>
        <p>This accordion can contain any React content.</p>
        <button onClick={() => alert('Button clicked!')}>Click me</button>
      </div>,
    defaultExpanded: false
  }
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var y,S,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Documentation',
    children: <div>
        <p>The Accordion component is a collapsible content container that allows users to expand and collapse sections of content.</p>
        <h4>Features:</h4>
        <ul>
          <li>Expandable/collapsible sections</li>
          <li>Customizable titles</li>
          <li>Support for rich content</li>
          <li>Keyboard accessible</li>
          <li>Automatic state management</li>
        </ul>
        <h4>Usage:</h4>
        <pre>{'<Accordion title="My Section">\\n  Content goes here\\n</Accordion>'}</pre>
      </div>,
    defaultExpanded: false
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const F=["Collapsed","Expanded","Multiple","WithRichContent","LongContent"];export{i as Collapsed,a as Expanded,l as LongContent,c as Multiple,r as WithRichContent,F as __namedExportsOrder,D as default};
