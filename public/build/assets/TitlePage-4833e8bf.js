import{a as e,d as o}from"./app-cb8b64cf.js";import{l as s}from"./lodash-c2e18cbe.js";import{u as l}from"./useTranslation-736b70f5.js";function p({links:t}){function a(r){return r?"mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white hover:text-primary border-primary focus:border-primary focus:text-primary bg-primary text-white":"mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary hover:text-primary hover:border-primary"}return!s.isEmpty(t)&&e("div",{className:"mb-4",children:e("div",{className:"flex flex-wrap mt-8",children:t.map((r,m)=>r.url===null?e("div",{className:"mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded",children:e("span",{dangerouslySetInnerHTML:{__html:r.label}})},m):e(o,{className:a(r.active),href:r.url,children:e("span",{dangerouslySetInnerHTML:{__html:r.label}})}))})})}function u({title:t,className:a}){const{t:r}=l();return e("h1",{className:"font-bold text-2xl lg:text-3xl mb-6 lg:mb-10 "+a,children:r(t)})}export{p as P,u as T};