import{q as u,W as f,j as e,a as t}from"./app-23f2fa96.js";import{I as n}from"./InputLabel-04739bb0.js";import{B as b}from"./Button-534be8b8.js";import{T as h}from"./TextInput-e9e5d2e5.js";import{A as w}from"./AdminLayout-c9606641.js";import g from"./TitleSection-fcafd505.js";import{A as v}from"./AdminSection-08fb6198.js";import _ from"./BackTo-aaef1cf5.js";import{S as N}from"./SelectInput-bbfbf3b9.js";import{u as x}from"./useTranslation-14eb7045.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./id-410e5203.js";import"./react-responsive-0978e57b.js";import"./index-25fc1de7.js";function P(){const{t:s}=x(),{post_option:a}=u().props,{data:o,setData:i,patch:m,processing:c,errors:r}=f({title:a.title||"",answer:a.answer||"no"}),p=l=>{l.preventDefault(),m(route("post_option.update",a.id))},d=[{label:"No",value:"no"},{label:"Yes",value:"yes"}];return e(w,{children:[t(_,{title:"back_to_list_option",link:`/admin/post-question/${a.post_test_question_id}/post-option`}),e(v,{className:"flex flex-col gap-6 mb-6",children:[t(g,{title:"edit_post_test_title"}),e("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:p,children:[e("div",{className:"block lg:flex items-center",children:[t("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:t(n,{htmlFor:"title",value:s("form_label_option")})}),e("div",{className:"lg:w-3/4",children:[t(h,{id:"title",name:"title",type:"text",value:o.title,className:"block w-full",isFocused:!0,onChange:l=>i("title",l.target.value)}),t("span",{className:"text-red-600",children:r.title})]})]}),e("div",{className:"block lg:flex items-center",children:[t("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:t(n,{htmlFor:"title",value:s("form_label_answer")})}),e("div",{className:"lg:w-3/4",children:[t(N,{id:"answer",name:"answer",value:o.answer,options:d,className:"w-full",onChange:l=>i("answer",l.target.value)}),t("span",{className:"text-red-600",children:r.answer})]})]}),t(b,{className:"w-fit",disabled:c,children:s("submit")})]})]})]})}export{P as default};
