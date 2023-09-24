import{q as x,W as v,j as a,a as e}from"./app-bc60d528.js";import{I as m}from"./InputLabel-699a1ae4.js";import{P as _}from"./PrimaryButton-39e90b5c.js";import{T as w}from"./TextInput-50b576a7.js";import{A as T}from"./AdminLayout-350b5d18.js";import n from"./TitleSection-5d3b5e3b.js";import{A as o}from"./AdminSection-5a7a602b.js";import{T as y}from"./Table-2dba1ea7.js";import{u as A}from"./useTranslation-580ee314.js";import"./logo-5e7252b7.js";import"./index-bb3d874a.js";import"./id-410e5203.js";import"./react-responsive-232405c3.js";function E({badge:c}){const{t:l}=A(),{flash:s}=x().props,{data:d,setData:r,post:g,processing:p,errors:i,reset:b}=v({name:"",image:null}),f=["Name","Image","Action"],u=["name","image"],h=[{label:"edit_button",link:"/admin/badge/edit",withId:!0,color:"info"}],N=t=>{t.preventDefault(),g(route("badge.store"),{onSuccess:()=>{b()}})};return a(T,{children:[a(o,{className:"flex flex-col gap-6 mb-6",children:[e(n,{title:"create_badge_title"}),s.success&&a("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:s.success})]}),a("form",{className:"flex flex-col gap-6",onSubmit:N,children:[a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"name",value:l("form_label_name")})}),a("div",{className:"lg:w-4/5",children:[e(w,{id:"name",name:"name",type:"text",value:d.name,className:"block w-full",isFocused:!0,onChange:t=>r("name",t.target.value)}),e("span",{className:"text-red-600",children:i.name})]})]}),a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"image",value:l("form_label_image")})}),a("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image",id:"image",className:"block",onChange:t=>r("image",t.target.files[0])}),e("span",{className:"text-red-600",children:i.image})]})]}),e(_,{color:"secondary",className:"w-fit",disabled:p,children:l("submit")})]})]}),a(o,{className:"flex flex-col gap-6",children:[e(n,{title:"list_badge_title"}),e(y,{header:f,data:c,selectedData:u,tableActions:h,pathImage:"badges/"})]})]})}export{E as default};