import{q as h,r as b,a,j as e,f as N,d as n,F as y}from"./app-ce659c54.js";import{P as g}from"./PrimaryButton-d04f2cfb.js";import{F as r,a as v,b as w,m as k,e as j,o as I,k as A}from"./index-3b4c2837.js";import{A as u,e as P,i as _}from"./id-cce78424.js";import{r as $}from"./react-responsive-e4227add.js";import{u as C}from"./useTranslation-9dc185a0.js";const E="/build/assets/no-image-8d923bfe.jpg";function q({children:p,state:m}){const{t:l,i18n:i}=C(),{url:t}=h(),{member:s}=h().props,x=$.useMediaQuery({query:"(min-width: 1000px)"}),[c,d]=b.useState(x);function f(o){i.language!==o&&(i.changeLanguage(o),setLanguage(o))}return a("div",{className:"flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen bg-opacity-70",children:[e(N,{title:"Member"}),a(u,{className:`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${c?"translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100":"-translate-x-[120%] hidden p-0 opacity-0"}`,children:[e("div",{className:"logo mb-12",children:a("div",{className:"flex items-center mb-10",children:[e("div",{children:s!=null&&s.image?e("img",{className:"w-16 h-16 rounded-full mr-4 object-cover",src:`/storage/member/images/${s==null?void 0:s.image}`,alt:""}):e("img",{className:"w-16 h-16 rounded-full mr-4",src:E,alt:""})}),a("div",{children:[e("h3",{className:"font-bold text-lg",children:s==null?void 0:s.business_name}),(s==null?void 0:s.status)==="active"&&e("p",{className:"text-sm mt-1 font-semibold text-primary",children:l("verified_member")})]})]})}),e("div",{className:"block lg:hidden absolute text-primary right-6 top-6 text-2xl",onClick:()=>d(!1),children:e(r,{icon:v})}),e("nav",{className:"navigation text-etbGray",children:a("ul",{className:"flex flex-col gap-6",children:[e("li",{children:a(n,{href:m==="locked"?"#":route("member.dashboard"),className:t.startsWith("/member/dashboard")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:w}),l("home")]})}),m!=="locked"&&a(y,{children:[e("li",{children:a(n,{href:route("member.profile"),className:t.startsWith("/member/profile")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:k}),l("my_profile")]})}),e("li",{children:a(n,{href:route("member.assessment.index"),className:t.startsWith("/member/assessment")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:j}),l("my_assessment")]})}),e("li",{children:a(n,{href:route("member.module.index"),className:t.startsWith("/member/module")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:I}),l("e_learning")]})})]})]})})]}),a("div",{className:`${c?"lg:w-3/4":"w-full"}`,children:[a(u,{className:"flex items-center justify-between mb-6 px-6 py-4 flex-wrap",children:[a("div",{className:"flex items-center order-2 lg:order-1 w-full justify-between lg:w-auto lg:justify-start",children:[a(g,{color:"lightPrimary",className:"mr-4",onClick:()=>d(!c),children:[e(r,{icon:A,className:"mr-2"}),l("menu")]}),a("div",{className:"flex items-center gap-3",children:[a("div",{className:`flex items-center cursor-pointer ${i.language==="en"?"font-bold text-primary":""}`,onClick:()=>f("en"),children:[e("div",{className:"mr-2",children:e("img",{src:P,className:"w-full object-contain h-full",alt:"English"})}),"EN"]}),e("div",{className:"text-xs",children:"|"}),a("div",{className:`flex cursor-pointer ${i.language==="id"?"font-bold text-primary":""}`,onClick:()=>f("id"),children:[e("div",{className:"mr-2",children:e("img",{src:_,className:"w-full object-contain h-full",alt:"Indonesia"})}),"ID"]})]})]}),e("div",{className:"flex gap-4 items-center justify-between mb-4 lg:mb-0 lg:justify-start w-full lg:w-auto order-1 lg:order-2",children:e("div",{children:e(g,{as:"link",color:"danger",href:route("logout"),method:"post",children:l("logout")})})})]}),e("div",{children:p})]})]})}export{q as M,E as n};
