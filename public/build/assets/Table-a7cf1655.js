import{r as u,j as r,W as $,a as p,d as v}from"./app-7f84437a.js";import{u as j}from"./useTranslation-9ce7b74f.js";const E=(s,o)=>{const t=[],l=Math.ceil(s.length/o);for(let a=1;a<=l;a++)t.push(a);return t},R=(s,o,t)=>s.slice((o-1)*t,o*t),_=(s,o,t)=>{const[l,a]=u.useState([]),[d,b]=u.useState([]);return u.useEffect(()=>{const g=E(s,t);a([...g]);const f=R(s,o,t);b([...f])},[s,a,o,b]),{slice:d,range:l}},C=({range:s,setPage:o,page:t,slice:l})=>(u.useEffect(()=>{l.length<1&&t!==1&&o(t-1)},[l,t,o]),r("div",{className:"mt-4 flex justify-center gap-4",children:s.map((a,d)=>r("button",{className:`bg-lightSecondary py-1 px-3 rounded bg-opacity-60 ${a===t?"bg-secondary text-white":""}`,onClick:()=>o(a),children:a},d))}));function F({header:s,data:o,selectedData:t,tableButtons:l,tableActions:a,pathImage:d,customData:b,descHtml:g}){const{delete:f,processing:w}=$(),[x,N]=u.useState(1),{slice:m,range:S}=_(o,x,10),{t:h}=j(),y=n=>{switch(n){case"submit":return"bg-green-500 hover:bg-green-600 active:bg-green-600";case"danger":return"bg-red-500 hover:bg-red-600 active:bg-red-600";case"info":return"bg-blue-500 hover:bg-blue-600 active:bg-blue-600";case"show":return"bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600";default:return"bg-gray-500 hover:bg-gray-600 active:bg-gray-600"}},k=(n,c,e)=>{n.preventDefault(),confirm(h("confirm_delete"))&&f(route(e,c))};return p("div",{children:[r("div",{className:"overflow-x-auto",children:r("div",{className:"w-full inline-block align-middle ",children:r("div",{className:"overflow-x-auto border rounded-lg",children:p("table",{className:"min-w-full divide-y divide-gray-200",children:[r("thead",{className:"bg-gray-50",children:p("tr",{children:[r("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",children:"No."}),s==null?void 0:s.map((n,c)=>r("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",children:n},c))]})}),r("tbody",{className:"divide-y divide-gray-200",children:m==null?void 0:m.map((n,c)=>p("tr",{children:[r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800",children:c+1}),t==null?void 0:t.map((e,i)=>r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800",children:e==="image"?n[e]?r("img",{src:`/storage/${d}${n[e]}`,className:"max-h-24"}):r("span",{children:"-"}):g&&e===g?r("div",{dangerouslySetInnerHTML:{__html:n[e]},className:"descOverflow"}):n[e]?n[e]:"-"},i)),l&&(l==null?void 0:l.map((e,i)=>r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap",children:r(v,{href:e.link+n.id+e.link2,className:"px-3 py-2 mr-2 text-sm font-medium leading-5 text-etbGray transition-colors duration-150 bg-lightSecondary border border-transparent rounded-lg hover:opacity-80 focus:outline-none focus:shadow-outline-green",children:h(e.label)})},i))),a&&r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap",children:a.map((e,i)=>e.type==="delete"?r("form",{onSubmit:T=>k(T,n.id,e.route),children:r("button",{disabled:w,className:`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${y(e.color)}`,children:h(e.label)},i)}):r(v,{href:`${e.link}${e.withId?"/"+n.id:""}`,className:`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full mb-2 text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${y(e.color)}`,children:h(e.label)},i))})]},c))})]})})})}),r(C,{range:S,slice:m,setPage:N,page:x})]})}export{F as T};
