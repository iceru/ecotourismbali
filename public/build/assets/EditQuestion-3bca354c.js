import{q,W as x,r,a as t,j as e}from"./app-db44250e.js";import{I as o}from"./InputLabel-35a6e3b7.js";import{P as w}from"./PrimaryButton-0a49bfb6.js";import{T as d}from"./TextInput-ea0f6dac.js";import{A as y}from"./AdminLayout-0ce651fd.js";import k from"./TitleSection-8e0d6fe2.js";import{A as F}from"./id-e9b74207.js";import C from"./BackTo-12196f03.js";import p from"./Editor-760240d3.js";import{S as E}from"./SelectInput-71e56118.js";import{u as S}from"./useTranslation-8864365d.js";import"./logo-5e7252b7.js";import"./index-34ca1ca1.js";import"./react-responsive-f099bd76.js";function G(){const{t:a}=S(),{assess_question:l,assessment:_}=q().props,{data:m,setData:i,post:h,processing:f,errors:n}=x({question_no:l.question_no||"",title:l.title||"",title_en:l.title_en||"",type:l.type||"",question:l.question||"",question_en:l.question_en||""}),b=s=>{s.preventDefault(),h(route("assessment_question.update",l.id))},[c,v]=r.useState(l.question);r.useEffect(()=>{i("question",c)},[c]);const[u,g]=r.useState(l.question_en);r.useEffect(()=>{i("question_en",u)},[u]);const N=[{label:"Radio Button",value:"radio"},{label:"Checkbox",value:"checkbox"}];return t(y,{children:[e(C,{title:"back_to_question",link:`/admin/assessment/${_.id}/question`}),t(F,{className:"flex flex-col gap-6 mb-6",children:[e(k,{title:"edit_assessment_title"}),t("form",{className:"flex flex-col gap-6",onSubmit:b,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"question_no",value:a("form_label_question_no")})}),t("div",{className:"lg:w-4/5",children:[e(d,{id:"question_no",name:"question_no",type:"text",value:m.question_no,className:"block w-full",isFocused:!0,onChange:s=>i("question_no",s.target.value)}),e("span",{className:"text-red-600",children:n.question_no})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"title",value:a("form_label_title")})}),t("div",{className:"lg:w-4/5",children:[e(d,{id:"title",name:"title",type:"text",value:m.title,className:"block w-full",isFocused:!0,onChange:s=>i("title",s.target.value)}),e("span",{className:"text-red-600",children:n.title})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"title_en",value:a("form_label_title_en")})}),t("div",{className:"lg:w-4/5",children:[e(d,{id:"title_en",name:"title_en",type:"text",value:m.title_en,className:"block w-full",isFocused:!0,onChange:s=>i("title_en",s.target.value)}),e("span",{className:"text-red-600",children:n.title_en})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"type",value:a("form_label_type")})}),t("div",{className:"lg:w-4/5",children:[e(E,{id:"type",name:"type",value:m.type,options:N,className:"w-full",onChange:s=>i("type",s.target.value)}),e("span",{className:"text-red-600",children:n.type})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"question",value:a("form_label_question")})}),t("div",{className:"lg:w-4/5",children:[e(p,{onChange:v,value:c}),e("span",{className:"text-red-600",children:n.question})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"question_en",value:a("form_label_question_en")})}),t("div",{className:"lg:w-4/5",children:[e(p,{onChange:g,value:u}),e("span",{className:"text-red-600",children:n.question_en})]})]}),e(w,{className:"w-fit",disabled:f,children:a("submit")})]})]})]})}export{G as default};