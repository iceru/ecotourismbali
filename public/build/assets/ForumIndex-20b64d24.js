import{r as i,a,j as r,F as _,y as f}from"./app-23f2fa96.js";import{q as k}from"./base-e8aaf39e.js";import{B as w}from"./Button-534be8b8.js";import{T as P}from"./TitlePage-b6dac230.js";import{T as I}from"./TextInput-e9e5d2e5.js";import{S as j}from"./SelectInput-bbfbf3b9.js";import{a as T,s as A,C as B,F as D}from"./index-28d59fa5.js";import E from"./ForumCard-d673b7a8.js";import{G}from"./GuestLayout-e97bba32.js";import{P as K}from"./Pagination-d50039bb.js";import{u as M}from"./useTranslation-14eb7045.js";import"./moment-fbc5633a.js";import"./logo-5e7252b7.js";import"./index-25fc1de7.js";import"./id-410e5203.js";import"./lodash-d0518ef4.js";function ae({threads:l,activeUsers:g}){var b,h;const{t:n}=M(),[x,m]=i.useState(),[s,c]=i.useState({}),[p,u]=i.useState(),[N,y]=i.useState(),t=k.parse(location.search);i.useEffect(()=>{t!=null&&t.keyword&&u(t==null?void 0:t.keyword),t!=null&&t.category?m(t==null?void 0:t.category):m("home"),t!=null&&t.sort&&y(t==null?void 0:t.sort)},[]);const v=[{label:"Date - Newest",value:"date-descending"},{label:"Date - Oldest",value:"date-ascending"},{label:"Name - A to Z",value:"name-ascending"},{label:"Name - Z to A",value:"name-descending"},{label:"Most Popular",value:"comments-descending"}],C=()=>{const e={...s,keyword:p};c(e),f.get(route("member.forum.index",e))},F=e=>{const o={...s,sort:e};c(o),f.get(route("member.forum.index"),o)},S=e=>{m(e);const o={...s,category:e};c(o),f.get(route("member.forum.index"),o)},d=({title:e,icon:o})=>r("button",{onClick:()=>S(e),className:`flex items-center p-3 mb-1 gap-3 border-l-[10px] border-l-transparent rounded ${x===e&&"bg-lightPrimary text-primary  !border-l-primary font-bold"}`,children:[a(D,{icon:o,className:"fa-fw"}),n(e)]});return a(G,{children:r("main",{className:"grid gap-8 container",children:[r("section",{className:"flex justify-between flex-wrap items-center",children:[a("div",{className:"w-full lg:w-fit mb-6 lg:mb-0",children:a(P,{title:"member_forums",className:"!mb-0"})}),a("div",{children:a(w,{as:"link",href:"/member/forum/thread/create",color:"primary",children:n("start_new_topic")})})]}),r("section",{className:"flex justify-between items-center flex-wrap",children:[r("div",{className:"flex w-full lg:w-fit mb-4 lg:mb-0 gap-3 items-center flex-wrap",children:[a("label",{htmlFor:"search_topic",className:"min-w-[100px]",children:n("search_topic")}),a(I,{value:p,onChange:e=>u(e.target.value)}),a(w,{onClick:C,children:n("search")})]}),r("div",{className:"flex gap-3 items-center",children:[a("label",{htmlFor:"sort",className:"min-w-[100px] lg:min-w-fit",children:n("sort")}),a(j,{options:v,value:N,onChange:e=>F(e.target.value)})]})]}),r("section",{className:"flex gap-4 flex-wrap lg:flex-nowrap",children:[r("section",{className:"w-full lg:w-1/5 mb-4 lg:mb-0",children:[r("div",{className:"grid gap-3 border-b pb-3 mb-8 border-lightPrimary",children:[a(d,{title:"home",icon:T}),a(d,{title:"my_topics",icon:A}),a(d,{title:"announcements",icon:B})]}),r("div",{children:[a("h4",{className:"font-bold text-base mb-4",children:n("most_active_users")}),a("div",{className:"grid gap-6",children:g&&g.map(e=>r("div",{className:"flex items-center",children:[a("div",{children:a("img",{src:"/storage/member/images/"+(e==null?void 0:e.image),alt:"",className:"w-6 h-6 mr-2"})}),e==null?void 0:e.business_name]}))})]})]}),a("section",{className:"w-full lg:w-4/5 lg:pl-6",children:((b=l==null?void 0:l.data)==null?void 0:b.length)===0?a("h3",{className:"text-lg font-bold",children:"Not Found"}):r(_,{children:[a("div",{className:"grid gap-8 mb-6",children:(h=l==null?void 0:l.data)==null?void 0:h.map(e=>a(E,{thread:e}))}),a(K,{class:"mt-6",links:l==null?void 0:l.links})]})})]})]})})}export{ae as default};
