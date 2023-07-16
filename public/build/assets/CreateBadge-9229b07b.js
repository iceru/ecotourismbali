import{q as x,W as v,a,j as e}from"./app-155f046d.js";import{I as m}from"./InputLabel-15b1f777.js";import{P as _}from"./PrimaryButton-0b6b534e.js";import{T as w}from"./TextInput-321e9b64.js";import{A as y}from"./AdminLayout-265275c1.js";import n from"./TitleSection-123e3cbe.js";import{A as o}from"./id-5bc5985f.js";import{T as I}from"./Table-187f5e9c.js";import{u as T}from"./useTranslation-4866a858.js";import"./logo-5e7252b7.js";import"./index-caa2fc5a.js";import"./react-responsive-4e8bc513.js";function z({badge:c}){const{t:l}=T(),{flash:s}=x().props,{data:d,setData:r,post:g,processing:b,errors:i,reset:p}=v({name:"",image:null}),u=["Name","Image","Action"],f=["name","image"],h=[{label:"edit_button",link:"/admin/badge/edit",withId:!0,color:"info"},{label:"delete_button",route:"badge.destroy",withId:!0,color:"danger",type:"delete"}],N=t=>{t.preventDefault(),g(route("badge.store"),{onSuccess:()=>{p()}})};return a(y,{children:[a(o,{className:"flex flex-col gap-6 mb-6",children:[e(n,{title:"create_badge_title"}),s.success&&a("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:s.success})]}),a("form",{className:"flex flex-col gap-6",onSubmit:N,children:[a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"name",value:l("form_label_name")})}),a("div",{className:"lg:w-4/5",children:[e(w,{id:"name",name:"name",type:"text",value:d.name,className:"block w-full",isFocused:!0,onChange:t=>r("name",t.target.value)}),e("span",{className:"text-red-600",children:i.name})]})]}),a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"image",value:l("form_label_image")})}),a("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image",id:"image",className:"block",onChange:t=>r("image",t.target.files[0])}),e("span",{className:"text-red-600",children:i.image})]})]}),e(_,{color:"secondary",className:"w-fit",disabled:b,children:l("submit")})]})]}),a(o,{className:"flex flex-col gap-6",children:[e(n,{title:"list_badge_title"}),e(I,{header:u,data:c,selectedData:f,tableActions:h,pathImage:"badges/"})]})]})}export{z as default};