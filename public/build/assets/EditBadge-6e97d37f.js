import{q as c,W as d,a as t,j as e}from"./app-9d038481.js";import{I as r}from"./InputLabel-1821e8c1.js";import{P as g}from"./PrimaryButton-a5401152.js";import{T as p}from"./TextInput-f827f223.js";import{A as f}from"./AdminLayout-4424db25.js";import u from"./TitleSection-ee006701.js";import{A as b}from"./id-fe319941.js";import h from"./BackTo-f560ada3.js";import{u as v}from"./useTranslation-ecbbedb5.js";import"./logo-5e7252b7.js";import"./index-9d6ee548.js";import"./react-responsive-17c05ceb.js";function D(){const{t:m}=v(),{badge:i}=c().props,{data:s,setData:l,post:o,processing:n,errors:x}=d({name:i.name||"",image:""});return t(f,{children:[e(h,{title:"back_to_list_badge",link:"/admin/badge"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(u,{title:"edit_badge_title"}),t("form",{className:"flex flex-col gap-6",onSubmit:a=>{a.preventDefault(),o(route("badge.update",i.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"name",value:m("form_label_name")})}),e("div",{className:"lg:w-4/5",children:e(p,{id:"name",name:"name",type:"text",value:s.name,className:"block w-full",isFocused:!0,onChange:a=>l("name",a.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"image",value:m("form_label_image")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"image",id:"image",onChange:a=>l("image",a.target.files[0])})})]}),e(g,{className:"w-fit",disabled:n,children:m("submit")})]})]})]})}export{D as default};
