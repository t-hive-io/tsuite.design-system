import{j as t}from"./jsx-runtime-C87dng0y.js";import"./iframe-BHhu0b6J.js";import"./preload-helper-E_wDBCPD.js";const o=({arrowPlacement:i="bottom-left",shortcutKey:r=!0,shortcutKeyContent:p="T",className:l="",style:c={}})=>t.jsx("div",{className:`tsuite-tooltipsplainlight tsuite-tooltipsplainlight--${i}${l?" "+l:""}`,style:c,children:t.jsx("div",{className:`tsuite-tooltipsplainlight__container tsuite-tooltipsplainlight__arrowPlacement--${i}`,children:t.jsxs("div",{className:"tsuite-tooltipsplainlight__content",children:[t.jsx("div",{className:"tsuite-tooltipsplainlight__text",children:"Text"}),r&&t.jsx("div",{className:"tsuite-tooltipsplainlight__shortcut-key",children:p})]})})});o.displayName="TooltipsplainLight";o.__docgenInfo={description:`TooltipsplainLight

Use plain tooltips to describe elements or actions of icon buttons.
Tooltip text supports maximum two lines.
Tooltip content must be short and contextual.

@see {@link https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1262-8263|View in Figma}`,methods:[],displayName:"TooltipsplainLight",props:{arrowPlacement:{required:!1,tsType:{name:"union",raw:`| 'bottom-left'
| 'top-left'
| 'bottom-center'
| 'bottom-right'
| 'top-center'
| 'top-right'
| 'arrow-placement7'`,elements:[{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'arrow-placement7'"}]},description:"",defaultValue:{value:"'bottom-left'",computed:!1}},shortcutKey:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shortcutKeyContent:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:"'T'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};const h={title:"Components/Tooltips/Tooltips plain Light",component:o,parameters:{layout:"centered",docs:{description:{component:`
## CSS Styling

The UX design team defined these styles in Figma. You can copy and customize them:

<details>
<summary><strong>View CSS Code</strong></summary>

\`\`\`css
.tsuite-tooltipsplainlight {
  position: relative;
  display: inline-flex;
}

.tsuite-tooltipsplainlight__container {
  position: relative;
  display: flex;
  align-items: center;
}

.tsuite-tooltipsplainlight__content {
  background-color: rgba(34, 34, 34, 1);
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Typography uses theme variables - see Foundation > Themes in Storybook */
.tsuite-tooltipsplainlight__text {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
}

.tsuite-tooltipsplainlight__shortcut-key {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
}

/* Arrow styles for different placements */
.tsuite-tooltipsplainlight__container::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Bottom arrows */
.tsuite-tooltipsplainlight--bottom-left .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--bottom-center .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--bottom-right .tsuite-tooltipsplainlight__container::before {
  bottom: -6px;
  border-width: 6px 6px 0 6px;
  border-color: rgba(34, 34, 34, 1) transparent transparent transparent;
}

.tsuite-tooltipsplainlight--bottom-left .tsuite-tooltipsplainlight__container::before {
  left: 12px;
}

.tsuite-tooltipsplainlight--bottom-center .tsuite-tooltipsplainlight__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplainlight--bottom-right .tsuite-tooltipsplainlight__container::before {
  right: 12px;
}

/* Top arrows */
.tsuite-tooltipsplainlight--top-left .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--top-center .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--top-right .tsuite-tooltipsplainlight__container::before {
  top: -6px;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent rgba(34, 34, 34, 1) transparent;
}

.tsuite-tooltipsplainlight--top-left .tsuite-tooltipsplainlight__container::before {
  left: 12px;
}

.tsuite-tooltipsplainlight--top-center .tsuite-tooltipsplainlight__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplainlight--top-right .tsuite-tooltipsplainlight__container::before {
  right: 12px;
}
\`\`\`

</details>

### Usage Example

\`\`\`tsx
import { TooltipsplainLight } from '@tsuite/design-system';
import '@tsuite/design-system/dist/TooltipsplainLight.css';

<TooltipsplainLight arrowPlacement="top-center" />
\`\`\`
`}}},tags:["autodocs"],argTypes:{arrowPlacement:{control:"select",options:["bottom-left","top-left","bottom-center","bottom-right","top-center","top-right","arrow-placement7"],description:"arrowPlacement variant"},shortcutKey:{control:"boolean",description:"shortcutKey toggle"},className:{table:{disable:!0}},style:{table:{disable:!0}},shortcutKeyContent:{table:{disable:!0}}}},e={args:{arrowPlacement:"bottom-left",shortcutKey:!0}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    arrowPlacement: "bottom-left",
    shortcutKey: true
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,h as default};
