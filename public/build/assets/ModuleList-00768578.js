import{b as r,j as i}from"./app-0823dc15.js";import{A as c}from"./AdminSection-771080e2.js";import{M as l}from"./MemberLayout-b7b1d94e.js";import p from"./TitleSection-9937d85c.js";import{P as m}from"./PrimaryButton-69d7815a.js";import{u as x}from"./useTranslation-a6e517c4.js";import"./index-9a5202b6.js";import"./id-410e5203.js";import"./react-responsive-970fc0f0.js";function d({modules:e}){const{t:a}=x();function s(t,n){return t.length>n?t.slice(0,n)+"...":t}return r(l,{children:i(c,{children:[r(p,{title:"e_learning",className:"mb-6"}),r("h1",{className:"mb-6 text-center font-bold text-primary text-2xl",children:a("list_modules")}),r("section",{className:"grid lg:grid-cols-2 gap-6",children:e==null?void 0:e.map(t=>i("div",{className:"p-6  bg-lightPrimary bg-opacity-50 rounded-2xl flex flex-wrap lg:flex-nowrap",children:[r("div",{className:"mr-4 lg:w-1/3 w-full mb-4 lg:mb-0",children:r("img",{className:"max-h-[150px] object-cover object-center",src:"/storage/modules/"+(t==null?void 0:t.image),alt:""})}),i("div",{className:"lg:w-2/3 w-full",children:[i("div",{className:"text-xl font-bold mb-3 flex items-center",children:[t==null?void 0:t.title,(t==null?void 0:t.member_module[0])&&(t==null?void 0:t.member_module[0].completion)===1&&r("span",{className:"rounded-3xl ml-3 text-xs py-1 px-3 bg-secondary inline-block text-white",children:a("finished")})]}),r("div",{className:"mb-3 text-sm",title:t==null?void 0:t.description,children:s(t.description,80)}),r(m,{as:"link",href:route("member.module.detail",t==null?void 0:t.id),children:a("read_material")})]})]}))})]})})}export{d as default};