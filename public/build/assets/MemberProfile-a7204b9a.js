import{q as x,j as e,a as s}from"./app-08237c9a.js";import{F as t,s as o,t as u,b as h,r as f,u as N}from"./index-9da7846b.js";import{S as m}from"./index-f719a525.js";import{A as v}from"./id-a3ccb1dc.js";import{M as y,n as _}from"./MemberLayout-bb02872f.js";import{P as g}from"./PrimaryButton-4a83e717.js";import{l as j}from"./lodash-fc5ad2f0.js";import{b as w}from"./BadgeColor-0ab13038.js";import{u as P}from"./useTranslation-e7741a3e.js";import"./react-responsive-00dc63fc.js";function L({member:i,scores:d,lastSession:r}){const{t:l}=P(),{flash:n}=x().props,p={dots:!0,infinite:!0,speed:500,slidesToShow:i.member_slider.length>2?3:i.member_slider.length,slidesToScroll:1};return e(y,{children:s(v,{children:[e("h2",{className:"font-bold text-xl mb-4",children:l("my_profile")}),n.success&&s("div",{className:"bg-green-100 border border-green-400 mb-3 text-green-700 px-4 py-3 rounded relative",children:[e("strong",{className:"font-bold mr-2",children:"Success!"}),e("span",{className:"inline",children:n.success})]}),s(g,{as:"link",href:route("member.profile.edit",i==null?void 0:i.id),className:"mb-6 flex items-center gap-2",children:[l("edit_profile"),e(t,{icon:o})]}),s("div",{className:"flex",children:[s("div",{className:"lg:w-4/5",children:[s("div",{className:"flex items-center mb-10",children:[e("div",{children:i.image?e("img",{className:"w-24 h-24 rounded-full mr-4 object-cover",src:`/storage/member/images/${i.image}`,alt:""}):e("img",{className:"w-24 h-24 rounded-full mr-4",src:_,alt:""})}),e("div",{children:e("h3",{className:"font-bold text-lg",children:i.business_name||"Business Name"})})]}),e("div",{className:"mb-10",children:i.member_slider.length>0?e("div",{className:"-mx-2",children:e(m,{...p,children:i.member_slider.map(a=>e("div",{children:e("img",{src:`/storage/member/sliders/${a.image}`,alt:"",className:"p-2"})}))})}):s("div",{className:"flex gap-2 text-gray-600 justify-center items-center p-6 py-12 border rounded-lg border-dashed border-gray-600",children:[l("add_slider"),e(t,{icon:u})]})}),s("div",{className:"flex justify-center gap-8 mb-10",children:[e("div",{children:i!=null&&i.address?s("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:[e(t,{icon:h}),e("div",{children:i.address})]}):s("a",{className:"flex gap-2 text-gray-600 justify-center items-center cursor-pointer",href:route("member.profile.edit",i==null?void 0:i.id),children:[l("add_address"),e(t,{icon:h})]})}),e("div",{children:i!=null&&i.website?s("div",{className:"flex gap-2 text-gray-600 justify-center items-center",children:[e(t,{icon:f}),e("div",{children:i.website})]}):s("a",{className:"flex gap-2 text-gray-600 justify-center items-center cursor-pointer",href:route("member.profile.edit",i==null?void 0:i.id),children:[l("add_website"),e(t,{icon:f})]})})]}),e("div",{className:"mb-6",children:i!=null&&i.description?e("div",{className:"text-center",children:i.description}):s("a",{className:"flex gap-2 text-gray-600 justify-center items-center cursor-pointer",href:route("member.profile.edit",i==null?void 0:i.id),children:[l("add_description"),e(t,{icon:o})]})})]}),e("div",{className:"lg:w-1/5",children:i.badge?s("div",{children:[s("div",{className:"flex flex-col items-center  uppercase mb-1",children:[e("div",{children:e("img",{className:"max-h-[120px]",src:"/storage/badges/"+i.badge.image})}),s("div",{className:`font-bold mt-1 text-center ${w(i.badge.name,"text")}`,children:[i.badge.name," Badge"]})]}),r&&s("div",{className:"text-center text-gray-500 text-xs mb-3",children:[e("span",{className:"font-bold",children:r.total_score})," ",e("span",{className:" uppercase",children:"Points"})]}),d==null?void 0:d.map(a=>{var c;return s("div",{className:"flex justify-center text-gray-500 text-xs mb-1",children:[e("div",{className:"capitalize",children:j.lowerCase((c=a==null?void 0:a.assessment)==null?void 0:c.title).slice(0,11)}),e("div",{className:"mx-1",children:"-"}),e("div",{children:a==null?void 0:a.score})]})})]}):e("div",{children:s(g,{as:"link",href:route("member.assessment.index"),color:"lightPrimary",className:"flex gap-2 items-center",children:[l("start_assessment"),e(t,{icon:N})]})})})]})]})})}export{L as default};
