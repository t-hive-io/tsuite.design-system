import{a as r,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const a=({type:b="text",size:me="medium",label:I,placeholder:he,value:ge,disabled:v=!1,required:w=!1,error:l,helperText:x,fullWidth:ye=!1,iconLeft:S,iconRight:z,onChange:fe,onBlur:be,onFocus:Ie})=>{const ve=["tsuite-input-container",ye&&"tsuite-input-container--full-width"].filter(Boolean).join(" "),we=["tsuite-input-wrapper",`tsuite-input-wrapper--${me}`,l&&"tsuite-input-wrapper--error",v&&"tsuite-input-wrapper--disabled"].filter(Boolean).join(" ");return r("div",{className:ve,children:[I&&r("label",{className:"tsuite-input-label",children:[I,w&&e("span",{className:"tsuite-input-label__required",children:"*"})]}),r("div",{className:we,children:[S&&e("span",{className:"tsuite-input__icon-left",children:S}),e("input",{type:b,className:"tsuite-input",placeholder:he,value:ge,disabled:v,required:w,onChange:fe,onBlur:be,onFocus:Ie}),z&&e("span",{className:"tsuite-input__icon-right",children:z})]}),(l||x)&&e("div",{className:l?"tsuite-input-error":"tsuite-input-helper",children:l||x})]})};try{a.displayName="Input",a.__docgenInfo={description:"Primary UI component for user text input",displayName:"Input",props:{type:{defaultValue:{value:"text"},description:"Input type",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'},{value:'"search"'}]}},size:{defaultValue:{value:"medium"},description:"Input size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Input placeholder",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Input value",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Is input disabled?",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Is input required?",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"Full width input",name:"fullWidth",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"Icon to display before input",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"Icon to display after input",name:"iconRight",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"Blur handler",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"Focus handler",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}}}}}catch{}const ze={title:"3. Component Category Pages/Input",component:a,parameters:{layout:"centered",figma:{pageId:"5180:45691",components:2,totalVariants:46}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"Input type"},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},required:{control:"boolean"},fullWidth:{control:"boolean"}}},t={args:{placeholder:"Enter text..."}},n={args:{label:"Username",placeholder:"Enter your username"}},s={args:{label:"Email",type:"email",placeholder:"Enter your email",required:!0}},o={args:{label:"Password",type:"password",placeholder:"Enter your password",error:"Password must be at least 8 characters"}},p={args:{label:"Username",placeholder:"johndoe",helperText:"Choose a unique username"}},i={args:{size:"small",placeholder:"Small input"}},u={args:{size:"medium",placeholder:"Medium input"}},d={args:{size:"large",placeholder:"Large input"}},c={args:{label:"Disabled Input",placeholder:"Cannot edit this",disabled:!0,value:"Disabled value"}},m={args:{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0},parameters:{layout:"padded"}},h={args:{label:"Search",placeholder:"Search...",iconLeft:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"})})}},g={args:{label:"Password",type:"password",placeholder:"Enter password",iconRight:r("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e("path",{d:"M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"}),e("path",{d:"M8 0C4.146 0 .986 2.175 0 5.227c.986 3.052 4.146 5.227 8 5.227s7.014-2.175 8-5.227C15.014 2.175 11.854 0 8 0zM1.173 5.227C2.072 2.866 4.85 1 8 1s5.928 1.866 6.827 4.227C13.928 7.588 11.15 9.454 8 9.454s-5.928-1.866-6.827-4.227z"})]})}},y={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",padding:"2rem",width:"400px"},children:[e("h3",{style:{marginBottom:"0.5rem"},children:"All Input Types"}),e(a,{type:"text",label:"Text Input",placeholder:"Enter text"}),e(a,{type:"email",label:"Email Input",placeholder:"user@example.com"}),e(a,{type:"password",label:"Password Input",placeholder:"Enter password"}),e(a,{type:"number",label:"Number Input",placeholder:"123"}),e(a,{type:"tel",label:"Phone Input",placeholder:"+1 234 567 8900"}),e(a,{type:"url",label:"URL Input",placeholder:"https://example.com"}),e(a,{type:"search",label:"Search Input",placeholder:"Search..."})]}),parameters:{layout:"fullscreen"}},f={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",padding:"2rem",width:"400px"},children:[e("h3",{style:{marginBottom:"0.5rem"},children:"All Sizes"}),e(a,{size:"small",label:"Small",placeholder:"Small input"}),e(a,{size:"medium",label:"Medium",placeholder:"Medium input"}),e(a,{size:"large",label:"Large",placeholder:"Large input"})]}),parameters:{layout:"fullscreen"}};var E,q,C;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(C=(q=t.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var M,L,W;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var T,N,V;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true
  }
}`,...(V=(N=s.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,B,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters'
  }
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,R,F;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username'
  }
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var A,j,U;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small input'
  }
}`,...(U=(j=i.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var H,k,O;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    placeholder: 'Medium input'
  }
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var $,G,J;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Large input'
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'Disabled value'
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,le;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
      </svg>
  }
}`,...(le=(re=h.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,ne,se;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    iconRight: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
        <path d="M8 0C4.146 0 .986 2.175 0 5.227c.986 3.052 4.146 5.227 8 5.227s7.014-2.175 8-5.227C15.014 2.175 11.854 0 8 0zM1.173 5.227C2.072 2.866 4.85 1 8 1s5.928 1.866 6.827 4.227C13.928 7.588 11.15 9.454 8 9.454s-5.928-1.866-6.827-4.227z" />
      </svg>
  }
}`,...(se=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,pe,ie;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '2rem',
    width: '400px'
  }}>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>All Input Types</h3>
      <Input type="text" label="Text Input" placeholder="Enter text" />
      <Input type="email" label="Email Input" placeholder="user@example.com" />
      <Input type="password" label="Password Input" placeholder="Enter password" />
      <Input type="number" label="Number Input" placeholder="123" />
      <Input type="tel" label="Phone Input" placeholder="+1 234 567 8900" />
      <Input type="url" label="URL Input" placeholder="https://example.com" />
      <Input type="search" label="Search Input" placeholder="Search..." />
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(ie=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var ue,de,ce;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '2rem',
    width: '400px'
  }}>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>All Sizes</h3>
      <Input size="small" label="Small" placeholder="Small input" />
      <Input size="medium" label="Medium" placeholder="Medium input" />
      <Input size="large" label="Large" placeholder="Large input" />
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Ee=["Default","WithLabel","Required","WithError","WithHelperText","Small","Medium","Large","Disabled","FullWidth","WithIconLeft","WithIconRight","AllInputTypes","AllSizes"];export{y as AllInputTypes,f as AllSizes,t as Default,c as Disabled,m as FullWidth,d as Large,u as Medium,s as Required,i as Small,o as WithError,p as WithHelperText,h as WithIconLeft,g as WithIconRight,n as WithLabel,Ee as __namedExportsOrder,ze as default};
