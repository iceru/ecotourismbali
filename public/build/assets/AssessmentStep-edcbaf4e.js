import{r as o,y as v,a as t,j as i}from"./app-985c7907.js";import{A as d}from"./AdminSection-ec47c0ce.js";import{M as b}from"./MemberLayout-4f95a124.js";import u from"./TitleSection-64fd13b8.js";import{B as k}from"./Button-74ae847b.js";import{h as N}from"./moment-fbc5633a.js";import{u as y}from"./useTranslation-42b99a75.js";import"./index-033d355d.js";import"./id-410e5203.js";import"./no-image-91387054.js";import"./react-responsive-955be2d4.js";const _="/build/assets/konten-eff82820.png",S="/build/assets/kontenId-8a4f8db0.png",j="/build/assets/konten-0dc4903d.png",I="/build/assets/kontenId-d2a94cbb.png",R="/build/assets/tutorial-634e7345.mp4";function C({member:s,remaining:a,dateAssessment:m}){var l,c;const{t:e,i18n:n}=y(),[p,f]=o.useState(_),[h,x]=o.useState(j);o.useEffect(()=>{var r;(r=s==null?void 0:s.status)!=null&&r.includes("active")||v.visit(route("member.dashboard"))},[]),o.useEffect(()=>{(n==null?void 0:n.language)==="id"&&(f(S),x(I))},[n==null?void 0:n.language]);const g=(l=s==null?void 0:s.business_type)==null?void 0:l.name;return t(b,{children:a>0?i(d,{children:[t("div",{children:t("div",{className:"px-4 py-3 bg-lightSecondary rounded-md inline-flex mb-4",children:(c=s==null?void 0:s.status)!=null&&c.includes("active")?e("eligible_assessment",{number:a}):e("trial_assessment",{number:a})})}),t(u,{title:"assessment",className:"mb-6"}),t("div",{className:"text-center mb-6",children:t("video",{src:R,controls:!0})}),i("div",{className:"text-center",children:[t(u,{title:"short_tutorial",className:"mb-2 !text-2xl"}),t("p",{className:"mb-8",children:e("short_tutorial_text")})]}),t("div",{className:"lg:w-[80%] m-auto",children:t("div",{children:t("img",{src:g==="Hotel"?p:h})})}),t(k,{as:"link",href:route("member.assessment.data"),className:"flex w-full justify-center p-5 mt-6",children:e("next")})]}):i(d,{className:"grid gap-6",children:[t("div",{className:"px-4 py-3 bg-red-300 rounded-md inline-flex",children:e("not_eligible_assessment",{number:a})}),t("div",{className:"text-center text-lg",children:e("cant_assessment")}),t("div",{className:"text-center text-2xl text-primary",children:N(m).format("LL")})]})})}export{C as default};