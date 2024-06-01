import{a as s,F as e,j as l}from"./app-23f2fa96.js";import{h as _}from"./moment-fbc5633a.js";import{l as w}from"./lodash-d0518ef4.js";import{F as d,D as N,u as k}from"./index-28d59fa5.js";import{B as c}from"./Button-534be8b8.js";import{b as v}from"./BadgeColor-4e532531.js";import{u as B}from"./useTranslation-14eb7045.js";const D=({member:a,expiredDate:u,lastSession:o,scores:t})=>{var r,h,g,x,p,f;const{t:i,i18n:y}=B();return s("div",{children:(r=a==null?void 0:a.status)!=null&&r.includes("active")?s(e,{children:a&&a.badge?l(e,{children:[l("h2",{className:"font-bold text-[20px] mb-4",children:[i("your_assessment"),s("span",{className:v((h=a==null?void 0:a.badge)==null?void 0:h.name,"text")+" ml-1.5",children:(g=a==null?void 0:a.badge)==null?void 0:g.name})]}),l("div",{className:"flex items-center",children:[l("div",{className:"flex flex-col items-center mr-4  mb-1",children:[s("div",{children:s("img",{className:"max-h-[120px]",src:"/storage/badges/"+((x=a==null?void 0:a.badge)==null?void 0:x.image)})}),l("div",{className:`font-bold mt-1 text-center whitespace-nowrap uppercase ${v((p=a==null?void 0:a.badge)==null?void 0:p.name,"text")}`,children:[(f=a==null?void 0:a.badge)==null?void 0:f.name," Badge"]}),l("div",{className:"text-xs text-gray-500",children:["Expired: ",_(u).locale(y.language).format("ll")]})]}),l("div",{className:"ml-2",children:[o&&l("div",{className:" mb-2",children:[s("span",{className:"font-bold",children:o.total_score})," ",s("span",{className:" uppercase",children:"Points"})]}),s("div",{className:"grid lg:grid-cols-2 gap-x-3",children:t==null?void 0:t.map(n=>{var m;return l("div",{className:"flex justify-center text-gray-500 text-sm mb-1",children:[s("div",{className:"capitalize",children:w.lowerCase((m=n==null?void 0:n.assessment)==null?void 0:m.title).slice(0,11)}),s("div",{className:"mx-1",children:"-"}),s("div",{children:n==null?void 0:n.score})]})})})]})]})]}):l(e,{children:[s("h2",{className:"font-bold text-[20px] mb-4",children:i("no_assessment")}),s("div",{children:l(c,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[i("start_assessment"),s(d,{icon:N,className:"ml-2"})]})})]})}):l("div",{children:[s("h2",{className:"font-bold text-[20px] mb-4",children:i("preview_member")}),l("div",{className:"grid gap-4",children:[s("div",{children:l(c,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[i("my_assessment"),s(d,{icon:N,className:"ml-2"})]})}),s("div",{children:l(c,{color:"lightSecondary",as:"link",href:route("member.module.index"),children:[i("e_learning"),s(d,{icon:k,className:"ml-2"})]})})]})]})})};export{D as default};
