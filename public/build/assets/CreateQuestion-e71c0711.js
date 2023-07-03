import{q as I,W as S,r as p,a as t,j as e}from"./app-9d038481.js";import{I as n}from"./InputLabel-1821e8c1.js";import{P as A}from"./PrimaryButton-a5401152.js";import{T as b}from"./TextInput-f827f223.js";import{A as C}from"./AdminLayout-4424db25.js";import h from"./TitleSection-ee006701.js";import{A as m}from"./id-fe319941.js";import{T as F}from"./Table-4cb937d6.js";import j from"./BackTo-f560ada3.js";import B from"./Editor-c4b0c29d.js";import{S as D}from"./SelectInput-b627f00a.js";import{u as E}from"./useTranslation-ecbbedb5.js";import"./logo-5e7252b7.js";import"./index-9d6ee548.js";import"./react-responsive-17c05ceb.js";function Y({assess_question:f,assessment:s}){const{t:o}=E(),{flash:d}=I().props,{data:r,setData:a,post:g,processing:N,errors:i,reset:v}=S({question_no:"",question:"",title:"",type:"radio"}),_=["Question No","Title","Question","Option","Action"],x=["question_no","title","question"],q=[{label:"add_option",link:"/admin/assessment/",link2:"/option",withId:!0}],w=[{label:"edit_button",link:"/admin/assessment/question/edit",withId:!0,color:"info"},{label:"delete_button",route:"assessment_question.destroy",withId:!0,color:"danger",type:"delete"}],y=l=>{l.preventDefault(),g(route("assessment_question.store",s.id),{onSuccess:()=>{v(),u("")}})},k=l=>"/storage/"+l,[c,u]=p.useState("");p.useEffect(()=>{a("question",c)},[c]);const T=[{label:"Radio Button",value:"radio"},{label:"Checkbox",value:"checkbox"}];return t(C,{children:[e(j,{title:"back_to_list_assessment",link:"/admin/assessment"}),t(m,{className:"mb-6 flex items-center",children:[e("img",{src:k("assessments/"+(s==null?void 0:s.image)),alt:s.title,className:"w-16 h-16 mr-4 object-cover rounded-lg"}),e("h4",{className:"font-bold text-lg",children:s.title})]}),t(m,{className:"flex flex-col gap-6 mb-6",children:[e(h,{title:"create_question_title"}),d.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:d.success})]}),t("form",{className:"flex flex-col gap-6",onSubmit:y,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"question_no",value:o("form_label_question_no")})}),t("div",{className:"lg:w-4/5",children:[e(b,{id:"question_no",name:"question_no",type:"number",value:r.question_no,className:"block w-full",isFocused:!0,min:"1",onChange:l=>a("question_no",l.target.value)}),e("span",{className:"text-red-600",children:i.question_no})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"title",value:o("form_label_title")})}),t("div",{className:"lg:w-4/5",children:[e(b,{id:"title",name:"title",type:"text",value:r.title,className:"block w-full",isFocused:!0,onChange:l=>a("title",l.target.value)}),e("span",{className:"text-red-600",children:i.title})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"type",value:o("form_label_type")})}),t("div",{className:"lg:w-4/5",children:[e(D,{id:"type",name:"type",value:r.type,options:T,className:"w-full",onChange:l=>a("type",l.target.value)}),e("span",{className:"text-red-600",children:i.type})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"question",value:o("form_label_question")})}),t("div",{className:"lg:w-4/5",children:[e(B,{onChange:u,value:c}),e("span",{className:"text-red-600",children:i.question})]})]}),e(A,{color:"secondary",className:"w-fit",disabled:N,children:o("submit")})]})]}),t(m,{className:"flex flex-col gap-6",children:[e(h,{title:"list_question_title"}),e(F,{header:_,data:f,selectedData:x,tableButtons:q,tableActions:w,descHtml:"question"})]})]})}export{Y as default};
