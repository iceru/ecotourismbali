import{q as f,W as g,j as i,a as e}from"./app-564aa5bf.js";import{I as s}from"./InputLabel-de2defdc.js";import{B as p}from"./Button-5c6aa829.js";import{T as o}from"./TextInput-2c4353c1.js";import{A as b}from"./AdminLayout-90595167.js";import u from"./TitleSection-3bafae38.js";import{A as n}from"./AdminSection-6264d2fc.js";import h from"./BackTo-0dedf293.js";import{u as v}from"./useTranslation-b7c2539f.js";import"./logo-5e7252b7.js";import"./index-d6d3d862.js";import"./id-410e5203.js";import"./react-responsive-1f42f9ff.js";function L(){const{t:a}=v(),{announcement:l}=f().props,{data:m,setData:r,post:c,processing:d,errors:x}=g({title:(l==null?void 0:l.title)||"",text:(l==null?void 0:l.text)||"",images:(l==null?void 0:l.images)||null,file:(l==null?void 0:l.files)||null,category:(l==null?void 0:l.category)||"announcement"});return i(b,{children:[e(h,{title:"back_to_list_verified_badge",link:"/admin/verified-badge"}),i(n,{className:"flex flex-col gap-6 mb-6",children:[e(u,{title:"edit_verified_badge_title"}),i("form",{className:"flex flex-col gap-6",onSubmit:t=>{t.preventDefault(),c(route("announcement.update",l==null?void 0:l.id),{})},children:[i("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(s,{htmlFor:"title",value:a("form_label_title")})}),e("div",{className:"lg:w-4/5",children:e(o,{id:"title",name:"title",type:"text",value:m.title,className:"block w-full",isFocused:!0,onChange:t=>r("title",t.target.value)})})]}),i("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(s,{htmlFor:"text",value:a("form_label_text")})}),e("div",{className:"lg:w-4/5",children:e(o,{id:"text",name:"text",type:"text",typeForm:"textArea",value:m.text,className:"block w-full",isFocused:!0,onChange:t=>r("text",t.target.value)})})]}),i("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(s,{htmlFor:"image",value:a("form_label_image")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"image",multiple:!0,id:"image",onChange:t=>r("image",t.target.files)})})]}),i("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(s,{htmlFor:"file",value:a("form_label_file")})}),e("div",{className:"lg:w-4/5",children:e("input",{type:"file",name:"file",id:"file",onChange:t=>r("file",t.target.files[0])})})]}),e(p,{className:"w-fit",disabled:d,children:a("submit")})]})]})]})}export{L as default};
