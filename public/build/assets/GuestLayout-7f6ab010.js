import{j as r,a as e,r as s,q as I,F as T,d as c}from"./app-564aa5bf.js";import{h as C}from"./moment-fbc5633a.js";import{F as a,p as x,m as j,f as A,q as l}from"./index-d6d3d862.js";import"./TextInput-2c4353c1.js";import{e as P,i as B}from"./id-410e5203.js";import{L as w}from"./logo-5e7252b7.js";import{u as f}from"./useTranslation-b7c2539f.js";function S(){return r("div",{className:"text-gray-500 pb-10 pt-16 px-4 lg:px-0",children:[r("div",{className:"flex justify-center mb-2",children:[e("div",{className:"font-poppins hover:text-secondary text-sm lg:text-base mr-3 pr-3 border-r-gray-400 border-r",children:e("a",{href:"https://ecotourismbali.com/terms-conditions/",children:"Terms & Conditions"})}),e("div",{className:"font-poppins hover:text-secondary text-sm lg:text-base mr-3 pr-3 border-r-gray-400 border-r",children:e("a",{href:"https://ecotourismbali.com/privacy-policy/",children:"Privacy Policy"})}),e("div",{className:"font-poppins hover:text-secondary text-sm lg:text-base",children:e("a",{href:"https://ecotourismbali.com/faq/",children:"FAQ"})})]}),r("div",{className:"text-primary tracking-wide uppercase mb-2 text-center font-neue text-2xl",children:["Eco Tourism Bali ",C().format("YYYY")]}),r("div",{className:"flex justify-center",children:[e("div",{className:"hover:text-secondary text-sm lg:text-base mr-3 pr-3 border-r-gray-400 border-r",children:e("a",{href:"mailto:info@ecotourismbali.com",className:"font-poppins",children:"info@ecotourismbali.com"})}),e("div",{className:"hover:text-secondary text-sm lg:text-base",children:e("a",{href:"tel:+6281139800055",className:"font-poppins",children:"+62811 3980 0055"})})]})]})}function E(){var g;const{i18n:o}=f(),[v,n]=s.useState(!1),[h,N]=s.useState(!1),[m,y]=s.useState(!1),[p,_]=s.useState(!1),[d,k]=s.useState(!1),{auth:t}=I().props,{t:i}=f();function b(u){o.language!==u&&o.changeLanguage(u)}return r(T,{children:[r("div",{className:"flex items-center justify-between container mx-auto py-3 px-3 lg:px-0",children:[r("div",{className:"flex items-center",children:[e("div",{className:"text-sm mr-3 text-gray-400",children:i("language")}),e("div",{onClick:()=>b("en"),className:"cursor-pointer",children:e("img",{src:P,alt:""})}),e("div",{onClick:()=>b("id"),className:"ml-3 cursor-pointer",children:e("img",{src:B,alt:""})})]}),t!=null&&t.user?e("div",{className:"flex items-center gap-3",children:r("div",{className:"group relative capitalize",children:[r("div",{className:"flex bg-primary text-white p-1 px-3 rounded text-sm",children:[e("div",{className:" font-bold group relative",children:(g=t==null?void 0:t.user)==null?void 0:g.name}),e("div",{className:"ml-2",children:e(a,{icon:x})})]}),r("ul",{className:"hidden absolute top-2 pt-8 group-hover:block hover:block z-10 shadow-lg",children:[e(c,{href:route("member.dashboard"),className:"w-full text-left py-3 px-5 block text-sm hover:bg-gray-100 hover:text-primary bg-white",children:e("li",{className:" whitespace-nowrap ",children:i("member_dashboard")})}),e(c,{href:route("logout"),method:"post",as:"button",type:"button",className:"w-full text-left py-3 px-5 block text-sm bg-white hover:bg-red-600 hover:text-white text-red-600 ",children:e("li",{className:" whitespace-nowrap ",children:i("logout")})})]})]})}):e(c,{href:route("member.dashboard"),children:r("li",{className:"flex bg-primary text-white text-sm p-1 px-3 rounded",children:[e("div",{children:i("member_login")}),e("div",{className:"ml-2",children:e(a,{icon:x})})]})})]}),r("nav",{className:"flex bg-white justify-between items-center container px-3 pb-3 mx-auto",children:[e("div",{className:"logo",children:e("a",{href:"https://ecotourismbali.com",children:e("img",{src:w,alt:"Eco Tourism Bali",className:"w-[80px]"})})}),r("div",{children:[r("ul",{className:"hidden lg:flex gap-8 uppercase text-[15px] text-[#b0b0b0] items-center",children:[r("li",{className:"relative group",children:[e("span",{children:i("about")}),r("ul",{className:"hidden absolute top-2 pt-8 group-hover:block hover:block",children:[e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/about/climate-ambition/",children:i("climate_ambition")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/about/team/",children:"Our Team"})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/about/partners/",children:i("partners")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/about/pillars/",children:i("pillars")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/about/etb-road-map/",children:i("roadmap")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/sustainable-verification/",children:i("sustainable_verification")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://joinetw.ecotourismbali.com/",children:i("eco_tourism_week")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/programs/regenerative-bali/",children:i("regenerative_bali")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/programs/workshop/",children:i("workshop")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/programs/consultation/",children:i("consulting")})})]})]}),r("li",{className:"relative group",children:[e("span",{children:"Eco Tourism Tribe"}),r("ul",{className:"hidden absolute top-2 pt-8 group-hover:block hover:block",children:[r("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center w-full",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenPAL_1-36x36.png",width:"36",height:"36",className:"mr-3"}),e("a",{href:"https://ecotourismbali.com/tribe/community/",children:i("community")})]}),r("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenforce_1-36x36.png",className:"mr-3",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/member/",children:"Member"})]}),r("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_earth_guard_1-36x36.png",className:"mr-3",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/eco-tourism-partners/",children:i("partners")})]}),r("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center w-full min-w-[230px]",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenAvenger_1-36x36.png",className:"mr-3",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/verified-member/",children:i("verified_members")})]}),r("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_etb_ambass_1-36x36.png",className:"mr-3",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/ambassadors/",children:i("ambassadors")})]}),r("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_warrior_1-36x36.png",className:"mr-3",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/warriors/",children:i("warriors")})]})]})]}),e("a",{href:"https://ecotourismbali.com/sustainable-verification/",children:e("li",{className:"bg-[#05403a] text-white px-[10px] py-[5px] transition hover:bg-white hover:text-[#05403a] border hover:border-[#05403a]",children:i("sustainable_verification")})}),e(c,{href:route("member.list"),children:e("li",{className:"bg-primary text-white px-[10px] py-[5px] transition hover:bg-white hover:text-primary border hover:border-primary",children:i("green_credential")})}),r("li",{className:"relative group",children:[e("span",{children:i("blog_news")}),r("ul",{className:"hidden absolute top-2 pt-8 group-hover:block hover:block",children:[e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/blog/",children:i("blog")})}),e("li",{className:"py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white",children:e("a",{href:"https://ecotourismbali.com/news/",children:i("news")})})]})]})]}),e("div",{onClick:()=>n(!0),className:"lg:hidden",children:e(a,{icon:j,className:"text-3xl text-primary"})})]})]}),r("div",{className:`bg-primary transition  text-white w-full h-full fixed z-40 top-0 left-0 p-6 pt-0 ${v?"translate-x-0":"-translate-x-full"}`,children:[r("div",{className:"bg-white flex justify-between items-center p-3 mb-12 -mx-6",children:[e("img",{src:w,alt:"Eco Tourism Bali",className:"w-[80px]"}),e("div",{onClick:()=>n(!1),children:e(a,{icon:A,className:"text-3xl text-primary cursor-pointer"})})]}),r("ul",{className:" gap-8 flex flex-col uppercase text-[15px]",children:[r("li",{className:"relative group",children:[r("span",{onClick:()=>N(!h),className:"cursor-pointer flex items-center",children:[i("about"),e(a,{className:"ml-2 text-xs",icon:l})]}),r("ul",{className:`${h?"block":"hidden"} pt-3 -mb-4`,children:[e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/about/climate-ambition/",children:"Climate Ambition"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/about/team/",children:"Our Team"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/about/partners/",children:"Partners"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/about/pillars/",children:"Pillars"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/about/etb-road-map/",children:"Road Map"})})]})]}),r("li",{className:"relative group",children:[r("span",{onClick:()=>y(!m),className:"cursor-pointer flex items-center",children:["Programs",e(a,{className:"ml-2 text-xs",icon:l})]}),r("ul",{className:`${m?"block":"hidden"} pt-3 -mb-4`,children:[e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/sustainable-verification/",children:"Sustainable Verification"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://joinetw.ecotourismbali.com/",children:"Eco Tourism Week"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/programs/regenerative-bali/",children:"Regenerative Bali"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/programs/workshop/",children:"Workshop"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/programs/consultation/",children:"Consulting"})})]})]}),r("li",{className:"relative group",children:[r("span",{onClick:()=>_(!p),className:"cursor-pointer flex items-center",children:["Eco Tourism Tribe",e(a,{className:"ml-2 text-xs",icon:l})]}),r("ul",{className:`${p?"block":"hidden"} pt-3 -mb-4`,children:[r("li",{className:"py-3 px-5 whitespace-nowrap  flex items-center w-full",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenPAL_1-36x36.png",width:"36",height:"36",className:"mr-3 brightness-0 transform invert"}),e("a",{href:"https://ecotourismbali.com/tribe/community/",children:"Community"})]}),r("li",{className:"py-3 px-5 whitespace-nowrap  flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenforce_1-36x36.png",className:"mr-3 brightness-0 transform invert",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/member/",children:"Member"})]}),r("li",{className:"py-3 px-5 whitespace-nowrap  flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_earth_guard_1-36x36.png",className:"mr-3 brightness-0 transform invert",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/eco-tourism-partners/",children:"Partners"})]}),r("li",{className:"py-3 px-5 whitespace-nowrap  flex items-center w-full min-w-[230px]",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenAvenger_1-36x36.png",className:"mr-3 brightness-0 transform invert",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/verified-member/",children:"Verified Members"})]}),r("li",{className:"py-3 px-5 whitespace-nowrap  flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_etb_ambass_1-36x36.png",className:"mr-3 brightness-0 transform invert",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/ambassadors/",children:"Ambassadors"})]}),r("li",{className:"py-3 px-5 whitespace-nowrap  flex items-center",children:[e("img",{src:"https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_warrior_1-36x36.png",className:"mr-3 brightness-0 transform invert",width:"36",height:"36"}),e("a",{href:"https://ecotourismbali.com/tribe/warriors/",children:"Warriors"})]})]})]}),e("a",{href:"https://ecotourismbali.com/sustainable-verification/",children:e("li",{className:"",children:"Sustainable Verification"})}),r("li",{className:"relative group",children:[r("span",{onClick:()=>k(!d),className:"cursor-pointer flex items-center",children:["Blog And News",e(a,{className:"ml-2 text-xs",icon:l})]}),r("ul",{className:`${d?"block":"hidden"} pt-3 -mb-4`,children:[e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/blog/",children:"Blog"})}),e("li",{className:"py-3 px-5 whitespace-nowrap ",children:e("a",{href:"https://ecotourismbali.com/news/",children:"News"})})]})]})]})]})]})}function V({children:o}){return r("div",{children:[e(E,{}),e("div",{className:"min-h-[75vh] container bg-white",children:e("div",{className:"py-12 px-3 lg:px-0",children:o})}),e(S,{})]})}export{V as G};
