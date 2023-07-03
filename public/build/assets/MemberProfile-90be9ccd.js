import{q as h,j as s,a as i}from"./app-da2b4d6b.js";import{F as r,q as n,r as p,s as g,b as d,p as l}from"./index-d5035ee9.js";import{S as u}from"./index-38f0f25c.js";import{A as x}from"./id-22a42304.js";import{M as N}from"./MemberLayout-80d8ce16.js";import{P as c}from"./PrimaryButton-6f4168ef.js";import{n as v}from"./no-image-91387054.js";import{u as y}from"./useTranslation-6e77fdb0.js";import"./logo-5e7252b7.js";import"./react-responsive-7d4260b1.js";function k({member:e}){const{t}=y(),{flash:a}=h().props,o={dots:!0,infinite:!0,speed:500,slidesToShow:e.member_slider.length>2?3:e.member_slider.length,slidesToScroll:1};return s(N,{children:i(x,{children:[s("h2",{className:"font-bold text-xl mb-4",children:t("my_profile")}),a.success&&i("div",{className:"bg-green-100 border border-green-400 mb-3 text-green-700 px-4 py-3 rounded relative",children:[s("strong",{className:"font-bold mr-2",children:"Success!"}),s("span",{className:"inline",children:a.success})]}),i(c,{as:"link",href:route("member.profile.edit",e==null?void 0:e.id),className:"mb-6 flex items-center gap-2",children:[t("edit_profile"),s(r,{icon:n})]}),i("div",{className:"flex justify-between items-center mb-10",children:[i("div",{className:"flex items-center",children:[s("div",{children:e.image?s("img",{className:"w-24 h-24 rounded-full mr-4 object-cover",src:`/storage/member/images/${e.image}`,alt:""}):s("img",{className:"w-24 h-24 rounded-full mr-4",src:v,alt:""})}),s("div",{children:s("h3",{className:"font-bold text-lg",children:e.business_name||"Business Name"})})]}),s("div",{children:i(c,{as:"link",href:route("member.assessment.index"),color:"lightPrimary",className:"flex gap-2 items-center",children:[t("start_assessment"),s(r,{icon:p})]})})]}),s("div",{className:"mb-10",children:e.member_slider?s("div",{className:"-mx-2",children:s(u,{...o,children:e.member_slider.map(f=>s("div",{children:s("img",{src:`/storage/member/sliders/${f.image}`,alt:"",className:"p-2"})}))})}):i("div",{className:"flex gap-2 text-gray-600 justify-center items-center p-6 py-12 border rounded-lg border-dashed border-gray-600",children:[t("add_slider"),s(r,{icon:g})]})}),i("div",{className:"flex justify-center gap-8 mb-10",children:[s("div",{children:e!=null&&e.address?i("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:[s(r,{icon:d}),s("div",{children:e.address})]}):i("a",{className:"flex gap-2 text-gray-600 justify-center items-center cursor-pointer",href:route("member.profile.edit",e==null?void 0:e.id),children:[t("add_address"),s(r,{icon:d})]})}),s("div",{children:e!=null&&e.website?i("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:[s(r,{icon:l}),s("div",{children:e.website})]}):i("a",{className:"flex gap-2 text-gray-600 justify-center items-center cursor-pointer",href:route("member.profile.edit",e==null?void 0:e.id),children:[t("add_website"),s(r,{icon:l})]})})]}),s("div",{className:"mb-6",children:e!=null&&e.description?s("div",{className:"text-center",children:e.description}):i("a",{className:"flex gap-2 text-gray-600 justify-center items-center cursor-pointer",href:route("member.profile.edit",e==null?void 0:e.id),children:[t("add_description"),s(r,{icon:n})]})})]})})}export{k as default};