import{j as t,a as s}from"./app-261e6d43.js";import{r as p}from"./react-responsive-298e6c6d.js";import{G as g}from"./GuestLayout-bf097995.js";import{S as N,f as u,a as v,b as w,c as y}from"./index-073a0068.js";import{F as i,b as k,r as _}from"./index-732bffe0.js";import j from"./BackTo-ce8a1366.js";import{l as T}from"./lodash-2a128e27.js";import{b as h}from"./BadgeColor-40740503.js";import{u as B}from"./useTranslation-5c07c6a7.js";import"./TextInput-935a8ba9.js";import"./logo-5e7252b7.js";function H({member:a,lastSession:e,scores:x}){var c,d,n,r,o;B();const f={infinite:!0,speed:500,arrows:!0,slidesToShow:p.useMediaQuery({query:"(min-width: 992px)"})?((c=a==null?void 0:a.member_slider)==null?void 0:c.length)>2?3:(d=a==null?void 0:a.member_slider)==null?void 0:d.length:1,slidesToScroll:1};return t(g,{children:[s(j,{title:"back_to_list_members",className:"text-sm px-4 py-2 bg-primary text-white inline-flex rounded-3xl",link:route("member.list")}),t("div",{className:"flex flex-wrap mt-10",children:[t("div",{className:"lg:w-4/5 lg:pr-10",children:[s("section",{className:"flex justify-between items-center mb-12 flex-wrap",children:t("div",{className:"flex items-center mb-6 lg:mb-0",children:[a.image&&s("div",{className:"mr-4",children:s("img",{src:"/storage/member/images/"+(a==null?void 0:a.image),alt:a==null?void 0:a.business_name,className:"w-[120px] h-[120px] object-cover rounded-full"})}),t("div",{children:[s("h2",{className:"text-2xl font-bold mb-2",children:a==null?void 0:a.business_name}),s("h4",{className:"uppercase text-primary tracking-wide mb-2",children:(n=a==null?void 0:a.category)==null?void 0:n.name}),s("h6",{children:(r=a==null?void 0:a.program)==null?void 0:r.name})]})]})}),s("section",{className:"mb-12 -mx-2",children:s(N,{...f,children:(o=a==null?void 0:a.member_slider)==null?void 0:o.map(l=>s("div",{children:s("img",{src:`/storage/member/sliders/${l.image}`,alt:"",className:"p-2 max-w-screen"})}))})}),s("section",{className:"mb-12",children:t("div",{className:"grid grid-cols-2 gap-6 ",children:[(a==null?void 0:a.address)&&t("div",{className:"flex items-center justify-end",children:[s(i,{icon:k,className:"text-primary mr-2 mt-0.5"}),a==null?void 0:a.address]}),(a==null?void 0:a.website)&&t("a",{href:a.website,target:"_blank",className:"flex items-center",children:[s(i,{icon:_,className:"text-primary mr-2 mt-0.5"}),a==null?void 0:a.website]})]})}),s("section",{className:"text-justify mb-10",children:a==null?void 0:a.description}),t("div",{className:"flex gap-6",children:[a.facebook&&s("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:s("a",{href:a.facebook,target:"_blank",className:"mt-1",children:s(i,{icon:u,className:"text-2xl"})})}),a.instagram&&s("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:s("a",{href:a.instagram,target:"_blank",className:"mt-1",children:s(i,{icon:v,className:"text-2xl"})})}),a.whatsapp&&s("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:s("a",{href:a.whatsapp,target:"_blank",className:"mt-1",children:s(i,{icon:w,className:"text-2xl"})})}),a.twitter&&s("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:s("a",{href:a.twitter,target:"_blank",className:"mt-1",children:s(i,{icon:y,className:"text-2xl"})})})]})]}),t("div",{className:"lg:w-1/5 mx-auto flex lg:block gap-12 sticky top-0 lg:border-l pl-4 mt-10 lg:mt-0",children:[a.verified_badge&&t("div",{className:"flex flex-col items-center text-primary uppercase mb-4 pb-4 lg:border-b",children:[s("div",{children:s("img",{className:"max-h-[120px]",src:"/storage/badges/"+a.verified_badge.image})}),t("div",{className:`font-bold mt-1 ${h(a.badge.name,"text")}`,children:[a.verified_badge.name," Verified Badge"]})]}),a!=null&&a.badge?t("div",{children:[t("div",{className:"flex flex-col items-center  uppercase mb-1",children:[s("div",{children:s("img",{className:"max-h-[120px]",src:"/storage/badges/"+a.badge.image})}),t("div",{className:`font-bold mt-1 ${h(a.badge.name,"text")}`,children:[a.badge.name," Badge"]})]}),e&&t("div",{className:"text-center text-gray-500  text-xs mb-3",children:[s("span",{className:"font-bold",children:e.total_score})," ",s("span",{className:" uppercase",children:"Points"})]}),x.map(l=>t("div",{className:"flex justify-center text-gray-500 text-xs mb-1",children:[s("div",{className:"capitalize",children:T.lowerCase(l.assessment.title).slice(0,11)}),s("div",{className:"mx-1",children:"-"}),s("div",{children:l.score})]}))]}):s("div",{className:"bg-slate-600 text-white rounded-full px-3 py-1 font-bold inline-block",children:"No Badge"})]})]})]})}export{H as default};