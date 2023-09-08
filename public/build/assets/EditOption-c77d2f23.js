import{q as _,W as f,j as o,b as e}from"./app-0823dc15.js";import{I as m}from"./InputLabel-9fef5e1f.js";import{P as b}from"./PrimaryButton-69d7815a.js";import{T as r}from"./TextInput-bf51fc49.js";import{A as h}from"./AdminLayout-2ba072fa.js";import g from"./TitleSection-9937d85c.js";import{A as v}from"./AdminSection-771080e2.js";import N from"./BackTo-8c2ef4ce.js";import{u as x}from"./useTranslation-a6e517c4.js";import"./logo-5e7252b7.js";import"./index-9a5202b6.js";import"./id-410e5203.js";import"./react-responsive-970fc0f0.js";function L(){const{t:n}=x(),{assessment_option:i,assessment_question:c,errors:l}=_().props,{data:s,setData:a,post:p,processing:d}=f({option_no:i.option_no||"",option:i.option||"",option_en:i.option_en||"",point:i.point||""}),u=t=>{t.preventDefault(),p(route("assessment_option.update",i.id))};return o(h,{children:[e(N,{title:"back_to_question",link:`/admin/assessment/${c.id}/question`}),o(v,{className:"flex flex-col gap-6 mb-6",children:[e(g,{title:"edit_assessment_title"}),o("form",{className:"flex flex-col gap-6",onSubmit:u,children:[o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"option_no",value:n("form_label_option_no")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"option_no",name:"option_no",type:"text",value:s.option_no,className:"block w-full",isFocused:!0,onChange:t=>a("option_no",t.target.value)}),e("span",{className:"text-red-600",children:l.option_no})]})]}),o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"option",value:n("form_label_option")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"option",name:"option",type:"text",value:s.option,className:"block w-full",isFocused:!0,onChange:t=>a("option",t.target.value)}),e("span",{className:"text-red-600",children:l.option})]})]}),o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"option_en",value:n("form_label_option_en")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"option_en",name:"option_en",type:"text",value:s.option_en,className:"block w-full",isFocused:!0,onChange:t=>a("option_en",t.target.value)}),e("span",{className:"text-red-600",children:l.option_en})]})]}),o("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"point",value:n("form_label_point")})}),o("div",{className:"lg:w-4/5",children:[e(r,{id:"point",name:"point",type:"text",value:s.point,className:"block w-full",isFocused:!0,onChange:t=>a("point",t.target.value)}),e("span",{className:"text-red-600",children:l.point})]})]}),e(b,{className:"w-fit",disabled:d,children:n("submit")})]})]})]})}export{L as default};