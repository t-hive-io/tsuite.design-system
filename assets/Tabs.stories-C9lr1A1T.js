import{a as e,f as P,j as t}from"./figma-docs-DQ4WnSMF.js";import{r as R,R as p}from"./index-uubelm5h.js";const a=({label:l,selected:s=!1,onClick:i})=>e("button",{className:`tab ${s?"tab--selected":""}`,onClick:i,role:"tab","aria-selected":s,children:l}),r=({defaultValue:l,children:s,onChange:i,className:N=""})=>{const[q,k]=R.useState(l),w=n=>{k(n),i==null||i(n)};return e("div",{className:`tabs ${N}`,role:"tablist",children:p.Children.map(s,n=>p.isValidElement(n)?p.cloneElement(n,{selected:n.props.value===q,onClick:()=>w(n.props.value)}):n)})};try{a.displayName="Tab",a.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}var b;const E={title:"Components/Tabs",component:r,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"},docs:{description:{component:((b=P["Tab item"])==null?void 0:b.description)||""}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange",description:"Callback fired when tab changes (logged in Actions panel)"},defaultValue:{control:"text",description:"Initially selected tab value"}}},o={render:()=>t(r,{defaultValue:"tab1",children:[e(a,{label:"Tab 1",value:"tab1"}),e(a,{label:"Tab 2",value:"tab2"}),e(a,{label:"Tab 3",value:"tab3"})]})},d={render:()=>t(r,{defaultValue:"home",children:[e(a,{label:"Home",value:"home"}),e(a,{label:"Products",value:"products"}),e(a,{label:"Services",value:"services"}),e(a,{label:"About",value:"about"}),e(a,{label:"Contact",value:"contact"})]})},c={render:()=>{const[l,s]=p.useState("profile");return t("div",{children:[t(r,{defaultValue:"profile",onChange:s,children:[e(a,{label:"Profile",value:"profile"}),e(a,{label:"Settings",value:"settings"}),e(a,{label:"Notifications",value:"notifications"})]}),t("div",{style:{padding:"20px",border:"1px solid #e0e0e0",marginTop:"8px",borderRadius:"4px"},children:[l==="profile"&&t("div",{children:[e("h3",{children:"Profile"}),e("p",{children:"Manage your profile information and preferences."})]}),l==="settings"&&t("div",{children:[e("h3",{children:"Settings"}),e("p",{children:"Configure application settings and options."})]}),l==="notifications"&&t("div",{children:[e("h3",{children:"Notifications"}),e("p",{children:"Control your notification preferences."})]})]})]})}},u={render:()=>t(r,{defaultValue:"1",children:[e(a,{label:"One",value:"1"}),e(a,{label:"Two",value:"2"})]})};var f,m,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <Tab label="Tab 1" value="tab1" />
      <Tab label="Tab 2" value="tab2" />
      <Tab label="Tab 3" value="tab3" />
    </Tabs>
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var T,g,h;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="home">
      <Tab label="Home" value="home" />
      <Tab label="Products" value="products" />
      <Tab label="Services" value="services" />
      <Tab label="About" value="about" />
      <Tab label="Contact" value="contact" />
    </Tabs>
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,V,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var _,C,x;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="1">
      <Tab label="One" value="1" />
      <Tab label="Two" value="2" />
    </Tabs>
}`,...(x=(C=u.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const I=["Default","ManyTabs","WithContent","Small"];export{o as Default,d as ManyTabs,u as Small,c as WithContent,I as __namedExportsOrder,E as default};
