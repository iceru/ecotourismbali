import{q as c,W as d,j as t,a as e}from"./app-5781d102.js";import{I as o}from"./InputLabel-9c46cc8a.js";import{B as g}from"./Button-a7635336.js";import{T as p}from"./TextInput-38bedd68.js";import{A as f}from"./AdminLayout-eb43d7bb.js";import u from"./TitleSection-ccd87c4b.js";import{A as b}from"./AdminSection-7bb97519.js";import h from"./BackTo-d8956bcd.js";import{u as v}from"./useTranslation-08f3d0e1.js";import"./logo-5e7252b7.js";import"./index-ba9fe3af.js";import"./id-410e5203.js";import"./react-responsive-d2fe5336.js";function L(){const{t:m}=v(),{badge:i}=c().props,{data:s,setData:l,post:r,processing:n,errors:x}=d({name:i.name||"",image:""});return t(f,{children:[e(h,{title:"back_to_list_badge",link:"/admin/badge"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(u,{title:"edit_badge_title"}),t("form",{className:"flex flex-col gap-6",onSubmit:a=>{a.preventDefault(),r(route("badge.update",i.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"name",value:m("form_label_name")})}),e("div",{className:"lg:w-4/5",children:e(p,{id:"name",name:"name",type:"text",value:s.name,className:"block w-full",isFocused:!0,onChange:a=>l("name",a.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"image",value:m("form_label_image")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"image",id:"image",onChange:a=>l("image",a.target.files[0])})})]}),e(g,{className:"w-fit",disabled:n,children:m("submit")})]})]})]})}export{L as default};