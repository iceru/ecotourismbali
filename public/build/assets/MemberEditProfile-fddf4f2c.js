import{r as g,q as f,W as h,a as e,j as t}from"./app-780ebe19.js";import{F as c,b,r as v}from"./index-08005ec9.js";import{S as y,f as x,a as w,b as N,c as k}from"./index-1e791556.js";import{A as _}from"./id-474c3759.js";import{M as j,n as F}from"./MemberLayout-bae866e4.js";import{P as C}from"./PrimaryButton-ab3fc588.js";import{T as i}from"./TextInput-8ce62e44.js";import{u as S}from"./useTranslation-04d8e635.js";import"./react-responsive-bcc89059.js";function G(){const{t:n}=S(),[o,d]=g.useState(!1),{user:I,member:s}=f().props,{data:l,setData:r,post:m,processing:T,errors:U}=h({business_name:s.business_name||"",address:s.address||"",website:s.website||"",description:s.description||"",image:s.image||null,sliders:s.sliders||null}),u=a=>{a.preventDefault(),m(route("member.profile.store",s.id),{onSuccess:()=>{reset()}})},p={dots:!0,infinite:!0,speed:500,slidesToShow:s.member_slider.length>2?3:s.member_slider.length,slidesToScroll:1};return e(j,{children:t(_,{children:[e("h2",{className:"font-bold text-xl mb-4",children:n("edit_profile")}),t("form",{onSubmit:u,children:[e("div",{className:"flex justify-between items-center mb-10",children:t("div",{className:"flex items-center",children:[e("div",{children:s.image?t("div",{className:"relative mr-4 group cursor-pointer",onClick:()=>d(!o),children:[e("img",{className:"w-24 h-24 rounded-full object-cover",src:`/storage/member/images/${s.image}`,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]}):t("div",{className:"relative mr-4 group cursor-pointer",onClick:()=>d(!o),children:[e("img",{className:"w-24 h-24 rounded-full",src:F,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]})}),t("div",{children:[o&&e("div",{children:e("input",{className:"mb-3",type:"file",name:"image",id:"image",onChange:a=>r("image",a.target.files[0])})}),e(i,{id:"business_name",name:"business_name",placeholder:n("your_business_name"),value:l.business_name,className:"block w-full",isFocused:!0,onChange:a=>r("business_name",a.target.value)})]})]})}),t("div",{className:"mb-10",children:[s.member_slider&&e("div",{className:"-mx-2",children:e(y,{...p,children:s.member_slider.map(a=>e("div",{children:e("img",{src:`/storage/member/sliders/${a.image}`,alt:"",className:"p-2"})}))})}),t("div",{children:[e("label",{className:"block mb-2 font-medium text-gray-900 ",htmlFor:"sliders",children:n("your_gallery")}),e("input",{className:"block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none",id:"sliders",multiple:!0,type:"file",name:"sliders",onChange:a=>{r("sliders",a.target.files)}})]})]}),t("div",{className:"flex justify-center lg:gap-8 mb-10 flex-wrap",children:[t("div",{className:"flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto mb-4 lg:mb-0",children:[e(c,{icon:b}),e(i,{id:"address",name:"address",placeholder:n("your_address"),value:l.address,className:"block w-full",isFocused:!0,onChange:a=>r("address",a.target.value)})]}),t("div",{className:"flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto",children:[e(c,{icon:v}),e(i,{id:"website",name:"website",placeholder:n("your_website"),value:l.website,className:"block w-full",isFocused:!0,onChange:a=>r("website",a.target.value)})]})]}),e("div",{className:"mb-6",children:s!=null&&s.description?e("div",{children:n("add_description")}):e("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:e(i,{id:"description",name:"description",typeForm:"textarea",placeholder:n("your_description"),value:l.description,className:"block w-full",isFocused:!0,onChange:a=>r("description",a.target.value)})})}),t("div",{className:"grid lg:grid-cols-2 gap-6 mb-10",children:[t("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:x}),e(i,{id:"facebook",name:"facebook",placeholder:"Facebook",value:l.facebook,className:"block w-full",isFocused:!0,onChange:a=>r("facebook",a.target.value)})]}),t("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:w}),e(i,{id:"instagram",name:"instagram",placeholder:"Instagram",value:l.instagram,className:"block w-full",isFocused:!0,onChange:a=>r("instagram",a.target.value)})]}),t("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:N}),e(i,{id:"whatsapp",name:"whatsapp",placeholder:"Whatsapp",value:l.whatsapp,className:"block w-full",isFocused:!0,onChange:a=>r("whatsapp",a.target.value)})]}),t("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:k}),e(i,{id:"twitter",name:"twitter",placeholder:"Twitter",value:l.twitter,className:"block w-full",isFocused:!0,onChange:a=>r("twitter",a.target.value)})]})]}),e("div",{children:e(C,{className:"w-full flex justify-center !py-2 ",children:"Update"})})]})]})})}export{G as default};
