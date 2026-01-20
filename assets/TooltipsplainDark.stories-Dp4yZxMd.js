import{j as t}from"./jsx-runtime-C87dng0y.js";import"./iframe-BHhu0b6J.js";import"./preload-helper-E_wDBCPD.js";const o=({arrowPlacement:a="bottom-left",shortcutKey:l=!0,shortcutKeyContent:p="T",className:i="",style:d={}})=>t.jsx("div",{className:`tsuite-tooltipsplaindark tsuite-tooltipsplaindark--${a}${i?" "+i:""}`,style:d,children:t.jsx("div",{className:`tsuite-tooltipsplaindark__container tsuite-tooltipsplaindark__arrowPlacement--${a}`,children:t.jsxs("div",{className:"tsuite-tooltipsplaindark__content",children:[t.jsx("div",{className:"tsuite-tooltipsplaindark__text",children:"Text"}),l&&t.jsx("div",{className:"tsuite-tooltipsplaindark__shortcut-key",children:p})]})})});o.displayName="TooltipsplainDark";o.__docgenInfo={description:`TooltipsplainDark

Use plain tooltips to describe elements or actions of icon buttons.
Tooltip text supports maximum two lines.
Tooltip content must be short and contextual.

@see {@link https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=6057-185|View in Figma}`,methods:[],displayName:"TooltipsplainDark",props:{arrowPlacement:{required:!1,tsType:{name:"union",raw:`| 'top-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'
| 'top-left'
| 'top-center'`,elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"}]},description:"",defaultValue:{value:"'bottom-left'",computed:!1}},shortcutKey:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shortcutKeyContent:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:"'T'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};const f={title:"Components/Tooltips/Tooltips plain Dark",component:o,parameters:{layout:"centered",docs:{description:{component:`
## CSS Styling

The UX design team defined these styles in Figma. You can copy and customize them:

<details>
<summary><strong>View CSS Code</strong></summary>

\`\`\`css
.tsuite-tooltipsplaindark {
  position: relative;
  display: inline-flex;
}

.tsuite-tooltipsplaindark__container {
  position: relative;
  display: flex;
  align-items: center;
}

.tsuite-tooltipsplaindark__content {
  background-color: rgba(247, 247, 247, 1);
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Typography uses theme variables - see Foundation > Themes in Storybook */
.tsuite-tooltipsplaindark__text {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(34, 34, 34, 1);
  white-space: nowrap;
}

.tsuite-tooltipsplaindark__shortcut-key {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(34, 34, 34, 1);
  white-space: nowrap;
}

/* Arrow styles for different placements */
.tsuite-tooltipsplaindark__container::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Bottom arrows */
.tsuite-tooltipsplaindark--bottom-left .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--bottom-center .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--bottom-right .tsuite-tooltipsplaindark__container::before {
  bottom: -6px;
  border-width: 6px 6px 0 6px;
  border-color: rgba(247, 247, 247, 1) transparent transparent transparent;
}

.tsuite-tooltipsplaindark--bottom-left .tsuite-tooltipsplaindark__container::before {
  left: 12px;
}

.tsuite-tooltipsplaindark--bottom-center .tsuite-tooltipsplaindark__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplaindark--bottom-right .tsuite-tooltipsplaindark__container::before {
  right: 12px;
}

/* Top arrows */
.tsuite-tooltipsplaindark--top-left .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--top-center .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--top-right .tsuite-tooltipsplaindark__container::before {
  top: -6px;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent rgba(247, 247, 247, 1) transparent;
}

.tsuite-tooltipsplaindark--top-left .tsuite-tooltipsplaindark__container::before {
  left: 12px;
}

.tsuite-tooltipsplaindark--top-center .tsuite-tooltipsplaindark__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplaindark--top-right .tsuite-tooltipsplaindark__container::before {
  right: 12px;
}
\`\`\`

</details>

### Usage Example

\`\`\`tsx
import { TooltipsplainDark } from '@tsuite/design-system';
import '@tsuite/design-system/dist/TooltipsplainDark.css';

<TooltipsplainDark arrowPlacement="top-center" />
\`\`\`
`}}},tags:["autodocs"],argTypes:{arrowPlacement:{control:"select",options:["top-right","bottom-left","bottom-center","bottom-right","top-left","top-center"],description:"arrowPlacement variant"},shortcutKey:{control:"boolean",description:"shortcutKey toggle"},className:{table:{disable:!0}},style:{table:{disable:!0}},shortcutKeyContent:{table:{disable:!0}}}},e={args:{arrowPlacement:"bottom-left",shortcutKey:!0}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    arrowPlacement: "bottom-left",
    shortcutKey: true
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,f as default};
