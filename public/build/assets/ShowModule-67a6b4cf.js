import{q as c,j as e,b as t}from"./app-b3e7b24a.js";import{A as a}from"./AdminSection-ad67b7c2.js";import{A as m}from"./AdminLayout-773546c1.js";import d from"./BackTo-69f86826.js";import{u as h}from"./useTranslation-fabd3578.js";import"./PrimaryButton-f21c74b8.js";import"./logo-5e7252b7.js";import"./index-48a26c0a.js";import"./id-410e5203.js";import"./react-responsive-f4fa1de5.js";function A(){const{module:i}=c().props,{t:l}=h(),r=(o,s,n)=>e("div",{className:"flex flex-wrap mb-4",children:[t("div",{className:"w-full lg:w-1/4 mb-3 lg:mb-0",children:t("div",{className:"font-bold",children:l(o)})}),n==="video"?e("div",{className:"w-full lg:w-3/4",children:[t("video",{className:"max-h-[200px]",controls:!0,src:`/storage/modules/${s}`}),t("div",{children:s||"-"})]}):n==="image"?e("div",{className:"w-full lg:w-3/4",children:[t("img",{className:"max-h-[200px]",src:`/storage/modules/${s}`}),t("div",{children:s||"-"})]}):n==="content"?t("div",{className:"w-full lg:w-3/4",children:t("div",{dangerouslySetInnerHTML:{__html:s}})}):t("div",{className:"w-full lg:w-3/4",children:s||"-"})]});return e(m,{children:[t(d,{link:"/admin/module",title:"back_to_list_modules"}),e(a,{children:[r("title",i==null?void 0:i.title),r("description",i==null?void 0:i.description),r("author",i==null?void 0:i.author),r("content",i==null?void 0:i.content,"content"),r("image",i==null?void 0:i.image,"image"),r("video",i==null?void 0:i.video,"video"),r("attachment",i==null?void 0:i.attachment)]})]})}export{A as default};