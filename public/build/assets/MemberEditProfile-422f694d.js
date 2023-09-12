import{r as y,q as v,W as x,b as e,j as s}from"./app-cebd207e.js";import{F as c,s as w,b as N,t as _}from"./index-20ad6464.js";import{S as k,f as j,a as F,b as C,c as S}from"./index-cac0174f.js";import{A as I}from"./AdminSection-b18b5346.js";import{M as T,n as D}from"./MemberLayout-b67341bc.js";import{P as U}from"./PrimaryButton-803ec449.js";import{T as i}from"./TextInput-3c1f2180.js";import{S as A}from"./SelectInput-7cce9648.js";import{u as E}from"./useTranslation-099d5374.js";import"./id-410e5203.js";import"./react-responsive-26e32c2f.js";function R({categories:p}){const{t:o}=E(),[n,m]=y.useState(!1),{user:M,member:t,flash:d}=v().props,{data:l,setData:r,post:u,processing:P,errors:W,reset:g}=x({business_name:t.business_name||"",address:t.address||"",website:t.website||"",description:t.description||"",image:t.image||null,sliders:t.sliders||null,facebook:t.facebook||null,whatsapp:t.whatsapp||null,twitter:t.twitter||null,instagram:t.instagram||null,merchant_promo:t.merchant_promo||null,category:t.category_id||null}),f=a=>{a.preventDefault(),u(route("member.profile.store",t.id),{onSuccess:()=>{g()}})},b=a=>{u(route("member.profile.deleteImage",a))},h={dots:!0,infinite:!0,speed:500,slidesToShow:t.member_slider.length>1?2:t.member_slider.length,slidesToScroll:1};return e(T,{children:s(I,{children:[e("h2",{className:"font-bold text-xl mb-4",children:o("edit_profile")}),d.success&&s("div",{className:"bg-green-100 border border-green-400 mb-3 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:d.success})]}),s("form",{onSubmit:f,children:[e("div",{className:"flex justify-between items-center mb-10",children:s("div",{className:"flex items-center",children:[e("div",{children:t.image?s("div",{className:"relative mr-4 group cursor-pointer bg-primary bg-opacity-10 flex justify-center items-center rounded-full ",onClick:()=>m(!n),children:[e("img",{className:"w-24 h-24 object-contain",src:`/storage/member/images/${t.image}`,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]}):s("div",{className:"relative mr-4 group cursor-pointer",onClick:()=>m(!n),children:[e("img",{className:"w-24 h-24 rounded-full",src:D,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]})}),s("div",{children:[n&&e("div",{children:e("input",{className:"mb-3",type:"file",name:"image",id:"image",onChange:a=>r("image",a.target.files[0])})}),e(i,{id:"business_name",name:"business_name",placeholder:o("your_business_name"),value:l.business_name,className:"block w-full",isFocused:!0,onChange:a=>r("business_name",a.target.value)}),e(A,{id:"category",name:"category",options:p,valueData:"id",labelData:"name",value:l.category,className:"block w-full mt-2",isFocused:!0,onChange:a=>r("category",a.target.value)})]})]})}),s("div",{className:"mb-10",children:[t.member_slider&&e("div",{className:"mb-8 -mx-2",children:e(k,{...h,children:t.member_slider.map(a=>s("div",{className:"px-2",children:[s("button",{type:"button",onClick:()=>b(a.id),className:"absolute bg-red-700 text-white px-4 py-2 rounded-lg z-10 top-4 ml-4 text-sm flex gap-2 items-center opacity-90",children:[e(c,{icon:w}),"Delete"]}),e("div",{class:"relative overflow-hidden pb-2/3 z-0",children:e("img",{src:`/storage/member/sliders/${a.image}`,alt:"",class:"absolute h-full w-full object-cover p-2"})})]}))})}),s("div",{children:[e("label",{className:"block mb-2 font-medium text-gray-900 ",htmlFor:"sliders",children:o("your_gallery")}),e("input",{className:"block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none",id:"sliders",multiple:!0,type:"file",name:"sliders",onChange:a=>{r("sliders",a.target.files)}})]})]}),s("div",{className:"flex justify-center lg:gap-8 mb-10 flex-wrap",children:[s("div",{className:"flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto mb-4 lg:mb-0",children:[e(c,{icon:N}),e(i,{id:"address",name:"address",placeholder:o("your_address"),value:l.address,className:"block w-full",isFocused:!0,onChange:a=>r("address",a.target.value)})]}),s("div",{className:"flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto",children:[e(c,{icon:_}),e(i,{id:"website",name:"website",placeholder:o("your_website"),value:l.website,className:"block w-full",isFocused:!0,onChange:a=>r("website",a.target.value)})]})]}),e("div",{className:"mb-6",children:e("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:e(i,{id:"description",name:"description",typeForm:"textarea",placeholder:o("your_description"),value:l.description,className:"block w-full",isFocused:!0,onChange:a=>r("description",a.target.value)})})}),s("div",{className:"grid lg:grid-cols-2 gap-6 mb-10",children:[s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:j}),e(i,{id:"facebook",name:"facebook",placeholder:"Facebook",value:l.facebook,className:"block w-full",isFocused:!0,onChange:a=>r("facebook",a.target.value)})]}),s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:F}),e(i,{id:"instagram",name:"instagram",placeholder:"Instagram",value:l.instagram,className:"block w-full",isFocused:!0,onChange:a=>r("instagram",a.target.value)})]}),s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:C}),e(i,{id:"whatsapp",name:"whatsapp",placeholder:"Whatsapp",value:l.whatsapp,className:"block w-full",isFocused:!0,onChange:a=>r("whatsapp",a.target.value)})]}),s("div",{className:"flex gap-4 text-gray-600 justify-center items-center ",children:[e(c,{className:"text-xl",icon:S}),e(i,{id:"twitter",name:"twitter",placeholder:"Twitter",value:l.twitter,className:"block w-full",isFocused:!0,onChange:a=>r("twitter",a.target.value)})]})]}),e("div",{className:"mb-6",children:e("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:e(i,{id:"merchant_promo",name:"merchant_promo",typeForm:"textarea",placeholder:o("your_merchant_promo"),value:l.merchant_promo,className:"block w-full",isFocused:!0,onChange:a=>r("merchant_promo",a.target.value)})})}),e("div",{children:e(U,{className:"w-full flex justify-center !py-2 ",children:"Update"})})]})]})})}export{R as default};
