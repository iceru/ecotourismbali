import{q as g,r as u,t as y,j as a,b as e,f as v,d as r,F as w}from"./app-6ec9350d.js";import{P as p}from"./PrimaryButton-ac31ca70.js";import{F as l,a as k,b as j,m as I,o as _,e as A,p as E,k as L}from"./index-7306ceaf.js";import{A as b,e as P,i as $}from"./id-ccd839e6.js";import{r as C}from"./react-responsive-4d7fabe1.js";import{u as F}from"./useTranslation-66a8d812.js";const M="/build/assets/no-image-8d923bfe.jpg";function T({children:x,state:o}){const{t:i,i18n:t}=F(),{url:n}=g(),{member:s,admin:d}=g().props;u.useEffect(()=>{d&&y.visit(route("admin.dashboard"))},[d]);const N=C.useMediaQuery({query:"(min-width: 1000px)"}),[c,f]=u.useState(N);function h(m){t.language!==m&&(t.changeLanguage(m),setLanguage(m))}return a("div",{className:"flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen bg-opacity-70",children:[e(v,{title:"Member"}),a(b,{className:`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${c?"translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100":"-translate-x-[120%] hidden p-0 opacity-0"}`,children:[e("div",{className:"logo mb-12",children:a("div",{className:"flex items-center mb-10",children:[e("div",{children:s!=null&&s.image?e("img",{className:"w-16 h-16 rounded-full mr-4 object-cover",src:`/storage/member/images/${s==null?void 0:s.image}`,alt:""}):e("img",{className:"w-16 h-16 rounded-full mr-4",src:M,alt:""})}),a("div",{children:[e("h3",{className:"font-bold text-lg",children:s==null?void 0:s.business_name}),(s==null?void 0:s.status)==="active"&&e("p",{className:"text-sm mt-1 font-semibold text-primary",children:i("verified_member")})]})]})}),e("div",{className:"block lg:hidden absolute text-primary right-6 top-6 text-2xl",onClick:()=>f(!1),children:e(l,{icon:k})}),e("nav",{className:"navigation text-etbGray",children:a("ul",{className:"flex flex-col gap-6",children:[e("li",{children:a(r,{href:o==="locked"?"#":route("member.dashboard"),className:n.startsWith("/member/dashboard")?"font-bold":"",children:[e(l,{className:"fa-fw mr-2 text-primary",icon:j}),i("home")]})}),e("li",{children:a(r,{href:route("member.profile"),className:n.startsWith("/member/profile")?"font-bold":"",children:[e(l,{className:"fa-fw mr-2 text-primary",icon:I}),i("my_profile")]})}),e("li",{children:a(r,{href:route("member.list"),children:[e(l,{className:"fa-fw mr-2 text-primary",icon:_}),i("green_credential")]})}),o!=="locked"&&a(w,{children:[e("li",{children:a(r,{href:route("member.assessment.index"),className:n.startsWith("/member/assessment")?"font-bold":"",children:[e(l,{className:"fa-fw mr-2 text-primary",icon:A}),i("my_assessment")]})}),e("li",{children:a(r,{href:route("member.module.index"),className:n.startsWith("/member/module")?"font-bold":"",children:[e(l,{className:"fa-fw mr-2 text-primary",icon:E}),i("e_learning")]})})]})]})})]}),a("div",{className:`${c?"lg:w-3/4":"w-full"}`,children:[a(b,{className:"flex items-center justify-between mb-6 px-6 py-4 flex-wrap",children:[a("div",{className:"flex items-center w-full justify-between lg:w-auto lg:justify-start mb-4 lg:mb-0",children:[a(p,{color:"lightPrimary",className:"mr-4",onClick:()=>f(!c),children:[e(l,{icon:L,className:"mr-2"}),i("menu")]}),a("div",{className:"flex items-center gap-3",children:[a("div",{className:`flex items-center cursor-pointer ${t.language==="en"?"font-bold text-primary":""}`,onClick:()=>h("en"),children:[e("div",{className:"mr-2",children:e("img",{src:P,className:"w-full object-contain h-full",alt:"English"})}),"EN"]}),e("div",{className:"text-xs",children:"|"}),a("div",{className:`flex cursor-pointer ${t.language==="id"?"font-bold text-primary":""}`,onClick:()=>h("id"),children:[e("div",{className:"mr-2",children:e("img",{src:$,className:"w-full object-contain h-full",alt:"Indonesia"})}),"ID"]})]})]}),e("div",{className:"flex gap-4 items-center justify-between lg:justify-start w-full lg:w-auto",children:e("div",{children:e(p,{as:"link",color:"danger",href:route("logout"),method:"post",children:i("logout")})})})]}),e("div",{children:x})]})]})}export{T as M,M as n};
