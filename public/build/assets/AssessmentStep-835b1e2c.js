import{r as o,t as v,a as t,j as i}from"./app-69a25a5e.js";import{A as d}from"./AdminSection-72e97085.js";import{M as b}from"./MemberLayout-270a3317.js";import u from"./TitleSection-7fd0cb71.js";import{P as k}from"./PrimaryButton-7c111780.js";import{h as N}from"./moment-fbc5633a.js";import{u as _}from"./useTranslation-33c16b92.js";import"./index-e4881126.js";import"./id-410e5203.js";import"./react-responsive-d8f9ff71.js";const y="/build/assets/konten-eff82820.png",S="/build/assets/kontenId-8a4f8db0.png",j="/build/assets/konten-0dc4903d.png",I="/build/assets/kontenId-d2a94cbb.png",R="/build/assets/tutorial-634e7345.mp4";function q({member:s,remaining:a,dateAssessment:m}){var l,c;const{t:e,i18n:n}=_(),[p,f]=o.useState(y),[x,h]=o.useState(j);o.useEffect(()=>{var r;(r=s==null?void 0:s.status)!=null&&r.includes("active")||v.visit(route("member.dashboard"))},[]),o.useEffect(()=>{(n==null?void 0:n.language)==="id"&&(f(S),h(I))},[n==null?void 0:n.language]);const g=(l=s==null?void 0:s.business_type)==null?void 0:l.name;return t(b,{children:a>0?i(d,{children:[t("div",{children:t("div",{className:"px-4 py-3 bg-lightSecondary rounded-md inline-flex mb-4",children:(c=s==null?void 0:s.status)!=null&&c.includes("active")?e("eligible_assessment",{number:a}):e("trial_assessment",{number:a})})}),t(u,{title:"assessment",className:"mb-6"}),t("div",{className:"text-center mb-6",children:t("video",{src:R,controls:!0})}),i("div",{className:"text-center",children:[t(u,{title:"short_tutorial",className:"mb-2 !text-2xl"}),t("p",{className:"mb-8",children:e("short_tutorial_text")})]}),t("div",{className:"lg:w-[80%] m-auto",children:t("div",{children:t("img",{src:g==="Hotel"?p:x})})}),t(k,{as:"link",href:route("member.assessment.data"),className:"flex w-full justify-center p-5 mt-6 text-lg",children:e("next")})]}):i(d,{className:"grid gap-6",children:[t("div",{className:"px-4 py-3 bg-red-300 rounded-md inline-flex",children:e("not_eligible_assessment",{number:a})}),t("div",{className:"text-center text-lg",children:e("cant_assessment")}),t("div",{className:"text-center text-2xl text-primary",children:N(m).format("LL")})]})})}export{q as default};