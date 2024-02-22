import{q as I,W as A,r as c,j as t,a as e}from"./app-cb8b64cf.js";import{I as o}from"./InputLabel-8bc9f7b1.js";import{B as E}from"./Button-d441ef7e.js";import{T as u}from"./TextInput-41a6eb6a.js";import{A as B}from"./AdminLayout-984accd9.js";import g from"./TitleSection-b56ad5ca.js";import{A as h}from"./AdminSection-6a333a96.js";import{T as j}from"./Table-632fe693.js";import D from"./BackTo-28112e70.js";import f from"./Editor-c4bcd2d7.js";import{S as Q}from"./SelectInput-a031b0c4.js";import{u as L}from"./useTranslation-736b70f5.js";import"./logo-5e7252b7.js";import"./index-70e2ddcc.js";import"./id-410e5203.js";import"./react-responsive-7d765fc3.js";function ee({assess_question:_,assessment:a}){const{t:s}=L(),{flash:b}=I().props,{data:r,setData:i,post:v,processing:N,errors:n,reset:x}=A({question_no:"",question:"",question_en:"",title:"",title_en:"",type:"radio"}),q=["Question No","Title","Question","Option","Action"],w=["question_no","title","question"],k=[{label:"add_option",link:"/admin/assessment/",link2:"/option",withId:!0}],y=[{label:"edit_button",link:"/admin/assessment/question/edit",withId:!0,color:"info"},{label:"delete_button",route:"assessment_question.destroy",withId:!0,color:"danger",type:"delete"}],F=l=>{l.preventDefault(),v(route("assessment_question.store",a.id),{onSuccess:()=>{x(),p("")}})},S=l=>"/storage/"+l,[m,p]=c.useState(""),[d,T]=c.useState("");c.useEffect(()=>{i("question",m)},[m]),c.useEffect(()=>{i("question_en",d)},[d]);const C=[{label:"Radio Button",value:"radio"},{label:"Checkbox",value:"checkbox"}];return t(B,{children:[e(D,{title:"back_to_list_assessment",link:"/admin/assessment"}),t(h,{className:"mb-6 flex items-center",children:[e("img",{src:S("assessments/"+(a==null?void 0:a.image)),alt:a.title,className:"w-16 h-16 mr-4 object-cover rounded-lg"}),e("h4",{className:"font-bold text-lg",children:a.title})]}),t(h,{className:"flex flex-col gap-6 mb-6",children:[e(g,{title:"create_question_title"}),b.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:b.success})]}),t("form",{className:"flex flex-col gap-6",onSubmit:F,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"question_no",value:s("form_label_question_no")})}),t("div",{className:"lg:w-4/5",children:[e(u,{id:"question_no",name:"question_no",type:"number",value:r.question_no,className:"block w-full",isFocused:!0,min:"1",onChange:l=>i("question_no",l.target.value)}),e("span",{className:"text-red-600",children:n.question_no})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"title",value:s("form_label_title")})}),t("div",{className:"lg:w-4/5",children:[e(u,{id:"title",name:"title",type:"text",value:r.title,className:"block w-full",isFocused:!0,onChange:l=>i("title",l.target.value)}),e("span",{className:"text-red-600",children:n.title})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"title_en",value:s("form_label_title_en")})}),t("div",{className:"lg:w-4/5",children:[e(u,{id:"title_en",name:"title_en",type:"text",value:r.title_en,className:"block w-full",isFocused:!0,onChange:l=>i("title_en",l.target.value)}),e("span",{className:"text-red-600",children:n.title_en})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"type",value:s("form_label_type")})}),t("div",{className:"lg:w-4/5",children:[e(Q,{id:"type",name:"type",value:r.type,options:C,className:"w-full",onChange:l=>i("type",l.target.value)}),e("span",{className:"text-red-600",children:n.type})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"question",value:s("form_label_question")})}),t("div",{className:"lg:w-4/5",children:[e(f,{onChange:p,value:m}),e("span",{className:"text-red-600",children:n.question})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(o,{htmlFor:"question_en",value:s("form_label_question_en")})}),t("div",{className:"lg:w-4/5",children:[e(f,{onChange:T,value:d}),e("span",{className:"text-red-600",children:n.question_en})]})]}),e(E,{color:"secondary",className:"w-fit",disabled:N,children:s("submit")})]})]}),t(h,{className:"flex flex-col gap-6",children:[e(g,{title:"list_question_title"}),e(j,{header:q,data:_,selectedData:w,tableButtons:k,tableActions:y,descHtml:"question"})]})]})}export{ee as default};
