import{r as f,q as b,W as h,b as e,j as s}from"./app-a4e91474.js";import{F as c,b as v,s as w}from"./index-de9d9d61.js";import{S as y,f as x,a as N,b as k,c as _}from"./index-566b6252.js";import{A as j}from"./id-cb219ac3.js";import{M as F,n as C}from"./MemberLayout-497a221a.js";import{P as S}from"./PrimaryButton-a91844a5.js";import{T as i}from"./TextInput-c902ae71.js";import{u as I}from"./useTranslation-02ba0876.js";import"./react-responsive-96a91928.js";function H(){const{t:n}=I(),[o,d]=f.useState(!1),{user:T,member:t}=b().props,{data:r,setData:l,post:m,processing:U,errors:A,reset:u}=h({business_name:t.business_name||"",address:t.address||"",website:t.website||"",description:t.description||"",image:t.image||null,sliders:t.sliders||null,facebook:t.facebook||null,whatsapp:t.whatsapp||null,twitter:t.twitter||null,instagram:t.instagram||null}),p=a=>{a.preventDefault(),m(route("member.profile.store",t.id),{onSuccess:()=>{u()}})},g={dots:!0,infinite:!0,speed:500,slidesToShow:t.member_slider.length>2?3:t.member_slider.length,slidesToScroll:1};return e(F,{children:s(j,{children:[e("h2",{className:"font-bold text-xl mb-4",children:n("edit_profile")}),s("form",{onSubmit:p,children:[e("div",{className:"flex justify-between items-center mb-10",children:s("div",{className:"flex items-center",children:[e("div",{children:t.image?s("div",{className:"relative mr-4 group cursor-pointer",onClick:()=>d(!o),children:[e("img",{className:"w-24 h-24 rounded-full object-cover",src:`/storage/member/images/${t.image}`,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]}):s("div",{className:"relative mr-4 group cursor-pointer",onClick:()=>d(!o),children:[e("img",{className:"w-24 h-24 rounded-full",src:C,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]})}),s("div",{children:[o&&e("div",{children:e("input",{className:"mb-3",type:"file",name:"image",id:"image",onChange:a=>l("image",a.target.files[0])})}),e(i,{id:"business_name",name:"business_name",placeholder:n("your_business_name"),value:r.business_name,className:"block w-full",isFocused:!0,onChange:a=>l("business_name",a.target.value)})]})]})}),s("div",{className:"mb-10",children:[t.member_slider&&e("div",{className:"-mx-2",children:e(y,{...g,children:t.member_slider.map(a=>e("div",{children:e("img",{src:`/storage/member/sliders/${a.image}`,alt:"",className:"p-2"})}))})}),s("div",{children:[e("label",{className:"block mb-2 font-medium text-gray-900 ",htmlFor:"sliders",children:n("your_gallery")}),e("input",{className:"block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none",id:"sliders",multiple:!0,type:"file",name:"sliders",onChange:a=>{l("sliders",a.target.files)}})]})]}),s("div",{className:"flex justify-center lg:gap-8 mb-10 flex-wrap",children:[s("div",{className:"flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto mb-4 lg:mb-0",children:[e(c,{icon:v}),e(i,{id:"address",name:"address",placeholder:n("your_address"),value:r.address,className:"block w-full",isFocused:!0,onChange:a=>l("address",a.target.value)})]}),s("div",{className:"flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto",children:[e(c,{icon:w}),e(i,{id:"website",name:"website",placeholder:n("your_website"),value:r.website,className:"block w-full",isFocused:!0,onChange:a=>l("website",a.target.value)})]})]}),e("div",{className:"mb-6",children:t!=null&&t.description?e("div",{children:n("add_description")}):e("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:e(i,{id:"description",name:"description",typeForm:"textarea",placeholder:n("your_description"),value:r.description,className:"block w-full",isFocused:!0,onChange:a=>l("description",a.target.value)})})}),s("div",{className:"grid lg:grid-cols-2 gap-6 mb-10",children:[s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:x}),e(i,{id:"facebook",name:"facebook",placeholder:"Facebook",value:r.facebook,className:"block w-full",isFocused:!0,onChange:a=>l("facebook",a.target.value)})]}),s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:N}),e(i,{id:"instagram",name:"instagram",placeholder:"Instagram",value:r.instagram,className:"block w-full",isFocused:!0,onChange:a=>l("instagram",a.target.value)})]}),s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:k}),e(i,{id:"whatsapp",name:"whatsapp",placeholder:"Whatsapp",value:r.whatsapp,className:"block w-full",isFocused:!0,onChange:a=>l("whatsapp",a.target.value)})]}),s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:_}),e(i,{id:"twitter",name:"twitter",placeholder:"Twitter",value:r.twitter,className:"block w-full",isFocused:!0,onChange:a=>l("twitter",a.target.value)})]})]}),e("div",{children:e(S,{className:"w-full flex justify-center !py-2 ",children:"Update"})})]})]})})}export{H as default};
