import{q as T,W as I,r,j as l,a as e,d as A}from"./app-cb8b64cf.js";import{I as n}from"./InputLabel-8bc9f7b1.js";import{B as D}from"./Button-d441ef7e.js";import{T as g}from"./TextInput-41a6eb6a.js";import{A as E}from"./AdminLayout-984accd9.js";import p from"./TitleSection-b56ad5ca.js";import{A as b}from"./AdminSection-6a333a96.js";import{T as B}from"./Table-632fe693.js";import{S as j}from"./SelectInput-a031b0c4.js";import h from"./Editor-c4bcd2d7.js";import{u as q}from"./useTranslation-736b70f5.js";import"./logo-5e7252b7.js";import"./index-70e2ddcc.js";import"./id-410e5203.js";import"./react-responsive-7d765fc3.js";function Y({assessment:_,business_type:f}){const{t}=q(),{flash:d}=T().props,{data:c,setData:a,post:N,processing:v,errors:i,reset:x}=I({title:"",title_en:"",description:"",description_en:"",image:null,image_en:null,business_type:null,logo:null}),w=["Title","Description","Image","Business Type","Question","Action"],y=["title","description","image","business_type_id"],k=[{label:"add_question",link:"/admin/assessment/",link2:"/question",withId:!0}],F=[{label:"edit_button",link:"/admin/assessment/edit",withId:!0,color:"info"}],C=s=>{s.preventDefault(),N(route("assessment.store"),{onSuccess:()=>{x(),u("")}})},[m,u]=r.useState(""),[o,S]=r.useState("");return r.useEffect(()=>{a("description",m)},[m]),r.useEffect(()=>{a("description_en",o)},[o]),l(E,{children:[l(b,{className:"flex flex-col gap-6 mb-6",children:[e(p,{title:"create_assessment_title"}),d.success&&l("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:d.success})]}),l("form",{className:" flex flex-col gap-6 w-full",onSubmit:C,children:[l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"title",value:t("form_label_title")})}),l("div",{className:"lg:w-4/5",children:[e(g,{id:"title",name:"title",type:"text",value:c.title,className:"block w-full",isFocused:!0,onChange:s=>a("title",s.target.value)}),e("span",{className:"text-red-600",children:i.title})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"title_en",value:t("form_label_title_en")})}),l("div",{className:"lg:w-4/5",children:[e(g,{id:"title_en",name:"title_en",type:"text",value:c.title_en,className:"block w-full",isFocused:!0,onChange:s=>a("title_en",s.target.value)}),e("span",{className:"text-red-600",children:i.title_en})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"description",value:t("form_label_description")})}),l("div",{className:"lg:w-4/5",children:[e(h,{onChange:u,value:m}),e("span",{className:"text-red-600",children:i.description})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"description_en",value:t("form_label_description_en")})}),l("div",{className:"lg:w-4/5",children:[e(h,{onChange:S,value:o}),e("span",{className:"text-red-600",children:i.description_en})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"business_type",value:t("form_label_business_type")})}),l("div",{className:"lg:w-4/5",children:[e(j,{id:"business_type",name:"business_type",value:c.business_type,options:f,placeholder:"select_business_type",className:"w-full",labelData:"name",valueData:"id",onChange:s=>a("business_type",s.target.value)}),e(A,{className:"mt-2 block text-sm text-primary font-semibold",href:route("business_type.index"),children:t("add_business_type")}),e("span",{className:"text-red-600",children:i.business_type})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"image",value:t("form_label_image")})}),l("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image",id:"image",className:"block",onChange:s=>a("image",s.target.files[0])}),e("span",{className:"text-red-600",children:i.image})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"image_en",value:t("form_label_image_en")})}),l("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image_en",id:"image_en",className:"block",onChange:s=>a("image_en",s.target.files[0])}),e("span",{className:"text-red-600",children:i.image_en})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"logo",value:t("form_label_logo")})}),l("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"logo",id:"logo",className:"block",onChange:s=>a("logo",s.target.files[0])}),e("span",{className:"text-red-600",children:i.logo})]})]}),e(D,{color:"secondary",className:"w-fit",disabled:v,children:t("submit")})]})]}),l(b,{children:[e(p,{title:"list_assessment_title",className:"mb-5"}),e(B,{header:w,data:_,selectedData:y,tableButtons:k,tableActions:F,descHtml:"description",pathImage:"assessments/"})]})]})}export{Y as default};
