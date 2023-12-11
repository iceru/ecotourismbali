import{q as b,r as m,t as I,j as s,a as e,f as _,d as r,F as E}from"./app-0c39fb5f.js";import{B as y}from"./Button-43af3bd7.js";import{F as t,f as A,a as L,o as S,q as $,b as B,d as C,r as F,m as M}from"./index-e4045331.js";import{A as v}from"./AdminSection-c1a7ec03.js";import{e as P,i as W}from"./id-410e5203.js";import{r as q}from"./react-responsive-215c4981.js";import{u as D}from"./useTranslation-e654b818.js";const G="/build/assets/no-image-8d923bfe.jpg";function K({children:w,state:j}){var h,u,p,x,N;const{t:l,i18n:n}=D(),{url:c}=b(),{member:a,admin:d}=b().props;m.useEffect(()=>{d&&I.visit(route("admin.dashboard"))},[d]),m.useEffect(()=>{const i=localStorage.getItem("lang");i&&n.changeLanguage(i)},[]);const k=q.useMediaQuery({query:"(min-width: 1000px)"}),[o,f]=m.useState(k);function g(i){n.language!==i&&(n.changeLanguage(i),localStorage.setItem("lang",i))}return s("div",{className:"flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen bg-opacity-70",children:[e(_,{title:"Member"}),s(v,{className:`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${o?"translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100":"-translate-x-[120%] hidden p-0 opacity-0"}`,children:[e("div",{className:"logo mb-12",children:s("div",{className:"flex items-center mb-10",children:[e("div",{className:"w-20 h-20 bg-primary bg-opacity-10 flex justify-center items-center rounded-full mr-2",children:a!=null&&a.image?e("img",{className:"w-20 h-20 rounded-full  object-contain",src:`/storage/member/images/${a==null?void 0:a.image}`,alt:""}):e("img",{className:"w-20 h-20 rounded-full ",src:G,alt:""})}),s("div",{children:[e("h3",{className:"font-bold text-lg",children:a==null?void 0:a.business_name}),(h=a==null?void 0:a.status)!=null&&h.includes("active")?e("p",{className:"text-sm mt-1 font-semibold text-primary",children:l("verified_member")}):(u=a==null?void 0:a.status)!=null&&u.includes("greenpal")?e("p",{className:"text-sm mt-1 font-semibold text-primary",children:l("greenpal")}):null]})]})}),e("div",{className:"block lg:hidden absolute text-primary right-6 top-6 text-2xl",onClick:()=>f(!1),children:e(t,{icon:A})}),e("nav",{className:"navigation text-etbGray",children:s("ul",{className:"flex flex-col gap-6",children:[e("li",{children:s(r,{href:j==="locked"?"#":route("member.dashboard"),className:c.startsWith("/member/dashboard")?"font-bold":"",children:[e(t,{className:"fa-fw mr-2 text-primary",icon:L}),l("home")]})}),e("li",{children:s(r,{href:route("member.profile"),className:c.startsWith("/member/profile")?"font-bold":"",children:[e(t,{className:"fa-fw mr-2 text-primary",icon:S}),l("my_profile")]})}),e("li",{children:s(r,{href:route("member.list"),children:[e(t,{className:"fa-fw mr-2 text-primary",icon:$}),l("green_credential")]})}),((p=a==null?void 0:a.status)==null?void 0:p.includes("active"))&&e("li",{children:s(r,{href:route("member.forum.index"),children:[e(t,{className:"fa-fw mr-2 text-primary",icon:B}),l("member_forums")]})}),((x=a==null?void 0:a.program)==null?void 0:x.name)!=="Green Pal"&&((N=a==null?void 0:a.status)!=null&&N.includes("active"))?s(E,{children:[e("li",{children:s(r,{href:route("member.assessment.index"),className:c.startsWith("/member/assessment")?"font-bold":"",children:[e(t,{className:"fa-fw mr-2 text-primary",icon:C}),l("my_assessment")]})}),e("li",{children:s(r,{href:route("member.module.index"),className:c.startsWith("/member/module")?"font-bold":"",children:[e(t,{className:"fa-fw mr-2 text-primary",icon:F}),l("e_learning")]})})]}):null]})})]}),s("div",{className:`${o?"lg:w-3/4":"w-full"}`,children:[s(v,{className:"flex items-center justify-between mb-6 px-6 py-4 flex-wrap",children:[s("div",{className:"flex items-center w-full justify-between lg:w-auto lg:justify-start mb-4 lg:mb-0",children:[s(y,{color:"lightPrimary",className:"mr-4",onClick:()=>f(!o),children:[e(t,{icon:M,className:"mr-2"}),l("menu")]}),s("div",{className:"flex items-center gap-3",children:[s("div",{className:`flex items-center cursor-pointer ${n.language==="en"?"font-bold text-primary":""}`,onClick:()=>g("en"),children:[e("div",{className:"mr-2",children:e("img",{src:P,className:"w-full object-contain h-full",alt:"English"})}),"EN"]}),e("div",{className:"text-xs",children:"|"}),s("div",{className:`flex cursor-pointer ${n.language==="id"?"font-bold text-primary":""}`,onClick:()=>g("id"),children:[e("div",{className:"mr-2",children:e("img",{src:W,className:"w-full object-contain h-full",alt:"Indonesia"})}),"ID"]})]})]}),e("div",{className:"flex gap-4 items-center justify-between lg:justify-start w-full lg:w-auto",children:e("div",{children:e(y,{as:"link",color:"danger",href:route("logout"),method:"post",children:l("logout")})})})]}),e("div",{children:w})]})]})}export{K as M,G as n};
