import{q as x,W as N,j as t,a as e}from"./app-985c7907.js";import{I as _}from"./InputLabel-796633c2.js";import{B as y}from"./Button-74ae847b.js";import{T as v}from"./TextInput-c22d7f28.js";import{A as T}from"./AdminLayout-f626f81b.js";import l from"./TitleSection-64fd13b8.js";import{A as o}from"./AdminSection-ec47c0ce.js";import{T as A}from"./Table-1e8ba4ee.js";import"./SelectInput-0f139266.js";import{u as w}from"./useTranslation-42b99a75.js";import"./logo-5e7252b7.js";import"./index-033d355d.js";import"./id-410e5203.js";import"./react-responsive-955be2d4.js";function H({business_type:n}){const{t:a}=w(),{flash:r}=x().props,{data:i,setData:m,post:c,processing:d,errors:u,reset:p}=N({name:""}),b=["Name","Created At","Action"],f=["name","created_at"],h=[{label:"edit_button",link:"/admin/business-type/edit",withId:!0,color:"info"},{label:"delete_button",route:"business_type.destroy",withId:!0,color:"danger",type:"delete"}],g=s=>{s.preventDefault(),c(route("business_type.store"),{onSuccess:()=>{p()}})};return t(T,{children:[t(o,{className:"flex flex-col gap-6 mb-6",children:[e(l,{title:"create_business_title"}),r.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:r.success})]}),t("form",{className:"flex flex-col gap-6",onSubmit:g,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(_,{htmlFor:"name",value:a("form_label_name")})}),t("div",{className:"lg:w-4/5",children:[e(v,{id:"name",name:"name",type:"text",value:i.name,className:"block w-full",isFocused:!0,onChange:s=>m("name",s.target.value)}),e("span",{className:"text-red-600",children:u.name})]})]}),e(y,{color:"secondary",className:"w-fit",disabled:d,children:a("submit")})]})]}),t(o,{className:"flex flex-col gap-6",children:[e(l,{title:"list_business_title"}),e(A,{header:b,data:n,selectedData:f,tableActions:h})]})]})}export{H as default};