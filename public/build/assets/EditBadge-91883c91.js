import{q as c,W as d,j as t,b as e}from"./app-b3e7b24a.js";import{I as r}from"./InputLabel-e9916b13.js";import{P as g}from"./PrimaryButton-f21c74b8.js";import{T as p}from"./TextInput-8038c63a.js";import{A as f}from"./AdminLayout-773546c1.js";import u from"./TitleSection-20d3c454.js";import{A as b}from"./AdminSection-ad67b7c2.js";import h from"./BackTo-69f86826.js";import{u as v}from"./useTranslation-fabd3578.js";import"./logo-5e7252b7.js";import"./index-48a26c0a.js";import"./id-410e5203.js";import"./react-responsive-f4fa1de5.js";function L(){const{t:m}=v(),{badge:i}=c().props,{data:o,setData:l,post:s,processing:n,errors:x}=d({name:i.name||"",image:""});return t(f,{children:[e(h,{title:"back_to_list_badge",link:"/admin/badge"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(u,{title:"edit_badge_title"}),t("form",{className:"flex flex-col gap-6",onSubmit:a=>{a.preventDefault(),s(route("badge.update",i.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"name",value:m("form_label_name")})}),e("div",{className:"lg:w-4/5",children:e(p,{id:"name",name:"name",type:"text",value:o.name,className:"block w-full",isFocused:!0,onChange:a=>l("name",a.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"image",value:m("form_label_image")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"image",id:"image",onChange:a=>l("image",a.target.files[0])})})]}),e(g,{className:"w-fit",disabled:n,children:m("submit")})]})]})]})}export{L as default};
