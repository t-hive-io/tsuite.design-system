import{a,f as L,j as $}from"./figma-docs-DQ4WnSMF.js";import{r as c}from"./index-uubelm5h.js";const n=({name:e,size:A="medium",state:C="enabled",className:V=""})=>{const[q,j]=c.useState("");return c.useEffect(()=>{(async()=>{try{const s=await fetch(`/icons/${e}.svg`);if(s.ok){const E=await s.text();j(E)}else console.warn(`Icon "${e}" not found`)}catch(s){console.warn(`Failed to load icon "${e}":`,s)}})()},[e]),a("span",{className:`icon icon--${A} icon--${C} ${V}`,"data-icon":e,"aria-label":e,dangerouslySetInnerHTML:{__html:q}})};try{n.displayName="Icon",n.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},state:{defaultValue:{value:"enabled"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"enabled"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}var d;const H={title:"Components/Icon",component:n,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1106:6756"},docs:{description:{component:((d=L.Icon)==null?void 0:d.description)||""}}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Icon name (e.g., forklift, pallet-image--epal1, cdi)"},size:{control:"select",options:["small","medium","large"]},state:{control:"select",options:["enabled","disabled"]}}},r={args:{name:"forklift",size:"small",state:"enabled"}},t={args:{name:"forklift",size:"medium",state:"enabled"}},l={args:{name:"forklift",size:"large",state:"enabled"}},i={args:{name:"forklift",size:"medium",state:"disabled"}},o={render:()=>$("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[a(n,{name:"forklift",size:"small"}),a(n,{name:"forklift",size:"medium"}),a(n,{name:"forklift",size:"large"})]})},m={render:()=>a("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"16px",padding:"16px"},children:["forklift","charm","cdi","cb18","pallet-image--epal1","pallet-image--epal2"].map(e=>$("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[a(n,{name:e,size:"medium"}),a("span",{style:{fontSize:"10px",textAlign:"center"},children:e})]},e))})};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'small',
    state: 'enabled'
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,y,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'medium',
    state: 'enabled'
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,z,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'large',
    state: 'enabled'
  }
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var I,b,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'forklift',
    size: 'medium',
    state: 'disabled'
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var _,h,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Icon name="forklift" size="small" />
      <Icon name="forklift" size="medium" />
      <Icon name="forklift" size="large" />
    </div>
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var N,D,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const O=["Small","Medium","Large","Disabled","AllSizes","IconGallery"];export{o as AllSizes,i as Disabled,m as IconGallery,l as Large,t as Medium,r as Small,O as __namedExportsOrder,H as default};
