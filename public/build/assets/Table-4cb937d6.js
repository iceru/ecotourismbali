import{W as w,j as r,a as g,d as u}from"./app-9d038481.js";import{u as N}from"./useTranslation-ecbbedb5.js";function T({header:s,data:a,selectedData:c,tableButtons:i,tableActions:p,pathImage:x,customData:n,descHtml:m}){const{delete:f,processing:b}=w(),{t:o}=N(),h=l=>{switch(l){case"submit":return"bg-green-500 hover:bg-green-600 active:bg-green-600";case"danger":return"bg-red-500 hover:bg-red-600 active:bg-red-600";case"info":return"bg-blue-500 hover:bg-blue-600 active:bg-blue-600";default:return"bg-gray-500 hover:bg-gray-600 active:bg-gray-600"}},y=(l,t,e)=>{l.preventDefault(),confirm(o("confirm_delete"))&&f(route(e,t))};return r("div",{children:r("div",{className:"overflow-x-auto",children:r("div",{className:"w-full inline-block align-middle ",children:r("div",{className:"overflow-x-auto border rounded-lg",children:g("table",{className:"min-w-full divide-y divide-gray-200",children:[r("thead",{className:"bg-gray-50",children:g("tr",{children:[r("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",children:"No."}),s==null?void 0:s.map((l,t)=>r("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",children:l},t))]})}),r("tbody",{className:"divide-y divide-gray-200",children:a==null?void 0:a.map((l,t)=>g("tr",{children:[r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800",children:t+1}),c==null?void 0:c.map((e,d)=>r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800",children:e==="image"?r("img",{src:`/storage/${x}${l[e]}`,className:"max-h-24"}):m&&e===m?r("div",{dangerouslySetInnerHTML:{__html:l[e]},className:"descOverflow"}):(n==null?void 0:n.selected)===e?n==null?void 0:n.data():l[e]?l[e]:"-"},d)),i&&(i==null?void 0:i.map((e,d)=>r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap",children:r(u,{href:e.link+l.id+e.link2,className:"px-3 py-2 mr-2 text-sm font-medium leading-5 text-etbGray transition-colors duration-150 bg-lightSecondary border border-transparent rounded-lg hover:opacity-80 focus:outline-none focus:shadow-outline-green",children:o(e.label)})},d))),p&&r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap",children:p.map((e,d)=>e.type==="delete"?r("form",{onSubmit:v=>y(v,l.id,e.route),children:r("button",{disabled:b,className:`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full mt-2 text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${h(e.color)}`,children:o(e.label)},d)}):r(u,{href:`${e.link}${e.withId?"/"+l.id:""}`,className:`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${h(e.color)}`,children:o(e.label)},d))})]},t))})]})})})})})}export{T};
