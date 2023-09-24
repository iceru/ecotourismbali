import{q as _,W as f,j as o,a as e}from"./app-37b7ff8d.js";import{I as m}from"./InputLabel-f53d2426.js";import{P as h}from"./PrimaryButton-1aeaa455.js";import{T as r}from"./TextInput-122e50ab.js";import{A as b}from"./AdminLayout-24f26c92.js";import g from"./TitleSection-49e46c01.js";import{A as v}from"./AdminSection-579874a6.js";import N from"./BackTo-94bf3254.js";import{u as x}from"./useTranslation-d2a496c2.js";import"./logo-5e7252b7.js";import"./index-e6cfef05.js";import"./id-410e5203.js";import"./react-responsive-479d81c8.js";function L(){const{t:n}=x(),{assessment_option:i,assessment_question:c,errors:l}=_().props,{data:s,setData:a,post:p,processing:d}=f({option_no:i.option_no||"",option:i.option||"",option_en:i.option_en||"",point:i.point||""}),u=t=>{t.preventDefault(),p(route("assessment_option.update",i.id))};return o(b,{children:[e(N,{title:"back_to_question",link:`/admin/assessment/${c.id}/question`}),o(v,{className:"flex flex-col gap-6 mb-6",children:[e(g,{title:"edit_assessment_title"}),o("form",{className:"flex flex-col gap-6",onSubmit:u,children:[o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"option_no",value:n("form_label_option_no")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"option_no",name:"option_no",type:"text",value:s.option_no,className:"block w-full",isFocused:!0,onChange:t=>a("option_no",t.target.value)}),e("span",{className:"text-red-600",children:l.option_no})]})]}),o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"option",value:n("form_label_option")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"option",name:"option",type:"text",value:s.option,className:"block w-full",isFocused:!0,onChange:t=>a("option",t.target.value)}),e("span",{className:"text-red-600",children:l.option})]})]}),o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"option_en",value:n("form_label_option_en")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"option_en",name:"option_en",type:"text",value:s.option_en,className:"block w-full",isFocused:!0,onChange:t=>a("option_en",t.target.value)}),e("span",{className:"text-red-600",children:l.option_en})]})]}),o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"point",value:n("form_label_point")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"point",name:"point",type:"text",value:s.point,className:"block w-full",isFocused:!0,onChange:t=>a("point",t.target.value)}),e("span",{className:"text-red-600",children:l.point})]})]}),e(h,{className:"w-fit",disabled:d,children:n("submit")})]})]})]})}export{L as default};