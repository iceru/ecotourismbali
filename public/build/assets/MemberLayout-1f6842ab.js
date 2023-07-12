import{q as g,r as u,t as v,a,j as e,f as y,d as n,F as w}from"./app-7f84437a.js";import{P as p}from"./PrimaryButton-9249986e.js";import{F as i,a as k,b as j,m as I,e as A,o as E,k as P}from"./index-2e3ad5a5.js";import{A as b,e as _,i as $}from"./id-2f09920d.js";import{r as C}from"./react-responsive-6f12b18e.js";import{u as F}from"./useTranslation-9ce7b74f.js";const L="/build/assets/no-image-8d923bfe.jpg";function R({children:x,state:m}){const{t:l,i18n:t}=F(),{url:r}=g(),{member:s,admin:d}=g().props;u.useEffect(()=>{d&&v.visit(route("admin.dashboard"))},[d]);const N=C.useMediaQuery({query:"(min-width: 1000px)"}),[c,f]=u.useState(N);function h(o){t.language!==o&&(t.changeLanguage(o),setLanguage(o))}return a("div",{className:"flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen bg-opacity-70",children:[e(y,{title:"Member"}),a(b,{className:`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${c?"translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100":"-translate-x-[120%] hidden p-0 opacity-0"}`,children:[e("div",{className:"logo mb-12",children:a("div",{className:"flex items-center mb-10",children:[e("div",{children:s!=null&&s.image?e("img",{className:"w-16 h-16 rounded-full mr-4 object-cover",src:`/storage/member/images/${s==null?void 0:s.image}`,alt:""}):e("img",{className:"w-16 h-16 rounded-full mr-4",src:L,alt:""})}),a("div",{children:[e("h3",{className:"font-bold text-lg",children:s==null?void 0:s.business_name}),(s==null?void 0:s.status)==="active"&&e("p",{className:"text-sm mt-1 font-semibold text-primary",children:l("verified_member")})]})]})}),e("div",{className:"block lg:hidden absolute text-primary right-6 top-6 text-2xl",onClick:()=>f(!1),children:e(i,{icon:k})}),e("nav",{className:"navigation text-etbGray",children:a("ul",{className:"flex flex-col gap-6",children:[e("li",{children:a(n,{href:m==="locked"?"#":route("member.dashboard"),className:r.startsWith("/member/dashboard")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:j}),l("home")]})}),m!=="locked"&&a(w,{children:[e("li",{children:a(n,{href:route("member.profile"),className:r.startsWith("/member/profile")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:I}),l("my_profile")]})}),e("li",{children:a(n,{href:route("member.assessment.index"),className:r.startsWith("/member/assessment")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:A}),l("my_assessment")]})}),e("li",{children:a(n,{href:route("member.module.index"),className:r.startsWith("/member/module")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:E}),l("e_learning")]})})]})]})})]}),a("div",{className:`${c?"lg:w-3/4":"w-full"}`,children:[a(b,{className:"flex items-center justify-between mb-6 px-6 py-4 flex-wrap",children:[a("div",{className:"flex items-center w-full justify-between lg:w-auto lg:justify-start mb-4 lg:mb-0",children:[a(p,{color:"lightPrimary",className:"mr-4",onClick:()=>f(!c),children:[e(i,{icon:P,className:"mr-2"}),l("menu")]}),a("div",{className:"flex items-center gap-3",children:[a("div",{className:`flex items-center cursor-pointer ${t.language==="en"?"font-bold text-primary":""}`,onClick:()=>h("en"),children:[e("div",{className:"mr-2",children:e("img",{src:_,className:"w-full object-contain h-full",alt:"English"})}),"EN"]}),e("div",{className:"text-xs",children:"|"}),a("div",{className:`flex cursor-pointer ${t.language==="id"?"font-bold text-primary":""}`,onClick:()=>h("id"),children:[e("div",{className:"mr-2",children:e("img",{src:$,className:"w-full object-contain h-full",alt:"Indonesia"})}),"ID"]})]})]}),e("div",{className:"flex gap-4 items-center justify-between lg:justify-start w-full lg:w-auto",children:e("div",{children:e(p,{as:"link",color:"danger",href:route("logout"),method:"post",children:l("logout")})})})]}),e("div",{children:x})]})]})}export{R as M,L as n};
