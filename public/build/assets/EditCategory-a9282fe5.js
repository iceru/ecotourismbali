import{q as n,W as c,j as t,a as e}from"./app-291fdfab.js";import{I as p}from"./InputLabel-3f9e490e.js";import{P as d}from"./PrimaryButton-de3f4291.js";import{T as u}from"./TextInput-cd861fce.js";import{A as f}from"./AdminLayout-596b7b7a.js";import g from"./TitleSection-572336d2.js";import{A as b}from"./AdminSection-b1251a5a.js";import x from"./BackTo-7d4efde4.js";import{u as h}from"./useTranslation-f3f0dc05.js";import"./logo-5e7252b7.js";import"./index-c03c0b59.js";import"./id-410e5203.js";import"./react-responsive-e72b2278.js";function L(){const{t:o}=h(),{category:m}=n().props,{data:r,setData:i,post:l,processing:s,errors:y}=c({name:m.name||"",image:""});return t(f,{children:[e(x,{title:"back_to_list_category",link:"/admin/category"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(g,{title:"edit_category_title"}),t("form",{className:"flex flex-col gap-6",onSubmit:a=>{a.preventDefault(),l(route("category.update",m.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(p,{htmlFor:"name",value:o("form_label_name")})}),e("div",{className:"lg:w-4/5",children:e(u,{id:"name",name:"name",type:"text",value:r.name,className:"block w-full",isFocused:!0,onChange:a=>i("name",a.target.value)})})]}),e(d,{className:"w-fit",disabled:s,children:o("submit")})]})]})]})}export{L as default};