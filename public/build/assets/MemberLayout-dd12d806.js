import{q as h,r as N,a,j as e,f as y,d as n,F as v}from"./app-57152477.js";import{P as g}from"./PrimaryButton-418e0c93.js";import{F as r,a as w,b as k,m as j,e as I,o as A,k as M}from"./index-f26b8ad5.js";import{A as u,e as P,i as $}from"./id-9fb793ba.js";import{r as C}from"./react-responsive-63dfa4ad.js";import{u as E}from"./useTranslation-3aff53ba.js";const F="/build/assets/no-image-8d923bfe.jpg";function D({children:p,state:m}){const{t:s,i18n:i}=E(),{url:t}=h(),{auth:b,member:l}=h().props,x=C.useMediaQuery({query:"(min-width: 1000px)"}),[c,d]=N.useState(x);function f(o){i.language!==o&&(i.changeLanguage(o),setLanguage(o))}return a("div",{className:"flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen bg-opacity-70",children:[e(y,{title:"Member"}),a(u,{className:`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${c?"translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100":"-translate-x-[120%] hidden p-0 opacity-0"}`,children:[e("div",{className:"logo mb-12",children:a("div",{className:"flex items-center mb-10",children:[e("div",{children:l!=null&&l.image?e("img",{className:"w-16 h-16 rounded-full mr-4 object-cover",src:`/storage/member/images/${l==null?void 0:l.image}`,alt:""}):e("img",{className:"w-16 h-16 rounded-full mr-4",src:F,alt:""})}),e("div",{children:e("h3",{className:"font-bold text-lg",children:l.business_name})})]})}),e("div",{className:"block lg:hidden absolute text-primary right-6 top-6 text-2xl",onClick:()=>d(!1),children:e(r,{icon:w})}),e("nav",{className:"navigation text-etbGray",children:a("ul",{className:"flex flex-col gap-6",children:[e("li",{children:a(n,{href:m==="locked"?"#":route("member.dashboard"),className:t.startsWith("/member/dashboard")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:k}),s("home")]})}),m!=="locked"&&a(v,{children:[e("li",{children:a(n,{href:route("member.profile"),className:t.startsWith("/member/profile")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:j}),s("my_profile")]})}),e("li",{children:a(n,{href:route("member.assessment.index"),className:t.startsWith("/member/assessment")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:I}),s("my_assessment")]})}),e("li",{children:a(n,{href:route("member.module.index"),className:t.startsWith("/member/module")?"font-bold":"",children:[e(r,{className:"fa-fw mr-2 text-primary",icon:A}),s("e_learning")]})})]})]})})]}),a("div",{className:`${c?"lg:w-3/4":"w-full"}`,children:[a(u,{className:"flex items-center justify-between mb-6 px-6 py-4 flex-wrap",children:[a("div",{className:"flex items-center order-2 lg:order-1 w-full justify-between lg:w-auto lg:justify-start",children:[a(g,{color:"lightPrimary",className:"mr-4",onClick:()=>d(!c),children:[e(r,{icon:M,className:"mr-2"}),s("menu")]}),a("div",{className:"flex items-center gap-3",children:[a("div",{className:`flex items-center cursor-pointer ${i.language==="en"?"font-bold text-primary":""}`,onClick:()=>f("en"),children:[e("div",{className:"mr-2",children:e("img",{src:P,className:"w-full object-contain h-full",alt:"English"})}),"EN"]}),e("div",{className:"text-xs",children:"|"}),a("div",{className:`flex cursor-pointer ${i.language==="id"?"font-bold text-primary":""}`,onClick:()=>f("id"),children:[e("div",{className:"mr-2",children:e("img",{src:$,className:"w-full object-contain h-full",alt:"Indonesia"})}),"ID"]})]})]}),a("div",{className:"flex gap-4 items-center justify-between mb-4 lg:mb-0 lg:justify-start w-full lg:w-auto order-1 lg:order-2",children:[a("div",{children:[a("h5",{children:[s("hello"),", ",e("strong",{children:b.user.name})]}),e("div",{className:"text-primary text-sm font-semibold",children:"Member"})]}),e("div",{children:e(g,{as:"link",color:"danger",href:route("logout"),method:"post",children:s("logout")})})]})]}),e("div",{children:p})]})]})}export{D as M,F as n};
