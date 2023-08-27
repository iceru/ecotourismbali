import{s as he,c as ge,r as h,q as ye,W as _e,j as c,b as s,F as N,t as be}from"./app-e29e0c80.js";import{F as S,m as xe,q as Ne,r as Y,p as Fe}from"./index-70686e9e.js";import{l as Se}from"./lodash-12f00ca7.js";import{h as ve}from"./moment-fbc5633a.js";import{a as we}from"./moment-75a6035e.js";import{b as U}from"./BadgeColor-4e32f822.js";import{I as _}from"./InputLabel-fb02078f.js";import{T as D}from"./TextInput-81cb70c0.js";import{S as k}from"./SelectInput-483ac0c9.js";import{A as I}from"./id-6208e1ea.js";import{P as b}from"./PrimaryButton-bb49107b.js";import{M as ke}from"./MemberLayout-a79b0fa7.js";import je from"./TitleSection-d0384d5e.js";import{u as De}from"./useTranslation-088723e2.js";import"./react-responsive-82aeb7f9.js";const K="%[a-f0-9]{2}",q=new RegExp("("+K+")|([^%]+?)","gi"),B=new RegExp("("+K+")+","gi");function M(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],M(r),M(n))}function Ie(e){try{return decodeURIComponent(e)}catch{let t=e.match(q)||[];for(let r=1;r<t.length;r++)e=M(t,r).join(""),t=e.match(q)||[];return e}}function Me(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=B.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const a=Ie(r[0]);a!==r[0]&&(t[r[0]]=a)}r=B.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const a of n)e=e.replace(new RegExp(a,"g"),t[a]);return e}function Ce(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return Me(e)}}function V(e,t){if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||t==="")return[];const r=e.indexOf(t);return r===-1?[]:[e.slice(0,r),e.slice(r+t.length)]}function Ee(e,t){const r={};if(Array.isArray(t))for(const n of t){const a=Object.getOwnPropertyDescriptor(e,n);a!=null&&a.enumerable&&Object.defineProperty(r,n,a)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){const i=e[n];t(n,i,e)&&Object.defineProperty(r,n,a)}}return r}const Ae=e=>e==null,Le=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),C=Symbol("encodeFragmentIdentifier");function Oe(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[m(t,e),"[",a,"]"].join("")]:[...r,[m(t,e),"[",m(a,e),"]=",m(n,e)].join("")]};case"bracket":return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[m(t,e),"[]"].join("")]:[...r,[m(t,e),"[]=",m(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[m(t,e),":list="].join("")]:[...r,[m(t,e),":list=",m(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t=e.arrayFormat==="bracket-separator"?"[]=":"=";return r=>(n,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[m(r,e),t,m(a,e)].join("")]:[[n,m(a,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,m(t,e)]:[...r,[m(t,e),"=",m(n,e)].join("")]}}function Pe(e){let t;switch(e.arrayFormat){case"index":return(r,n,a)=>{if(t=/\[(\d*)]$/.exec(r),r=r.replace(/\[\d*]$/,""),!t){a[r]=n;return}a[r]===void 0&&(a[r]={}),a[r][t[1]]=n};case"bracket":return(r,n,a)=>{if(t=/(\[])$/.exec(r),r=r.replace(/\[]$/,""),!t){a[r]=n;return}if(a[r]===void 0){a[r]=[n];return}a[r]=[...a[r],n]};case"colon-list-separator":return(r,n,a)=>{if(t=/(:list)$/.exec(r),r=r.replace(/:list$/,""),!t){a[r]=n;return}if(a[r]===void 0){a[r]=[n];return}a[r]=[...a[r],n]};case"comma":case"separator":return(r,n,a)=>{const i=typeof n=="string"&&n.includes(e.arrayFormatSeparator),o=typeof n=="string"&&!i&&g(n,e).includes(e.arrayFormatSeparator);n=o?g(n,e):n;const d=i||o?n.split(e.arrayFormatSeparator).map(v=>g(v,e)):n===null?n:g(n,e);a[r]=d};case"bracket-separator":return(r,n,a)=>{const i=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!i){a[r]=n&&g(n,e);return}const o=n===null?[]:n.split(e.arrayFormatSeparator).map(d=>g(d,e));if(a[r]===void 0){a[r]=o;return}a[r]=[...a[r],...o]};default:return(r,n,a)=>{if(a[r]===void 0){a[r]=n;return}a[r]=[...[a[r]].flat(),n]}}}function W(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?Le(e):encodeURIComponent(e):e}function g(e,t){return t.decode?Ce(e):e}function z(e){return Array.isArray(e)?e.sort():typeof e=="object"?z(Object.keys(e)).sort((t,r)=>Number(t)-Number(r)).map(t=>e[t]):e}function G(e){const t=e.indexOf("#");return t!==-1&&(e=e.slice(0,t)),e}function Re(e){let t="";const r=e.indexOf("#");return r!==-1&&(t=e.slice(r)),t}function J(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):t.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function E(e){e=G(e);const t=e.indexOf("?");return t===-1?"":e.slice(t+1)}function A(e,t){t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t},W(t.arrayFormatSeparator);const r=Pe(t),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(const a of e.split("&")){if(a==="")continue;const i=t.decode?a.replace(/\+/g," "):a;let[o,d]=V(i,"=");o===void 0&&(o=i),d=d===void 0?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?d:g(d,t),r(g(o,t),d,n)}for(const[a,i]of Object.entries(n))if(typeof i=="object"&&i!==null)for(const[o,d]of Object.entries(i))i[o]=J(d,t);else n[a]=J(i,t);return t.sort===!1?n:(t.sort===!0?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((a,i)=>{const o=n[i];return o&&typeof o=="object"&&!Array.isArray(o)?a[i]=z(o):a[i]=o,a},Object.create(null))}function Q(e,t){if(!e)return"";t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t},W(t.arrayFormatSeparator);const r=o=>t.skipNull&&Ae(e[o])||t.skipEmptyString&&e[o]==="",n=Oe(t),a={};for(const[o,d]of Object.entries(e))r(o)||(a[o]=d);const i=Object.keys(a);return t.sort!==!1&&i.sort(t.sort),i.map(o=>{const d=e[o];return d===void 0?"":d===null?m(o,t):Array.isArray(d)?d.length===0&&t.arrayFormat==="bracket-separator"?m(o,t)+"[]":d.reduce(n(o),[]).join("&"):m(o,t)+"="+m(d,t)}).filter(o=>o.length>0).join("&")}function X(e,t){var a;t={decode:!0,...t};let[r,n]=V(e,"#");return r===void 0&&(r=e),{url:((a=r==null?void 0:r.split("?"))==null?void 0:a[0])??"",query:A(E(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:g(n,t)}:{}}}function Z(e,t){t={encode:!0,strict:!0,[C]:!0,...t};const r=G(e.url).split("?")[0]||"",n=E(e.url),a={...A(n,{sort:!1}),...e.query};let i=Q(a,t);i&&(i=`?${i}`);let o=Re(e.url);if(e.fragmentIdentifier){const d=new URL(r);d.hash=e.fragmentIdentifier,o=t[C]?d.hash:`#${e.fragmentIdentifier}`}return`${r}${i}${o}`}function ee(e,t,r){r={parseFragmentIdentifier:!0,[C]:!1,...r};const{url:n,query:a,fragmentIdentifier:i}=X(e,r);return Z({url:n,query:Ee(a,t),fragmentIdentifier:i},r)}function Te(e,t,r){const n=Array.isArray(t)?a=>!t.includes(a):(a,i)=>!t(a,i);return ee(e,n,r)}const He=Object.freeze(Object.defineProperty({__proto__:null,exclude:Te,extract:E,parse:A,parseUrl:X,pick:ee,stringify:Q,stringifyUrl:Z},Symbol.toStringTag,{value:"Module"}));(function(e,t){(function(r,n){n(typeof he=="function"?we:r.moment)})(ge,function(r){//! moment.js locale configuration
var n=r.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(a,i){if(a===12&&(a=0),i==="pagi")return a;if(i==="siang")return a>=11?a:a+12;if(i==="sore"||i==="malam")return a+12},meridiem:function(a,i,o){return a<11?"pagi":a<15?"siang":a<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}});return n})})();const $e=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0});function rt({member:e,scores:t,lastSession:r,business_type:n,expiredDate:a}){var T,H,$;const{t:i,i18n:o}=De(),[d,v]=h.useState(!1),[te,w]=h.useState(!1),[re,ne]=h.useState(),[j,ae]=h.useState(),[se,ie]=h.useState(),[x,le]=h.useState("Hotel"),ce=He.parse(location.search),{flash:L}=ye().props,O=[{label:"Green/Publish Rate IDR 0 - 1.500.000",value:2e6},{label:"Branch/Publish Rate IDR 1.500.001 - 3.000.000",value:6e6},{label:"Root/Publish Rate Above IDR 3.000.000",value:12e6}],P=[{label:"Access to Self Assessment",value:5e5},{label:"Annual Membership",value:15e5}],{data:F,setData:p,post:oe,processing:de,errors:f,reset:me}=_e({no_rooms:null,no_employees:null,no_outlets:null,business_type_id:null,total_payment:x==="Hotel"?O[0].value:P[0].value,city:e.city||"",province:e.province||""}),ue=sessionStorage.getItem("paid"),fe=()=>{let l=sessionStorage.getItem("snapToken");const u=y=>{snap.pay(y,{onSuccess:function(){v(!0),w(!1),sessionStorage.clear("snapToken"),sessionStorage.setItem("paid",!0),be.visit("/member/dashboard?newPayment=true")},onPending:function(){w(!0)},onError:function(){w(!1),sessionStorage.clear("snapToken")},onClose:function(){w(!0)}})};l?u(l):axios.post(route("member_payment.new_payment"),{}).then(function(y){sessionStorage.setItem("snapToken",y.data),u(y.data)})};h.useEffect(()=>{ce.newPayment&&v(!0),fetch("https://iceru.github.io/api-wilayah-indonesia/api/provinces.json").then(l=>l.json()).then(l=>{ne(l),R(j||l[0].id)})},[]),h.useEffect(()=>{R()},[j]),h.useEffect(()=>{x==="Restaurant"&&(p(l=>({...l,no_outlets:null})),p(l=>({...l,no_rooms:null})))},[x]);const R=l=>{fetch(`https://iceru.github.io/api-wilayah-indonesia/api/regencies/${l||j}.json`).then(u=>u.json()).then(u=>ie(u))},pe=l=>{l.preventDefault(),oe(route("member.store"),{onSuccess:()=>{me()}})};return c(ke,{children:[d||ue?s("div",{className:"px-4 py-3 bg-primary text-white rounded-md inline-flex mb-4",children:i("pay_complete")}):null,te&&s("div",{className:"px-4 py-3 bg-yellow-300 rounded-md inline-flex mb-4 transition",children:i("pay_pending")}),L.success&&s("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-3",children:s("span",{className:"inline",children:L.success})}),c("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[c(I,{children:[s(je,{title:"welcome_member",className:"mb-4"}),s("div",{children:c(b,{as:"link",href:route("member.profile"),className:"mb-4 !inline-block",color:"lightPrimary",children:[i("edit_profile"),s(S,{className:"ml-2",icon:xe})]})}),((T=e==null?void 0:e.status)==null?void 0:T.includes("active"))&&s("div",{children:c(b,{className:"!inline-block",as:"link",href:route("member.module.index"),color:"lightSecondary",children:[i("start_learning"),s(S,{icon:Ne,className:"ml-2"})]})})]}),s(I,{children:(H=e==null?void 0:e.status)!=null&&H.includes("active")?s(N,{children:e&&e.badge?c(N,{children:[c("h2",{className:"font-bold text-[20px] mb-4",children:[i("your_assessment"),s("span",{className:U(e.badge.name,"text")+" ml-1.5",children:e.badge.name})]}),c("div",{className:"flex items-center",children:[c("div",{className:"flex flex-col items-center mr-4  mb-1",children:[s("div",{children:s("img",{className:"max-h-[120px]",src:"/storage/badges/"+e.badge.image})}),c("div",{className:`font-bold mt-1 text-center whitespace-nowrap uppercase ${U(e.badge.name,"text")}`,children:[e.badge.name," Badge"]}),c("div",{className:"text-xs text-gray-500",children:["Expired: ",ve(a).locale(o.language).format("ll")]})]}),c("div",{className:"ml-2",children:[r&&c("div",{className:" mb-2",children:[s("span",{className:"font-bold",children:r.total_score})," ",s("span",{className:" uppercase",children:"Points"})]}),s("div",{className:"grid lg:grid-cols-2 gap-x-3",children:t==null?void 0:t.map(l=>{var u;return c("div",{className:"flex justify-center text-gray-500 text-sm mb-1",children:[s("div",{className:"capitalize",children:Se.lowerCase((u=l==null?void 0:l.assessment)==null?void 0:u.title).slice(0,11)}),s("div",{className:"mx-1",children:"-"}),s("div",{children:l==null?void 0:l.score})]})})})]})]})]}):c(N,{children:[s("h2",{className:"font-bold text-[20px] mb-4",children:i("no_assessment")}),s("div",{children:c(b,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[i("start_assessment"),s(S,{icon:Y,className:"ml-2"})]})})]})}):c("div",{children:[s("h2",{className:"font-bold text-[20px] mb-4",children:i("preview_member")}),c("div",{className:"grid gap-4",children:[s("div",{children:c(b,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[i("my_assessment"),s(S,{icon:Y,className:"ml-2"})]})}),s("div",{children:c(b,{color:"lightSecondary",as:"link",href:route("member.module.index"),children:[i("e_learning"),s(S,{icon:Fe,className:"ml-2"})]})})]})]})})]}),!(($=e==null?void 0:e.status)!=null&&$.includes("active"))&&c(I,{className:"flex flex-col items-center justify-center gap-4",children:[s("h2",{className:"font-bold text-xl",children:i("member_not_active")}),e.status==="payment"&&e.total_payment?c(N,{children:[s("p",{className:"text-sm",children:i("member_locked_text")}),c("div",{className:"flex justify-between w-full lg:w-2/3 items-center bg-lightSecondary bg-opacity-60 rounded-2xl p-6 mt-4",children:[c("div",{children:[s("p",{children:i("total_payment")}),s("h4",{className:"text-2xl font-bold",children:$e.format(e.total_payment)})]}),s(b,{className:"text-[16px]",onClick:()=>{var l;return(l=e==null?void 0:e.status)!=null&&l.includes("active")?null:fe()},children:i("member_locked_button")})]})]}):e.status==="waiting_approval"?s(N,{children:s("p",{children:i("member_not_approved")})}):c(N,{children:[s("p",{className:"mb-4",children:i("notify_admin_text")}),c("form",{onSubmit:pe,className:"w-full",children:[c("div",{className:"grid lg:grid-cols-2 gap-4 min-w-[50vw]",children:[c("div",{className:"block  items-center",children:[s("div",{className:"mb-2",children:s(_,{htmlFor:"total_payment",value:i("form_label_business_type")})}),c("div",{className:"",children:[s(k,{id:"business_type",name:"business_type",value:F.business_type_id,options:n,className:"w-full",labelData:"name",required:!0,valueData:"id",onChange:l=>{p("business_type_id",l.target.value);let u=l.target.selectedIndex;le(l.target[u].text)}}),f.business_type_id&&s("span",{className:"text-red-600",children:f.business_type_id})]})]}),c("div",{className:"flex flex-col gap-3",children:[s(_,{htmlFor:"provinces",value:i("provinces")}),s(k,{options:re,labelData:"name",valueData:"id",placeholder:"select_province",onChange:l=>{const u=l.nativeEvent.target.selectedIndex,y=l.nativeEvent.target[u].text;ae(l.target.value),p("province",y)}}),f.provinces&&s("span",{className:"text-red-600",children:f.provinces})]}),c("div",{className:"flex flex-col gap-3",children:[s(_,{htmlFor:"city",value:i("city")}),s(k,{options:se,labelData:"name",valueData:"id",placeholder:"select_city",onChange:l=>{const u=l.nativeEvent.target.selectedIndex,y=l.nativeEvent.target[u].text;p("city",y)}}),f.city&&s("span",{className:"text-red-600",children:f.city})]}),x==="Hotel"&&c("div",{className:"block  items-center",children:[s("div",{className:"mb-2",children:s(_,{htmlFor:"no_rooms",value:i("form_label_no_rooms")})}),c("div",{className:"",children:[s(D,{id:"no_rooms",name:"no_rooms",type:"number",min:0,value:F.no_rooms,className:"block w-full",isFocused:!0,onChange:l=>p("no_rooms",l.target.value)}),s("span",{className:"text-red-600",children:f.no_rooms})]})]}),x==="Hotel"&&c("div",{className:"block  items-center",children:[s("div",{className:"mb-2",children:s(_,{htmlFor:"no_outlet",value:i("form_label_no_outlet")})}),c("div",{className:"",children:[s(D,{id:"no_outlets",name:"no_outlets",required:!0,type:"number",min:0,value:F.no_outlets,className:"block w-full",isFocused:!0,onChange:l=>p("no_outlets",l.target.value)}),s("span",{className:"text-red-600",children:f.no_outlets})]})]}),c("div",{className:"block items-center",children:[s("div",{className:"mb-2",children:s(_,{htmlFor:"no_employees",value:i("form_label_no_employees")})}),c("div",{className:"",children:[s(D,{id:"no_employees",name:"no_employees",type:"number",required:!0,min:0,value:F.no_employees,className:"block w-full",isFocused:!0,onChange:l=>p("no_employees",l.target.value)}),s("span",{className:"text-red-600",children:f.no_employees})]})]}),c("div",{className:"block items-center",children:[s("div",{className:"mb-2",children:s(_,{htmlFor:"total_payment",value:i("form_label_total_payment")})}),c("div",{className:"",children:[s(k,{id:"total_payment",name:"total_payment",value:F.total_payment,options:x==="Hotel"?O:P,className:"w-full ",onChange:l=>p("total_payment",l.target.value)}),s("span",{className:"text-red-600",children:f.total_payment})]})]})]}),s(b,{color:"secondary",type:"submit",className:"flex justify-center mt-6 w-full",disabled:de,children:i("submit")})]})]})]})]})}export{rt as default};
