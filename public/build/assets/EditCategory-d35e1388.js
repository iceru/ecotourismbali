import{q as n,W as c,j as t,b as e}from"./app-3752d1b4.js";import{I as p}from"./InputLabel-546d9e46.js";import{P as d}from"./PrimaryButton-906f9980.js";import{T as u}from"./TextInput-853c2628.js";import{A as f}from"./AdminLayout-aa482f27.js";import g from"./TitleSection-6389e2c4.js";import{A as b}from"./AdminSection-ddf4b606.js";import x from"./BackTo-d92a8454.js";import{u as h}from"./useTranslation-f4b450c7.js";import"./logo-5e7252b7.js";import"./index-e52c8424.js";import"./id-410e5203.js";import"./react-responsive-116919b8.js";function L(){const{t:o}=h(),{category:m}=n().props,{data:r,setData:i,post:l,processing:s,errors:y}=c({name:m.name||"",image:""});return t(f,{children:[e(x,{title:"back_to_list_category",link:"/admin/category"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(g,{title:"edit_category_title"}),t("form",{className:"flex flex-col gap-6",onSubmit:a=>{a.preventDefault(),l(route("category.update",m.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(p,{htmlFor:"name",value:o("form_label_name")})}),e("div",{className:"lg:w-4/5",children:e(u,{id:"name",name:"name",type:"text",value:r.name,className:"block w-full",isFocused:!0,onChange:a=>i("name",a.target.value)})})]}),e(d,{className:"w-fit",disabled:s,children:o("submit")})]})]})]})}export{L as default};