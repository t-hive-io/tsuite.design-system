import{a as e,j as l}from"./jsx-runtime-DlfvymUh.js";import{r as q,R as p}from"./index-uubelm5h.js";const a=({label:t,selected:s=!1,onClick:o})=>e("button",{className:`tab ${s?"tab--selected":""}`,onClick:o,role:"tab","aria-selected":s,children:t}),r=({defaultValue:t,children:s,onChange:o,className:x=""})=>{const[N,w]=q.useState(t),k=n=>{w(n),o==null||o(n)};return e("div",{className:`tabs ${x}`,role:"tablist",children:p.Children.map(s,n=>p.isValidElement(n)?p.cloneElement(n,{selected:n.props.value===N,onClick:()=>k(n.props.value)}):n)})};try{a.displayName="Tab",a.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Components/Tabs",component:r,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:`Tabbed navigation for organizing content into separate views.

## Usage
\`\`\`tsx
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab1', label: 'Overview' },
  { id: 'tab2', label: 'Details' }
];

<Tabs 
  tabs={tabs} 
  activeTab="tab1"
  onChange={(tabId) => console.log('Changed to:', tabId)}
/>
\`\`\`

## Features
- Multiple tab sizes (small, medium, large)
- onChange callback for tab switching
- Keyboard navigation support

Click the tabs below to test switching - events are logged in **Actions** panel.`}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange",description:"Callback fired when tab changes (logged in Actions panel)"},defaultValue:{control:"text",description:"Initially selected tab value"}}},i={render:()=>l(r,{defaultValue:"tab1",children:[e(a,{label:"Tab 1",value:"tab1"}),e(a,{label:"Tab 2",value:"tab2"}),e(a,{label:"Tab 3",value:"tab3"})]})},d={render:()=>l(r,{defaultValue:"home",children:[e(a,{label:"Home",value:"home"}),e(a,{label:"Products",value:"products"}),e(a,{label:"Services",value:"services"}),e(a,{label:"About",value:"about"}),e(a,{label:"Contact",value:"contact"})]})},c={render:()=>{const[t,s]=p.useState("profile");return l("div",{children:[l(r,{defaultValue:"profile",onChange:s,children:[e(a,{label:"Profile",value:"profile"}),e(a,{label:"Settings",value:"settings"}),e(a,{label:"Notifications",value:"notifications"})]}),l("div",{style:{padding:"20px",border:"1px solid #e0e0e0",marginTop:"8px",borderRadius:"4px"},children:[t==="profile"&&l("div",{children:[e("h3",{children:"Profile"}),e("p",{children:"Manage your profile information and preferences."})]}),t==="settings"&&l("div",{children:[e("h3",{children:"Settings"}),e("p",{children:"Configure application settings and options."})]}),t==="notifications"&&l("div",{children:[e("h3",{children:"Notifications"}),e("p",{children:"Control your notification preferences."})]})]})]})}},u={render:()=>l(r,{defaultValue:"1",children:[e(a,{label:"One",value:"1"}),e(a,{label:"Two",value:"2"})]})};var b,f,m;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <Tab label="Tab 1" value="tab1" />
      <Tab label="Tab 2" value="tab2" />
      <Tab label="Tab 3" value="tab3" />
    </Tabs>
}`,...(m=(f=i.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var v,g,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="home">
      <Tab label="Home" value="home" />
      <Tab label="Products" value="products" />
      <Tab label="Services" value="services" />
      <Tab label="About" value="about" />
      <Tab label="Contact" value="contact" />
    </Tabs>
}`,...(T=(g=d.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,y,V;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('profile');
    return <div>
        <Tabs defaultValue="profile" onChange={setSelected}>
          <Tab label="Profile" value="profile" />
          <Tab label="Settings" value="settings" />
          <Tab label="Notifications" value="notifications" />
        </Tabs>
        <div style={{
        padding: '20px',
        border: '1px solid #e0e0e0',
        marginTop: '8px',
        borderRadius: '4px'
      }}>
          {selected === 'profile' && <div>
              <h3>Profile</h3>
              <p>Manage your profile information and preferences.</p>
            </div>}
          {selected === 'settings' && <div>
              <h3>Settings</h3>
              <p>Configure application settings and options.</p>
            </div>}
          {selected === 'notifications' && <div>
              <h3>Notifications</h3>
              <p>Control your notification preferences.</p>
            </div>}
        </div>
      </div>;
  }
}`,...(V=(y=c.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var C,S,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="1">
      <Tab label="One" value="1" />
      <Tab label="Two" value="2" />
    </Tabs>
}`,...(_=(S=u.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const M=["Default","ManyTabs","WithContent","Small"];export{i as Default,d as ManyTabs,u as Small,c as WithContent,M as __namedExportsOrder,A as default};
