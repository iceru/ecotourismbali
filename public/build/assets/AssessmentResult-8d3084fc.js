import{j as a,a as s,F as c}from"./app-7f84437a.js";import{A as o}from"./id-2f09920d.js";import{M as m}from"./MemberLayout-1f6842ab.js";import h from"./TitleSection-d3b869bd.js";import{P as n}from"./PrimaryButton-9249986e.js";import{b as f}from"./BadgeColor-f3610bb2.js";import{u as x}from"./useTranslation-9ce7b74f.js";import"./index-2e3ad5a5.js";import"./react-responsive-6f12b18e.js";import"./lodash-2a6f2aac.js";function w({session:l,member:e}){var i,r,d;const{t}=x();return a(m,{children:s(o,{children:[a(h,{title:"assessment",className:"mb-6"}),a("div",{className:"font-bold text-primary mb-6"}),s("div",{className:"mb-6 pb-6 border-b",children:[a("div",{className:"text-2xl mb-2 font-bold text-primary",children:t("congrats")}),a("p",{className:"text-etbGray",children:t("finish_assessment")})]}),e.status==="active"?s(c,{children:[s("div",{className:"grid lg:grid-cols-2",children:[s("div",{className:"mb-4 lg:mb-0",children:[s("div",{className:"mb-4",children:[t("your_assessment_scores")," "]}),a("div",{className:"px-6 py-4 bg-lightPrimary text-3xl font-bold rounded-2xl inline-flex",children:l==null?void 0:l.total_score})]}),a("div",{className:"flex flex-col",children:(i=e==null?void 0:e.badge)!=null&&i.image?s("div",{className:"justify-center",children:[a("div",{className:"mb-4",children:t("your_badge_is")}),s("div",{className:"flex items-center",children:[a("div",{children:a("img",{className:"max-h-[120px] mr-4",src:"/storage/badges/"+((r=e==null?void 0:e.badge)==null?void 0:r.image),alt:""})}),s("div",{children:[a("div",{className:"font-bold  text-2xl "+f(e.badge.name,"text"),children:(d=e==null?void 0:e.badge)==null?void 0:d.name}),a("p",{children:"Badge"})]})]})]}):a("div",{className:"text-center",children:t("not_eligible_badge")})})]}),a(n,{as:"link",href:route("member.assessment.index"),className:"w-full flex justify-center mt-6",children:t("back_to_dashboard")})]}):s(c,{children:[a("div",{className:"text-center",children:t("result_preview_assessment")}),a(n,{as:"link",href:route("member.dashboard"),className:"w-full flex justify-center mt-6",children:t("back_to_dashboard")})]})]})})}export{w as default};
