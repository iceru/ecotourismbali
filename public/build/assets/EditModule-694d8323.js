import{q as N,W as _,r as o,j as t,a as e}from"./app-23f2fa96.js";import{I as s}from"./InputLabel-04739bb0.js";import{B as x}from"./Button-534be8b8.js";import{T as u}from"./TextInput-e9e5d2e5.js";import{A as w}from"./AdminLayout-c9606641.js";import k from"./TitleSection-fcafd505.js";import{A as F}from"./AdminSection-08fb6198.js";import y from"./BackTo-aaef1cf5.js";import h from"./Editor-1f98a85b.js";import{u as C}from"./useTranslation-14eb7045.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./id-410e5203.js";import"./react-responsive-0978e57b.js";import"./index-25fc1de7.js";import"./index-eb13ea1c.js";function K(){const{t:a}=C(),{module:i}=N().props,{data:c,setData:n,post:g,processing:v,errors:m}=_({title:i.title||"",description:i.description||"",content:i.content||"",content_en:i.content_en||"",video:i.video||"",author:i.author||"",image:"",attachment:""}),p=l=>{l.preventDefault(),g(route("module.update",i.id))},[r,f]=o.useState(i.content),[d,b]=o.useState(i.content_en);return o.useEffect(()=>{n("content",r)},[r]),o.useEffect(()=>{n("content_en",d)},[d]),t(w,{children:[e(y,{title:"back_to_list_module",link:"/admin/module"}),t(F,{className:"flex flex-col gap-6 mb-6",children:[e(k,{title:"edit_module_title"}),t("form",{className:"lg:w-3/4 flex flex-col gap-6",onSubmit:p,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"title",value:a("form_label_title")})}),e("div",{className:"lg:w-3/4",children:e(u,{id:"title",name:"title",type:"text",value:c.title,className:"block w-full",isFocused:!0,onChange:l=>n("title",l.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"description",value:a("form_label_description")})}),e("div",{className:"lg:w-3/4",children:e(u,{id:"description",name:"description",type:"text",typeForm:"textarea",value:c.description,className:"block w-full",isFocused:!0,onChange:l=>n("description",l.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"content",value:a("form_label_content")})}),t("div",{className:"lg:w-3/4",children:[e(h,{onChange:f,value:r}),e("span",{className:"text-red-600",children:m.content})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"content",value:a("form_label_content_en")})}),t("div",{className:"lg:w-3/4",children:[e(h,{onChange:b,value:d}),e("span",{className:"text-red-600",children:m.content_en})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"author",value:a("form_label_author")})}),e("div",{className:"lg:w-3/4",children:e(u,{id:"author",name:"author",type:"text",value:c.author,className:"block w-full",isFocused:!0,onChange:l=>n("author",l.target.value)})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"image",value:a("form_label_image")})}),e("div",{className:"lg:w-3/4",children:e("input",{type:"file",name:"image",id:"image",onChange:l=>n("image",l.target.files[0])})})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"video",value:a("form_label_video")})}),t("div",{className:"lg:w-3/4",children:[e("input",{type:"file",name:"video",id:"video",className:"block",onChange:l=>n("video",l.target.files[0])}),e("span",{className:"text-red-600",children:m.video})]})]}),t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/4 mb-2 lg:mb-0",children:e(s,{htmlFor:"attachment",value:a("form_label_attachment")})}),e("div",{className:"lg:w-3/4",children:e("input",{type:"file",name:"attachment",id:"attachment",onChange:l=>n("attachment",l.target.files[0])})})]}),e(x,{className:"w-fit",disabled:v,children:a("submit")})]})]})]})}export{K as default};
