import{r as f,q as g,W as b,j as e,a as t}from"./app-08237c9a.js";import{F as c,b as h,r as v}from"./index-9da7846b.js";import{S as y}from"./index-f719a525.js";import{A as x}from"./id-a3ccb1dc.js";import{M as N,n as w}from"./MemberLayout-bb02872f.js";import{P as _}from"./PrimaryButton-4a83e717.js";import{T as n}from"./TextInput-fcc370b2.js";import{u as j}from"./useTranslation-e7741a3e.js";import"./react-responsive-00dc63fc.js";function $(){const{t:i}=j(),[o,d]=f.useState(!1),{user:k,member:s}=g().props,{data:l,setData:a,post:m,processing:C,errors:F}=b({business_name:s.business_name||"",address:s.address||"",website:s.website||"",description:s.description||"",image:s.image||null,sliders:s.sliders||null}),u=r=>{r.preventDefault(),m(route("member.profile.store",s.id),{onSuccess:()=>{reset()}})},p={dots:!0,infinite:!0,speed:500,slidesToShow:s.member_slider.length>2?3:s.member_slider.length,slidesToScroll:1};return e(N,{children:t(x,{children:[e("h2",{className:"font-bold text-xl mb-4",children:i("edit_profile")}),t("form",{onSubmit:u,children:[e("div",{className:"flex justify-between items-center mb-10",children:t("div",{className:"flex items-center",children:[e("div",{children:s.image?t("div",{className:"relative mr-4 group cursor-pointer",onClick:()=>d(!o),children:[e("img",{className:"w-24 h-24 rounded-full object-cover",src:`/storage/member/images/${s.image}`,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]}):t("div",{className:"relative mr-4 group cursor-pointer",onClick:()=>d(!o),children:[e("img",{className:"w-24 h-24 rounded-full",src:w,alt:""}),e("div",{className:"rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2",children:"Update"})]})}),t("div",{children:[o&&e("div",{children:e("input",{className:"mb-3",type:"file",name:"image",id:"image",onChange:r=>a("image",r.target.files[0])})}),e(n,{id:"business_name",name:"business_name",placeholder:i("your_business_name"),value:l.business_name,className:"block w-full",isFocused:!0,onChange:r=>a("business_name",r.target.value)})]})]})}),t("div",{className:"mb-10",children:[s.member_slider&&e("div",{className:"-mx-2",children:e(y,{...p,children:s.member_slider.map(r=>e("div",{children:e("img",{src:`/storage/member/sliders/${r.image}`,alt:"",className:"p-2"})}))})}),t("div",{children:[e("label",{className:"block mb-2 font-medium text-gray-900 ",htmlFor:"sliders",children:i("your_gallery")}),e("input",{className:"block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none",id:"sliders",multiple:!0,type:"file",name:"sliders",onChange:r=>{a("sliders",r.target.files)}})]})]}),t("div",{className:"flex justify-around mb-10",children:[t("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:[e(c,{icon:h}),e(n,{id:"address",name:"address",placeholder:i("your_address"),value:l.address,className:"block w-full",isFocused:!0,onChange:r=>a("address",r.target.value)})]}),e("div",{children:t("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:[e(c,{icon:v}),e(n,{id:"website",name:"website",placeholder:i("your_website"),value:l.website,className:"block w-full",isFocused:!0,onChange:r=>a("website",r.target.value)})]})})]}),e("div",{className:"mb-6",children:s!=null&&s.description?e("div",{children:i("add_description")}):e("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:e(n,{id:"description",name:"description",typeForm:"textarea",placeholder:i("your_description"),value:l.description,className:"block w-full",isFocused:!0,onChange:r=>a("description",r.target.value)})})}),e("div",{children:e(_,{className:"w-full flex justify-center !py-2 ",children:"Update"})})]})]})})}export{$ as default};
