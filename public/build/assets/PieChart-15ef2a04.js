import{j as s,a as r}from"./app-cb8b64cf.js";import{A as c}from"./AdminSection-6a333a96.js";import{P as e}from"./index-2f6ba5af.js";const N=({title:o,items:a,imagePath:l,storagePath:h})=>s(c,{children:[r("h3",{className:"mb-4 font-bold text-xl",children:o}),s("div",{className:"grid lg:grid-cols-2 gap-6",children:[r("div",{children:r(e,{datasetIdKey:"id",data:{labels:a.map(d=>(d==null?void 0:d.name)||"No Badge"),datasets:[{data:a.map(d=>d==null?void 0:d.total),backgroundColor:l==="badges"?["#D2E0E2","#EB964F","#C0C0C0","#D1A546"]:["#1F656C","#7BB052"]}],options:{responsive:!0,plugins:{legend:{position:"top"}}}}})}),r("div",{children:r("ol",{children:a.map((d,n)=>r(g,{index:n,item:d,imagePath:l},d.id))})})]})]}),g=({index:o,item:a,imagePath:l})=>s("li",{className:"flex items-center mb-2",children:[s("div",{className:"mr-2",children:[o+1,"."]}),(a==null?void 0:a.image)&&r("div",{children:r("img",{className:"w-8 h-8 object-contain rounded-full mr-2",src:`/storage/${l}/${a==null?void 0:a.image}`,alt:""})}),r("div",{className:"mr-2",children:(a==null?void 0:a.name)||"No Badge"}),s("div",{className:"font-bold text-primary",children:["- ",a==null?void 0:a.total]})]});export{N as default};
