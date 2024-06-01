import{q as N,W as x,r,j as s,a as e,d as w}from"./app-23f2fa96.js";import{I as m}from"./InputLabel-04739bb0.js";import{B as y}from"./Button-534be8b8.js";import{T as g}from"./TextInput-e9e5d2e5.js";import{A as k}from"./AdminLayout-c9606641.js";import F from"./TitleSection-fcafd505.js";import{A as C}from"./AdminSection-08fb6198.js";import E from"./BackTo-aaef1cf5.js";import{S}from"./SelectInput-bbfbf3b9.js";import p from"./Editor-1f98a85b.js";import{u as A}from"./useTranslation-14eb7045.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./id-410e5203.js";import"./react-responsive-0978e57b.js";import"./index-25fc1de7.js";import"./index-eb13ea1c.js";function P(){const{t:i}=A(),{assessment:t,business_type:u}=N().props,{data:c,setData:a,post:b,processing:_,errors:n}=x({title:t.title||"",title_en:t.title_en||"",business_type:t.business_type_id||"",description:t.description||"",description_en:t.description_en||"",image:"",image_en:""}),h=l=>{l.preventDefault(),b(route("assessment.update",t.id))},[o,f]=r.useState(t.description),[d,v]=r.useState(t.description_en);return r.useEffect(()=>{a("description",o)},[o]),r.useEffect(()=>{a("description_en",d)},[d]),s(k,{children:[e(E,{title:"back_to_list_assessment",link:"/admin/assessment"}),s(C,{className:"flex flex-col gap-6 mb-6",children:[e(F,{title:"edit_assessment_title"}),s("form",{className:"flex flex-col gap-6",onSubmit:h,children:[s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"title",value:i("form_label_title")})}),s("div",{className:"lg:w-4/5",children:[e(g,{id:"title",name:"title",type:"text",value:c.title,className:"block w-full",isFocused:!0,onChange:l=>a("title",l.target.value)}),e("span",{className:"text-red-600",children:n.title})]})]}),s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"title_en",value:i("form_label_title_en")})}),s("div",{className:"lg:w-4/5",children:[e(g,{id:"title_en",name:"title_en",type:"text",value:c.title_en,className:"block w-full",isFocused:!0,onChange:l=>a("title_en",l.target.value)}),e("span",{className:"text-red-600",children:n.title_en})]})]}),s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"description",value:i("form_label_description")})}),s("div",{className:"lg:w-4/5",children:[e(p,{onChange:f,value:o}),e("span",{className:"text-red-600",children:n.description})]})]}),s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"description_en",value:i("form_label_description_en")})}),s("div",{className:"lg:w-4/5",children:[e(p,{onChange:v,value:d}),e("span",{className:"text-red-600",children:n.description_en})]})]}),s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"business_type",value:i("form_label_business_type")})}),s("div",{className:"lg:w-4/5",children:[e(S,{id:"business_type",name:"business_type",value:c.business_type,options:u,placeholder:"select_business_type",className:"w-full",labelData:"name",valueData:"id",onChange:l=>a("business_type",parseInt(l.target.value))}),e(w,{className:"mt-2 block text-sm text-primary font-semibold",href:"/business-type",children:i("add_business_type")}),e("span",{className:"text-red-600",children:n.business_type})]})]}),s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"image",value:i("form_label_image")})}),s("div",{className:"lg:w-4/5",children:[e("div",{className:"mb-2",children:e("img",{src:`/storage/assessments/${t.image}`,alt:""})}),e("input",{type:"file",name:"image",id:"image",onChange:l=>a("image",l.target.files[0])}),e("span",{className:"text-red-600",children:n.image})]})]}),s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"image_en",value:i("form_label_image_en")})}),s("div",{className:"lg:w-4/5",children:[e("div",{className:"mb-2",children:e("img",{src:`/storage/assessments/${t.image_en}`,alt:""})}),e("input",{type:"file",name:"image_en",id:"image_en",onChange:l=>a("image_en",l.target.files[0])}),e("span",{className:"text-red-600",children:n.image_en})]})]}),s("div",{className:"block lg:flex items-center",children:[e("div",{className:"lg:w-1/5 mb-2 lg:mb-0",children:e(m,{htmlFor:"logo",value:i("form_label_logo")})}),s("div",{className:"lg:w-4/5",children:[e("div",{className:"mb-2",children:e("img",{src:`/storage/assessments/${t.logo}`,alt:""})}),e("input",{type:"file",name:"logo",id:"logo",onChange:l=>a("logo",l.target.files[0])}),e("span",{className:"text-red-600",children:n.logo})]})]}),e(y,{className:"w-fit",disabled:_,children:i("submit")})]})]})]})}export{P as default};
