import{r as s,j,a as f}from"./app-564aa5bf.js";import{u as v}from"./useTranslation-b7c2539f.js";const R=s.forwardRef(function({options:e,placeholder:t,className:l="",isFocused:d=!1,value:i,labelData:o="label",valueData:c="value",children:m,selectedLabel:a,...S},n){const u=n||s.useRef(),[b,g]=s.useState(),{t:x}=v();return s.useEffect(()=>{if(d&&u.current.focus(),a&&e){const r=e.find(h=>h.name===a);r&&g(r[c])}},[e]),j("select",{...S,ref:u,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+l,value:i||b,children:[m,t&&f("option",{children:x(t)}),e==null?void 0:e.map(r=>f("option",{value:r[c],children:r[o]}))]})});export{R as S};
