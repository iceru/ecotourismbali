import{q as N,W as _,r as c,j as t,a as e}from"./app-564aa5bf.js";import{I as s}from"./InputLabel-de2defdc.js";import{B as x}from"./Button-5c6aa829.js";import{T as u}from"./TextInput-2c4353c1.js";import{A as w}from"./AdminLayout-90595167.js";import k from"./TitleSection-3bafae38.js";import{A as F}from"./AdminSection-6264d2fc.js";import y from"./BackTo-0dedf293.js";import h from"./Editor-9729743c.js";import{u as C}from"./useTranslation-b7c2539f.js";import"./logo-5e7252b7.js";import"./index-d6d3d862.js";import"./id-410e5203.js";import"./react-responsive-1f42f9ff.js";function H(){const{t:a}=C(),{module:i}=N().props,{data:o,setData:n,post:g,processing:v,errors:m}=_({title:i.title||"",description:i.description||"",content:i.content||"",content_en:i.content_en||"",video:i.video||"",author:i.author||"",image:"",attachment:""}),f=l=>{l.preventDefault(),g(route("module.update",i.id))},[r,p]=c.useState(i.content),[d,b]=c.useState(i.content_en);return c.useEffect(()=>{n("content",r)},[r]),c.useEffect(()=>{n("content_en",d)},[d]),t(w,{children:[e(y,{title:"back_to_list_module",link:"/admin/module"}),t(F,{className:"flex flex-col gap-6 mb-6",children:[e(k,{title:"edit_module_title"}),t("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:f,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"title",value:a("form_label_title")})}),e("div",{className:"lg:w-3/4",children:e(u,{id:"title",name:"title",type:"text",value:o.title,className:"block w-full",isFocused:!0,onChange:l=>n("title",l.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"description",value:a("form_label_description")})}),e("div",{className:"lg:w-3/4",children:e(u,{id:"description",name:"description",type:"text",typeForm:"textarea",value:o.description,className:"block w-full",isFocused:!0,onChange:l=>n("description",l.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"content",value:a("form_label_content")})}),t("div",{className:"lg:w-3/4",children:[e(h,{onChange:p,value:r}),e("span",{className:"text-red-600",children:m.content})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"content",value:a("form_label_content_en")})}),t("div",{className:"lg:w-3/4",children:[e(h,{onChange:b,value:d}),e("span",{className:"text-red-600",children:m.content_en})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"author",value:a("form_label_author")})}),e("div",{className:"lg:w-3/4",children:e(u,{id:"author",name:"author",type:"text",value:o.author,className:"block w-full",isFocused:!0,onChange:l=>n("author",l.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"image",value:a("form_label_image")})}),e("div",{className:"lg:w-3/4",children:e("input",{type:"file",name:"image",id:"image",onChange:l=>n("image",l.target.files[0])})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"video",value:a("form_label_video")})}),t("div",{className:"lg:w-3/4",children:[e("input",{type:"file",name:"video",id:"video",className:"block",onChange:l=>n("video",l.target.files[0])}),e("span",{className:"text-red-600",children:m.video})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"attachment",value:a("form_label_attachment")})}),e("div",{className:"lg:w-3/4",children:e("input",{type:"file",name:"attachment",id:"attachment",onChange:l=>n("attachment",l.target.files[0])})})]}),e(x,{className:"w-fit",disabled:v,children:a("submit")})]})]})]})}export{H as default};
