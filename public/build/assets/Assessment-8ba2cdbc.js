import{r as m,q as A,W as T,j as l,a as n,s as b}from"./app-37b7ff8d.js";import{A as B}from"./AdminSection-579874a6.js";import{M as J}from"./MemberLayout-60234f3b.js";import P from"./TitleSection-49e46c01.js";import{P as g}from"./PrimaryButton-1aeaa455.js";import{l as $}from"./lodash-507ad46f.js";import{u as H}from"./useTranslation-d2a496c2.js";import"./index-e6cfef05.js";import"./id-410e5203.js";import"./react-responsive-479d81c8.js";function Z({assessments:x,session:u,answers:S}){const[d,E]=m.useState(0),[w,N]=m.useState(!1),{t:p,i18n:D}=H(),{ziggy:r}=A().props,{data:y,setData:f,post:k,processing:j,errors:I}=T(),o=D.language,C=e=>{e.preventDefault(),k(route("member.assessment.save"),{onSuccess:()=>{x.length>d+1?(b.visit(route("member.assessment.start",[u.id,{question:d+1}])),f({})):b.post(route("member.assessment.complete",u.id)),N(!1)}})},L=e=>{e.preventDefault(),k(route("member.assessment.save"),{onSuccess:()=>{window.scrollTo(0,0),f({}),N(!0)}})};m.useEffect(()=>{var e,a;(e=r==null?void 0:r.query)!=null&&e.question&&E(parseInt((a=r==null?void 0:r.query)==null?void 0:a.question))},[r==null?void 0:r.query]),m.useEffect(()=>{const e=a=>{a.preventDefault()};return document.body.addEventListener("cut",e),document.body.addEventListener("copy",e),()=>{document.body.removeEventListener("cut",e),document.body.removeEventListener("copy",e)}},[]);const M=e=>{e.preventDefault()},O=e=>{e.preventDefault()};m.useEffect(()=>{var a;let e=localStorage.getItem("assessment");e&&(e=JSON.parse(e)),$.isEmpty(e)?S.forEach(t=>{t.assessment_question.type==="checkbox"?_(t.assessment_question_id,t.assessment_option_id):v(t.assessment_question_id,t.assessment_option_id)}):(a=Object.keys(e))==null||a.forEach(t=>{const i=e[t],s=t.split(".");s[0]==="checkbox"?i.forEach(c=>{_(s[1],c,!0)}):s[0]==="radio"&&v(s[1],i,!0)})},[S]);const v=(e,a,t)=>{var s;const i={[`radio.${e}`]:a,assessment_id:x[((s=r==null?void 0:r.query)==null?void 0:s.question)||0].id,session_id:u.id};f(c=>{const h={...c,...i};return t||localStorage.setItem("assessment",JSON.stringify(h)),h})},_=(e,a,t)=>{f(i=>{const s=i[`checkbox.${e}`]||[],c=s.includes(a)?{...i,[`checkbox.${e}`]:s.filter(h=>h!==a)}:{...i,[`checkbox.${e}`]:[...s,a]};return t||localStorage.setItem("assessment",JSON.stringify(c)),c})},q=()=>{d>0?b.visit(route("member.assessment.start",[u.id,{question:d-1}])):b.visit(route("member.assessment.index"))};return l(J,{children:[w&&n("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-4 relative",children:p("data_saved")}),l(B,{children:[n(P,{title:"assessment",className:"mb-6"}),n("div",{className:"assessments",onMouseDown:M,onSelectStart:O,style:{userSelect:"none"},children:x.map((e,a)=>l("form",{onSubmit:C,className:`${d===a?"":"hidden"}`,children:[n("div",{className:"mb-4 flex justify-center",children:n("img",{src:`/storage/assessments/${o==="en"&&e.image_en?e.image_en:e.image}`,alt:""})}),n("div",{className:"font-bold mb-3 text-xl text-center",children:o==="en"&&e.title_en?e.title_en:e.title}),e.description!=="<p>-</p>"&&n("div",{dangerouslySetInnerHTML:{__html:o==="en"&&e.description_en?e.description_en:e.description},className:"text-center mb-10"}),e.assessment_question.map((t,i)=>l("div",{children:[n("div",{className:"font-bold text-lg mb-3",children:o==="en"&&t.title_en?t.title_en:t.title}),n("div",{dangerouslySetInnerHTML:{__html:o==="en"&&t.question_en?t.question_en:t.question}}),n("div",{className:"mt-4",children:$.sortBy(t.assessment_option,["option_no"]).map(s=>l("div",{className:"flex items-center px-5 py-3 mb-4 rounded-3xl bg-lightPrimary bg-opacity-60",children:[t.type==="radio"?n("input",{type:"radio",name:`radio.${t.id}`,id:`option_${s.id}`,value:s.id,className:"mr-3 text-primary focus:ring-primary",checked:y[`radio.${t.id}`]===s.id,required:!0,onChange:()=>v(t.id,s.id)}):n("input",{type:"checkbox",name:`checkbox.${t.id}`,id:`option_${s.id}`,value:s.id,checked:y[`checkbox.${t.id}`]&&y[`checkbox.${t.id}`].includes(s.id),className:"mr-3 text-primary focus:ring-primary",onChange:()=>_(t.id,s.id)}),n("label",{htmlFor:`option_${s.id}`,className:"w-full",children:o==="en"&&s.option_en?s.option_en:s.option})]}))}),i+1!==e.assessment_question.length&&n("div",{className:"h-0.5 w-1/2 my-10 box-border left-1/2 mx-auto -translate-y-1/2 bg-gray-300"})]})),l("div",{className:"flex justify-center gap-6 mt-6",children:[n(g,{type:"button",onClick:q,className:"min-w-[160px] flex justify-center",color:"gray",children:p("back")}),n(g,{type:"button",onClick:L,className:"min-w-[160px] flex justify-center",color:"secondary",children:p("save")}),n(g,{type:"submit",disabled:j,className:"min-w-[160px] flex justify-center",children:p("next")})]})]}))})]})]})}export{Z as default};