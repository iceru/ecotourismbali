import{q as d,W as c,j as i,a as e}from"./app-bc60d528.js";import{I as r}from"./InputLabel-699a1ae4.js";import{P as f}from"./PrimaryButton-39e90b5c.js";import{T as g}from"./TextInput-50b576a7.js";import{A as p}from"./AdminLayout-350b5d18.js";import u from"./TitleSection-5d3b5e3b.js";import{A as b}from"./AdminSection-5a7a602b.js";import v from"./BackTo-482f6114.js";import{u as h}from"./useTranslation-580ee314.js";import"./logo-5e7252b7.js";import"./index-bb3d874a.js";import"./id-410e5203.js";import"./react-responsive-232405c3.js";function L(){const{t}=h(),{badge:m}=d().props,{data:o,setData:l,post:s,processing:n,errors:_}=c({name:m.name||"",image:""});return i(p,{children:[e(v,{title:"back_to_list_verified_badge",link:"/admin/verified-badge"}),i(b,{className:"flex flex-col gap-6 mb-6",children:[e(u,{title:"edit_verified_badge_title"}),i("form",{className:"flex flex-col gap-6",onSubmit:a=>{a.preventDefault(),s(route("verified_badge.update",m.id))},children:[i("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"name",value:t("form_label_name")})}),e("div",{className:"lg:w-4/5",children:e(g,{id:"name",name:"name",type:"text",value:o.name,className:"block w-full",isFocused:!0,onChange:a=>l("name",a.target.value)})})]}),i("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"image",value:t("form_label_image")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"image",id:"image",onChange:a=>l("image",a.target.files[0])})})]}),e(f,{className:"w-fit",disabled:n,children:t("submit")})]})]})]})}export{L as default};