import{q as x,W as N,j as t,b as e}from"./app-b3e7b24a.js";import{I as y}from"./InputLabel-e9916b13.js";import{P as v}from"./PrimaryButton-f21c74b8.js";import{T}from"./TextInput-8038c63a.js";import{A as _}from"./AdminLayout-773546c1.js";import o from"./TitleSection-20d3c454.js";import{A as l}from"./AdminSection-ad67b7c2.js";import{T as A}from"./Table-83476f8f.js";import{u as w}from"./useTranslation-fabd3578.js";import"./logo-5e7252b7.js";import"./index-48a26c0a.js";import"./id-410e5203.js";import"./react-responsive-f4fa1de5.js";function E({category:n}){const{t:r}=w(),{flash:s}=x().props,{data:i,setData:c,post:m,processing:d,errors:p,reset:u}=N({name:""}),f=["Name","Action"],g=["name"],b=[{label:"edit_button",link:"/admin/category/edit",withId:!0,color:"info"}],h=a=>{a.preventDefault(),m(route("category.store"),{onSuccess:()=>{u()}})};return t(_,{children:[t(l,{className:"flex flex-col gap-6 mb-6",children:[e(o,{title:"create_category_title"}),s.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:s.success})]}),t("form",{className:"flex flex-col gap-6",onSubmit:h,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(y,{htmlFor:"name",value:r("form_label_name")})}),t("div",{className:"lg:w-4/5",children:[e(T,{id:"name",name:"name",type:"text",value:i.name,className:"block w-full",isFocused:!0,onChange:a=>c("name",a.target.value)}),e("span",{className:"text-red-600",children:p.name})]})]}),e(v,{color:"secondary",className:"w-fit",disabled:d,children:r("submit")})]})]}),t(l,{className:"flex flex-col gap-6",children:[e(o,{title:"list_category_title"}),e(A,{header:f,data:n,selectedData:g,tableActions:b,pathImage:"categories/"})]})]})}export{E as default};