import{r as s,t as d,j as a,a as l,f as $,d as w}from"./app-780ebe19.js";import{G as E}from"./GuestLayout-74b53b0a.js";import{I as c}from"./InputLabel-03a1defc.js";import{S as m}from"./SelectInput-ad3105d5.js";import{T as L}from"./TextInput-8ce62e44.js";import{P as T}from"./PrimaryButton-ab3fc588.js";import{b as B}from"./BadgeColor-632d6e36.js";import{u as G}from"./useTranslation-04d8e635.js";import"./index-08005ec9.js";import"./logo-5e7252b7.js";import"./lodash-14a9b03e.js";function U({programs:y,categories:n,badges:C,members:i}){const g=[{label:"Name - Ascending",value:"name-ascending"},{label:"Name - Descending",value:"name-descending"}],{t}=G(),[r,u]=s.useState("all"),[f,S]=s.useState(),[p,_]=s.useState(),[j,k]=s.useState(),[h,D]=s.useState(g[0].value),[o,I]=s.useState({}),P=()=>{const e={...o,program:f!==""?f:null,badge:p!==""?p:null,keyword:j,category:r};I(e),d.post(route("member.filter"),e)};return s.useEffect(()=>{const e={...o,category:r};d.post(route("member.filter"),e)},[r]),s.useEffect(()=>{const e={...o,sort:h};d.post(route("member.filter"),e)},[h]),a(E,{children:[l($,{title:"Member List"}),l("h1",{className:"font-bold text-2xl lg:text-3xl mb-6 lg:mb-10",children:t("list_of_members")}),a("div",{className:"flex flex-wrap justify-between mb-6 pb-6 border-b",children:[a("div",{className:"mb-6 lg:mb-0 lg:w-3/4 lg:pr-4",children:[l("div",{className:"font-bold mb-2 text-lg",children:t("filter")}),a("div",{className:"flex flex-wrap lg:flex-nowrap",children:[a("div",{className:"grid lg:grid-cols-3 w-full lg:w-auto",children:[a("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[l(c,{className:"mr-4 w-1/4 lg:w-auto",value:t("program")}),l(m,{options:y,labelData:"name",valueData:"id",className:"w-full",onChange:e=>S(parseInt(e.target.value)),children:l("option",{value:"",children:t("select_program")})})]}),a("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[l(c,{className:"mr-4 w-1/4 lg:w-auto",value:t("badge")}),l(m,{options:C,labelData:"name",valueData:"id",className:"w-full",onChange:e=>_(parseInt(e.target.value)),children:l("option",{value:"",children:t("select_badge")})})]}),a("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[l(c,{className:"mr-4 w-1/4 lg:w-auto",value:t("keyword")}),l(L,{className:"w-full",onChange:e=>k(e.target.value)})]})]}),l("div",{className:"w-full lg:w-auto",children:l(T,{onClick:P,children:t("filter")})})]})]}),l("div",{className:"lg:w-1/4 ",children:a("div",{className:"ml-auto lg:w-3/4",children:[l("div",{className:"font-bold mb-2 text-lg inline-flex",children:t("sort")}),l("div",{className:"flex",children:l("div",{className:"flex items-center",children:l(m,{options:g,onChange:e=>D(e.target.value)})})})]})})]}),a("div",{className:"flex flex-wrap",children:[l("div",{className:"sidebar w-full lg:w-1/6",children:a("ul",{className:"text-gray-600 font-light flex lg:block whitespace-nowrap overflow-auto gap-4 mb-6 lg:mb-0 pb-4",children:[l("li",{className:`cursor-pointer lg:mb-6 ${r==="all"?"font-bold text-primary":""}`,onClick:()=>u("all"),children:t("all")}),n==null?void 0:n.map(e=>l("li",{onClick:()=>u(e.id),id:e.id,className:`cursor-pointer lg:mb-6 ${r===e.id?"font-bold text-primary":""}`,children:t(e.name)}))]})}),l("div",{className:"lg:w-5/6 grid lg:grid-cols-3 md:grid-cols-2 gap-4",children:i.length>0?i==null?void 0:i.map(e=>{var x,v,b,N;return a("div",{className:"border rounded-2xl p-4 h-fit",children:[e.badge?a("div",{className:`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex -mt-4 
                      -mr-4 w-fit float-right items-center  
                    ${B(e.badge.name)}
                    `,children:[l("div",{children:l("img",{src:"/storage/badges/"+((x=e.badge)==null?void 0:x.image),alt:"",className:"h-6 mr-2 brightness-0 filter invert"})}),l("span",{children:(v=e.badge)==null?void 0:v.name})]}):l("div",{className:"rounded-bl-2xl rounded-tr-2xl bg-gray-100  px-3 py-1 text-[12px] flex -mt-4 -mr-4 w-fit float-right",children:l("div",{children:t("not_verified")})}),a("div",{className:"flex items-center mb-3 mt-5",children:[e.image&&l("div",{className:"mr-3",children:l("img",{src:`/storage/member/images/${e.image}`,alt:e.bussiness_name,className:"w-[62px] max-h-[62px] object-cover"})}),a(w,{href:route("member.detail",e.id),children:[l("h4",{className:"font-bold text-lg",children:e.business_name}),e.category&&l("h6",{className:"text-xs uppercase text-primary",children:(b=e.category)==null?void 0:b.name})]})]}),l("p",{className:"mb-3 text-sm",children:(N=e==null?void 0:e.description)==null?void 0:N.slice(0,100)}),l(w,{href:route("member.detail",e.slug),className:"text-sm text-primary font-semibold",children:t("learn_more")})]})}):l("div",{className:"text-center flex justify-center",children:l("h3",{className:" text-primary font-xl ",children:"Not Found"})})})]})]})}export{U as default};
