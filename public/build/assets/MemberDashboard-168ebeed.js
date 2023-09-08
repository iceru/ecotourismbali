import{s as H,c as I,r as m,q as J,j as t,b as a,F as c,t as G}from"./app-b3e7b24a.js";import{F as P,m as A,r as C}from"./index-48a26c0a.js";import{q as E}from"./base-e8aaf39e.js";import{a as R}from"./moment-85edb44c.js";import{A as d}from"./AdminSection-ad67b7c2.js";import{P as _}from"./PrimaryButton-f21c74b8.js";import{M as q}from"./MemberLayout-57f42366.js";import f from"./TitleSection-20d3c454.js";import K from"./MemberBadge-6802570e.js";import B from"./MemberDashboardForm-ca89f2df.js";import O from"./MemberGreenpal-3d8d6c19.js";import{g as W}from"./greenpal-f0e012ed.js";import{u as U}from"./useTranslation-fabd3578.js";import"./id-410e5203.js";import"./react-responsive-f4fa1de5.js";import"./moment-fbc5633a.js";import"./lodash-169a732c.js";import"./BadgeColor-810b1b2c.js";import"./InputLabel-e9916b13.js";import"./SelectInput-b698be60.js";import"./TextInput-8038c63a.js";(function(e,g){(function(o,l){l(typeof H=="function"?R:o.moment)})(I,function(o){//! moment.js locale configuration
var l=o.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(n,i){if(n===12&&(n=0),i==="pagi")return n;if(i==="siang")return n>=11?n:n+12;if(i==="sore"||i==="malam")return n+12},meridiem:function(n,i,s){return n<11?"pagi":n<15?"siang":n<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}});return l})})();const z=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0});function fe({member:e,scores:g,lastSession:o,business_type:l,expiredDate:n,categories:i}){var x,M,k,S,N,v,L;const{t:s}=U(),[D,h]=m.useState(!1),[Y,p]=m.useState(!1),T=E.parse(location.search),{flash:y}=J().props,j=sessionStorage.getItem("paid"),F=()=>{let r=sessionStorage.getItem("snapToken");const w=u=>{snap.pay(u,{onSuccess:function(){h(!0),p(!1),sessionStorage.clear("snapToken"),sessionStorage.setItem("paid",!0),G.visit("/member/dashboard?newPayment=true")},onPending:function(){p(!0)},onError:function(){p(!1),sessionStorage.clear("snapToken")},onClose:function(){p(!0)}})};r?w(r):axios.post(route("member_payment.new_payment"),{}).then(function(u){sessionStorage.setItem("snapToken",u.data),w(u.data)})};return m.useEffect(()=>{T.newPayment&&h(!0)},[]),t(q,{children:[D||j?a("div",{className:"px-4 py-3 bg-primary text-white rounded-md inline-flex mb-4",children:s("pay_complete")}):null,Y&&a("div",{className:"px-4 py-3 bg-yellow-300 rounded-md inline-flex mb-4 transition",children:s("pay_pending")}),y.success&&a("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-3",children:a("span",{className:"inline",children:y.success})}),t("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[((x=e==null?void 0:e.program)==null?void 0:x.name)==="Green Pal"&&t(c,{children:[t(d,{children:[a(f,{title:"welcome_greenpal",className:"mb-4"}),t("div",{className:"flex",children:[a("img",{src:W,className:"h-[120px] mr-4",alt:"Green Pal"}),a("p",{className:"text-sm text-justify mb-2",children:s("greenpal_info")})]})]}),t(d,{children:[a(f,{title:"greenpal_community",className:"mb-4"}),a("p",{className:"text-sm text-justify mb-2",children:s("greenpal_text")}),a("p",{className:"text-sm text-justify",children:s("greenpal_text_2")})]})]}),((M=e==null?void 0:e.program)==null?void 0:M.name)!=="Green Pal"&&t(c,{children:[t(d,{children:[a(f,{title:"welcome_member",className:"mb-4"}),a("div",{children:t(_,{as:"link",href:route("member.profile"),className:"mb-4 !inline-block",color:"lightPrimary",children:[s("edit_profile"),a(P,{className:"ml-2",icon:A})]})}),((k=e==null?void 0:e.status)==null?void 0:k.includes("active"))&&((S=e==null?void 0:e.program)==null?void 0:S.name)!=="Green Pal"&&a("div",{children:t(_,{className:"!inline-block",as:"link",href:route("member.module.index"),color:"lightSecondary",children:[s("start_learning"),a(P,{icon:C,className:"ml-2"})]})})]}),a(d,{children:a(K,{member:e,lastSession:o,scores:g,expiredDate:n})})]})]}),!((N=e==null?void 0:e.status)!=null&&N.includes("active"))&&t(d,{className:"flex flex-col items-center justify-center gap-4",children:[((v=e==null?void 0:e.program)==null?void 0:v.name)!=="Green Pal"&&a("h2",{className:"font-bold text-xl",children:s("member_not_active")}),(e==null?void 0:e.status)==="payment"&&(e!=null&&e.total_payment)?t(c,{children:[a("p",{className:"text-sm",children:s("member_locked_text")}),t("div",{className:"flex justify-between w-full lg:w-2/3 items-center bg-lightSecondary bg-opacity-60 rounded-2xl p-6 mt-4",children:[t("div",{children:[a("p",{children:s("total_payment")}),a("h4",{className:"text-2xl font-bold",children:z.format(e==null?void 0:e.total_payment)})]}),a(_,{className:"text-[16px]",onClick:()=>{var r;return(r=e==null?void 0:e.status)!=null&&r.includes("active")?null:F()},children:s("member_locked_button")})]})]}):(e==null?void 0:e.status)==="waiting_approval"?a(c,{children:a("p",{children:s("member_not_approved")})}):a(c,{children:((L=e==null?void 0:e.program)==null?void 0:L.name)!=="Green Pal"?a(B,{business_type:l,member:e}):a(O,{member:e,categories:i})})]})]})}export{fe as default};
