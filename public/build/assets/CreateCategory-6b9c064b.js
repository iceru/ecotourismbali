import{q as x,W as N,j as t,a as e}from"./app-bc60d528.js";import{I as y}from"./InputLabel-699a1ae4.js";import{P as v}from"./PrimaryButton-39e90b5c.js";import{T}from"./TextInput-50b576a7.js";import{A as _}from"./AdminLayout-350b5d18.js";import o from"./TitleSection-5d3b5e3b.js";import{A as l}from"./AdminSection-5a7a602b.js";import{T as A}from"./Table-2dba1ea7.js";import{u as w}from"./useTranslation-580ee314.js";import"./logo-5e7252b7.js";import"./index-bb3d874a.js";import"./id-410e5203.js";import"./react-responsive-232405c3.js";function E({category:n}){const{t:r}=w(),{flash:s}=x().props,{data:i,setData:c,post:m,processing:d,errors:p,reset:u}=N({name:""}),f=["Name","Action"],g=["name"],b=[{label:"edit_button",link:"/admin/category/edit",withId:!0,color:"info"}],h=a=>{a.preventDefault(),m(route("category.store"),{onSuccess:()=>{u()}})};return t(_,{children:[t(l,{className:"flex flex-col gap-6 mb-6",children:[e(o,{title:"create_category_title"}),s.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:s.success})]}),t("form",{className:"flex flex-col gap-6",onSubmit:h,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(y,{htmlFor:"name",value:r("form_label_name")})}),t("div",{className:"lg:w-4/5",children:[e(T,{id:"name",name:"name",type:"text",value:i.name,className:"block w-full",isFocused:!0,onChange:a=>c("name",a.target.value)}),e("span",{className:"text-red-600",children:p.name})]})]}),e(v,{color:"secondary",className:"w-fit",disabled:d,children:r("submit")})]})]}),t(l,{className:"flex flex-col gap-6",children:[e(o,{title:"list_category_title"}),e(A,{header:f,data:n,selectedData:g,tableActions:b,pathImage:"categories/"})]})]})}export{E as default};