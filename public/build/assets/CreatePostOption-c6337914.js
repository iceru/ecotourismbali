import{q as v,W as _,j as t,a as e}from"./app-cb8b64cf.js";import{I as c}from"./InputLabel-8bc9f7b1.js";import{B as T}from"./Button-d441ef7e.js";import{T as k}from"./TextInput-41a6eb6a.js";import{A as y}from"./AdminLayout-984accd9.js";import m from"./TitleSection-b56ad5ca.js";import{A as o}from"./AdminSection-6a333a96.js";import{T as A}from"./Table-632fe693.js";import S from"./BackTo-28112e70.js";import{S as I}from"./SelectInput-a031b0c4.js";import{u as C}from"./useTranslation-736b70f5.js";import"./logo-5e7252b7.js";import"./index-70e2ddcc.js";import"./id-410e5203.js";import"./react-responsive-7d765fc3.js";function J({post_option:d,post_question:a}){const{t:s}=C(),{flash:r}=v().props,{data:p,setData:i,post:u,processing:b,errors:n,reset:f}=_({title:"",answer:"no"}),h=["Option","Answer","Action"],g=["title","answer"],N=[{label:"edit_button",link:"/admin/post-option/edit",withId:!0,color:"info"},{label:"delete_button",route:"post_option.destroy",withId:!0,color:"danger",type:"delete"}],w=l=>{l.preventDefault(),u(route("post_option.store",a.id),{onSuccess:()=>{f()}})},x=[{label:"No",value:"no"},{label:"Yes",value:"yes"}];return t(y,{children:[e(S,{title:"back_to_question",link:`/admin/module/${a.module_id}/post-question`}),e(o,{className:"mb-6",children:t("h4",{className:"font-bold text-lg",children:[a.question_no,". ",a.question]})}),t(o,{className:"flex flex-col gap-6 mb-6",children:[e(m,{title:"create_option_title"}),r.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:r.success})]}),t("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:w,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(c,{htmlFor:"title",value:s("form_label_option")})}),t("div",{className:"lg:w-3/4",children:[e(k,{id:"title",name:"title",type:"text",value:p.title,className:"block w-full",isFocused:!0,onChange:l=>i("title",l.target.value)}),e("span",{className:"text-red-600",children:n.title})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(c,{htmlFor:"title",value:s("form_label_answer")})}),t("div",{className:"lg:w-3/4",children:[e(I,{id:"answer",name:"answer",options:x,className:"w-full",onChange:l=>i("answer",l.target.value)}),e("span",{className:"text-red-600",children:n.answer})]})]}),e(T,{color:"secondary",className:"w-fit",disabled:b,children:s("submit")})]})]}),t(o,{addClass:"flex flex-col gap-6",children:[e(m,{title:"list_option_title",className:"mb-6"}),e(A,{header:h,data:d,tableActions:N,selectedData:g})]})]})}export{J as default};