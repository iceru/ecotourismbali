import{r as i,a as o,j as a}from"./app-564aa5bf.js";import{A as b}from"./AdminLayout-90595167.js";import{A as g}from"./AdminSection-6264d2fc.js";import{C as x,r as y}from"./index-5d16c437.js";import{l as S}from"./lodash-0cedc2b7.js";import{B as h}from"./Button-5c6aa829.js";import p from"./AssessmentSection-58baffcb.js";import"./logo-5e7252b7.js";import"./index-d6d3d862.js";import"./id-410e5203.js";import"./react-responsive-1f42f9ff.js";import"./useTranslation-b7c2539f.js";function R({assessments:m}){x.register(...y);const[d,f]=i.useState([]),[s,u]=i.useState([]),[r,l]=i.useState("hotel");return i.useEffect(()=>{m==null||m.forEach(t=>{var c,n;(c=t==null?void 0:t.members)==null||c.sort((e,A)=>A.score-e.score),S.toLower((n=t==null?void 0:t.business_type)==null?void 0:n.name)==="hotel"?f(e=>[...e,t]):u(e=>[...e,t])})},[]),o(b,{children:a("main",{className:"grid",children:[a("div",{className:"grid grid-cols-2 gap-6 mb-6",children:[o(h,{onClick:()=>l("hotel"),color:r==="hotel"?"primary":"lightPrimary",children:"Accommodation Assessment"}),o(h,{onClick:()=>l("restaurant"),color:r!=="hotel"?"primary":"lightPrimary",children:"F&B Assessment"})]}),o(g,{className:"mb-6",children:a("h3",{className:"font-bold text-primary text-xl ",children:[r==="hotel"?"Accommodation":"F&B"," Assessment"]})}),r==="hotel"?o(p,{assessments:d,tab:r}):o(p,{assessments:s,tab:r})]})})}export{R as default};
