import{r as s,j as e,a as o}from"./app-da2b4d6b.js";import{A as n}from"./id-22a42304.js";import{P as m}from"./PrimaryButton-6f4168ef.js";import{M as l}from"./MemberLayout-80d8ce16.js";import c from"./TitleSection-a691e8fb.js";import d from"./BackTo-4c027f3f.js";import{u as f}from"./useTranslation-6e77fdb0.js";import"./logo-5e7252b7.js";import"./index-d5035ee9.js";import"./react-responsive-7d4260b1.js";function v({module:t,memberModule:a}){const{t:r}=f();return s.useEffect(()=>{a.forEach(i=>{t.id===i.module_id&&i.completion>0&&(t.complete=!0)})},[]),e(l,{children:o(n,{children:[t.complete&&e(d,{title:"back_to_list_module",link:route("member.module.index")}),o("div",{className:"grid gap-6",children:[e(c,{title:"e_learning"}),e("div",{className:"font-bold text-primary",children:r("module_learning",{number:t.id})}),e("div",{className:"text-center font-bold text-xl",children:t.title}),e("div",{className:"flex justify-center",children:e("img",{src:`/storage/modules/${t.image}`,alt:t.name})}),e("div",{className:"text-justify",dangerouslySetInnerHTML:{__html:t.content}}),!t.complete&&e(m,{as:"link",href:route("member.module.post-test",t.id),className:"flex justify-center",children:r("start_post_test")})]})]})})}export{v as default};