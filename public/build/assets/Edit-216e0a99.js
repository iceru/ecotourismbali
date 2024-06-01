import{q as h,W as g,j as l,a as e}from"./app-23f2fa96.js";import{I as r}from"./InputLabel-04739bb0.js";import{B as p}from"./Button-534be8b8.js";import{T as o}from"./TextInput-e9e5d2e5.js";import{A as v}from"./AdminLayout-c9606641.js";import f from"./TitleSection-fcafd505.js";import{A as N}from"./AdminSection-08fb6198.js";import _ from"./BackTo-aaef1cf5.js";import{S as y}from"./SelectInput-bbfbf3b9.js";import{u as x}from"./useTranslation-14eb7045.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./id-410e5203.js";import"./react-responsive-0978e57b.js";import"./index-25fc1de7.js";function W(){const{t:m}=x(),{member:s}=h().props,{data:t,setData:n,post:c,processing:d,errors:i}=g({name:s.name||"",business_name:s.business_name||"",email:s.email||"",phone:s.phone||"",member_only:s.member_only||"",category:s.category||""}),u=a=>{a.preventDefault(),c(route("admin.member_tourism.update",s.id))},b=[{label:"Yes",value:"yes"},{label:"No",value:"no"}];return l(v,{children:[e(_,{title:"back_to_list_tourism_collective",link:route("admin.member_tourism.index")}),l(N,{className:"flex flex-col gap-6 mb-6",children:[e(f,{title:"edit_tourism_title"}),l("form",{className:"flex flex-col gap-6",onSubmit:u,children:[l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"name",value:m("form_label_name")})}),l("div",{className:"lg:w-4/5",children:[e(o,{id:"name",name:"name",type:"text",value:t.name,className:"block w-full",isFocused:!0,onChange:a=>n("name",a.target.value)}),e("span",{className:"text-red-600",children:i.name})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"business_name",value:m("business_name")})}),l("div",{className:"lg:w-4/5",children:[e(o,{id:"business_name",name:"business_name",type:"text",value:t.business_name,className:"block w-full",isFocused:!0,onChange:a=>n("business_name",a.target.value)}),e("span",{className:"text-red-600",children:i.business_name})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"email",value:m("form_label_email")})}),l("div",{className:"lg:w-4/5",children:[e(o,{id:"email",name:"email",type:"email",value:t.email,className:"block w-full",isFocused:!0,onChange:a=>n("email",a.target.value)}),e("span",{className:"text-red-600",children:i.email})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"phone",value:m("phone")})}),l("div",{className:"lg:w-4/5",children:[e(o,{id:"phone",name:"phone",type:"text",value:t.phone,className:"block w-full",isFocused:!0,onChange:a=>n("phone",a.target.value)}),e("span",{className:"text-red-600",children:i.phone})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"category",value:m("category")})}),l("div",{className:"lg:w-4/5",children:[e(o,{id:"category",name:"category",type:"text",value:t.category,className:"block w-full",isFocused:!0,onChange:a=>n("category",a.target.value)}),e("span",{className:"text-red-600",children:i.category})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"member_only",value:m("form_label_member_only")})}),l("div",{className:"lg:w-4/5",children:[e(y,{id:"member_only",name:"member_only",value:t.member_only,options:b,className:"w-full",onChange:a=>n("member_only",a.target.value)}),e("span",{className:"text-red-600",children:i.member_only})]})]}),e(p,{color:"secondary",className:"w-fit",disabled:d,children:m("submit")})]})]})]})}export{W as default};
