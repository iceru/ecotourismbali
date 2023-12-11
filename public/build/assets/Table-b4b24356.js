import{r as m,a as r,W as j,j as x,d as N}from"./app-5781d102.js";import{u as E}from"./useTranslation-08f3d0e1.js";const M=(l,a)=>{const n=[],o=Math.ceil(l.length/a);for(let s=1;s<=o;s++)n.push(s);return n},R=(l,a,n)=>l.slice((a-1)*n,a*n),C=(l,a,n)=>{const[o,s]=m.useState([]),[c,g]=m.useState([]);return m.useEffect(()=>{const y=M(l,n);s([...y]);const u=R(l,a,n);g([...u])},[l,s,a,g]),{slice:c,range:o}},I=({range:l,setPage:a,page:n,slice:o})=>(m.useEffect(()=>{o.length<1&&n!==1&&a(n-1)},[o,n,a]),r("div",{className:"mt-4 flex justify-center gap-4",children:l.map((s,c)=>r("button",{className:`bg-lightSecondary py-1 px-3 rounded bg-opacity-60 ${s===n?"bg-secondary text-white":""}`,onClick:()=>a(s),children:s},c))}));function F({header:l,data:a,selectedData:n,secondaryData:o,tableButtons:s,tableActions:c,pathImage:g,customData:y,selectedSecondaryData:u,descHtml:h}){const{delete:w,processing:$}=j(),[p,T]=m.useState(1),{slice:b,range:k}=C(a,p,10),{t:f}=E(),v=t=>{switch(t){case"submit":return"bg-green-500 hover:bg-green-600 active:bg-green-600";case"danger":return"bg-red-500 hover:bg-red-600 active:bg-red-600";case"info":return"bg-blue-500 hover:bg-blue-600 active:bg-blue-600";case"show":return"bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600";default:return"bg-gray-500 hover:bg-gray-600 active:bg-gray-600"}},S=(t,d,e)=>{t.preventDefault(),confirm(f("confirm_delete"))&&w(route(e,d))};return x("div",{children:[r("div",{className:"overflow-x-auto",children:r("div",{className:"w-full inline-block align-middle ",children:r("div",{className:"overflow-x-auto border rounded-lg",children:x("table",{className:"min-w-full divide-y divide-gray-200",children:[r("thead",{className:"bg-gray-50",children:x("tr",{children:[r("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",children:"No."}),l==null?void 0:l.map((t,d)=>r("th",{scope:"col",className:"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",children:t},d))]})}),r("tbody",{className:"divide-y divide-gray-200",children:b==null?void 0:b.map((t,d)=>x("tr",{children:[r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800",children:d+1+(p>1?10*(p-1):0)}),n==null?void 0:n.map((e,i)=>r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800",children:e==="image"?t[e]?r("img",{src:`/storage/${g}${t[e]}`,className:"max-h-24"}):r("span",{children:"-"}):h&&e===h?r("div",{dangerouslySetInnerHTML:{__html:t[e]},className:"descOverflow"}):t[e]?r("span",{className:"line-clamp-4",children:t[e]}):"-"},i)),u==null?void 0:u.map((e,i)=>r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800",children:e==="image"?t[o][e]?r("img",{src:`/storage/${g}${t[o][e]}`,className:"max-h-24"}):r("span",{children:"-"}):h&&e===h?r("div",{dangerouslySetInnerHTML:{__html:t[o][e]},className:"descOverflow"}):t[o][e]?t[o][e]:"-"},i)),s&&(s==null?void 0:s.map((e,i)=>r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap",children:r(N,{href:e.link+t.id+e.link2,className:"px-3 py-2 mr-2 text-sm font-medium leading-5 text-etbGray transition-colors duration-150 bg-lightSecondary border border-transparent rounded-lg hover:opacity-80 focus:outline-none focus:shadow-outline-green",children:f(e.label)})},i))),c&&r("td",{className:"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap",children:c.map((e,i)=>e.type==="delete"?r("form",{onSubmit:_=>S(_,t.id,e.route),children:r("button",{disabled:$,className:`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${v(e.color)}`,children:f(e.label)},i)}):r(N,{href:`${e.link}${e.withId?"/"+t.id:""}`,className:`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full mb-2 text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${v(e.color)}`,children:f(e.label)},i))})]},d))})]})})})}),r(I,{range:k,slice:b,setPage:T,page:p})]})}export{F as T};