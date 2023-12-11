import{q as v,W as w,j as t,a as e}from"./app-8020c353.js";import{I as m}from"./InputLabel-b73a9280.js";import{B as k}from"./Button-d7a470d0.js";import{T as d}from"./TextInput-9e20f7d7.js";import{A as y}from"./AdminLayout-d52e4fa9.js";import u from"./TitleSection-0e73632e.js";import{A as i}from"./AdminSection-df17f326.js";import{T}from"./Table-1bfa46c0.js";import I from"./BackTo-96cd7e26.js";import{u as A}from"./useTranslation-b104940f.js";import"./logo-5e7252b7.js";import"./index-d2c3e273.js";import"./id-410e5203.js";import"./react-responsive-6dbe53f5.js";function G({post_question:p,module:s}){const{t:l}=A(),{flash:n}=v().props,{data:a,setData:r,post:b,processing:f,errors:c,reset:h}=w({question_no:"",question:""}),_=["Question No","Question","Module","Option","Action"],g=["question_no","question","module_id"],q=[{label:"add_post_test_option",link:"/admin/post-question/",link2:"/post-option",withId:!0}],N=[{label:"edit_button",link:"/admin/post-question/edit",withId:!0,color:"info"},{label:"delete_button",route:"post_test.destroy",withId:!0,color:"danger",type:"delete"}],x=o=>{o.preventDefault(),b(route("post_question.store",s.id),{onSuccess:()=>{h()}})};return t(y,{children:[e(I,{title:"back_to_list_module",link:"/admin/module"}),t(i,{className:"mb-6 flex items-center",children:[e("img",{src:"/storage/modules/"+(s==null?void 0:s.image),alt:s.title,className:"w-16 h-16 mr-4 object-cover rounded-lg"}),e("h4",{className:"font-bold text-lg",children:s.title})]}),t(i,{className:"flex flex-col gap-6 mb-6",children:[e(u,{title:"create_post_test_title"}),n.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:n.success})]}),t("form",{className:"lg:w-3/4 flex flex-col gap-6 w-full",onSubmit:x,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(m,{htmlFor:"question_no",value:l("form_label_question_no")})}),t("div",{className:"lg:w-3/4",children:[e(d,{id:"question_no",name:"question_no",type:"number",value:a.question_no,className:"block w-full",isFocused:!0,rows:8,onChange:o=>r("question_no",o.target.value)}),e("span",{className:"text-red-600",children:c.question_no})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(m,{htmlFor:"question",value:l("form_label_question")})}),t("div",{className:"lg:w-3/4",children:[e(d,{id:"question",name:"question",type:"text",typeForm:"textarea",rows:6,value:a.question,className:"block w-full",isFocused:!0,onChange:o=>r("question",o.target.value)}),e("span",{className:"text-red-600",children:c.title})]})]}),e(k,{color:"secondary",className:"w-fit",disabled:f,children:l("submit")})]})]}),t(i,{children:[e(u,{title:"list_post_test_title",className:"mb-5"}),e(T,{header:_,data:p,selectedData:g,tableButtons:q,tableActions:N,pathImage:"post_tests/"})]})]})}export{G as default};
