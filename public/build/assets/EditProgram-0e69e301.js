import{q as d,W as p,j as a,b as e}from"./app-0823dc15.js";import{I as o}from"./InputLabel-9fef5e1f.js";import{P as g}from"./PrimaryButton-69d7815a.js";import{T as f}from"./TextInput-bf51fc49.js";import{A as u}from"./AdminLayout-2ba072fa.js";import b from"./TitleSection-9937d85c.js";import{A as h}from"./AdminSection-771080e2.js";import x from"./BackTo-8c2ef4ce.js";import{u as N}from"./useTranslation-a6e517c4.js";import"./logo-5e7252b7.js";import"./index-9a5202b6.js";import"./id-410e5203.js";import"./react-responsive-970fc0f0.js";function D(){const{t}=N(),{program:r}=d().props,{data:s,setData:i,post:n,processing:c,errors:l}=p({name:r.name||"",image:null});return a(u,{children:[e(x,{title:"back_to_list_program",link:"/admin/program"}),a(h,{className:"flex flex-col gap-6 mb-6",children:[e(b,{title:"edit_program_title"}),a("form",{className:"flex flex-col gap-6",onSubmit:m=>{m.preventDefault(),n(route("program.update",r.id))},children:[a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"name",value:t("form_label_name")})}),a("div",{className:"lg:w-4/5",children:[e(f,{id:"name",name:"name",type:"text",value:s.name,className:"block w-full",isFocused:!0,onChange:m=>i("name",m.target.value)}),e("span",{className:"text-red-600",children:l.name})]})]}),a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"image",value:t("form_label_image")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"image",id:"image",onChange:m=>i("image",m.target.files[0])})}),e("span",{className:"text-red-600",children:l.image})]}),e(g,{className:"w-fit",disabled:c,children:t("submit")})]})]})]})}export{D as default};
