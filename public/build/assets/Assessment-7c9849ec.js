import{r as N,W as $,j as s,a as c,t as k}from"./app-7f84437a.js";import{A as j}from"./id-2f09920d.js";import{M as S}from"./MemberLayout-1f6842ab.js";import A from"./TitleSection-d3b869bd.js";import{P as p}from"./PrimaryButton-9249986e.js";import{u as C}from"./useTranslation-9ce7b74f.js";import"./index-2e3ad5a5.js";import"./react-responsive-6f12b18e.js";function F({assessments:l,session:o}){const[d,u]=N.useState(0),{t:h,i18n:x}=C(),{data:f,setData:m,post:g,processing:w,errors:M}=$(),n=x.language,b=e=>{e.preventDefault(),g(route("member.assessment.save"),{onSuccess:()=>{l.length>d+1?(u(d+1),m({})):k.post(route("member.assessment.complete",o.id))}})},y=(e,a)=>{m(t=>({...t,[`radio.${e}`]:a,assessment_id:l[d].id,session_id:o.id}))},_=(e,a)=>{m(t=>{const i=t[`checkbox.${e}`]||[];if(i.includes(a)){const r=i.filter(v=>v!==a);return{...t,[`checkbox.${e}`]:r}}else{const r=[...i,a];return{...t,[`checkbox.${e}`]:r}}})};return s(S,{children:c(j,{children:[s(A,{title:"assessment",className:"mb-6"}),s("div",{children:l.map((e,a)=>c("form",{onSubmit:b,className:`${d===a?"":"hidden"}`,children:[s("div",{className:"mb-4 flex justify-center",children:s("img",{src:`/storage/assessments/${n==="en"&&e.image_en?e.image_en:e.image}`,alt:""})}),s("div",{className:"font-bold mb-3 text-xl text-center",children:n==="en"&&e.title_en?e.title_en:e.title}),s("div",{dangerouslySetInnerHTML:{__html:n==="en"&&e.description_en?e.description_en:e.description},className:"text-center mb-10"}),e.assessment_question.map((t,i)=>c("div",{children:[s("div",{className:"font-bold text-lg",children:t.title}),s("div",{dangerouslySetInnerHTML:{__html:n==="en"&&t.question_en?t.question_en:t.question}}),s("div",{className:"mt-4",children:t.assessment_option.map(r=>c("div",{className:"flex items-center px-5 py-3 mb-4 rounded-3xl bg-lightPrimary bg-opacity-60",children:[t.type==="radio"?s("input",{type:"radio",name:`radio.${t.id}`,id:`option_${r.id}`,value:r.id,className:"mr-3 text-primary focus:ring-primary",checked:f[`radio.${t.id}`]===r.id,required:!0,onChange:()=>y(t.id,r.id)}):s("input",{type:"checkbox",name:`checkbox.${t.id}`,id:`option_${r.id}`,value:r.id,className:"mr-3 text-primary focus:ring-primary",onChange:()=>_(t.id,r.id)}),s("label",{htmlFor:`option_${r.id}`,className:"w-full",children:n==="en"&&r.option_en?r.option_en:r.option})]}))}),i+1!==e.assessment_question.length&&s("div",{className:"h-0.5 w-1/2 my-10 box-border left-1/2 mx-auto -translate-y-1/2 bg-gray-300"})]})),c("div",{className:"flex justify-center gap-6 mt-6",children:[s(p,{className:"min-w-[160px] flex justify-center",color:"gray",children:h("back")}),s(p,{type:"submit",className:"min-w-[160px] flex justify-center",children:h("next")})]})]}))})]})})}export{F as default};
