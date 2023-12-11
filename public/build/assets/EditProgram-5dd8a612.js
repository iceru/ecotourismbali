import{q as d,W as p,j as a,a as e}from"./app-5781d102.js";import{I as o}from"./InputLabel-9c46cc8a.js";import{B as g}from"./Button-a7635336.js";import{T as f}from"./TextInput-38bedd68.js";import{A as u}from"./AdminLayout-eb43d7bb.js";import b from"./TitleSection-ccd87c4b.js";import{A as h}from"./AdminSection-7bb97519.js";import x from"./BackTo-d8956bcd.js";import{u as N}from"./useTranslation-08f3d0e1.js";import"./logo-5e7252b7.js";import"./index-ba9fe3af.js";import"./id-410e5203.js";import"./react-responsive-d2fe5336.js";function L(){const{t}=N(),{program:l}=d().props,{data:s,setData:i,post:n,processing:c,errors:r}=p({name:l.name||"",image:null});return a(u,{children:[e(x,{title:"back_to_list_program",link:"/admin/program"}),a(h,{className:"flex flex-col gap-6 mb-6",children:[e(b,{title:"edit_program_title"}),a("form",{className:"flex flex-col gap-6",onSubmit:m=>{m.preventDefault(),n(route("program.update",l.id))},children:[a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"name",value:t("form_label_name")})}),a("div",{className:"lg:w-4/5",children:[e(f,{id:"name",name:"name",type:"text",value:s.name,className:"block w-full",isFocused:!0,onChange:m=>i("name",m.target.value)}),e("span",{className:"text-red-600",children:r.name})]})]}),a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"image",value:t("form_label_image")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"image",id:"image",onChange:m=>i("image",m.target.files[0])})}),e("span",{className:"text-red-600",children:r.image})]}),e(g,{className:"w-fit",disabled:c,children:t("submit")})]})]})]})}export{L as default};