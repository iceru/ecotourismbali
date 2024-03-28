import{r as m,q as A,W as L,y as T,a as e,j as l}from"./app-985c7907.js";import{A as b}from"./AdminSection-ec47c0ce.js";import{I as c}from"./InputLabel-796633c2.js";import{M}from"./MemberLayout-4f95a124.js";import{T as d}from"./TextInput-c22d7f28.js";import{B}from"./Button-74ae847b.js";import{h as O}from"./moment-fbc5633a.js";import{S as h}from"./SelectInput-0f139266.js";import{u as U}from"./useTranslation-42b99a75.js";import"./index-033d355d.js";import"./id-410e5203.js";import"./no-image-91387054.js";import"./react-responsive-955be2d4.js";function Z({categories:x}){var y,f;const{t:n}=U(),[N,w]=m.useState(),[p,F]=m.useState(),[C,j]=m.useState(),[v,S]=m.useState(!1),{member:a,remaining:g,dateAssessment:D}=A().props,{data:i,setData:o,post:k,errors:t}=L({business_name:(a==null?void 0:a.business_name)||"",company_name:(a==null?void 0:a.company_name)||"",sister_company:(a==null?void 0:a.sister_company)||"",legal_identity:(a==null?void 0:a.legal_identity)||"",city:(a==null?void 0:a.city)||"",province:(a==null?void 0:a.province)||"",address:(a==null?void 0:a.address)||"",website:(a==null?void 0:a.website)||"",name:((y=a==null?void 0:a.user)==null?void 0:y.name)||"",job_title:(a==null?void 0:a.job_title)||"",phone:(a==null?void 0:a.phone)||"",email:((f=a==null?void 0:a.user)==null?void 0:f.email)||"",business_type_id:(a==null?void 0:a.business_type_id)||"",category:(a==null?void 0:a.category_id)||""});m.useEffect(()=>{var s;(s=a==null?void 0:a.status)!=null&&s.includes("active")||T.visit(route("member.dashboard"))},[]);const E=s=>{s.preventDefault(),k(route("member.assessment.store",a.id),{})};m.useEffect(()=>{fetch("https://iceru.github.io/api-wilayah-indonesia/api/provinces.json").then(s=>s.json()).then(s=>{w(s);let r;i!=null&&i.province&&(r=s.find(u=>u.name===(i==null?void 0:i.province))),_(p||r.id||s[0].id)})},[]),m.useEffect(()=>{p&&_(p)},[p]);const _=s=>{fetch(`https://iceru.github.io/api-wilayah-indonesia/api/regencies/${s||p}.json`).then(r=>r.json()).then(r=>j(r))},I=[{label:"No",value:!1},{label:"Yes",value:!0}],P=[{label:"PT",value:"PT"},{label:"UD",value:"UD"},{label:"CV",value:"CV"},{label:"PMA",value:"PMA"},{label:"Others",value:"Others"}];return e(M,{children:g>0?l(b,{className:"grid gap-8",children:[e("h3",{className:"uppercase text-lg font-bold text-center",children:n("business_info")}),l("form",{onSubmit:E,children:[l("div",{className:"grid lg:grid-cols-2 gap-6",children:[l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"business_name",value:n("label_business_name")}),e(d,{id:"business_name",name:"business_name",value:i.business_name,className:"block w-full",isFocused:!0,onChange:s=>o("business_name",s.target.value)}),t.business_name&&e("span",{className:"text-red-600",children:t.business_name})]}),l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"company_name",value:n("label_company_name")}),e(d,{id:"company_name",name:"company_name",value:i.company_name,className:"block w-full",isFocused:!0,onChange:s=>o("company_name",s.target.value)}),t.company_name&&e("span",{className:"text-red-600",children:t.company_name})]}),l("div",{className:"flex flex-col gap-3",children:[e(c,{htmlFor:"legal_identity",value:n("legal_identity")}),e(h,{options:P,placeholder:"select_legal_identity",value:i.legal_identity,onChange:s=>{o("legal_identity",s.target.value)}}),t.category&&e("span",{className:"text-red-600",children:t.category})]}),l("div",{className:"flex flex-col gap-3",children:[e(c,{htmlFor:"category",value:n("category")}),e(h,{options:x,labelData:"name",valueData:"id",placeholder:"select_category",value:i.category,onChange:s=>{o("category",s.target.value)}}),t.category&&e("span",{className:"text-red-600",children:t.category})]}),l("div",{className:"flex flex-col gap-3",children:[e(c,{htmlFor:"isSisterCompany",value:n("label_is_sister_company")}),e(h,{options:I,onChange:()=>{S(!v)}})]}),v&&l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"sister_company",value:n("label_sister_company")}),e(d,{id:"sister_company",name:"sister_company",value:i.sister_company,className:"block w-full",isFocused:!0,onChange:s=>o("sister_company",s.target.value)}),t.sister_company&&e("span",{className:"text-red-600",children:t.sister_company})]}),l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"website",value:n("label_website")}),e(d,{id:"website",name:"website",value:i.website,className:"block w-full",isFocused:!0,rows:8,onChange:s=>o("website",s.target.value)}),t.website&&e("span",{className:"text-red-600",children:t.website})]}),l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"name",value:n("label_name")}),e(d,{id:"name",name:"name",value:i.name,className:"block w-full",isFocused:!0,rows:8,onChange:s=>o("name",s.target.value)}),t.name&&e("span",{className:"text-red-600",children:t.name})]}),l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"job_title",value:n("label_job_title")}),e(d,{id:"job_title",name:"job_title",value:i.job_title,className:"block w-full",isFocused:!0,rows:8,onChange:s=>o("job_title",s.target.value)}),t.job_title&&e("span",{className:"text-red-600",children:t.job_title})]}),l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"email",value:n("label_email")}),e(d,{id:"email",name:"email",value:i.email,className:"block w-full",isFocused:!0,rows:8,onChange:s=>o("email",s.target.value)}),t.email&&e("span",{className:"text-red-600",children:t.email})]}),l("div",{className:"grid gap-3",children:[e(c,{htmlFor:"phone",value:n("label_phone")}),e(d,{id:"phone",name:"phone",value:i.phone,className:"block w-full",isFocused:!0,type:"tel",onChange:s=>o("phone",s.target.value)}),t.phone&&e("span",{className:"text-red-600",children:t.phone})]})]}),l("div",{className:"mt-6 pt-6 border-t",children:[e("div",{className:"text-lg font-bold mb-3 text-center",children:n("address")}),l("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[l("div",{className:"flex flex-col gap-3",children:[e(c,{htmlFor:"provinces",value:n("provinces")}),e(h,{options:N,labelData:"name",valueData:"id",placeholder:"select_province",selectedLabel:i.province,onChange:s=>{const r=s.nativeEvent.target.selectedIndex,u=s.nativeEvent.target[r].text;F(s.target.value),o("province",u)}}),t.provinces&&e("span",{className:"text-red-600",children:t.provinces})]}),l("div",{className:"flex flex-col gap-3",children:[e(c,{htmlFor:"city",value:n("city")}),e(h,{options:C,labelData:"name",valueData:"id",placeholder:"select_city",selectedLabel:i.city,onChange:s=>{const r=s.nativeEvent.target.selectedIndex,u=s.nativeEvent.target[r].text;o("city",u)}}),t.city&&e("span",{className:"text-red-600",children:t.city})]})]}),l("div",{className:"flex flex-col gap-3",children:[e(c,{htmlFor:"address",value:n("address")}),e(d,{id:"address",name:"address",value:i.address,className:"block w-full",isFocused:!0,onChange:s=>o("address",s.target.value)}),t.address&&e("span",{className:"text-red-600",children:t.address})]})]}),e(B,{className:"py-3 mt-6 w-full",children:e("div",{className:"w-full",children:n("next")})})]})]}):l(b,{className:"grid gap-6",children:[e("div",{className:"px-4 py-3 bg-red-300 rounded-md inline-flex",children:n("not_eligible_assessment",{number:g||0})}),e("div",{className:"text-center text-lg",children:n("cant_assessment")}),e("div",{className:"text-center text-2xl text-primary",children:O(D).format("LL")})]})})}export{Z as default};