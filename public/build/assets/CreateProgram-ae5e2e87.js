import{q as x,W as v,j as a,a as e}from"./app-cb8b64cf.js";import{I as i}from"./InputLabel-8bc9f7b1.js";import{B as _}from"./Button-d441ef7e.js";import{T as w}from"./TextInput-41a6eb6a.js";import{A as T}from"./AdminLayout-984accd9.js";import o from"./TitleSection-b56ad5ca.js";import{A as n}from"./AdminSection-6a333a96.js";import{T as A}from"./Table-632fe693.js";import{u as I}from"./useTranslation-736b70f5.js";import"./logo-5e7252b7.js";import"./index-70e2ddcc.js";import"./id-410e5203.js";import"./react-responsive-7d765fc3.js";function E({program:c}){const{t:l}=I(),{flash:r}=x().props,{data:d,setData:s,post:p,processing:g,errors:m,reset:f}=v({name:"",image:null}),u=["Name","Image","Action"],b=["name","image"],h=[{label:"edit_button",link:"/admin/program/edit",withId:!0,color:"info"}],N=t=>{t.preventDefault(),p(route("program.store"),{onSuccess:()=>{f()}})};return a(T,{children:[a(n,{className:"flex flex-col gap-6 mb-6",children:[e(o,{title:"create_program_title"}),r.success&&a("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:r.success})]}),a("form",{className:"flex flex-col gap-6",onSubmit:N,children:[a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(i,{htmlFor:"name",value:l("form_label_name")})}),a("div",{className:"lg:w-4/5",children:[e(w,{id:"name",name:"name",type:"text",value:d.name,className:"block w-full",isFocused:!0,onChange:t=>s("name",t.target.value)}),e("span",{className:"text-red-600",children:m.name})]})]}),a("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(i,{htmlFor:"image",value:l("form_label_image")})}),a("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image",id:"image",className:"block",onChange:t=>s("image",t.target.files[0])}),e("span",{className:"text-red-600",children:m.image})]})]}),e(_,{color:"secondary",className:"w-fit",disabled:g,children:l("submit")})]})]}),a(n,{className:"flex flex-col gap-6",children:[e(o,{title:"list_program_title"}),e(A,{header:u,data:c,selectedData:b,tableActions:h,pathImage:"programs/"})]})]})}export{E as default};
