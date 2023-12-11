import{q as N,W as v,j as t,a as e}from"./app-5781d102.js";import{I as n}from"./InputLabel-9c46cc8a.js";import{B as w}from"./Button-a7635336.js";import{T as m}from"./TextInput-38bedd68.js";import{A as _}from"./AdminLayout-eb43d7bb.js";import o from"./TitleSection-ccd87c4b.js";import{A as d}from"./AdminSection-7bb97519.js";import{T as y}from"./Table-b4b24356.js";import{u as k}from"./useTranslation-08f3d0e1.js";import"./logo-5e7252b7.js";import"./index-ba9fe3af.js";import"./id-410e5203.js";import"./react-responsive-d2fe5336.js";function G({announcement:u}){const{t:a}=k(),{flash:r}=N().props,{data:c,setData:i,post:f,processing:g,errors:s,reset:T}=v({title:"",text:"",images:null,file:null,category:"announcements"}),p=["Title","Text","Action"],h=["title","text"],b=[{label:"edit_button",link:"/admin/announcement/edit",withId:!0,color:"info"},{label:"delete_button",route:"announcement.destroy",withId:!0,color:"danger",type:"delete"}],x=l=>{l.preventDefault(),f(route("announcement.store"),{onSuccess:()=>{i({title:"",text:"",images:null,file:null})}})};return t(_,{children:[t(d,{className:"flex flex-col gap-6 mb-6",children:[e(o,{title:"create_announcement_title"}),r.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:r.success})]}),t("form",{className:"flex flex-col gap-6",onSubmit:x,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"title",value:a("form_label_title")})}),t("div",{className:"lg:w-4/5",children:[e(m,{id:"title",name:"title",type:"text",value:c.title,className:"block w-full",isFocused:!0,onChange:l=>i("title",l.target.value)}),e("span",{className:"text-red-600",children:s.title})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"text",value:a("form_label_text")})}),t("div",{className:"lg:w-4/5",children:[e(m,{id:"text",typeForm:"textArea",type:"text",name:"text",value:c.text,className:"block w-full",isFocused:!0,onChange:l=>i("text",l.target.value)}),e("span",{className:"text-red-600",children:s.text})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"image",value:a("form_label_image")})}),t("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image",multiple:!0,id:"image",className:"block",onChange:l=>i("image",l.target.files)}),e("span",{className:"text-red-600",children:s.image})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(n,{htmlFor:"file",value:a("form_label_file")})}),t("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"file",id:"file",className:"block",onChange:l=>i("file",l.target.files[0])}),e("span",{className:"text-red-600",children:s.file})]})]}),e(w,{color:"secondary",className:"w-fit",disabled:g,children:a("submit")})]})]}),t(d,{className:"flex flex-col gap-6",children:[e(o,{title:"list_announcement"}),e(y,{header:p,data:u,selectedData:h,tableActions:b,pathImage:"threads/images/"})]})]})}export{G as default};