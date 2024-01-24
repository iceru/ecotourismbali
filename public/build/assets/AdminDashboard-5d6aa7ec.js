import{j as s,a as e}from"./app-564aa5bf.js";import{C as u,r as v,B as N,P as x,L as w}from"./index-5d16c437.js";import{h as C}from"./moment-fbc5633a.js";import i from"./TitleSection-3bafae38.js";import{A as t}from"./AdminSection-6264d2fc.js";import{A as y}from"./AdminLayout-90595167.js";import{u as P}from"./useTranslation-b7c2539f.js";import"./Button-5c6aa829.js";import"./logo-5e7252b7.js";import"./index-d6d3d862.js";import"./id-410e5203.js";import"./react-responsive-1f42f9ff.js";function T({members:n,assessments:m,visitors:r,pages:c,referrers:p,greenpal:g,greenforce:b}){const{t:l}=P();u.register(...v);const h=()=>r.reverse().map(f=>C(f.date).format("LL")),o=p.slice(0,6),d=c.slice(0,8);return s(y,{children:[e("div",{className:"mb-6",children:s(t,{className:"grid lg:grid-cols-4 gap-4",children:[s("div",{className:"bg-lightSecondary p-4 rounded-md",children:[e("div",{className:"mb-2",children:l("total_members")}),e("div",{className:"font-bold text-3xl",children:n.length})]}),s("div",{className:"bg-lightPrimary p-4 rounded-md",children:[e("div",{className:"mb-2",children:l("total_assessments")}),e("div",{className:"font-bold text-3xl",children:m.length})]}),s("div",{className:"bg-lightSecondary p-4 rounded-md",children:[e("div",{className:"mb-2",children:l("total_greenforce_members")}),e("div",{className:"font-bold text-3xl",children:b.length})]}),s("div",{className:"bg-lightPrimary p-4 rounded-md",children:[e("div",{className:"mb-2",children:l("total_greenpal_members")}),e("div",{className:"font-bold text-3xl",children:g.length})]})]})}),s("div",{className:"flex mb-6 flex-wrap lg:flex-nowrap",children:[e("div",{className:"lg:w-2/3 w-full",children:s(t,{children:[e(i,{title:"total_pageviews",className:"mb-4"}),e(N,{datasetIdKey:"id",data:{labels:d.map(a=>a.pageTitle.slice(0,15)),datasets:[{label:"Page Views",data:d.map(a=>a.screenPageViews),backgroundColor:["#1F656C","#7BB052","#D8E8CC","#D2E0E2"]}],options:{responsive:!0,plugins:{legend:{position:"top"}}}}})]})}),s(t,{className:"ml-6 lg:w-1/3 w-full",children:[e(i,{title:"referral",className:"mb-4"}),e(x,{datasetIdKey:"id",data:{labels:o.map(a=>a.pageReferrer),datasets:[{data:o.map(a=>a.screenPageViews)}],options:{responsive:!0,plugins:{legend:{position:"top"}}}}})]})]}),s(t,{children:[e(i,{title:"total_visitor",className:"mb-4"}),e(w,{datasetIdKey:"id",data:{labels:h(),datasets:[{label:"Sessions",data:r.map(a=>a.activeUsers),backgroundColor:"#7BB052"},{label:"Views",data:r.map(a=>a.screenPageViews),backgroundColor:"#1F656C"}],options:{responsive:!0,plugins:{legend:{position:"top"}}}}})]})]})}export{T as default};
