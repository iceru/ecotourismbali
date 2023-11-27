import{q as K,r as T,W as Q,j as l,a,F as X,b as Y}from"./app-124df35e.js";import{A as Z}from"./AdminSection-b1b34a44.js";import{A as ee}from"./AdminLayout-7615cf3e.js";import ae from"./BackTo-1f44830c.js";import{S as r}from"./SelectInput-dacc602a.js";import{P as u}from"./PrimaryButton-2c48eb7c.js";import{l as j}from"./lodash-7deec2af.js";import{m as te}from"./moment-b32e569f.js";import{b as L}from"./BadgeColor-da70af2b.js";import{T as E}from"./TextInput-932cfa0f.js";import{u as le}from"./useTranslation-682be00a.js";import"./logo-5e7252b7.js";import"./index-28a8d100.js";import"./id-410e5203.js";import"./react-responsive-e763e8a5.js";function be(){var x,b,w,N,y,C,D,k,S,I,R,A,B;const{member:e,categories:F,programs:$,verified_badges:M,remaining:z,dateAssessment:f,scores:p,lastSession:_,lastPayment:d}=K().props,{t:s}=le(),[n,h]=T.useState(!1),[g,O]=T.useState(e==null?void 0:e.status),{data:o,setData:c,post:P,processing:U,errors:ie,reset:W}=Q({category:(e==null?void 0:e.category_id)||"",program:e.program_id||"",verified_badge:e.verified_badge_id||"",total_payment:e.total_payment||"",status:(e==null?void 0:e.status)||null,invoice_no:(d==null?void 0:d.status_code)||null,invoice_item_text:(d==null?void 0:d.invoice_item_text)||null}),q=t=>{t.preventDefault(),P(route("admin.member.update",e.id),{onSuccess:()=>{W(),h(!1)}})};let V=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0});const G=[{label:"Rp1",value:1},{label:"Rp500.000",value:5e5},{label:"Rp1.500.000",value:15e5},{label:"Rp2.000.000",value:2e6},{label:"Rp6.000.000",value:6e6},{label:"Rp12.000.000",value:12e6}],H=[{label:"Inactive",value:""},{label:"Waiting Approval",value:"waiting_approval"},{label:"Payment",value:"payment"},{label:"Active",value:"active"}],i=(t,v)=>l("div",{className:"flex flex-wrap mb-6",children:[a("div",{className:"w-full lg:w-1/4 mb-2 lg:mb-0 pr-6",children:a("div",{className:"font-bold",children:s(t)})}),a("div",{className:"w-full lg:w-3/4",children:v||"-"})]}),J=()=>{Y({url:"/admin/member/invoice/"+e.id,method:"POST",responseType:"blob"}).then(t=>{const v=window.URL.createObjectURL(new Blob([t.data])),m=document.createElement("a");m.href=v,m.setAttribute("download",`invoice-${e.business_name}.pdf`),document.body.appendChild(m),m.click()})};return l(ee,{children:[a(ae,{link:"/admin/member/index",title:"back_to_list_members"}),a(Z,{children:l("div",{className:"flex mb-6 flex-wrap",children:[l("div",{className:"lg:w-4/5 pr-4",children:[l("div",{className:"flex flex-wrap items-center mb-6",children:[(e==null?void 0:e.image)&&a("img",{className:"mr-4 w-[100px]",src:`/storage/member/images/${e==null?void 0:e.image}`}),a("div",{className:"font-bold text-2xl",children:e==null?void 0:e.business_name})]}),l("div",{className:"flex gap-4",children:[a(u,{className:"mb-6",onClick:()=>h(!n),color:n?"gray":"primary",children:s(n?"close_edit_member":"edit_member")}),g.includes("active")||g==="payment"?a(u,{className:"mb-6",onClick:()=>J(),color:"secondary",children:"Download Invoice"}):null]}),l("form",{onSubmit:q,children:[n?l("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("status")}),a(r,{id:"status",name:"status",value:o.status,options:H,className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:t=>{c("status",t.target.value),O(t.target.value)}})]}):i("status",j.capitalize((x=e==null?void 0:e.status)==null?void 0:x.replace("_"," "))),n&&g==="payment"&&l(X,{children:[l("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("invoice_no")}),a(E,{id:"invoice_no",name:"invoice_no",value:o.invoice_no,className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:t=>c("invoice_no",t.target.value)})]}),l("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("invoice_item_text")}),a(E,{id:"invoice_item_text",name:"invoice_item_text",value:o.invoice_item_text,className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:t=>c("invoice_item_text",t.target.value)})]})]}),n&&!((b=e==null?void 0:e.status)!=null&&b.includes("active"))?l("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("total_payment")}),a(r,{id:"total_payment",name:"total_payment",value:o.total_payment,options:G,placeholder:"select_total_payment",className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:t=>c("total_payment",t.target.value)})]}):i("total_payment",V.format(e==null?void 0:e.total_payment)),i("email",e.user.email),i("address",e==null?void 0:e.address),i("phone",e.phone),i("website",e==null?void 0:e.website),i("business_name",e==null?void 0:e.business_name),i("business_type",(w=e==null?void 0:e.business_type)==null?void 0:w.name),n?l("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("category")}),a(r,{id:"category",name:"category",value:o.category,options:F,labelData:"name",placeholder:"select_category",valueData:"id",className:"lg:w-3/4 w-full mt-2 lg:mt-0",onChange:t=>c("category",t.target.value)})]}):i("category",(N=e==null?void 0:e.category)==null?void 0:N.name),n?l("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("program")}),a(r,{id:"program",name:"program",value:o.program,options:$,className:"lg:w-3/4 w-full mt-2 lg:mt-0",placeholder:"select_program",labelData:"name",valueData:"id",onChange:t=>c("program",t.target.value)})]}):i("program",(y=e==null?void 0:e.program)==null?void 0:y.name),i("assessment_attempt",z),f&&i("assessment_expire",te(f).format("LL")),i("badge",(C=e==null?void 0:e.badge)==null?void 0:C.name),n?l("div",{className:"flex flex-wrap items-center mb-6",children:[a("div",{className:"font-bold lg:w-1/4",children:s("verified_badge")}),a(r,{id:"verified_badge",name:"verified_badge",value:o.verified_badge,options:M,className:"lg:w-3/4 w-full mt-2 lg:mt-0",labelData:"name",placeholder:"select_verify_badge",valueData:"id",onChange:t=>c("verified_badge",t.target.value)})]}):i("verified_badge",(D=e==null?void 0:e.verified_badge)==null?void 0:D.name),i("description",e==null?void 0:e.description),n&&a(u,{type:"submit",className:"mt-4",disabled:U,children:s("submit")})]})]}),l("div",{className:"lg:w-1/5 mx-auto flex lg:block gap-12 sticky top-0 lg:border-l pl-4 mt-10 lg:mt-0",children:[(e==null?void 0:e.verified_badge)&&l("div",{className:"flex flex-col items-center text-primary uppercase mb-6 pb-4 lg:border-b",children:[a("div",{children:a("img",{className:"max-h-[120px]",src:"/storage/badges/"+((k=e==null?void 0:e.verified_badge)==null?void 0:k.image)})}),l("div",{className:`font-bold mt-1 text-center ${L((S=e==null?void 0:e.badge)==null?void 0:S.name,"text")}`,children:[(I=e==null?void 0:e.verified_badge)==null?void 0:I.name," Verified Badge"]})]}),e!=null&&e.badge?l("div",{children:[l("div",{className:"flex flex-col items-center  uppercase mb-1",children:[a("div",{children:a("img",{className:"max-h-[120px]",src:"/storage/badges/"+((R=e==null?void 0:e.badge)==null?void 0:R.image)})}),l("div",{className:`font-bold mt-1 ${L((A=e==null?void 0:e.badge)==null?void 0:A.name,"text")}`,children:[(B=e==null?void 0:e.badge)==null?void 0:B.name," Badge"]})]}),_&&l("div",{className:"text-center text-gray-500  text-xs mb-3",children:[a("span",{className:"font-bold",children:_.total_score})," ",a("span",{className:" uppercase",children:"Points"})]}),p==null?void 0:p.map(t=>l("div",{className:"flex justify-center text-gray-500 text-xs mb-1",children:[a("div",{className:"capitalize",children:j.lowerCase(t.assessment.title).slice(0,11)}),a("div",{className:"mx-1",children:"-"}),a("div",{children:t.score})]}))]}):a("div",{className:"bg-slate-600 text-white rounded-full px-3 py-1 font-bold inline-block",children:"No Badge"})]})]})})]})}export{be as default};
