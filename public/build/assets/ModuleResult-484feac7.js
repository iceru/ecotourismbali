import{j as i,a as e}from"./app-08237c9a.js";import{A as s}from"./id-a3ccb1dc.js";import{M as a}from"./MemberLayout-bb02872f.js";import n from"./TitleSection-b28409fb.js";import{P as o}from"./PrimaryButton-4a83e717.js";import{u as d}from"./useTranslation-e7741a3e.js";import"./index-9da7846b.js";import"./react-responsive-00dc63fc.js";function _({memberModule:t,module:l}){const{t:r}=d();return i(a,{children:e(s,{children:[i(n,{title:"e_learning",className:"mb-4"}),i("div",{className:"font-bold text-primary mb-6",children:r("module_learning",{number:t.module_id})}),e("div",{className:"mb-6 pb-6 border-b",children:[i("div",{className:"text-2xl mb-2 font-bold text-primary",children:r("congrats")}),e("p",{className:"text-etbGray",children:[r("congrats_module")," ",i("span",{children:l.title})," "]})]}),e("div",{className:"grid grid-cols-2 mb-6",children:[e("div",{children:[e("div",{className:"mb-3",children:[r("pre_score"),": "]}),e("div",{className:"font-bold bg-lightPrimary px-6 py-4 rounded-2xl inline-flex text-2xl",children:[parseInt(t.score_pre_test)," / 100"]})]}),e("div",{children:[e("div",{className:"mb-3",children:[r("post_score"),": "]}),e("div",{className:"font-bold bg-lightPrimary px-6 py-4 rounded-2xl inline-flex text-2xl",children:[parseInt(t.score_post_test)," / 100"]})]})]}),i(o,{className:"w-full flex justify-center mt-6",as:"link",href:route("member.module.index"),children:r("back_to_list_module")})]})})}export{_ as default};