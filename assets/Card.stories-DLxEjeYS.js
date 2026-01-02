import{a as r,j as e}from"./jsx-runtime-DHuurbBU.js";import"./index-uubelm5h.js";const a=({variant:y="default",header:v,children:re,footer:f,fullWidth:ae=!1,onClick:u,padding:ne="medium"})=>{const te=["tsuite-card",`tsuite-card--${y}`,`tsuite-card--padding-${ne}`,ae&&"tsuite-card--full-width",u&&"tsuite-card--clickable"].filter(Boolean).join(" ");return r(u?"button":"div",{className:te,onClick:u,children:[v&&e("div",{className:"tsuite-card__header",children:v}),e("div",{className:"tsuite-card__body",children:re}),f&&e("div",{className:"tsuite-card__footer",children:f})]})};try{a.displayName="Card",a.__docgenInfo={description:"Primary UI component for card layout",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"Card variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"default"'},{value:'"elevated"'}]}},header:{defaultValue:null,description:"Card header content",name:"header",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Card body content",name:"children",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Card footer content",name:"footer",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"Full width card",name:"fullWidth",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Clickable card",name:"onClick",required:!1,type:{name:"(() => void)"}},padding:{defaultValue:{value:"medium"},description:"Padding size",name:"padding",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}}}}}catch{}const le={title:"3. Component Category Pages/Cards",component:a,parameters:{layout:"centered",figma:{pageId:"5171:45784",components:8,totalVariants:40}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"Card variant style"},padding:{control:"select",options:["none","small","medium","large"]},fullWidth:{control:"boolean"}}},n={args:{children:r("div",{children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Card Title"}),e("p",{style:{margin:0,color:"#616161"},children:"This is a simple card component with default styling."})]})}},t={args:{variant:"outlined",children:r("div",{children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Outlined Card"}),e("p",{style:{margin:0,color:"#616161"},children:"This card has an outlined style with primary color border."})]})}},d={args:{variant:"elevated",children:r("div",{children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Elevated Card"}),e("p",{style:{margin:0,color:"#616161"},children:"This card has a shadow to appear elevated from the background."})]})}},i={args:{header:e("strong",{children:"Card Header"}),children:e("div",{children:e("p",{style:{margin:0,color:"#616161"},children:"This card has a separate header section with a border."})})}},o={args:{children:r("div",{children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Card with Footer"}),e("p",{style:{margin:0,color:"#616161"},children:"This card includes a footer section at the bottom."})]}),footer:e("span",{children:"Last updated: 2 hours ago"})}},l={args:{header:e("strong",{children:"Complete Card"}),children:e("div",{children:e("p",{style:{margin:0,color:"#616161"},children:"This card has both header and footer sections."})}),footer:e("span",{children:"Created: January 2, 2026"})}},s={args:{variant:"elevated",children:r("div",{children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Clickable Card"}),e("p",{style:{margin:0,color:"#616161"},children:"Click this card to trigger an action."})]}),onClick:()=>alert("Card clicked!")}},c={args:{padding:"small",children:r("div",{children:[e("h4",{style:{margin:0,marginBottom:"0.25rem"},children:"Small Padding"}),e("p",{style:{margin:0,fontSize:"0.875rem",color:"#616161"},children:"Compact card with small padding."})]})}},m={args:{padding:"large",children:r("div",{children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Large Padding"}),e("p",{style:{margin:0,color:"#616161"},children:"Spacious card with large padding for emphasis."})]})}},h={args:{padding:"none",children:r("div",{style:{padding:0},children:[e("img",{src:"https://via.placeholder.com/400x200",alt:"Card image",style:{width:"100%",display:"block"}}),r("div",{style:{padding:"1rem"},children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Image Card"}),e("p",{style:{margin:0,color:"#616161"},children:"Card with no padding allows images to extend to edges."})]})]})}},p={args:{fullWidth:!0,children:r("div",{children:[e("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Full Width Card"}),e("p",{style:{margin:0,color:"#616161"},children:"This card takes the full width of its container."})]})},parameters:{layout:"padded"}},g={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"2rem",maxWidth:"600px"},children:[e("h3",{style:{marginBottom:"0.5rem"},children:"All Card Variants"}),r(a,{variant:"default",children:[e("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Default Card"}),e("p",{style:{margin:0,color:"#616161",fontSize:"0.875rem"},children:"Standard card with default border styling."})]}),r(a,{variant:"outlined",children:[e("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Outlined Card"}),e("p",{style:{margin:0,color:"#616161",fontSize:"0.875rem"},children:"Card with primary color border for emphasis."})]}),r(a,{variant:"elevated",children:[e("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Elevated Card"}),e("p",{style:{margin:0,color:"#616161",fontSize:"0.875rem"},children:"Card with shadow creating elevation effect."})]}),e(a,{variant:"elevated",header:e("strong",{children:"Card with Header"}),footer:e("span",{style:{fontSize:"0.75rem"},children:"Footer text"}),children:e("p",{style:{margin:0,color:"#616161",fontSize:"0.875rem"},children:"Card with both header and footer sections."})})]}),parameters:{layout:"fullscreen"}};var C,w,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Card Title</h3>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          This is a simple card component with default styling.
        </p>
      </div>
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var b,B,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: <div>
        <h3 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Outlined Card</h3>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          This card has an outlined style with primary color border.
        </p>
      </div>
  }
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var x,T,W;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div>
        <h3 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Elevated Card</h3>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          This card has a shadow to appear elevated from the background.
        </p>
      </div>
  }
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,z,F;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    header: <strong>Card Header</strong>,
    children: <div>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          This card has a separate header section with a border.
        </p>
      </div>
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,N,V;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Card with Footer</h3>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          This card includes a footer section at the bottom.
        </p>
      </div>,
    footer: <span>Last updated: 2 hours ago</span>
  }
}`,...(V=(N=o.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var E,H,q;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    header: <strong>Complete Card</strong>,
    children: <div>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          This card has both header and footer sections.
        </p>
      </div>,
    footer: <span>Created: January 2, 2026</span>
  }
}`,...(q=(H=l.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var O,A,D;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div>
        <h3 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Clickable Card</h3>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          Click this card to trigger an action.
        </p>
      </div>,
    onClick: () => alert('Card clicked!')
  }
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,I,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    padding: 'small',
    children: <div>
        <h4 style={{
        margin: 0,
        marginBottom: '0.25rem'
      }}>Small Padding</h4>
        <p style={{
        margin: 0,
        fontSize: '0.875rem',
        color: '#616161'
      }}>
          Compact card with small padding.
        </p>
      </div>
  }
}`,...(j=(I=c.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var R,J,$;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    padding: 'large',
    children: <div>
        <h3 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Large Padding</h3>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          Spacious card with large padding for emphasis.
        </p>
      </div>
  }
}`,...($=(J=m.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var U,G,K;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: <div style={{
      padding: 0
    }}>
        <img src="https://via.placeholder.com/400x200" alt="Card image" style={{
        width: '100%',
        display: 'block'
      }} />
        <div style={{
        padding: '1rem'
      }}>
          <h3 style={{
          margin: 0,
          marginBottom: '0.5rem'
        }}>Image Card</h3>
          <p style={{
          margin: 0,
          color: '#616161'
        }}>
            Card with no padding allows images to extend to edges.
          </p>
        </div>
      </div>
  }
}`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var M,Q,X;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: <div>
        <h3 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Full Width Card</h3>
        <p style={{
        margin: 0,
        color: '#616161'
      }}>
          This card takes the full width of its container.
        </p>
      </div>
  },
  parameters: {
    layout: 'padded'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    maxWidth: '600px'
  }}>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>All Card Variants</h3>
      
      <Card variant="default">
        <h4 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Default Card</h4>
        <p style={{
        margin: 0,
        color: '#616161',
        fontSize: '0.875rem'
      }}>
          Standard card with default border styling.
        </p>
      </Card>
      
      <Card variant="outlined">
        <h4 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Outlined Card</h4>
        <p style={{
        margin: 0,
        color: '#616161',
        fontSize: '0.875rem'
      }}>
          Card with primary color border for emphasis.
        </p>
      </Card>
      
      <Card variant="elevated">
        <h4 style={{
        margin: 0,
        marginBottom: '0.5rem'
      }}>Elevated Card</h4>
        <p style={{
        margin: 0,
        color: '#616161',
        fontSize: '0.875rem'
      }}>
          Card with shadow creating elevation effect.
        </p>
      </Card>
      
      <Card variant="elevated" header={<strong>Card with Header</strong>} footer={<span style={{
      fontSize: '0.75rem'
    }}>Footer text</span>}>
        <p style={{
        margin: 0,
        color: '#616161',
        fontSize: '0.875rem'
      }}>
          Card with both header and footer sections.
        </p>
      </Card>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const se=["Default","Outlined","Elevated","WithHeader","WithFooter","WithHeaderAndFooter","Clickable","SmallPadding","LargePadding","NoPadding","FullWidth","AllVariants"];export{g as AllVariants,s as Clickable,n as Default,d as Elevated,p as FullWidth,m as LargePadding,h as NoPadding,t as Outlined,c as SmallPadding,o as WithFooter,i as WithHeader,l as WithHeaderAndFooter,se as __namedExportsOrder,le as default};
