import{j as jsxs,a as jsx,F as Fragment}from"./app-b5235fb3.js";import{r as reactResponsiveExports}from"./react-responsive-19ff8a75.js";import{G as Guest}from"./GuestLayout-67a44bd0.js";import{S as Slider,f as faFacebook,a as faInstagram,b as faWhatsapp,c as faTwitter}from"./index-142a0eba.js";import{F as FontAwesomeIcon,b as faHome,t as faGlobe}from"./index-29078516.js";import BackTo from"./BackTo-bfbacbb8.js";import{l as lodashExports}from"./lodash-e67ab515.js";import{b as badgeColor}from"./BadgeColor-ce00f84e.js";import{g as greenpal}from"./greenpal-f0e012ed.js";import{u as useTranslation}from"./useTranslation-1b5cf69f.js";import"./moment-fbc5633a.js";import"./TextInput-efcfbf46.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";function MemberList({member,lastSession,scores}){var s,r,a,m,l,i,n,c,d,o,x,b,p,f,h,g,j,u;const{t}=useTranslation(),isDesktop=reactResponsiveExports.useMediaQuery({query:"(min-width: 992px)"}),settings={infinite:!0,speed:500,arrows:!0,slidesToShow:isDesktop?((s=member==null?void 0:member.member_slider)==null?void 0:s.length)>1?2:(r=member==null?void 0:member.member_slider)==null?void 0:r.length:1,slidesToScroll:1},sdgHotel=[4,6,7,8,11,12,13,14,15],sdgRestaurant=[2,4,6,7,8,9,11,12,13,14,15];return console.log((a=member==null?void 0:member.business_type)==null?void 0:a.name),jsxs(Guest,{children:[jsx(BackTo,{title:"back_to_list_members",className:"text-sm text-primary inline-flex rounded-3xl",link:route("member.list")}),jsxs("div",{className:"flex flex-wrap mt-10",children:[jsxs("div",{className:`${((m=member==null?void 0:member.program)==null?void 0:m.name)!=="Green Pal"?"lg:w-3/4 w-full":"w-full"} lg:pr-10`,children:[jsxs("section",{className:"flex justify-between items-center md:mb-12 mb-6 flex-wrap",children:[jsxs("div",{className:"flex items-center mb-6 md:mb-0",children:[member.image&&jsx("div",{className:"mr-3 lg:w-[120px] lg:h-[120px] shrink-0 w-[90px] h-[90px] object-contain rounded-full bg-primary bg-opacity-10 flex justify-center items-center",children:jsx("img",{src:"/storage/member/images/"+(member==null?void 0:member.image),alt:member==null?void 0:member.business_name,className:"lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] rounded-full object-contain"})}),jsxs("div",{children:[jsx("h2",{className:"text-xl md:text-2xl font-bold mb-2",children:member==null?void 0:member.business_name}),jsx("h4",{className:"uppercase text-primary text-xs md:text-base tracking-wide mb-2",children:(l=member==null?void 0:member.category)==null?void 0:l.name})]})]}),((i=member==null?void 0:member.program)==null?void 0:i.name)==="Green Pal"&&jsxs("div",{className:"flex justify-center items-center flex-col w-full md:w-fit",children:[jsx("div",{className:"flex justify-center",children:jsx("img",{src:greenpal,alt:"Green Pal",className:"lg:w-[100px] w-[70px]"})}),jsx("h4",{className:"m-0 font-bold text-greenpal mt-2 text-center",children:"Green Pal Member"})]})]}),jsx("section",{className:"md:mb-12 mb-6 md:-mx-2",children:jsx(Slider,{...settings,children:(n=member==null?void 0:member.member_slider)==null?void 0:n.map(e=>jsx("div",{className:"md:px-2",children:jsx("div",{className:"relative overflow-hidden pb-2/3",children:jsx("img",{src:`/storage/member/sliders/${e.image}`,alt:"",className:"absolute h-full w-full object-contain p-1"})})}))})}),jsx("section",{className:"md:mb-12 mb-6",children:jsxs("div",{className:"flex justify-center flex-col md:flex-row flex-wrap gap-4",children:[(member==null?void 0:member.address)&&jsxs("div",{className:"flex items-center justify-center",children:[jsx(FontAwesomeIcon,{icon:faHome,className:"text-white bg-primary p-[8px] rounded-full mt-0.5 z-10 relative h-[24px] w-[24px]"}),jsx("div",{className:"border-primary border px-4 py-0.5 pl-8 -ml-6 z-0 rounded-xl text-primary font-semibold",children:member==null?void 0:member.address})]}),(member==null?void 0:member.website)&&jsxs("a",{href:member==null?void 0:member.website,target:"_blank",className:"flex items-center hover:text-primary justify-center transition",children:[jsx(FontAwesomeIcon,{icon:faGlobe,className:"text-white bg-primary p-[8px] rounded-full mt-0.5 z-10 relative h-[24px] w-[24px]"}),jsx("a",{href:(c=member==null?void 0:member.website)!=null&&c.includes("http")?member==null?void 0:member.website:`https://${member.website}`,className:"border-primary border px-4 py-0.5 pl-8 -ml-6 z-0 rounded-xl hover:bg-primary hover:text-white transition text-primary font-semibold",children:member==null?void 0:member.website})]})]})}),jsxs("div",{className:`${((d=member==null?void 0:member.program)==null?void 0:d.name)==="Green Pal"?"lg:w-3/4 w-full mx-auto":""}`,children:[jsx("section",{className:"text-justify mb-10",children:member==null?void 0:member.description}),jsxs("div",{className:"flex justify-between items-center gap-6 flex-wrap",children:[jsxs("div",{className:"flex gap-6 h-fit",children:[member.facebook&&jsx("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:jsx("a",{href:member.facebook.includes("http")?member.facebook:`https://${member.facebook}`,target:"_blank",className:"mt-1",children:jsx(FontAwesomeIcon,{icon:faFacebook,className:"text-2xl"})})}),member.instagram&&jsx("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:jsx("a",{href:member.instagram.includes("http")?member.instagram:`https://${member.instagram}`,target:"_blank",className:"mt-1",children:jsx(FontAwesomeIcon,{icon:faInstagram,className:"text-2xl"})})}),member.whatsapp&&jsx("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:jsx("a",{href:`https://wa.me/${member.whatsapp}`,target:"_blank",className:"mt-1",children:jsx(FontAwesomeIcon,{icon:faWhatsapp,className:"text-2xl"})})}),member.twitter&&jsx("div",{className:"w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white",children:jsx("a",{href:member.twitter.includes("http")?member.twitter:`https://${member.twitter}`,target:"_blank",className:"mt-1",children:jsx(FontAwesomeIcon,{icon:faTwitter,className:"text-2xl"})})})]}),(member==null?void 0:member.merchant_promo)&&jsxs("div",{className:"bg-primary text-white p-4 rounded-xl w-full md:w-fit",children:[jsx("h5",{className:"font-semibold text-lg mb-2",children:t("merchant_promo")}),jsx("p",{children:member==null?void 0:member.merchant_promo})]})]})]})]}),((o=member==null?void 0:member.program)==null?void 0:o.name)!=="Green Pal"&&jsxs("div",{className:"lg:w-1/4 mx-auto w-full md:gap-12 top-0 py-4 px-3  mt-10 md:mt-0 sticky min-h-[50vh]",children:[(member==null?void 0:member.badge)&&jsx("div",{className:`absolute top-0 px-3 left-0 ${badgeColor((x=member==null?void 0:member.badge)==null?void 0:x.name,"color")} bg-opacity-[3%] border border-opacity-30 border-${badgeColor((b=member==null?void 0:member.badge)==null?void 0:b.name,"plain")}  rounded-2xl h-full w-full -z-10`}),jsxs(Fragment,{children:[(member==null?void 0:member.verified_badge)&&jsxs("div",{className:"flex flex-col items-center text-primary uppercase mb-4 pb-4",children:[jsx("div",{children:jsx("img",{className:"max-h-[200px]",src:"/storage/badges/"+(member==null?void 0:member.verified_badge.image)})}),jsxs("div",{className:`font-bold ${badgeColor((p=member==null?void 0:member.verified_badge)==null?void 0:p.name,"text")}`,children:[member==null?void 0:member.verified_badge.name," ",t("verified_badge")]})]}),member!=null&&member.badge?jsxs("div",{children:[jsxs("div",{className:"flex flex-col items-center  uppercase mb-1",children:[jsx("div",{children:jsx("img",{className:"max-h-[120px]",src:"/storage/badges/"+((f=member==null?void 0:member.badge)==null?void 0:f.image)})}),jsxs("div",{className:`font-bold mt-1 ${badgeColor((h=member==null?void 0:member.badge)==null?void 0:h.name,"text")}`,children:[(g=member==null?void 0:member.badge)==null?void 0:g.name," Badge"]})]}),lastSession&&jsxs("div",{className:"text-center text-gray-500 mb-3",children:[jsx("span",{className:"font-bold",children:lastSession.total_score})," ",jsx("span",{className:" uppercase",children:"Points"})]}),scores==null?void 0:scores.map(e=>jsxs("div",{className:"flex justify-center text-gray-500 mb-1",children:[jsx("div",{className:"capitalize",children:lodashExports.lowerCase(e.assessment.title).slice(0,11)}),jsx("div",{className:"mx-1",children:"-"}),jsx("div",{children:e.score})]})),((j=member==null?void 0:member.business_type)==null?void 0:j.name.includes("Hotel"))&&jsx("div",{className:"flex justify-center flex-wrap gap-2 mt-6",children:sdgHotel.map(element=>jsx("div",{className:"w-1/3 lg:w-1/4",children:jsx("img",{src:eval(`sdg${element}`),alt:""})}))}),((u=member==null?void 0:member.business_type)==null?void 0:u.name.includes("Restaurant"))&&jsx("div",{className:"flex justify-center flex-wrap gap-2 mt-6",children:sdgRestaurant.map(element=>jsx("div",{className:"w-1/3 lg:w-1/4",children:jsx("img",{src:eval(`sdg${element}`),alt:""})}))})]}):jsx("div",{className:"bg-slate-600 text-white rounded-full px-3 py-1 font-bold inline-block",children:"No Badge"})]})]})]})]})}export{MemberList as default};
