import{q as d,W as p,j as t,a as e}from"./app-8020c353.js";import{I as r}from"./InputLabel-b73a9280.js";import{B as f}from"./Button-d7a470d0.js";import{T as m}from"./TextInput-9e20f7d7.js";import{A as _}from"./AdminLayout-d52e4fa9.js";import q from"./TitleSection-0e73632e.js";import{A as b}from"./AdminSection-df17f326.js";import h from"./BackTo-96cd7e26.js";import{u as g}from"./useTranslation-b104940f.js";import"./logo-5e7252b7.js";import"./index-d2c3e273.js";import"./id-410e5203.js";import"./react-responsive-6dbe53f5.js";function D(){const{t:s}=g(),{post_question:i}=d().props,{data:n,setData:l,patch:u,processing:c,errors:a}=p({question_no:i.question_no||"",question:i.question||""});return t(_,{children:[e(h,{title:"back_to_list_post_test",link:"/admin/post_question"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(q,{title:"edit_post_test_title"}),t("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:o=>{o.preventDefault(),u(route("post_question.update",i.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(r,{htmlFor:"question_no",value:s("form_label_question_no")})}),t("div",{className:"lg:w-3/4",children:[e(m,{id:"question_no",name:"question_no",type:"number",value:n.question_no,className:"block w-full",isFocused:!0,onChange:o=>l("question_no",o.target.value)}),e("span",{className:"text-red-600",children:a.question_no})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(r,{htmlFor:"question",value:s("form_label_question")})}),t("div",{className:"lg:w-3/4",children:[e(m,{id:"question",name:"question",type:"text",typeForm:"textarea",rows:6,value:n.question,className:"block w-full",isFocused:!0,onChange:o=>l("question",o.target.value)}),e("span",{className:"text-red-600",children:a.question})]})]}),e(f,{className:"w-fit",disabled:c,children:s("submit")})]})]})]})}export{D as default};
