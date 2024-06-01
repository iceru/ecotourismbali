import{q as v,W as x,j as a,a as e}from"./app-23f2fa96.js";import{I as m}from"./InputLabel-04739bb0.js";import{B as _}from"./Button-534be8b8.js";import{T as w}from"./TextInput-e9e5d2e5.js";import{A as T}from"./AdminLayout-c9606641.js";import n from"./TitleSection-fcafd505.js";import{A as o}from"./AdminSection-08fb6198.js";import{T as A}from"./Table-0ea45dd6.js";import{u as I}from"./useTranslation-14eb7045.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./id-410e5203.js";import"./react-responsive-0978e57b.js";import"./index-25fc1de7.js";function G({badge:c}){const{t:l}=I(),{flash:i}=v().props,{data:d,setData:s,post:g,processing:f,errors:r,reset:p}=x({name:"",image:null}),b=["Name","Image","Action"],u=["name","image"],h=[{label:"edit_button",link:"/admin/verified-badge/edit",withId:!0,color:"info"}],N=t=>{t.preventDefault(),g(route("verified_badge.store"),{onSuccess:()=>{p()}})};return a(T,{children:[a(o,{className:"flex flex-col gap-6 mb-6",children:[e(n,{title:"create_verified_badge_title"}),i.success&&a("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:i.success})]}),a("form",{className:"flex flex-col gap-6",onSubmit:N,children:[a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"name",value:l("form_label_name")})}),a("div",{className:"lg:w-4/5",children:[e(w,{id:"name",name:"name",type:"text",value:d.name,className:"block w-full",isFocused:!0,onChange:t=>s("name",t.target.value)}),e("span",{className:"text-red-600",children:r.name})]})]}),a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"image",value:l("form_label_image")})}),a("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image",id:"image",className:"block",onChange:t=>s("image",t.target.files[0])}),e("span",{className:"text-red-600",children:r.image})]})]}),e(_,{color:"secondary",className:"w-fit",disabled:f,children:l("submit")})]})]}),a(o,{className:"flex flex-col gap-6",children:[e(n,{title:"list_verified_badge_title"}),e(A,{header:b,data:c,selectedData:u,tableActions:h,pathImage:"badges/"})]})]})}export{G as default};
