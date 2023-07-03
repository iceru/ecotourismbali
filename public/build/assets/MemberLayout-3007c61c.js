import{q as f,r as x,a,j as e,f as N,d as t,F as y}from"./app-9d038481.js";import{P as h}from"./PrimaryButton-a5401152.js";import{L as v}from"./logo-5e7252b7.js";import{F as s,a as w,b as k,l as j,d as L,m as A,j as E}from"./index-9d6ee548.js";import{A as g,e as I,i as M}from"./id-fe319941.js";import{r as P}from"./react-responsive-17c05ceb.js";import{u as B}from"./useTranslation-ecbbedb5.js";function D({children:u,state:m}){const{t:r,i18n:l}=B(),{url:i}=f(),{auth:p,memberShared:C}=f().props,b=P.useMediaQuery({query:"(min-width: 1000px)"}),[n,c]=x.useState(b);function d(o){l.language!==o&&(l.changeLanguage(o),setLanguage(o))}return a("div",{className:"flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen bg-opacity-70",children:[e(N,{title:"Member"}),a(g,{className:`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${n?"translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100":"-translate-x-[120%] hidden p-0 opacity-0"}`,children:[e("div",{className:"logo mb-12",children:e("img",{src:v,alt:"Eco Tourism Bali"})}),e("div",{className:"block lg:hidden absolute text-primary right-6 top-6 text-2xl",onClick:()=>c(!1),children:e(s,{icon:w})}),e("nav",{className:"navigation text-etbGray",children:a("ul",{className:"flex flex-col gap-6",children:[e("li",{children:a(t,{href:m==="locked"?"#":route("member.dashboard"),className:i.startsWith("/member/dashboard")?"font-bold":"",children:[e(s,{className:"fa-fw mr-2 text-primary",icon:k}),r("home")]})}),m!=="locked"&&a(y,{children:[e("li",{children:a(t,{href:route("member.profile"),className:i.startsWith("/member/profile")?"font-bold":"",children:[e(s,{className:"fa-fw mr-2 text-primary",icon:j}),r("my_profile")]})}),e("li",{children:a(t,{href:route("member.assessment.index"),className:i.startsWith("/member/assessment")?"font-bold":"",children:[e(s,{className:"fa-fw mr-2 text-primary",icon:L}),r("my_assessment")]})}),e("li",{children:a(t,{href:route("member.module.index"),className:i.startsWith("/member/module")?"font-bold":"",children:[e(s,{className:"fa-fw mr-2 text-primary",icon:A}),r("e_learning")]})})]})]})})]}),a("div",{className:`${n?"lg:w-3/4":"w-full"}`,children:[a(g,{className:"flex items-center justify-between mb-6 px-6 py-4 flex-wrap",children:[a("div",{className:"flex items-center order-2 lg:order-1 w-full justify-between lg:w-auto lg:justify-start",children:[a(h,{color:"lightPrimary",className:"mr-4",onClick:()=>c(!n),children:[e(s,{icon:E,className:"mr-2"}),r("menu")]}),a("div",{className:"flex items-center gap-3",children:[a("div",{className:`flex items-center cursor-pointer ${l.language==="en"?"font-bold text-primary":""}`,onClick:()=>d("en"),children:[e("div",{className:"mr-2",children:e("img",{src:I,className:"w-full object-contain h-full",alt:"English"})}),"EN"]}),e("div",{className:"text-xs",children:"|"}),a("div",{className:`flex cursor-pointer ${l.language==="id"?"font-bold text-primary":""}`,onClick:()=>d("id"),children:[e("div",{className:"mr-2",children:e("img",{src:M,className:"w-full object-contain h-full",alt:"Indonesia"})}),"ID"]})]})]}),a("div",{className:"flex gap-4 items-center justify-between mb-4 lg:mb-0 lg:justify-start w-full lg:w-auto order-1 lg:order-2",children:[a("div",{children:[a("h5",{children:[r("hello"),", ",e("strong",{children:p.user.name})]}),e("div",{className:"text-primary text-sm font-semibold",children:"Member"})]}),e("div",{children:e(h,{as:"link",color:"danger",href:route("logout"),method:"post",children:r("logout")})})]})]}),e("div",{children:u})]})]})}export{D as M};
