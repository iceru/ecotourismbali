import{q as u,W as f,j as e,b as t}from"./app-0823dc15.js";import{I as n}from"./InputLabel-9fef5e1f.js";import{P as b}from"./PrimaryButton-69d7815a.js";import{T as h}from"./TextInput-bf51fc49.js";import{A as w}from"./AdminLayout-2ba072fa.js";import g from"./TitleSection-9937d85c.js";import{A as v}from"./AdminSection-771080e2.js";import _ from"./BackTo-8c2ef4ce.js";import{S as N}from"./SelectInput-3abfb7eb.js";import{u as x}from"./useTranslation-a6e517c4.js";import"./logo-5e7252b7.js";import"./index-9a5202b6.js";import"./id-410e5203.js";import"./react-responsive-970fc0f0.js";function E(){const{t:s}=x(),{post_option:a}=u().props,{data:o,setData:i,patch:m,processing:c,errors:r}=f({title:a.title||"",answer:a.answer||"no"}),p=l=>{l.preventDefault(),m(route("post_option.update",a.id))},d=[{label:"No",value:"no"},{label:"Yes",value:"yes"}];return e(w,{children:[t(_,{title:"back_to_list_option",link:`/admin/post-question/${a.post_test_question_id}/post-option`}),e(v,{className:"flex flex-col gap-6 mb-6",children:[t(g,{title:"edit_post_test_title"}),e("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:p,children:[e("div",{className:"block lg:flex items-center",children:[t("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:t(n,{htmlFor:"title",value:s("form_label_option")})}),e("div",{className:"lg:w-3/4",children:[t(h,{id:"title",name:"title",type:"text",value:o.title,className:"block w-full",isFocused:!0,onChange:l=>i("title",l.target.value)}),t("span",{className:"text-red-600",children:r.title})]})]}),e("div",{className:"block lg:flex items-center",children:[t("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:t(n,{htmlFor:"title",value:s("form_label_answer")})}),e("div",{className:"lg:w-3/4",children:[t(N,{id:"answer",name:"answer",value:o.answer,options:d,className:"w-full",onChange:l=>i("answer",l.target.value)}),t("span",{className:"text-red-600",children:r.answer})]})]}),t(b,{className:"w-fit",disabled:c,children:s("submit")})]})]})]})}export{E as default};