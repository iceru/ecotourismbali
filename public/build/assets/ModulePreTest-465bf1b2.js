import{r as g,W as b,j as e,a as s,t as y}from"./app-57152477.js";import{A as v}from"./id-9fb793ba.js";import{P as u}from"./PrimaryButton-418e0c93.js";import{M as N}from"./MemberLayout-dd12d806.js";import _ from"./TitleSection-52a10389.js";import{u as j}from"./useTranslation-3aff53ba.js";import"./index-f26b8ad5.js";import"./react-responsive-63dfa4ad.js";function I({pre_test:i,module:m,member:p}){const{t:a}=j(),[t,d]=g.useState(0),{data:P,setData:o,post:f,processing:S,errors:$,reset:w}=b({member_id:p.id,pre_test_question_id:i[0].id||null,pre_test_option_id:null}),x=r=>{r.preventDefault(),f(route("member.pre-test.store"),{onSuccess:()=>{i.length>t+1?(d(t+1),o("pre_test_question_id",i[t+1].id)):y.visit(route("member.module.detail",m.id))}})};return e(N,{children:e(v,{children:s("div",{className:"grid gap-6",children:[e(_,{title:"e_learning"}),e("div",{className:"font-bold text-primary",children:a("module_learning",{number:m.id})}),e("div",{className:"text-center font-bold text-xl",children:a("pre_test")}),e("div",{className:"flex justify-center gap-4",children:i==null?void 0:i.map((r,l)=>e("div",{className:`step w-full h-2 bg-lightPrimary rounded-2xl ${t===l?"bg-primary":""}`}))}),e("form",{onSubmit:x,children:i==null?void 0:i.map((r,l)=>{var c;return s("div",{className:`grid gap-4 ${t!==l?"hidden":""}`,children:[e("div",{className:"text-center text-primary font-bold",children:a("question",{number:l+1})}),e("div",{className:"text-center",children:r.question}),(c=r==null?void 0:r.pre_test_option)==null?void 0:c.map((n,A)=>s("div",{className:"flex items-center px-5 py-3 rounded-3xl bg-lightPrimary bg-opacity-60",children:[e("input",{type:"radio",name:`question_${r.id}`,id:`option_${n.id}`,value:n.id,className:"mr-3 text-primary focus:ring-primary",onChange:h=>o("pre_test_option_id",parseInt(h.target.value))}),e("label",{htmlFor:`option_${n.id}`,className:"w-full",children:n.title})]})),s("div",{className:"flex justify-center gap-4",children:[t>0&&e(u,{color:"gray",className:"min-w-[160px] flex justify-center",onClick:()=>d(t-1),children:a("back")}),e(u,{type:"submit",className:"min-w-[160px] flex justify-center",children:a("next")})]})]})})})]})})})}export{I as default};
