import{r as g,W as b,j as e,a as s,t as y}from"./app-9d038481.js";import{A as v}from"./id-fe319941.js";import{P as u}from"./PrimaryButton-a5401152.js";import{M as N}from"./MemberLayout-3007c61c.js";import _ from"./TitleSection-ee006701.js";import{u as j}from"./useTranslation-ecbbedb5.js";import"./logo-5e7252b7.js";import"./index-9d6ee548.js";import"./react-responsive-17c05ceb.js";function L({post_test:r,module:m,member:p}){const{t:a}=j(),[t,d]=g.useState(0),{data:P,setData:c,post:f,processing:S,errors:$,reset:w}=b({member_id:p.id,post_test_question_id:r[0].id,post_test_option_id:null}),x=i=>{i.preventDefault(),f(route("member.post-test.store"),{onSuccess:()=>{r.length>t+1?(d(t+1),c("post_test_question_id",r[t+1].id)):y.visit(route("member.module.result",m.id))}})};return e(N,{children:e(v,{children:s("div",{className:"grid gap-6",children:[e(_,{title:"e_learning"}),e("div",{className:"font-bold text-primary",children:a("module_learning",{number:m.id})}),e("div",{className:"text-center font-bold text-xl",children:a("post_test")}),e("div",{className:"flex justify-center gap-4",children:r==null?void 0:r.map((i,l)=>e("div",{className:`step w-full h-2 bg-lightPrimary rounded-2xl ${t===l?"bg-primary":""}`}))}),e("form",{onSubmit:x,children:r==null?void 0:r.map((i,l)=>{var o;return s("div",{className:`grid gap-4 ${t!==l?"hidden":""}`,children:[e("div",{className:"text-center text-primary font-bold",children:a("question",{number:l+1})}),e("div",{className:"text-center",children:i.question}),(o=i==null?void 0:i.post_test_option)==null?void 0:o.map((n,A)=>s("div",{className:"flex items-center px-5 py-3 rounded-3xl bg-lightPrimary bg-opacity-60",children:[e("input",{type:"radio",name:`question_${i.id}`,id:`option_${n.id}`,value:n.id,className:"mr-3 text-primary focus:ring-primary",onChange:h=>c("post_test_option_id",parseInt(h.target.value))}),e("label",{htmlFor:`option_${n.id}`,className:"w-full",children:n.title})]})),s("div",{className:"flex justify-center gap-4",children:[t>0&&e(u,{color:"gray",className:"min-w-[160px] flex justify-center",onClick:()=>d(t-1),children:a("back")}),e(u,{type:"submit",className:"min-w-[160px] flex justify-center",children:a("next")})]})]})})})]})})})}export{L as default};
