import{q as x,W as y,a as t,j as e}from"./app-da2b4d6b.js";import{I as N}from"./InputLabel-d7d41ab5.js";import{P as v}from"./PrimaryButton-6f4168ef.js";import{T as _}from"./TextInput-6bcfce90.js";import{A as T}from"./AdminLayout-3de233b1.js";import s from"./TitleSection-a691e8fb.js";import{A as l}from"./id-22a42304.js";import{T as w}from"./Table-7638f9b4.js";import{u as A}from"./useTranslation-6e77fdb0.js";import"./logo-5e7252b7.js";import"./index-d5035ee9.js";import"./react-responsive-7d4260b1.js";function z({category:n}){const{t:r}=A(),{flash:o}=x().props,{data:c,setData:i,post:m,processing:d,errors:p,reset:u}=y({name:""}),f=["Name","Action"],g=["name"],b=[{label:"edit_button",link:"/admin/category/edit",withId:!0,color:"info"},{label:"delete_button",route:"category.destroy",withId:!0,color:"danger",type:"delete"}],h=a=>{a.preventDefault(),m(route("category.store"),{onSuccess:()=>{u()}})};return t(T,{children:[t(l,{className:"flex flex-col gap-6 mb-6",children:[e(s,{title:"create_category_title"}),o.success&&t("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:o.success})]}),t("form",{className:"flex flex-col gap-6",onSubmit:h,children:[t("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(N,{htmlFor:"name",value:r("form_label_name")})}),t("div",{className:"lg:w-4/5",children:[e(_,{id:"name",name:"name",type:"text",value:c.name,className:"block w-full",isFocused:!0,onChange:a=>i("name",a.target.value)}),e("span",{className:"text-red-600",children:p.name})]})]}),e(v,{color:"secondary",className:"w-fit",disabled:d,children:r("submit")})]})]}),t(l,{className:"flex flex-col gap-6",children:[e(s,{title:"list_category_title"}),e(w,{header:f,data:n,selectedData:g,tableActions:b,pathImage:"categories/"})]})]})}export{z as default};