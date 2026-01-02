import{a,j as $}from"./jsx-runtime-DlfvymUh.js";import{r as c}from"./index-uubelm5h.js";const n=({name:e,size:A="medium",state:C="enabled",className:D=""})=>{const[V,q]=c.useState("");return c.useEffect(()=>{(async()=>{try{const s=await fetch(`/icons/${e}.svg`);if(s.ok){const j=await s.text();q(j)}else console.warn(`Icon "${e}" not found`)}catch(s){console.warn(`Failed to load icon "${e}":`,s)}})()},[e]),a("span",{className:`icon icon--${A} icon--${C} ${D}`,"data-icon":e,"aria-label":e,dangerouslySetInnerHTML:{__html:V}})};try{n.displayName="Icon",n.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},state:{defaultValue:{value:"enabled"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"enabled"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Components/Icon",component:n,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1106:6756"}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Icon name (e.g., forklift, pallet-image--epal1, cdi)"},size:{control:"select",options:["small","medium","large"]},state:{control:"select",options:["enabled","disabled"]}}},r={args:{name:"forklift",size:"small",state:"enabled"}},t={args:{name:"forklift",size:"medium",state:"enabled"}},l={args:{name:"forklift",size:"large",state:"enabled"}},i={args:{name:"forklift",size:"medium",state:"disabled"}},o={render:()=>$("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[a(n,{name:"forklift",size:"small"}),a(n,{name:"forklift",size:"medium"}),a(n,{name:"forklift",size:"large"})]})},m={render:()=>a("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"16px",padding:"16px"},children:["forklift","charm","cdi","cb18","pallet-image--epal1","pallet-image--epal2"].map(e=>$("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[a(n,{name:e,size:"medium"}),a("span",{style:{fontSize:"10px",textAlign:"center"},children:e})]},e))})};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'small',
    state: 'enabled'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'medium',
    state: 'enabled'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,v,z;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'large',
    state: 'enabled'
  }
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var k,b,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'medium',
    state: 'disabled'
  }
}`,...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var S,_,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Icon name="forklift" size="small" />
      <Icon name="forklift" size="medium" />
      <Icon name="forklift" size="large" />
    </div>
}`,...(h=(_=o.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var w,N,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '16px',
    padding: '16px'
  }}>
      {['forklift', 'charm', 'cdi', 'cb18', 'pallet-image--epal1', 'pallet-image--epal2'].map(iconName => <div key={iconName} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Icon name={iconName} size="medium" />
          <span style={{
        fontSize: '10px',
        textAlign: 'center'
      }}>{iconName}</span>
        </div>)}
    </div>
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const G=["Small","Medium","Large","Disabled","AllSizes","IconGallery"];export{o as AllSizes,i as Disabled,m as IconGallery,l as Large,t as Medium,r as Small,G as __namedExportsOrder,F as default};
