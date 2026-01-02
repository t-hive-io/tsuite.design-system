import{r as _}from"./index-uubelm5h.js";var a={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=_,l=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,i){var t,o={},n=null,p=null;i!==void 0&&(n=""+i),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(p=r.ref);for(t in r)x.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:l,type:e,key:n,ref:p,props:o,_owner:y.current}}s.Fragment=m;s.jsx=u;s.jsxs=u;a.exports=s;var f=a.exports;const E=f.jsx,O=f.jsxs,j={description:`Primary button for user actions. Use primary for main CTAs, 
secondary for supporting actions. Available in multiple states.`},R={Buttons:j};export{E as a,R as f,O as j};
