import{a as l,j as e}from"./app-5781d102.js";import{A as s}from"./AdminSection-7bb97519.js";import{M as a}from"./MemberLayout-887187db.js";import o from"./TitleSection-ccd87c4b.js";import{B as n}from"./Button-a7635336.js";import{u as m}from"./useTranslation-08f3d0e1.js";import"./index-ba9fe3af.js";import"./id-410e5203.js";import"./react-responsive-d2fe5336.js";function g({memberModule:t,module:i}){const{t:r}=m();return l(a,{children:e(s,{children:[l(o,{title:"e_learning",className:"mb-4"}),l("div",{className:"font-bold text-primary mb-6",children:r("module_learning",{number:t.module_id})}),e("div",{className:"mb-6 pb-6 border-b",children:[l("div",{className:"text-2xl mb-2 font-bold text-primary",children:r("congrats")}),e("p",{className:"text-etbGray",children:[r("congrats_module")," ",l("span",{children:i.title})," "]})]}),e("div",{className:"grid lg:grid-cols-2 mb-6",children:[e("div",{className:"mb-6 lg:mb-0",children:[e("div",{className:"mb-3",children:[r("pre_score"),": "]}),e("div",{className:"font-bold bg-lightPrimary px-6 py-4 rounded-2xl inline-flex text-2xl",children:[parseInt(t.score_pre_test)," / 100"]})]}),e("div",{children:[e("div",{className:"mb-3",children:[r("post_score"),": "]}),e("div",{className:"font-bold bg-lightPrimary px-6 py-4 rounded-2xl inline-flex text-2xl",children:[parseInt(t.score_post_test)," / 100"]})]})]}),l(n,{className:"w-full flex justify-center mt-6",as:"link",href:route("member.module.index"),children:r("back_to_list_module")})]})})}export{g as default};
