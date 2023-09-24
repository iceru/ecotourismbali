import{a,d as m,r as o,s as u,j as l,e as H,F as A}from"./app-d0aa3f4e.js";import{G as K}from"./GuestLayout-99fe6a21.js";import{I as h}from"./InputLabel-6cddf6b4.js";import{S as x}from"./SelectInput-bab51812.js";import{T as V}from"./TextInput-6d4bb367.js";import{P as z}from"./PrimaryButton-8c9b9499.js";import{b as G}from"./BadgeColor-4a1235b9.js";import{l as J}from"./lodash-de22a60f.js";import{q as Q}from"./base-e8aaf39e.js";import{u as R}from"./useTranslation-e0560376.js";import"./moment-fbc5633a.js";import"./index-0fda07ff.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";function U({links:g}){function c(s){return s?"mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white hover:text-primary border-primary focus:border-primary focus:text-primary bg-primary text-white":"mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary hover:text-primary hover:border-primary"}return!J.isEmpty(g)&&a("div",{className:"mb-4",children:a("div",{className:"flex flex-wrap mt-8",children:g.map((s,i)=>s.url===null?a("div",{className:"mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded",children:a("span",{dangerouslySetInnerHTML:{__html:s.label}})},i):a(m,{className:c(s.active),href:s.url,children:a("span",{dangerouslySetInnerHTML:{__html:s.label}})}))})})}function ge({programs:g,categories:c,badges:s,members:i}){var k,I;const v=[{label:"Name - Ascending",value:"name-ascending"},{label:"Name - Descending",value:"name-descending"}],{t:r}=R(),[p,w]=o.useState("all"),[y,N]=o.useState(),[b,_]=o.useState(),[S,j]=o.useState(),[W,M]=o.useState(v[0].value),[f,q]=o.useState({}),F=()=>{const e={...f,program:y||null,badge:b||null,keyword:S,category:p};q(e),u.post(route("member.filter",Object.fromEntries(Object.entries(e).filter(([n,d])=>d!=null))),e)},t=Q.parse(location.search);o.useEffect(()=>{const e={program:t.program,badge:t.badge,keyword:t.keyword,category:t.category};t.category&&t.category!=="all"&&w(t.category),t.program&&N(t.program),t.badge&&_(t.badge),t.keyword&&j(t.keyword),t.page||setTimeout(()=>{u.post(route("member.filter",Object.fromEntries(Object.entries(e).filter(([n,d])=>d!=null))),e)},1e3)},[]);const C=e=>{const n={...f,category:e};w(e),u.post(route("member.filter",{category:p}),n)},B=e=>{const n={...f,sort:e};M(e),u.post(route("member.filter"),n)};return l(K,{children:[a(H,{title:"Member List"}),a("h1",{className:"font-bold text-2xl lg:text-3xl mb-6 lg:mb-10",children:r("list_of_members")}),l("div",{className:"flex flex-wrap justify-between mb-6 pb-6 border-b",children:[l("div",{className:"mb-6 lg:mb-0 lg:w-3/4 lg:pr-4",children:[a("div",{className:"font-bold mb-2 text-lg",children:r("filter")}),l("div",{className:"flex flex-wrap lg:flex-nowrap",children:[l("div",{className:"grid lg:grid-cols-3 w-full lg:w-auto",children:[l("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[a(h,{className:"mr-4 w-1/4 lg:w-auto",value:r("program")}),a(x,{options:g,labelData:"name",valueData:"id",value:y,className:"w-full",onChange:e=>N(parseInt(e.target.value)),children:a("option",{value:"",children:r("select_program")})})]}),l("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[a(h,{className:"mr-4 w-1/4 lg:w-auto",value:r("badge")}),a(x,{options:s,value:b,labelData:"name",valueData:"id",className:"w-full",onChange:e=>_(parseInt(e.target.value)),children:a("option",{value:"",children:r("select_badge")})})]}),l("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[a(h,{className:"mr-4 w-1/4 lg:w-auto",value:r("keyword")}),a(V,{className:"w-full",value:S,onChange:e=>j(e.target.value)})]})]}),a("div",{className:"w-full lg:w-auto",children:a(z,{onClick:F,children:r("filter")})})]})]}),a("div",{className:"lg:w-1/4 ",children:l("div",{className:"ml-auto lg:w-3/4",children:[a("div",{className:"font-bold mb-2 text-lg inline-flex",children:r("sort")}),a("div",{className:"flex",children:a("div",{className:"flex items-center",children:a(x,{options:v,onChange:e=>B(e.target.value)})})})]})})]}),l("div",{className:"flex flex-wrap",children:[a("div",{className:"sidebar w-full lg:w-1/6",children:l("ul",{className:"text-gray-600 font-light flex lg:block whitespace-nowrap overflow-auto gap-4 mb-6 lg:mb-0 pb-4",children:[a("li",{className:`cursor-pointer lg:mb-6 ${p==="all"?"font-bold text-primary":""}`,onClick:()=>C("all"),children:r("all")}),c==null?void 0:c.map(e=>a("li",{onClick:()=>C(e.id),id:e.id,className:`cursor-pointer lg:mb-6 whitespace-nowrap lg:whitespace-break-spaces ${p===e.id?"font-bold text-primary":""}`,children:r(e.name)}))]})}),l("div",{className:"lg:w-5/6 lg:pl-6",children:[a("div",{className:"grid xl:grid-cols-3 lg:grid-cols-2 gap-4 h-fit",children:((k=i==null?void 0:i.data)==null?void 0:k.length)>0?(I=i==null?void 0:i.data)==null?void 0:I.map(e=>{var n,d,P,D,E,T,L,O,$;return l("div",{className:"border rounded-2xl p-4 h-fit",children:[((n=e==null?void 0:e.program)==null?void 0:n.name)==="Green Pal"?a("div",{className:`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex 
                      -mt-4 -mr-4 w-fit float-right items-center bg-greenpal`,children:"Green Pal"}):a(A,{children:e!=null&&e.verified_badge_id?a("div",{children:l("div",{className:`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex -mt-4 
                      -mr-4 w-fit float-right items-center  
                    ${G((d=e==null?void 0:e.verified_badge)==null?void 0:d.name,"color")}
                    `,children:[a("div",{children:a("img",{src:"/storage/badges/"+((P=e.badge)==null?void 0:P.image),alt:"",className:"h-6 mr-2 brightness-0 filter invert"})}),l("span",{children:["Verified ",(D=e==null?void 0:e.verified_badge)==null?void 0:D.name]})]})}):e.badge&&!(e!=null&&e.verified_badge_id)?l("div",{className:`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex -mt-4 
                        -mr-4 w-fit float-right items-center  
                      ${G((E=e==null?void 0:e.badge)==null?void 0:E.name,"color")}
                      `,children:[a("div",{children:a("img",{src:"/storage/badges/"+((T=e.badge)==null?void 0:T.image),alt:"",className:"h-6 mr-2 brightness-0 filter invert"})}),a("span",{children:(L=e.badge)==null?void 0:L.name})]}):a("div",{className:"rounded-bl-2xl rounded-tr-2xl bg-gray-100  px-3 py-1 text-[12px] flex -mt-4 -mr-4 w-fit float-right",children:a("div",{children:r("no_badge")})})}),l("div",{className:"flex items-center mb-3 mt-5",children:[(e==null?void 0:e.image)&&a("div",{className:"mr-3 rounded-full w-[62px] h-[62px] bg-lightPrimary bg-opacity-30 flex justify-center items-center",children:a("img",{src:`/storage/member/images/${e==null?void 0:e.image}`,alt:e.bussiness_name,className:"w-[62px] max-h-[62px] object-contain rounded-full"})}),l(m,{href:route("member.detail",e.slug),children:[a("h4",{className:"font-bold text-lg leading-[22px] mb-1",children:e.business_name}),e.category&&a("h6",{className:"text-xs uppercase text-primary",children:(O=e.category)==null?void 0:O.name})]})]}),a("p",{className:"mb-3 text-sm",children:($=e==null?void 0:e.description)==null?void 0:$.slice(0,100)}),a(m,{href:route("member.detail",e.slug),className:"text-sm text-primary font-semibold",children:r("learn_more")})]})}):a("div",{className:"",children:a("h3",{className:" text-primary font-xl ",children:"Not Found"})})}),a(U,{class:"mt-6",links:i==null?void 0:i.links})]})]})]})}export{ge as default};
