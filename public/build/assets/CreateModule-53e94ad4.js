import{q as F,r as u,W as I,a as l,j as e}from"./app-ec926d45.js";import{I as r}from"./InputLabel-778dbcd6.js";import{P as T}from"./PrimaryButton-e54df03b.js";import{T as c}from"./TextInput-94c0d4d3.js";import{A as C}from"./AdminLayout-5973a2a2.js";import h from"./TitleSection-0acfe6ce.js";import{A as g}from"./id-27caf04a.js";import{T as A}from"./Table-d7320424.js";import S from"./Editor-e57d190e.js";import{u as E}from"./useTranslation-b5e28bbd.js";import"./logo-5e7252b7.js";import"./index-bf5ac93c.js";import"./react-responsive-7f1d1ff8.js";function K({module:b}){const{t:a}=E(),{flash:m}=F().props,[o,d]=u.useState(""),{data:n,setData:s,post:p,processing:f,errors:i,reset:v}=I({title:"",description:"",image:null,content:null,video:"",attachment:null,author:""}),N=["Title","Image","Author","Post Test","Pre Test","Action"],w=["title","image","author"],x=[{label:"add_pre_test",link:"/admin/module/",link2:"/pre-question",withId:!0},{label:"add_post_test",link:"/admin/module/",link2:"/post-question",withId:!0}],_=[{label:"edit_button",link:"/admin/module/edit",withId:!0,color:"info"},{label:"show_button",link:"/admin/module/show",withId:!0,color:"show"},{label:"delete_button",route:"module.destroy",withId:!0,color:"danger",type:"delete"}],k=t=>{t.preventDefault(),p(route("module.store"),{onSuccess:()=>{v(),d()},onError:y=>{console.log(y)}})};return u.useEffect(()=>{s("content",o)},[o]),l(C,{children:[l(g,{className:"flex flex-col gap-6 mb-6",children:[e(h,{title:"create_module_title"}),m.success&&l("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:m.success})]}),l("form",{className:" flex flex-col gap-6 w-full",onSubmit:k,children:[l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"title",value:a("form_label_title")})}),l("div",{className:"lg:w-4/5",children:[e(c,{id:"title",name:"title",type:"text",value:n.title,className:"block w-full",isFocused:!0,onChange:t=>s("title",t.target.value)}),e("span",{className:"text-red-600",children:i.title})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"description",value:a("form_label_description")})}),l("div",{className:"lg:w-4/5",children:[e(c,{id:"description",name:"description",typeForm:"textarea",value:n.description,className:"block w-full",isFocused:!0,rows:4,onChange:t=>s("description",t.target.value)}),e("span",{className:"text-red-600",children:i.description})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"content",value:a("form_label_content")})}),l("div",{className:"lg:w-4/5",children:[e(S,{onChange:d,value:o}),e("span",{className:"text-red-600",children:i.content})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"author",value:a("form_label_author")})}),l("div",{className:"lg:w-4/5",children:[e(c,{id:"author",name:"author",value:n.author,className:"block w-full",isFocused:!0,rows:8,onChange:t=>s("author",t.target.value)}),e("span",{className:"text-red-600",children:i.author})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"image",value:a("form_label_image")})}),l("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"image",id:"image",className:"block",onChange:t=>s("image",t.target.files[0])}),e("span",{className:"text-red-600",children:i.image})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"video",value:a("form_label_video")})}),l("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"video",id:"video",className:"block",onChange:t=>s("video",t.target.files[0])}),e("span",{className:"text-red-600",children:i.video})]})]}),l("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(r,{htmlFor:"attachment",value:a("form_label_attachment")})}),l("div",{className:"lg:w-4/5",children:[e("input",{type:"file",name:"attachment",id:"attachment",className:"block",onChange:t=>s("attachment",t.target.files[0])}),e("span",{className:"text-red-600",children:i.attachment})]})]}),e(T,{color:"secondary",className:"w-fit",disabled:f,children:a("submit")})]})]}),l(g,{children:[e(h,{title:"list_module_title",className:"mb-5"}),e(A,{header:N,data:b,selectedData:w,tableButtons:x,tableActions:_,pathImage:"modules/"})]})]})}export{K as default};
