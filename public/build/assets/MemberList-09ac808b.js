import{r as o,y as r,j as t,a as l,c as V,F as z}from"./app-38f7349e.js";import{G as H}from"./GuestLayout-b22b660f.js";import{I as u}from"./InputLabel-db340573.js";import{S as m}from"./SelectInput-85af2b6d.js";import{T as J}from"./TextInput-3bb5afd1.js";import{B as Q}from"./Button-56e24d46.js";import{P as E}from"./Pagination-cce2f819.js";import{q as R}from"./base-e8aaf39e.js";import U from"./MemberItem-cbc21a68.js";import W from"./MemberItemTourism-0a259665.js";import{u as X}from"./useTranslation-1004a605.js";import"./moment-fbc5633a.js";import"./logo-5e7252b7.js";import"./index-eb1c3b84.js";import"./index-25fc1de7.js";import"./id-410e5203.js";import"./lodash-36e664bf.js";import"./BadgeColor-ad863180.js";function ve({programs:f,categories:g,badges:F,members:s,tribe:a,sources:M,verified_badges:P}){var D,B,T,O;const N=[{label:"Name - Ascending",value:"name-ascending"},{label:"Name - Descending",value:"name-descending"}],{t:i}=X(),[d,h]=o.useState("all"),[q,x]=o.useState(),[y,p]=o.useState(),[k,S]=o.useState(),[b,v]=o.useState(),[I,j]=o.useState(),[Y,L]=o.useState(N[0].value),[w,A]=o.useState({}),C=({programData:e})=>{let c={...w,program:parseInt(q)||null,badge:y||null,verified_badge:k||null,keyword:b,category:d,source:I};e&&(c={program:parseInt(e)},x(parseInt(e)),p(),h(),j(),v()),A(c),r.post(route("member.filter",Object.fromEntries(Object.entries(c).filter(([$,K])=>K!=null))),c)},n=R.parse(location.search);o.useEffect(()=>{const e={program:n.program,badge:n.badge,verified_badge:n.verified_badge,keyword:n.keyword,category:n.category};n.category&&n.category!=="all"&&h(parseInt(n.category)),n.program&&x(n.program),n.badge&&p(n.badge),n.badge&&S(n.verified_badge),n.keyword&&v(n.keyword),n.page||setTimeout(()=>{r.post(route("member.filter",Object.fromEntries(Object.entries(e).filter(([c,$])=>$!=null))),e)},1e3)},[]);const _=e=>{const c={...w,category:e};h(e),r.post(route("member.filter",{category:d}),c)},G=e=>{const c={...w,sort:e};L(e),r.post(route("member.filter"),c)};return t(H,{children:[l(V,{title:"Member List"}),l("h1",{className:"text-3xl lg:text-4xl mb-8 font-bold",children:i("etb_network")}),t("div",{className:"flex justify-between items-center mb-6",children:[t("div",{className:"flex items-center gap-4",children:[l("img",{src:`/storage/programs/${a==null?void 0:a.image}`,className:"w-20 h-20 object-contain",alt:""}),t("div",{children:[l("h1",{className:"text-3xl font-bold mb-1",children:a==null?void 0:a.name}),l("p",{className:"lg:max-w-[75%]",children:a==null?void 0:a.description})]})]}),l("div",{className:"flex gap-8 items-start",children:f==null?void 0:f.map(e=>t("button",{type:"button",onClick:()=>{C({programData:e!=null&&e.id?parseInt(e==null?void 0:e.id):null})},className:"text-center",children:[l("img",{src:`/storage/programs/${e==null?void 0:e.image}`,className:"w-20 h-20 object-contain mb-1 mx-auto hover:scale-105 transition",alt:""}),l("p",{className:"font-bold w-40 text-center",children:e==null?void 0:e.name})]}))})]}),t("div",{className:"flex flex-wrap justify-between mb-6 pb-6 border-b",children:[t("div",{className:"mb-6 lg:mb-0 lg:w-3/4 lg:pr-4",children:[l("div",{className:"font-bold mb-2 text-lg",children:i("filter")}),t("div",{className:"flex flex-wrap lg:flex-nowrap",children:[t("div",{className:"flex w-full lg:w-auto",children:[(a==null?void 0:a.id)===1&&t(z,{children:[t("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[l(u,{className:"mr-4 w-1/4 lg:w-auto",value:i("badge")}),l(m,{options:F,value:y,labelData:"name",valueData:"id",className:"w-full",onChange:e=>p(parseInt(e.target.value)),children:l("option",{value:"",children:i("select_badge")})})]}),t("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[l(u,{className:"mr-4 w-1/4 lg:w-auto",value:i("verified_badge")}),l(m,{options:P,value:k,labelData:"name",valueData:"id",className:"w-full",onChange:e=>S(parseInt(e.target.value)),children:l("option",{value:"",children:i("select_verified_badge")})})]})]}),(a==null?void 0:a.id)===2&&t("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[l(u,{className:"mr-4 w-1/4 lg:w-auto",value:i("sources")}),l(m,{options:M,value:I,labelData:"title",valueData:"id",className:"w-full",onChange:e=>j(parseInt(e.target.value)),children:l("option",{value:"",children:i("select_source")})})]}),t("div",{className:"flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0",children:[l(u,{className:"mr-4 w-1/4 lg:w-auto",value:i("keyword")}),l(J,{className:"w-full",value:b,onChange:e=>v(e.target.value)})]})]}),l("div",{className:"w-full lg:w-auto",children:l(Q,{onClick:C,children:i("filter")})})]})]}),l("div",{className:"lg:w-1/4 ",children:t("div",{className:"ml-auto lg:w-3/4",children:[l("div",{className:"font-bold mb-2 text-lg inline-flex",children:i("sort")}),l("div",{className:"flex",children:l("div",{className:"flex items-center",children:l(m,{options:N,onChange:e=>G(e.target.value)})})})]})})]}),t("div",{className:"flex flex-wrap",children:[a.id===1&&l("div",{className:"sidebar w-full lg:w-1/6",children:t("ul",{className:"text-gray-600 font-light flex lg:block whitespace-nowrap overflow-auto gap-4 mb-6 lg:mb-0 pb-4",children:[l("li",{className:`cursor-pointer lg:mb-6 ${d==="all"?"font-bold text-primary":""}`,onClick:()=>_("all"),children:i("all")}),g==null?void 0:g.map(e=>l("li",{onClick:()=>_(e.id),id:e.id,className:`cursor-pointer lg:mb-6 whitespace-nowrap lg:whitespace-break-spaces ${d===e.id?"font-bold text-primary":""}`,children:i(e.name)}))]})}),(a==null?void 0:a.id)===1?t("div",{className:"lg:w-5/6 lg:pl-6",children:[l("div",{className:`${(a==null?void 0:a.id)===1?"xl:grid-cols-3":"xl:grid-cols-4"} grid md:grid-cols-2 gap-4 h-fit`,children:((D=s==null?void 0:s.data)==null?void 0:D.length)>0?(B=s==null?void 0:s.data)==null?void 0:B.map(e=>l(U,{member:e,tribe:a})):l("div",{className:"",children:l("h3",{className:" text-primary font-xl ",children:"Not Found"})})}),l(E,{class:"mt-6",links:s==null?void 0:s.links})]}):t("div",{className:"w-full",children:[t("div",{className:"grid member-tourism font-bold mb-6 bg-primary text-white py-4 px-4 gap-6",children:[l("div",{children:"Type"}),l("div",{children:"Business Name"}),l("div",{children:"Category"}),l("div",{children:"Directory Source"}),l("div",{children:"Action"})]}),((T=s==null?void 0:s.data)==null?void 0:T.length)>0?(O=s==null?void 0:s.data)==null?void 0:O.map((e,c)=>l(W,{member:e,index:c,tribe:a})):l("div",{className:"",children:l("h3",{className:" text-primary font-xl ",children:"Not Found"})}),l(E,{class:"mt-6",links:s==null?void 0:s.links})]})]})]})}export{ve as default};
