import{j as o}from"./jsx-runtime-zb3rE9aN.js";import"./iframe-BOAAlDHP.js";import"./preload-helper-E_wDBCPD.js";const r={primary:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1"},secondary:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100"},neutral:{0:"#ffffff",50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1e3:"#000000"},success:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},error:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c"},warning:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00"},info:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b"}};`${r.primary[50]}${r.primary[100]}${r.primary[200]}${r.primary[300]}${r.primary[400]}${r.primary[500]}${r.primary[600]}${r.primary[700]}${r.primary[800]}${r.primary[900]}${r.secondary[50]}${r.secondary[100]}${r.secondary[200]}${r.secondary[300]}${r.secondary[400]}${r.secondary[500]}${r.secondary[600]}${r.secondary[700]}${r.secondary[800]}${r.secondary[900]}${r.neutral[0]}${r.neutral[50]}${r.neutral[100]}${r.neutral[200]}${r.neutral[300]}${r.neutral[400]}${r.neutral[500]}${r.neutral[600]}${r.neutral[700]}${r.neutral[800]}${r.neutral[900]}${r.neutral[1e3]}${r.success[50]}${r.success[500]}${r.success[700]}${r.error[50]}${r.error[500]}${r.error[700]}${r.warning[50]}${r.warning[500]}${r.warning[700]}${r.info[50]}${r.info[500]}${r.info[700]}`;const u={title:"Foundation/Colors",parameters:{layout:"padded",docs:{description:{component:"Comprehensive color palette with semantic naming for consistent styling. Includes primary, secondary, neutral, and semantic colors (success, error, warning, info)."}},figma:{pageId:"5168:44092",frames:8,description:"Digital Twin color range, palette examples, MacBook mockups",url:"https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5168-44092"}}},m=({color:c,name:a})=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"},children:[o.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:c,border:"1px solid #e0e0e0",borderRadius:"0.5rem",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:600,fontSize:"0.875rem",marginBottom:"0.25rem"},children:a}),o.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#757575"},children:c})]})]}),e=({title:c,colorScale:a})=>o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:600},children:c}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"1rem"},children:Object.entries(a).map(([n,f])=>o.jsx(m,{color:f,name:`${c.toLowerCase()}-${n}`},n))})]}),l={render:()=>o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{marginBottom:"2rem",fontSize:"2rem",fontWeight:700},children:"Color System"}),o.jsx("p",{style:{marginBottom:"2rem",color:"#616161",fontSize:"1rem"},children:"Our design system uses a comprehensive color palette with semantic naming for consistent styling."}),o.jsx(e,{title:"Primary",colorScale:r.primary}),o.jsx(e,{title:"Secondary",colorScale:r.secondary}),o.jsx(e,{title:"Neutral",colorScale:r.neutral}),o.jsx(e,{title:"Success",colorScale:r.success}),o.jsx(e,{title:"Error",colorScale:r.error}),o.jsx(e,{title:"Warning",colorScale:r.warning}),o.jsx(e,{title:"Info",colorScale:r.info})]})};var s,t,i;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>
      <h1 style={{
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: 700
    }}>
        Color System
      </h1>
      <p style={{
      marginBottom: '2rem',
      color: '#616161',
      fontSize: '1rem'
    }}>
        Our design system uses a comprehensive color palette with semantic
        naming for consistent styling.
      </p>

      <ColorGroup title="Primary" colorScale={colors.primary} />
      <ColorGroup title="Secondary" colorScale={colors.secondary} />
      <ColorGroup title="Neutral" colorScale={colors.neutral} />
      <ColorGroup title="Success" colorScale={colors.success} />
      <ColorGroup title="Error" colorScale={colors.error} />
      <ColorGroup title="Warning" colorScale={colors.warning} />
      <ColorGroup title="Info" colorScale={colors.info} />
    </div>
}`,...(i=(t=l.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const g=["AllColors"];export{l as AllColors,g as __namedExportsOrder,u as default};
