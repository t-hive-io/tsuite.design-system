import{a as e,j as o}from"./jsx-runtime-DlfvymUh.js";import{r as C,R as d}from"./index-uubelm5h.js";const a=({label:t,selected:n=!1,onClick:s})=>e("button",{className:`tab ${n?"tab--selected":""}`,onClick:s,role:"tab","aria-selected":n,children:t}),r=({defaultValue:t,children:n,onChange:s,className:V=""})=>{const[S,_]=C.useState(t),N=l=>{_(l),s==null||s(l)};return e("div",{className:`tabs ${V}`,role:"tablist",children:d.Children.map(n,l=>d.isValidElement(l)?d.cloneElement(l,{selected:l.props.value===S,onClick:()=>N(l.props.value)}):l)})};try{a.displayName="Tab",a.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const P={title:"Components/Tabs",component:r,parameters:{layout:"padded",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System"}},tags:["autodocs"]},i={render:()=>o(r,{defaultValue:"tab1",children:[e(a,{label:"Tab 1",value:"tab1"}),e(a,{label:"Tab 2",value:"tab2"}),e(a,{label:"Tab 3",value:"tab3"})]})},c={render:()=>o(r,{defaultValue:"home",children:[e(a,{label:"Home",value:"home"}),e(a,{label:"Products",value:"products"}),e(a,{label:"Services",value:"services"}),e(a,{label:"About",value:"about"}),e(a,{label:"Contact",value:"contact"})]})},u={render:()=>{const[t,n]=React.useState("profile");return o("div",{children:[o(r,{defaultValue:"profile",onChange:n,children:[e(a,{label:"Profile",value:"profile"}),e(a,{label:"Settings",value:"settings"}),e(a,{label:"Notifications",value:"notifications"})]}),o("div",{style:{padding:"20px"},children:[t==="profile"&&e("p",{children:"Profile content here"}),t==="settings"&&e("p",{children:"Settings content here"}),t==="notifications"&&e("p",{children:"Notifications content here"})]})]})}};var p,b,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <Tab label="Tab 1" value="tab1" />
      <Tab label="Tab 2" value="tab2" />
      <Tab label="Tab 3" value="tab3" />
    </Tabs>
}`,...(m=(b=i.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var f,v,T;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="home">
      <Tab label="Home" value="home" />
      <Tab label="Products" value="products" />
      <Tab label="Services" value="services" />
      <Tab label="About" value="about" />
      <Tab label="Contact" value="contact" />
    </Tabs>
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var g,h,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('profile');
    return <div>
        <Tabs defaultValue="profile" onChange={setSelected}>
          <Tab label="Profile" value="profile" />
          <Tab label="Settings" value="settings" />
          <Tab label="Notifications" value="notifications" />
        </Tabs>
        <div style={{
        padding: '20px'
      }}>
          {selected === 'profile' && <p>Profile content here</p>}
          {selected === 'settings' && <p>Settings content here</p>}
          {selected === 'notifications' && <p>Notifications content here</p>}
        </div>
      </div>;
  }
}`,...(y=(h=u.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const k=["Default","ManyTabs","WithContent"];export{i as Default,c as ManyTabs,u as WithContent,k as __namedExportsOrder,P as default};
