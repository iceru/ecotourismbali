import{q as O,r as R,W as Q,j as t,a,F as U}from"./app-291fdfab.js";import{A as X}from"./AdminSection-b1251a5a.js";import{A as Y}from"./AdminLayout-596b7b7a.js";import Z from"./BackTo-7d4efde4.js";import{S as r}from"./SelectInput-56aaa869.js";import{P as A}from"./PrimaryButton-de3f4291.js";import{l as B}from"./lodash-1a7c7510.js";import{m as ee}from"./moment-c4ae3a9b.js";import{b as j}from"./BadgeColor-c4944602.js";import{T as F}from"./TextInput-cd861fce.js";import{u as ae}from"./useTranslation-f3f0dc05.js";import"./logo-5e7252b7.js";import"./index-c03c0b59.js";import"./id-410e5203.js";import"./react-responsive-e72b2278.js";function xe(){var u,f,_,x,h,N,b,w,y,D,C,S,k,I;const{member:e,categories:T,programs:E,verified_badges:L,remaining:M,dateAssessment:g,scores:m,lastSession:p,lastPayment:d}=O().props,{t:s}=ae(),[n,v]=R.useState(!1),[$,z]=R.useState(e==null?void 0:e.status),{data:o,setData:c,post:W,processing:q,errors:te,reset:P}=Q({category:(e==null?void 0:e.category_id)||"",program:e.program_id||"",verified_badge:e.verified_badge_id||"",total_payment:e.total_payment||"",status:(e==null?void 0:e.status)||null,invoice_no:(d==null?void 0:d.status_code)||null,invoice_item_text:(d==null?void 0:d.invoice_item_text)||null}),V=l=>{l.preventDefault(),W(route("admin.member.update",e.id),{onSuccess:()=>{P(),v(!1)}})};let G=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0});const H=[{label:"Rp1",value:1},{label:"Rp500.000",value:5e5},{label:"Rp1.500.000",value:15e5},{label:"Rp2.000.000",value:2e6},{label:"Rp6.000.000",value:6e6},{label:"Rp12.000.000",value:12e6}],J=[{label:"Inactive",value:"inactive"},{label:"Waiting Approval",value:"waiting_approval"},{label:"Payment",value:"payment"}],i=(l,K)=>t("div",{className:"flex flex-wrap mb-6",children:[a("div",{className:"w-full lg:w-1/4 mb-2 lg:mb-0 pr-6",children:a("div",{className:"font-bold",children:s(l)})}),a("div",{className:"w-full lg:w-3/4",children:K||"-"})]});return t(Y,{children:[a(Z,{link:"/admin/member/index",title:"back_to_list_members"}),a(X,{children:t("div",{className:"flex mb-6 flex-wrap",children:[t("div",{className:"lg:w-4/5 pr-4",children:[t("div",{className:"flex flex-wrap items-center mb-6",children:[(e==null?void 0:e.image)&&a("img",{className:"mr-4 w-[100px]",src:`/storage/member/images/${e==null?void 0:e.image}`}),a("div",{className:"font-bold text-2xl",children:e==null?void 0:e.business_name})]}),a(A,{className:"mb-6",onClick:()=>v(!n),color:n?"gray":"primary",children:s(n?"close_edit_member":"edit_member")}),t("form",{onSubmit:V,children:[n&&!((u=e==null?void 0:e.status)!=null&&u.includes("active"))?t("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("status")}),a(r,{id:"status",name:"status",value:o.status,options:J,className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:l=>{c("status",l.target.value),z(l.target.value)}})]}):i("status",B.capitalize((f=e==null?void 0:e.status)==null?void 0:f.replace("_"," "))),n&&$==="payment"&&t(U,{children:[t("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("invoice_no")}),a(F,{id:"invoice_no",name:"invoice_no",value:o.invoice_no,className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:l=>c("invoice_no",l.target.value)})]}),t("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("invoice_item_text")}),a(F,{id:"invoice_item_text",name:"invoice_item_text",value:o.invoice_item_text,className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:l=>c("invoice_item_text",l.target.value)})]})]}),n&&!((_=e==null?void 0:e.status)!=null&&_.includes("active"))?t("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("total_payment")}),a(r,{id:"total_payment",name:"total_payment",value:o.total_payment,options:H,placeholder:"select_total_payment",className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:l=>c("total_payment",l.target.value)})]}):i("total_payment",G.format(e==null?void 0:e.total_payment)),i("email",e.user.email),i("address",e==null?void 0:e.address),i("phone",e.phone),i("website",e==null?void 0:e.website),i("business_name",e==null?void 0:e.business_name),i("business_type",(x=e==null?void 0:e.business_type)==null?void 0:x.name),n?t("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("category")}),a(r,{id:"category",name:"category",value:o.category,options:T,labelData:"name",placeholder:"select_category",valueData:"id",className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:l=>c("category",l.target.value)})]}):i("category",(h=e==null?void 0:e.category)==null?void 0:h.name),n?t("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("program")}),a(r,{id:"program",name:"program",value:o.program,options:E,className:"lg:w-3/4 w-full mt-2 lg:mt-0",placeholder:"select_program",labelData:"name",valueData:"id",onChange:l=>c("program",l.target.value)})]}):i("program",(N=e==null?void 0:e.program)==null?void 0:N.name),i("assessment_attempt",M),g&&i("assessment_expire",ee(g).format("LL")),i("badge",(b=e==null?void 0:e.badge)==null?void 0:b.name),n?t("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("verified_badge")}),a(r,{id:"verified_badge",name:"verified_badge",value:o.verified_badge,options:L,className:"lg:w-3/4 w-full mt-2 lg:mt-0",labelData:"name",placeholder:"select_verify_badge",valueData:"id",onChange:l=>c("verified_badge",l.target.value)})]}):i("verified_badge",(w=e==null?void 0:e.verified_badge)==null?void 0:w.name),i("description",e==null?void 0:e.description),n&&a(A,{type:"submit",className:"mt-4",disabled:q,children:s("submit")})]})]}),t("div",{className:"lg:w-1/5 mx-auto flex lg:block gap-12 sticky top-0 lg:border-l pl-4 mt-10 lg:mt-0",children:[(e==null?void 0:e.verified_badge)&&t("div",{className:"flex flex-col items-center text-primary uppercase mb-6 pb-4 lg:border-b",children:[a("div",{children:a("img",{className:"max-h-[120px]",src:"/storage/badges/"+((y=e==null?void 0:e.verified_badge)==null?void 0:y.image)})}),t("div",{className:`font-bold mt-1 text-center ${j((D=e==null?void 0:e.badge)==null?void 0:D.name,"text")}`,children:[(C=e==null?void 0:e.verified_badge)==null?void 0:C.name," Verified Badge"]})]}),e!=null&&e.badge?t("div",{children:[t("div",{className:"flex flex-col items-center  uppercase mb-1",children:[a("div",{children:a("img",{className:"max-h-[120px]",src:"/storage/badges/"+((S=e==null?void 0:e.badge)==null?void 0:S.image)})}),t("div",{className:`font-bold mt-1 ${j((k=e==null?void 0:e.badge)==null?void 0:k.name,"text")}`,children:[(I=e==null?void 0:e.badge)==null?void 0:I.name," Badge"]})]}),p&&t("div",{className:"text-center text-gray-500  text-xs mb-3",children:[a("span",{className:"font-bold",children:p.total_score})," ",a("span",{className:" uppercase",children:"Points"})]}),m==null?void 0:m.map(l=>t("div",{className:"flex justify-center text-gray-500 text-xs mb-1",children:[a("div",{className:"capitalize",children:B.lowerCase(l.assessment.title).slice(0,11)}),a("div",{className:"mx-1",children:"-"}),a("div",{children:l.score})]}))]}):a("div",{className:"bg-slate-600 text-white rounded-full px-3 py-1 font-bold inline-block",children:"No Badge"})]})]})})]})}export{xe as default};
