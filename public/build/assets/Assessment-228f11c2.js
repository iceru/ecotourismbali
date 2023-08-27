import{r as m,q as A,W as T,j as l,b as n,t as h}from"./app-e29e0c80.js";import{A as B}from"./id-6208e1ea.js";import{M as J}from"./MemberLayout-a79b0fa7.js";import P from"./TitleSection-d0384d5e.js";import{P as g}from"./PrimaryButton-bb49107b.js";import{l as $}from"./lodash-12f00ca7.js";import{u as H}from"./useTranslation-088723e2.js";import"./index-70686e9e.js";import"./react-responsive-82aeb7f9.js";function Y({assessments:b,session:u,answers:S}){const[d,E]=m.useState(0),[w,N]=m.useState(!1),{t:p,i18n:D}=H(),{ziggy:r}=A().props,{data:x,setData:y,post:k,processing:j,errors:I}=T(),o=D.language,C=e=>{e.preventDefault(),k(route("member.assessment.save"),{onSuccess:()=>{b.length>d+1?(h.visit(route("member.assessment.start",[u.id,{question:d+1}])),y({})):h.post(route("member.assessment.complete",u.id)),N(!1)}})},L=e=>{e.preventDefault(),k(route("member.assessment.save"),{onSuccess:()=>{window.scrollTo(0,0),N(!0)}})};m.useEffect(()=>{var e,a;(e=r==null?void 0:r.query)!=null&&e.question&&E(parseInt((a=r==null?void 0:r.query)==null?void 0:a.question))},[r==null?void 0:r.query]),m.useEffect(()=>{const e=a=>{a.preventDefault()};return document.body.addEventListener("cut",e),document.body.addEventListener("copy",e),()=>{document.body.removeEventListener("cut",e),document.body.removeEventListener("copy",e)}},[]);const M=e=>{e.preventDefault()},O=e=>{e.preventDefault()};m.useEffect(()=>{var a;let e=localStorage.getItem("assessment");e&&(e=JSON.parse(e)),$.isEmpty(e)?S.forEach(t=>{t.assessment_question.type==="checkbox"?_(t.assessment_question_id,t.assessment_option_id):v(t.assessment_question_id,t.assessment_option_id)}):(a=Object.keys(e))==null||a.forEach(t=>{const i=e[t],s=t.split(".");s[0]==="checkbox"?i.forEach(c=>{_(s[1],c,!0)}):s[0]==="radio"&&v(s[1],i,!0)})},[S]);const v=(e,a,t)=>{var s;const i={[`radio.${e}`]:a,assessment_id:b[((s=r==null?void 0:r.query)==null?void 0:s.question)||0].id,session_id:u.id};y(c=>{const f={...c,...i};return t||localStorage.setItem("assessment",JSON.stringify(f)),f})},_=(e,a,t)=>{y(i=>{const s=i[`checkbox.${e}`]||[],c=s.includes(a)?{...i,[`checkbox.${e}`]:s.filter(f=>f!==a)}:{...i,[`checkbox.${e}`]:[...s,a]};return t||localStorage.setItem("assessment",JSON.stringify(c)),c})},q=()=>{d>0?h.visit(route("member.assessment.start",[u.id,{question:d-1}])):h.visit(route("member.assessment.index"))};return l(J,{children:[w&&n("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-4 relative",children:p("data_saved")}),l(B,{children:[n(P,{title:"assessment",className:"mb-6"}),n("div",{className:"assessments",onMouseDown:M,onSelectStart:O,style:{userSelect:"none"},children:b.map((e,a)=>l("form",{onSubmit:C,className:`${d===a?"":"hidden"}`,children:[n("div",{className:"mb-4 flex justify-center",children:n("img",{src:`/storage/assessments/${o==="en"&&e.image_en?e.image_en:e.image}`,alt:""})}),n("div",{className:"font-bold mb-3 text-xl text-center",children:o==="en"&&e.title_en?e.title_en:e.title}),e.description!=="<p>-</p>"&&n("div",{dangerouslySetInnerHTML:{__html:o==="en"&&e.description_en?e.description_en:e.description},className:"text-center mb-10"}),e.assessment_question.map((t,i)=>l("div",{children:[n("div",{className:"font-bold text-lg mb-3",children:o==="en"&&t.title_en?t.title_en:t.title}),n("div",{dangerouslySetInnerHTML:{__html:o==="en"&&t.question_en?t.question_en:t.question}}),n("div",{className:"mt-4",children:$.sortBy(t.assessment_option,["option_no"]).map(s=>l("div",{className:"flex items-center px-5 py-3 mb-4 rounded-3xl bg-lightPrimary bg-opacity-60",children:[t.type==="radio"?n("input",{type:"radio",name:`radio.${t.id}`,id:`option_${s.id}`,value:s.id,className:"mr-3 text-primary focus:ring-primary",checked:x[`radio.${t.id}`]===s.id,required:!0,onChange:()=>v(t.id,s.id)}):n("input",{type:"checkbox",name:`checkbox.${t.id}`,id:`option_${s.id}`,value:s.id,checked:x[`checkbox.${t.id}`]&&x[`checkbox.${t.id}`].includes(s.id),className:"mr-3 text-primary focus:ring-primary",onChange:()=>_(t.id,s.id)}),n("label",{htmlFor:`option_${s.id}`,className:"w-full",children:o==="en"&&s.option_en?s.option_en:s.option})]}))}),i+1!==e.assessment_question.length&&n("div",{className:"h-0.5 w-1/2 my-10 box-border left-1/2 mx-auto -translate-y-1/2 bg-gray-300"})]})),l("div",{className:"flex justify-center gap-6 mt-6",children:[n(g,{type:"button",onClick:q,className:"min-w-[160px] flex justify-center",color:"gray",children:p("back")}),n(g,{type:"button",onClick:L,className:"min-w-[160px] flex justify-center",color:"secondary",children:p("save")}),n(g,{type:"submit",disabled:j,className:"min-w-[160px] flex justify-center",children:p("next")})]})]}))})]})]})}export{Y as default};
