import{q as u,W as f,j as t,a as e}from"./app-69a25a5e.js";import{I as n}from"./InputLabel-109ce1cb.js";import{P as b}from"./PrimaryButton-7c111780.js";import{T as h}from"./TextInput-17d0a152.js";import{A as w}from"./AdminLayout-e141aab5.js";import g from"./TitleSection-7fd0cb71.js";import{A as v}from"./AdminSection-72e97085.js";import N from"./BackTo-cb26b33e.js";import{S as _}from"./SelectInput-6e0cbe3c.js";import{u as x}from"./useTranslation-33c16b92.js";import"./logo-5e7252b7.js";import"./index-e4881126.js";import"./id-410e5203.js";import"./react-responsive-d8f9ff71.js";function E(){const{t:i}=x(),{pre_option:a}=u().props,{data:o,setData:r,patch:m,processing:c,errors:s}=f({title:a.title||"",answer:a.answer||"no"}),p=l=>{l.preventDefault(),m(route("pre_option.update",a.id))},d=[{label:"No",value:"no"},{label:"Yes",value:"yes"}];return t(w,{children:[e(N,{title:"back_to_list_option",link:`/admin/pre-question/${a.pre_test_question_id}/pre-option`}),t(v,{className:"flex flex-col gap-6 mb-6",children:[e(g,{title:"edit_option_title"}),t("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:p,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(n,{htmlFor:"option",value:i("form_label_option")})}),t("div",{className:"lg:w-3/4",children:[e(h,{id:"title",name:"title",type:"text",value:o.title,className:"block w-full",isFocused:!0,onChange:l=>r("title",l.target.value)}),e("span",{className:"text-red-600",children:s.title})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(n,{htmlFor:"title",value:i("form_label_answer")})}),t("div",{className:"lg:w-3/4",children:[e(_,{id:"answer",name:"answer",value:o.answer,options:d,className:"w-full",onChange:l=>r("answer",l.target.value)}),e("span",{className:"text-red-600",children:s.answer})]})]}),e(b,{className:"w-fit",disabled:c,children:i("submit")})]})]})]})}export{E as default};