import{b as e,F as t,j as a}from"./app-cdc8cd06.js";import{h as f}from"./moment-fbc5633a.js";import{l as N}from"./lodash-d12ac468.js";import{F as r,q as h,p as v}from"./index-dee09260.js";import{P as d}from"./PrimaryButton-6ccd38ab.js";import{b as g}from"./BadgeColor-9c6bdf3f.js";import{u}from"./useTranslation-1518e01b.js";const B=({member:s,expiredDate:x,lastSession:c,scores:n})=>{var m;const{t:l,i18n:p}=u();return e("div",{children:(m=s==null?void 0:s.status)!=null&&m.includes("active")?e(t,{children:s&&s.badge?a(t,{children:[a("h2",{className:"font-bold text-[20px] mb-4",children:[l("your_assessment"),e("span",{className:g(s.badge.name,"text")+" ml-1.5",children:s.badge.name})]}),a("div",{className:"flex items-center",children:[a("div",{className:"flex flex-col items-center mr-4  mb-1",children:[e("div",{children:e("img",{className:"max-h-[120px]",src:"/storage/badges/"+s.badge.image})}),a("div",{className:`font-bold mt-1 text-center whitespace-nowrap uppercase ${g(s.badge.name,"text")}`,children:[s.badge.name," Badge"]}),a("div",{className:"text-xs text-gray-500",children:["Expired: ",f(x).locale(p.language).format("ll")]})]}),a("div",{className:"ml-2",children:[c&&a("div",{className:" mb-2",children:[e("span",{className:"font-bold",children:c.total_score})," ",e("span",{className:" uppercase",children:"Points"})]}),e("div",{className:"grid lg:grid-cols-2 gap-x-3",children:n==null?void 0:n.map(i=>{var o;return a("div",{className:"flex justify-center text-gray-500 text-sm mb-1",children:[e("div",{className:"capitalize",children:N.lowerCase((o=i==null?void 0:i.assessment)==null?void 0:o.title).slice(0,11)}),e("div",{className:"mx-1",children:"-"}),e("div",{children:i==null?void 0:i.score})]})})})]})]})]}):a(t,{children:[e("h2",{className:"font-bold text-[20px] mb-4",children:l("no_assessment")}),e("div",{children:a(d,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[l("start_assessment"),e(r,{icon:h,className:"ml-2"})]})})]})}):a("div",{children:[e("h2",{className:"font-bold text-[20px] mb-4",children:l("preview_member")}),a("div",{className:"grid gap-4",children:[e("div",{children:a(d,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[l("my_assessment"),e(r,{icon:h,className:"ml-2"})]})}),e("div",{children:a(d,{color:"lightSecondary",as:"link",href:route("member.module.index"),children:[l("e_learning"),e(r,{icon:v,className:"ml-2"})]})})]})]})})};export{B as default};
