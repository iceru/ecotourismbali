import{a as r,j as e}from"./app-564aa5bf.js";import{A as c}from"./AdminSection-6264d2fc.js";import{M as l}from"./MemberLayout-00fd1426.js";import m from"./TitleSection-3bafae38.js";import{B as o}from"./Button-5c6aa829.js";import{u as p}from"./useTranslation-b7c2539f.js";import"./index-d6d3d862.js";import"./id-410e5203.js";import"./no-image-91387054.js";import"./react-responsive-1f42f9ff.js";function y({modules:i}){const{t:a}=p();function s(t,n){return t.length>n?t.slice(0,n)+"...":t}return r(l,{children:e(c,{children:[r(m,{title:"e_learning",className:"mb-6"}),r("h1",{className:"mb-6 text-center font-bold text-primary text-2xl",children:a("list_modules")}),r("section",{className:"grid lg:grid-cols-2 gap-6",children:i==null?void 0:i.map(t=>e("div",{className:"p-6  bg-lightPrimary bg-opacity-50 rounded-2xl flex flex-wrap lg:flex-nowrap",children:[r("div",{className:"mr-4 lg:w-fit shrink-0 w-full mb-4 lg:mb-0",children:r("img",{className:"max-w-[130px] object-cover object-center",src:"/storage/modules/"+(t==null?void 0:t.image),alt:""})}),e("div",{className:" w-full",children:[r("div",{className:"text-xl font-bold mb-3 flex items-center",children:t==null?void 0:t.title}),r("div",{className:"mb-3 text-sm",title:t==null?void 0:t.description,children:s(t.description,80)}),r(o,{as:"link",href:route("member.module.detail",t==null?void 0:t.id),children:a("read_material")})]})]}))})]})})}export{y as default};
