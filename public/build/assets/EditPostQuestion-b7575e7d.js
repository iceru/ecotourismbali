import{q as d,W as p,j as t,a as e}from"./app-23f2fa96.js";import{I as r}from"./InputLabel-04739bb0.js";import{B as f}from"./Button-534be8b8.js";import{T as m}from"./TextInput-e9e5d2e5.js";import{A as _}from"./AdminLayout-c9606641.js";import q from"./TitleSection-fcafd505.js";import{A as b}from"./AdminSection-08fb6198.js";import h from"./BackTo-aaef1cf5.js";import{u as g}from"./useTranslation-14eb7045.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./id-410e5203.js";import"./react-responsive-0978e57b.js";import"./index-25fc1de7.js";function L(){const{t:s}=g(),{post_question:i}=d().props,{data:n,setData:l,patch:u,processing:c,errors:a}=p({question_no:i.question_no||"",question:i.question||""});return t(_,{children:[e(h,{title:"back_to_list_post_test",link:"/admin/post_question"}),t(b,{className:"flex flex-col gap-6 mb-6",children:[e(q,{title:"edit_post_test_title"}),t("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:o=>{o.preventDefault(),u(route("post_question.update",i.id))},children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(r,{htmlFor:"question_no",value:s("form_label_question_no")})}),t("div",{className:"lg:w-3/4",children:[e(m,{id:"question_no",name:"question_no",type:"number",value:n.question_no,className:"block w-full",isFocused:!0,onChange:o=>l("question_no",o.target.value)}),e("span",{className:"text-red-600",children:a.question_no})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(r,{htmlFor:"question",value:s("form_label_question")})}),t("div",{className:"lg:w-3/4",children:[e(m,{id:"question",name:"question",type:"text",typeForm:"textarea",rows:6,value:n.question,className:"block w-full",isFocused:!0,onChange:o=>l("question",o.target.value)}),e("span",{className:"text-red-600",children:a.question})]})]}),e(f,{className:"w-fit",disabled:c,children:s("submit")})]})]})]})}export{L as default};
