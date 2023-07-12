import{q as h,r as u,t as v,a,j as e,f as y,d as n,F as w}from"./app-a4ff7df0.js";import{P as p}from"./PrimaryButton-f5af1596.js";import{F as i,a as k,b as j,m as I,e as A,o as E,k as P}from"./index-049481bc.js";import{A as b,e as _,i as $}from"./id-27231db9.js";import{r as C}from"./react-responsive-86c2704d.js";import{u as F}from"./useTranslation-ccc83ba9.js";const L="/build/assets/no-image-8d923bfe.jpg";function R({children:x,state:d}){const{t:l,i18n:r}=F(),{url:t}=h(),{member:s,admin:o}=h().props;console.log(o),u.useEffect(()=>{o&&v.visit(route("admin.dashboard"))},[o]);const N=C.useMediaQuery({query:"(min-width: 1000px)"}),[c,f]=u.useState(N);function g(m){r.language!==m&&(r.changeLanguage(m),setLanguage(m))}return a("div",{className:"flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen bg-opacity-70",children:[e(y,{title:"Member"}),a(b,{className:`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${c?"translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100":"-translate-x-[120%] hidden p-0 opacity-0"}`,children:[e("div",{className:"logo mb-12",children:a("div",{className:"flex items-center mb-10",children:[e("div",{children:s!=null&&s.image?e("img",{className:"w-16 h-16 rounded-full mr-4 object-cover",src:`/storage/member/images/${s==null?void 0:s.image}`,alt:""}):e("img",{className:"w-16 h-16 rounded-full mr-4",src:L,alt:""})}),a("div",{children:[e("h3",{className:"font-bold text-lg",children:s==null?void 0:s.business_name}),(s==null?void 0:s.status)==="active"&&e("p",{className:"text-sm mt-1 font-semibold text-primary",children:l("verified_member")})]})]})}),e("div",{className:"block lg:hidden absolute text-primary right-6 top-6 text-2xl",onClick:()=>f(!1),children:e(i,{icon:k})}),e("nav",{className:"navigation text-etbGray",children:a("ul",{className:"flex flex-col gap-6",children:[e("li",{children:a(n,{href:d==="locked"?"#":route("member.dashboard"),className:t.startsWith("/member/dashboard")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:j}),l("home")]})}),d!=="locked"&&a(w,{children:[e("li",{children:a(n,{href:route("member.profile"),className:t.startsWith("/member/profile")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:I}),l("my_profile")]})}),e("li",{children:a(n,{href:route("member.assessment.index"),className:t.startsWith("/member/assessment")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:A}),l("my_assessment")]})}),e("li",{children:a(n,{href:route("member.module.index"),className:t.startsWith("/member/module")?"font-bold":"",children:[e(i,{className:"fa-fw mr-2 text-primary",icon:E}),l("e_learning")]})})]})]})})]}),a("div",{className:`${c?"lg:w-3/4":"w-full"}`,children:[a(b,{className:"flex items-center justify-between mb-6 px-6 py-4 flex-wrap",children:[a("div",{className:"flex items-center order-2 lg:order-1 w-full justify-between lg:w-auto lg:justify-start",children:[a(p,{color:"lightPrimary",className:"mr-4",onClick:()=>f(!c),children:[e(i,{icon:P,className:"mr-2"}),l("menu")]}),a("div",{className:"flex items-center gap-3",children:[a("div",{className:`flex items-center cursor-pointer ${r.language==="en"?"font-bold text-primary":""}`,onClick:()=>g("en"),children:[e("div",{className:"mr-2",children:e("img",{src:_,className:"w-full object-contain h-full",alt:"English"})}),"EN"]}),e("div",{className:"text-xs",children:"|"}),a("div",{className:`flex cursor-pointer ${r.language==="id"?"font-bold text-primary":""}`,onClick:()=>g("id"),children:[e("div",{className:"mr-2",children:e("img",{src:$,className:"w-full object-contain h-full",alt:"Indonesia"})}),"ID"]})]})]}),e("div",{className:"flex gap-4 items-center justify-between mb-4 lg:mb-0 lg:justify-start w-full lg:w-auto order-1 lg:order-2",children:e("div",{children:e(p,{as:"link",color:"danger",href:route("logout"),method:"post",children:l("logout")})})})]}),e("div",{children:x})]})]})}export{R as M,L as n};