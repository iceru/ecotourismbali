import{s as Q,c as X,r as _,q as Z,j as f,b as c,F as p,t as v}from"./app-a4e91474.js";import{F as P,m as ee,r as re}from"./index-de9d9d61.js";import{a as te}from"./moment-dc85fb5e.js";import{A as m}from"./id-cb219ac3.js";import{P as F}from"./PrimaryButton-a91844a5.js";import{M as ne}from"./MemberLayout-497a221a.js";import x from"./TitleSection-0af418aa.js";import ae from"./MemberBadge-76129aff.js";import ie from"./MemberDashboardForm-98f26ce2.js";import se from"./MemberGreenpal-c5084d7e.js";import{g as ce}from"./greenpal-f0e012ed.js";import{u as le}from"./useTranslation-02ba0876.js";import"./react-responsive-96a91928.js";import"./moment-fbc5633a.js";import"./lodash-e0103ec1.js";import"./BadgeColor-b06f7f40.js";import"./InputLabel-2c192eeb.js";import"./SelectInput-26aef7d9.js";import"./TextInput-c902ae71.js";const R="%[a-f0-9]{2}",C=new RegExp("("+R+")|([^%]+?)","gi"),T=new RegExp("("+R+")+","gi");function S(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;r=r||1;const t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],S(t),S(n))}function oe(e){try{return decodeURIComponent(e)}catch{let r=e.match(C)||[];for(let t=1;t<r.length;t++)e=S(r,t).join(""),r=e.match(C)||[];return e}}function fe(e){const r={"%FE%FF":"��","%FF%FE":"��"};let t=T.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{const a=oe(t[0]);a!==t[0]&&(r[t[0]]=a)}t=T.exec(e)}r["%C2"]="�";const n=Object.keys(r);for(const a of n)e=e.replace(new RegExp(a,"g"),r[a]);return e}function de(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return fe(e)}}function $(e,r){if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||r==="")return[];const t=e.indexOf(r);return t===-1?[]:[e.slice(0,t),e.slice(t+r.length)]}function ue(e,r){const t={};if(Array.isArray(r))for(const n of r){const a=Object.getOwnPropertyDescriptor(e,n);a!=null&&a.enumerable&&Object.defineProperty(t,n,a)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){const i=e[n];r(n,i,e)&&Object.defineProperty(t,n,a)}}return t}const pe=e=>e==null,me=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),N=Symbol("encodeFragmentIdentifier");function ge(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const a=t.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[",a,"]"].join("")]:[...t,[o(r,e),"[",o(a,e),"]=",o(n,e)].join("")]};case"bracket":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[]"].join("")]:[...t,[o(r,e),"[]=",o(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),":list="].join("")]:[...t,[o(r,e),":list=",o(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r=e.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[o(t,e),r,o(a,e)].join("")]:[[n,o(a,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,o(r,e)]:[...t,[o(r,e),"=",o(n,e)].join("")]}}function ye(e){let r;switch(e.arrayFormat){case"index":return(t,n,a)=>{if(r=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!r){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][r[1]]=n};case"bracket":return(t,n,a)=>{if(r=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"colon-list-separator":return(t,n,a)=>{if(r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"comma":case"separator":return(t,n,a)=>{const i=typeof n=="string"&&n.includes(e.arrayFormatSeparator),s=typeof n=="string"&&!i&&d(n,e).includes(e.arrayFormatSeparator);n=s?d(n,e):n;const l=i||s?n.split(e.arrayFormatSeparator).map(h=>d(h,e)):n===null?n:d(n,e);a[t]=l};case"bracket-separator":return(t,n,a)=>{const i=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!i){a[t]=n&&d(n,e);return}const s=n===null?[]:n.split(e.arrayFormatSeparator).map(l=>d(l,e));if(a[t]===void 0){a[t]=s;return}a[t]=[...a[t],...s]};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[...[a[t]].flat(),n]}}}function U(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function o(e,r){return r.encode?r.strict?me(e):encodeURIComponent(e):e}function d(e,r){return r.decode?de(e):e}function H(e){return Array.isArray(e)?e.sort():typeof e=="object"?H(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function J(e){const r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function he(e){let r="";const t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function Y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function w(e){e=J(e);const r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function M(e,r){r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...r},U(r.arrayFormatSeparator);const t=ye(r),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(const a of e.split("&")){if(a==="")continue;const i=r.decode?a.replace(/\+/g," "):a;let[s,l]=$(i,"=");s===void 0&&(s=i),l=l===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?l:d(l,r),t(d(s,r),l,n)}for(const[a,i]of Object.entries(n))if(typeof i=="object"&&i!==null)for(const[s,l]of Object.entries(i))i[s]=Y(l,r);else n[a]=Y(i,r);return r.sort===!1?n:(r.sort===!0?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((a,i)=>{const s=n[i];return s&&typeof s=="object"&&!Array.isArray(s)?a[i]=H(s):a[i]=s,a},Object.create(null))}function G(e,r){if(!e)return"";r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r},U(r.arrayFormatSeparator);const t=s=>r.skipNull&&pe(e[s])||r.skipEmptyString&&e[s]==="",n=ge(r),a={};for(const[s,l]of Object.entries(e))t(s)||(a[s]=l);const i=Object.keys(a);return r.sort!==!1&&i.sort(r.sort),i.map(s=>{const l=e[s];return l===void 0?"":l===null?o(s,r):Array.isArray(l)?l.length===0&&r.arrayFormat==="bracket-separator"?o(s,r)+"[]":l.reduce(n(s),[]).join("&"):o(s,r)+"="+o(l,r)}).filter(s=>s.length>0).join("&")}function q(e,r){var a;r={decode:!0,...r};let[t,n]=$(e,"#");return t===void 0&&(t=e),{url:((a=t==null?void 0:t.split("?"))==null?void 0:a[0])??"",query:M(w(e),r),...r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:d(n,r)}:{}}}function B(e,r){r={encode:!0,strict:!0,[N]:!0,...r};const t=J(e.url).split("?")[0]||"",n=w(e.url),a={...M(n,{sort:!1}),...e.query};let i=G(a,r);i&&(i=`?${i}`);let s=he(e.url);if(e.fragmentIdentifier){const l=new URL(t);l.hash=e.fragmentIdentifier,s=r[N]?l.hash:`#${e.fragmentIdentifier}`}return`${t}${i}${s}`}function K(e,r,t){t={parseFragmentIdentifier:!0,[N]:!1,...t};const{url:n,query:a,fragmentIdentifier:i}=q(e,t);return B({url:n,query:ue(a,r),fragmentIdentifier:i},t)}function _e(e,r,t){const n=Array.isArray(r)?a=>!r.includes(a):(a,i)=>!r(a,i);return K(e,n,t)}const Fe=Object.freeze(Object.defineProperty({__proto__:null,exclude:_e,extract:w,parse:M,parseUrl:q,pick:K,stringify:G,stringifyUrl:B},Symbol.toStringTag,{value:"Module"}));(function(e,r){(function(t,n){n(typeof Q=="function"?te:t.moment)})(X,function(t){//! moment.js locale configuration
var n=t.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(a,i){if(a===12&&(a=0),i==="pagi")return a;if(i==="siang")return a>=11?a:a+12;if(i==="sore"||i==="malam")return a+12},meridiem:function(a,i,s){return a<11?"pagi":a<15?"siang":a<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}});return n})})();const xe=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0});function Ue({member:e,scores:r,lastSession:t,business_type:n,expiredDate:a}){var O,k,b,A,L,D,E;const{t:i}=le(),[s,l]=_.useState(!1),[h,g]=_.useState(!1),V=Fe.parse(location.search),{flash:j}=Z().props,W=sessionStorage.getItem("paid"),z=()=>{let u=sessionStorage.getItem("snapToken");const I=y=>{snap.pay(y,{onSuccess:function(){l(!0),g(!1),sessionStorage.clear("snapToken"),sessionStorage.setItem("paid",!0),v.visit("/member/dashboard?newPayment=true")},onPending:function(){g(!0)},onError:function(){g(!1),sessionStorage.clear("snapToken")},onClose:function(){g(!0)}})};u?I(u):axios.post(route("member_payment.new_payment"),{}).then(function(y){sessionStorage.setItem("snapToken",y.data),I(y.data)})};return _.useEffect(()=>{V.newPayment&&l(!0)},[]),f(ne,{children:[s||W?c("div",{className:"px-4 py-3 bg-primary text-white rounded-md inline-flex mb-4",children:i("pay_complete")}):null,h&&c("div",{className:"px-4 py-3 bg-yellow-300 rounded-md inline-flex mb-4 transition",children:i("pay_pending")}),j.success&&c("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-3",children:c("span",{className:"inline",children:j.success})}),f("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[((O=e==null?void 0:e.program)==null?void 0:O.name)==="Green Pal"&&f(p,{children:[f(m,{children:[c(x,{title:"welcome_greenpal",className:"mb-4"}),f("div",{className:"flex",children:[c("img",{src:ce,className:"h-[120px] mr-4",alt:"Green Pal"}),c("p",{className:"text-sm text-justify mb-2",children:i("greenpal_info")})]})]}),f(m,{children:[c(x,{title:"greenpal_community",className:"mb-4"}),c("p",{className:"text-sm text-justify mb-2",children:i("greenpal_text")}),c("p",{className:"text-sm text-justify",children:i("greenpal_text_2")})]})]}),((k=e==null?void 0:e.program)==null?void 0:k.name)!=="Green Pal"&&f(p,{children:[f(m,{children:[c(x,{title:"welcome_member",className:"mb-4"}),c("div",{children:f(F,{as:"link",href:route("member.profile"),className:"mb-4 !inline-block",color:"lightPrimary",children:[i("edit_profile"),c(P,{className:"ml-2",icon:ee})]})}),((b=e==null?void 0:e.status)==null?void 0:b.includes("active"))&&((A=e==null?void 0:e.program)==null?void 0:A.name)!=="Green Pal"&&c("div",{children:f(F,{className:"!inline-block",as:"link",href:route("member.module.index"),color:"lightSecondary",children:[i("start_learning"),c(P,{icon:re,className:"ml-2"})]})})]}),c(m,{children:c(ae,{member:e,lastSession:t,scores:r,expiredDate:a})})]})]}),!((L=e==null?void 0:e.status)!=null&&L.includes("active"))&&f(m,{className:"flex flex-col items-center justify-center gap-4",children:[((D=e==null?void 0:e.program)==null?void 0:D.name)!=="Green Pal"&&c("h2",{className:"font-bold text-xl",children:i("member_not_active")}),(e==null?void 0:e.status)==="payment"&&(e!=null&&e.total_payment)?f(p,{children:[c("p",{className:"text-sm",children:i("member_locked_text")}),f("div",{className:"flex justify-between w-full lg:w-2/3 items-center bg-lightSecondary bg-opacity-60 rounded-2xl p-6 mt-4",children:[f("div",{children:[c("p",{children:i("total_payment")}),c("h4",{className:"text-2xl font-bold",children:xe.format(e==null?void 0:e.total_payment)})]}),c(F,{className:"text-[16px]",onClick:()=>{var u;return(u=e==null?void 0:e.status)!=null&&u.includes("active")?null:z()},children:i("member_locked_button")})]})]}):(e==null?void 0:e.status)==="waiting_approval"?c(p,{children:c("p",{children:i("member_not_approved")})}):c(p,{children:((E=e==null?void 0:e.program)==null?void 0:E.name)!=="Green Pal"?c(ie,{business_type:n,member:e}):c(se,{member:e})})]})]})}export{Ue as default};
