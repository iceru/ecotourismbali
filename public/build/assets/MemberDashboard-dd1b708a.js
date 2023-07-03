import{a,j as e,F as m,t as d}from"./app-da2b4d6b.js";import{A as n}from"./id-22a42304.js";import{P as r}from"./PrimaryButton-6f4168ef.js";import{M as h}from"./MemberLayout-80d8ce16.js";import{F as i,l as g,n as f,o as t,m as c}from"./index-d5035ee9.js";import{u as p}from"./useTranslation-6e77fdb0.js";import"./logo-5e7252b7.js";import"./react-responsive-7d4260b1.js";function P({member:l}){const{t:s}=p(),o=()=>{d.get(route("member_payment.new_payment"))};return a(h,{children:[a("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[a(n,{children:[e("h2",{className:"font-bold text-[20px] mb-4",children:s("welcome_member")}),e("div",{children:a(r,{as:"link",href:route("member.profile"),className:"mb-4 !inline-block",color:"lightPrimary",children:[s("edit_profile"),e(i,{className:"ml-2",icon:g})]})}),l.status==="active"&&e("div",{children:a(r,{className:"!inline-block",as:"link",href:route("member.module.index"),color:"lightSecondary",children:[s("start_learning"),e(i,{icon:f,className:"ml-2"})]})})]}),e(n,{children:l.status==="active"?a(m,{children:[l&&l.badge?e("h2",{className:"font-bold text-[20px] mb-4",children:s("your_assessment")}):e("h2",{className:"font-bold text-[20px] mb-4",children:s("no_assessment")}),a("div",{className:"flex items-center",children:[l&&l.badge&&e("div",{children:e("img",{src:l.badge.image,alt:l.badge.name})}),a("div",{className:"grid gap-4",children:[a(r,{color:"lightPrimary",children:[s("start_assessment"),e(i,{icon:t,className:"ml-2"})]}),a(r,{color:"lightSecondary",children:[s("learn_more_assessment"),e(i,{icon:c,className:"ml-2"})]})]})]})]}):a("div",{children:[e("h2",{className:"font-bold text-[20px] mb-4",children:s("preview_member")}),a("div",{className:"grid gap-4",children:[e("div",{children:a(r,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[s("my_assessment"),e(i,{icon:t,className:"ml-2"})]})}),e("div",{children:a(r,{color:"lightSecondary",as:"link",href:route("member.module.index"),children:[s("e_learning"),e(i,{icon:c,className:"ml-2"})]})})]})]})})]}),l.status!=="active"&&a(n,{className:"flex flex-col items-center justify-center gap-4",children:[e("h2",{className:"font-bold text-xl",children:s("member_not_active")}),e("p",{className:"text-sm",children:s("member_locked_text")}),e(r,{onClick:()=>o(),children:s("member_locked_button")})]})]})}export{P as default};