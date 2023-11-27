import{r as i,a,j as s}from"./app-d12d4eaa.js";import{A as u}from"./AdminLayout-9d4784fb.js";import{A as f}from"./AdminSection-e4a9ca90.js";import{C as v,r as x,B as N}from"./index-e1431350.js";import g from"./PieChart-b00e19e1.js";import"./PrimaryButton-64fd95c7.js";import"./logo-5e7252b7.js";import"./index-0bbb7484.js";import"./id-410e5203.js";import"./react-responsive-5e1bb712.js";import"./useTranslation-76e67854.js";function M({sessions:d,badges:p,programs:b}){v.register(...x);const[t,h]=i.useState([]);return i.useEffect(()=>{let r=d==null?void 0:d.filter(e=>{var l,o;return(o=(l=e==null?void 0:e.member)==null?void 0:l.status)==null?void 0:o.includes("active")});console.log(r),r=r.sort((e,l)=>parseInt(l.total_score)-parseInt(e.total_score)),h(r)},[]),a(u,{children:s("main",{className:"grid gap-6",children:[s(f,{children:[a("h3",{className:"mb-4 font-bold text-xl",children:"Highest Score on Assessment:"}),s("div",{className:"grid lg:grid-cols-2 gap-6",children:[a("div",{children:a(N,{datasetIdKey:"id",data:{labels:t==null?void 0:t.map(r=>{var e;return(e=r==null?void 0:r.member)==null?void 0:e.business_name.slice(0,15)}),datasets:[{label:"Assessment Score",data:t.map(r=>r.total_score),backgroundColor:["#1F656C","#7BB052","#D8E8CC","#D2E0E2"]}],options:{responsive:!0,plugins:{legend:{position:"top"}}}}})}),a("div",{children:a("ol",{children:t==null?void 0:t.map((r,e)=>{var l,o,c,n,m;if((o=(l=r==null?void 0:r.member)==null?void 0:l.status)!=null&&o.includes("active"))return s("li",{className:"flex items-center mb-2",children:[s("div",{className:"mr-2",children:[e+1,"."]}),((c=r==null?void 0:r.member)==null?void 0:c.image)&&a("div",{children:a("img",{className:"w-8 h-8 object-contain rounded-full mr-2",src:`/storage/member/images/${(n=r==null?void 0:r.member)==null?void 0:n.image}`,alt:""})}),a("div",{className:"",children:(m=r==null?void 0:r.member)==null?void 0:m.business_name}),s("div",{className:"font-bold text-primary",children:["- ",r==null?void 0:r.total_score]})]})})})})]})]}),a(g,{title:"Total Badges on All Members",items:p,imagePath:"badges",storagePath:"badges"}),a(g,{title:"Total Programs on All Members",items:b,imagePath:"programs",storagePath:"programs"})]})})}export{M as default};
