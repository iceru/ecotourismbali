import{q as d,W as p,a as t,j as e}from"./app-9d038481.js";import{I as r}from"./InputLabel-1821e8c1.js";import{P as f}from"./PrimaryButton-a5401152.js";import{T as m}from"./TextInput-f827f223.js";import{A as _}from"./AdminLayout-4424db25.js";import q from"./TitleSection-ee006701.js";import{A as b}from"./id-fe319941.js";import h from"./BackTo-f560ada3.js";import{u as g}from"./useTranslation-ecbbedb5.js";import"./logo-5e7252b7.js";import"./index-9d6ee548.js";import"./react-responsive-17c05ceb.js";function B(){const{t:s}=g(),{pre_question:i}=d().props,{data:n,setData:a,patch:u,processing:c,errors:l}=p({question_no:i.question_no||"",question:i.question||""});return t(_,{children:[e(h,{title:"back_to_list_pre_test",link:"/admin/pre_question"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(q,{title:"edit_pre_test_title"}),t("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:o=>{o.preventDefault(),u(route("pre_question.update",i.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(r,{htmlFor:"question_no",value:s("form_label_question_no")})}),t("div",{className:"lg:w-3/4",children:[e(m,{id:"question_no",name:"question_no",type:"number",value:n.question_no,className:"block w-full",isFocused:!0,onChange:o=>a("question_no",o.target.value)}),e("span",{className:"text-red-600",children:l.question_no})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(r,{htmlFor:"question",value:s("form_label_question")})}),t("div",{className:"lg:w-3/4",children:[e(m,{id:"question",name:"question",type:"text",typeForm:"textarea",rows:6,value:n.question,className:"block w-full",isFocused:!0,onChange:o=>a("question",o.target.value)}),e("span",{className:"text-red-600",children:l.question})]})]}),e(f,{className:"w-fit",disabled:c,children:s("submit")})]})]})]})}export{B as default};
