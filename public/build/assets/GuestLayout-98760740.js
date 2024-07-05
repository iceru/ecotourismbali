import{j as i,a as e,u as y,r as t,q as x,d as n}from"./app-c38276ce.js";import{h as k}from"./moment-fbc5633a.js";import{L as m}from"./logo-5e7252b7.js";import{F as a,q as E,r as v,n as I,s as C}from"./index-177829b7.js";import{a as B,b as W,c as T,d as S}from"./index-25fc1de7.js";import{e as L,i as j}from"./id-410e5203.js";import{u as f}from"./useTranslation-ea1d55ac.js";const P="/build/assets/wave-8ac64120.png";function F(){const{changeLanguage:s,language:c}=y,{t:l}=f();function o(r){c!==r&&s(r)}return i("footer",{className:"pt-16",children:[e("div",{children:e("img",{src:P,className:"w-full object-cover",alt:""})}),e("section",{className:"bg-primary",children:i("div",{className:"grid lg:grid-cols-2 gap-12 container py-8",children:[i("div",{children:[e("h5",{className:"font-sans text-xl mb-2 font-bold text-white",children:l("newsletter")}),i("div",{className:"flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6",children:[e("div",{children:e("input",{type:"text",placeholder:l("your_email"),className:"p-2 min-w-[300px]"})}),e("div",{children:e("button",{className:"px-4 py-2 text-white bg-secondary",children:l("sign_up")})})]})]}),e("div",{children:e("p",{className:"text-white",children:l("newsletter_text")})})]})}),i("section",{className:"container flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between py-12 text-primary",children:[i("div",{className:"flex gap-8 flex-col lg:flex-row",children:[e("div",{children:e("img",{className:"w-14",src:m,alt:"Eco Tourism Bali"})}),i("div",{children:[e("h6",{className:"font-bold mb-2 text-lg",children:"Eco Tourism Bali"}),i("p",{className:"mb-2",children:["Jalan Srirama Gang. Kayumanis III ",e("br",{}),"No. 6, Second Floor ",e("br",{}),"Bali, Indonesia 80361 ",e("br",{})]}),i("div",{className:"flex gap-2.5 items-center",children:[e(a,{icon:E}),e("a",{href:"mailto:info@ecotourismbali.com",children:"info@ecotourismbali.com"})]})]})]}),i("div",{children:[e("h6",{className:"font-bold mb-4 text-lg",children:"Links"}),i("ul",{children:[e("li",{className:"mb-4",children:e("a",{href:"#",children:"Terms & Condition"})}),e("li",{className:"mb-4",children:e("a",{href:"#",children:"Privacy & Policy"})}),e("li",{className:"mb-4",children:e("a",{href:"#",children:"FAQ"})})]})]}),i("div",{children:[e("h6",{className:"font-bold mb-4 text-lg",children:l("social_media")}),i("ul",{children:[i("li",{className:"mb-4 flex items-center gap-3",children:[e(a,{icon:B}),e("a",{href:"#",children:"Youtube"})]}),i("li",{className:"mb-4 flex items-center gap-3",children:[e(a,{icon:W}),e("a",{href:"#",children:"Instagram"})]}),i("li",{className:"mb-4 flex items-center gap-3",children:[e(a,{icon:T}),e("a",{href:"#",children:"Facebook"})]}),i("li",{className:"mb-4 flex items-center gap-3",children:[e(a,{icon:S}),e("a",{href:"#",children:"LinkedIn"})]})]})]}),i("div",{children:[e("h6",{className:"font-bold mb-4 text-lg",children:l("language")}),i("div",{onClick:()=>o("en"),className:`flex items-center cursor-pointer gap-2 mb-4 ${c==="en"?"font-bold":""}`,children:[e("img",{src:L,alt:""}),e("span",{children:"English"})]}),i("div",{onClick:()=>o("id"),className:`flex items-center cursor-pointer gap-2 mb-4 ${c==="id"?"font-bold":""}`,children:[e("img",{className:"w-[23px]",src:j,alt:""}),e("span",{children:"Bahasa Indonesia"})]})]})]}),e("section",{className:"bg-primary py-3",children:i("div",{className:"container text-center text-white font-bold",children:["© Eco Tourism Bali - ",k().format("YYYY")]})})]})}function O(){var b;f();const[s,c]=t.useState(!1),[l,o]=t.useState(!1),{auth:r}=x().props,{t:p}=f(),[g,N]=t.useState(!1),{url:d}=x(),h=t.useRef(null);return t.useEffect(()=>{const u=w=>{h.current&&!h.current.contains(w.target)&&c(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),i("header",{className:"py-2 bg-white",children:[i("nav",{className:"flex bg-white justify-between items-center container px-3 pb-3 mx-auto",children:[e("div",{className:"logo w-[136px]",children:e("a",{href:"https://ecotourismbali.com",children:e("img",{src:m,alt:"Eco Tourism Bali",className:"h-14 lg:h-20"})})}),i("div",{children:[i("ul",{className:"hidden lg:flex gap-8 items-center text-primary",children:[e("li",{className:"",children:e("a",{href:"https://ecotourismbali.com",children:"Home"})}),e("li",{className:"",children:e("a",{href:"https://ecotourismbali.com/about",children:"About"})}),e("li",{className:"",children:i("button",{type:"button",className:"flex gap-1 items-center",onClick:()=>N(!g),children:["What We Offer",e(a,{icon:v,className:"text-[10px]"})]})}),e("div",{className:`bg-white top-[100px] absolute z-20  left-0 w-[98.7vw] h-fit transition shadow-md ${g?"":"hidden"}`,id:"programs",children:i("div",{className:"container flex justify-center gap-20 py-6",children:[i("div",{children:[e("div",{className:"text-primary text-2xl mb-3 block font-serif",children:"What We Offer"}),e("li",{children:e("a",{href:"https://ecotourimbali.com/eco-climate-badge",children:"Eco Climate Badge"})})]}),e("div",{className:"w-[1px] bg-gray-300"}),i("div",{children:[e("div",{className:"text-primary text-2xl mb-3 block font-serif",children:"Programs"}),i("ul",{className:"grid gap-2",children:[e("li",{children:e("a",{href:"https://ecotourimbali.com/regenerative-bali",children:"Regenerative Bali"})}),e("li",{children:e("a",{href:"https://ecotourimbali.com/products#training",children:"Training & Consultancy"})}),e("li",{children:e("a",{href:"https://ecotourimbali.com/products#sustainable",children:"Sustainable Workshop Program"})})]})]}),e("div",{className:"w-[1px] bg-gray-300"}),i("div",{children:[e("a",{href:"https://ecotourimbali.com/events",children:e("h4",{className:"text-primary text-2xl mb-3 font-serif",children:"Events"})}),i("ul",{className:"grid gap-2",children:[e("li",{children:e("a",{href:"https://ecotourimbali.com/events#etw",children:"Eco Tourism Week"})}),e("li",{children:e("a",{href:"https://ecotourimbali.com/events#calendar",children:"Calendar Events"})})]})]})]})}),e("li",{className:"",children:e(n,{href:route("member.list"),className:d==="/directory"?"font-bold":"",children:"Directory"})}),e("li",{className:"",children:e("a",{href:"https://ecotourismbali.com/insights",children:"Insights"})})]}),e("div",{onClick:()=>c(!s),className:"lg:hidden",children:e(a,{icon:I,className:"text-3xl text-primary"})})]}),r!=null&&r.user?e("div",{className:"flex items-center gap-3",children:i("div",{className:"group relative capitalize",children:[i("div",{className:"flex bg-primary text-white p-1 px-3 rounded text-sm",children:[e("div",{className:" font-bold group relative",children:(b=r==null?void 0:r.user)==null?void 0:b.name}),e("div",{className:"ml-2",children:e(a,{icon:C})})]}),i("ul",{className:"hidden absolute top-2 pt-8 group-hover:block hover:block z-10 shadow-lg",children:[e(n,{href:route("member.dashboard"),className:"w-full text-left py-3 px-5 block text-sm hover:bg-gray-100 hover:text-primary bg-white",children:e("li",{className:" whitespace-nowrap ",children:p("member_dashboard")})}),e(n,{href:route("logout"),method:"post",as:"button",type:"button",className:"w-full text-left py-3 px-5 block text-sm bg-white hover:bg-red-600 hover:text-white text-red-600 ",children:e("li",{className:" whitespace-nowrap ",children:p("logout")})})]})]})}):i("li",{className:"items-center gap-2 text-primary hidden lg:flex",children:[e(n,{href:"/register",className:d==="/register"?"font-bold":"",children:"Register"}),e("span",{children:"|"}),e(n,{href:"/login",className:d==="/login"?"font-bold":"",children:"Sign In"})]})]}),i("div",{className:`sidebar fixed overflow-auto top-0 left-0 w-[80vw] duration-500 flex flex-col justify-between h-screen transition bg-white z-40 p-6 ${s?"translate-x-0":"-translate-x-full"}`,ref:h,children:[i("div",{class:"mb-6",children:[e("div",{class:"logo w-24 lg:w-32 mb-14",children:e("a",{href:"/",class:"",children:e("img",{class:"h-16 lg:h-20",src:m,alt:"Eco Tourism Bali"})})}),e("nav",{children:i("ul",{class:"flex flex-col  gap-6",children:[e("li",{children:e("a",{class:"menulinks",href:"/",children:"Home"})}),e("li",{children:e("a",{class:"menulinks",href:"/about/",children:"About"})}),i("li",{children:[i("button",{type:"button",class:"flex items-center gap-1 sideservice",onClick:()=>o(!l),children:["What We Offer",e(a,{icon:v,className:"text-xs ml-1"})]}),i("div",{class:`pl-4 mt-4 ${l?"":"hidden"}`,children:[i("ul",{class:"grid gap-4 mb-4 pb-4 border-b border-gray-100",children:[e("li",{class:"text-primary font-bold",children:"What We Offer"}),e("li",{children:e("a",{href:"/eco-climate-badge",children:"Eco Climate Badge"})})]}),i("ul",{class:"grid gap-4 mb-4 pb-4 border-b border-gray-100",children:[e("li",{children:e("a",{href:"/products",class:"text-primary font-bold",children:"Products"})}),e("li",{children:e("a",{href:"/regenerative-bali",children:"Regenerative Bali"})}),e("li",{children:e("a",{href:"/products#training",children:"Training & Consultancy"})}),e("li",{children:e("a",{href:"/products#sustainable",children:"Sustainable Event Management"})})]}),i("ul",{class:"grid gap-4",children:[e("li",{children:e("a",{href:"/events",class:"text-primary font-bold",children:"Events"})}),e("li",{children:e("a",{href:"/events#etw",children:"Eco Tourism Week"})}),e("li",{children:e("a",{href:"/events#calendar",children:"Event Calendar"})})]})]})]}),e("li",{children:e("a",{class:"menulinks",href:"https://member.ecotourismbali.com/directory",children:"Directory"})}),e("li",{children:e("a",{class:"menulinks",href:"/insights/",children:"Insights"})})]})})]}),i("div",{class:"gap-3 flex text-primary",children:[e("a",{href:"https://member.ecotourismbali.com/register",class:"whitespace-nowrap",children:"Register"}),e("span",{children:"|"}),e("a",{href:"https://member.ecotourismbali.com/login",class:" whitespace-nowrap",children:"Sign In"})]})]})]})}function G({children:s}){return i("div",{children:[e(O,{}),e("div",{className:"min-h-[75vh] container bg-white",children:e("div",{className:"py-12 px-3 lg:px-0",children:s})}),e(F,{})]})}export{G};
