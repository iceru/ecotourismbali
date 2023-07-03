import{a as t,j as i}from"./app-9d038481.js";import{r as x}from"./react-responsive-17c05ceb.js";import{G as g}from"./GuestLayout-33f89a60.js";import{S as u}from"./index-6448c96f.js";import{F as r,b as N,p as v}from"./index-9d6ee548.js";import w from"./BackTo-f560ada3.js";import{u as y}from"./useTranslation-ecbbedb5.js";import"./TextInput-f827f223.js";import"./logo-5e7252b7.js";function A({member:s}){var a,l,c,n,o,d,p;const{t:h}=y(),e={infinite:!0,speed:500,arrows:!0,slidesToShow:x.useMediaQuery({query:"(min-width: 992px)"})?((a=s==null?void 0:s.member_slider)==null?void 0:a.length)>2?3:(l=s==null?void 0:s.member_slider)==null?void 0:l.length:1,slidesToScroll:1};return t(g,{children:[i(w,{title:"back_to_list_members",link:route("member.list")}),t("section",{className:"flex justify-between items-center mb-12 flex-wrap",children:[t("div",{className:"flex items-center mb-6 lg:mb-0",children:[i("div",{className:"mr-4",children:i("img",{src:"/storage/member/images/"+(s==null?void 0:s.image),alt:s==null?void 0:s.business_name,className:"w-[120px] h-[120px] object-cover rounded-full"})}),t("div",{children:[i("h2",{className:"text-2xl font-bold mb-2",children:s==null?void 0:s.business_name}),i("h4",{className:"uppercase text-primary tracking-wide mb-2",children:(c=s==null?void 0:s.category)==null?void 0:c.name}),i("h6",{children:(n=s==null?void 0:s.program)==null?void 0:n.name})]})]}),s!=null&&s.badge?t("div",{children:[i("div",{className:"flex flex-col items-center",children:i("img",{className:"h-[120px]",src:"/storage/badges/"+((o=s==null?void 0:s.badge)==null?void 0:o.image),alt:""})}),t("div",{className:"text-center font-bold",children:[(d=s==null?void 0:s.badge)==null?void 0:d.name," Member"]})]}):i("div",{className:" text-white bg-slate-400 px-4 py-2 rounded-3xl",children:h("not_verified")})]}),i("section",{className:"mb-12 -mx-2",children:i(u,{...e,children:(p=s==null?void 0:s.member_slider)==null?void 0:p.map(f=>i("div",{children:i("img",{src:`/storage/member/sliders/${f.image}`,alt:"",className:"p-2"})}))})}),i("section",{className:"mb-12",children:t("div",{className:"grid grid-cols-2 gap-6 ",children:[t("div",{className:"flex items-center justify-end",children:[i(r,{icon:N,className:"text-primary mr-2 mt-0.5"}),s==null?void 0:s.address]}),t("div",{className:"flex items-center",children:[i(r,{icon:v,className:"text-primary mr-2 mt-0.5"}),s==null?void 0:s.website]})]})}),i("section",{className:"text-justify",children:s==null?void 0:s.description})]})}export{A as default};
