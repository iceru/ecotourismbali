import{a as i,j as o,d as p,y as f}from"./app-a4df2cac.js";import{B as d}from"./Button-f77666b4.js";import{G as u}from"./GuestLayout-b8813ac5.js";import s from"./Comment-8ce090cc.js";import{u as x}from"./useTranslation-f7347da2.js";import"./moment-fbc5633a.js";import"./index-56ab0417.js";import"./TextInput-c2aa4c3e.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";import"./BadgeColor-10f7fd82.js";import"./lodash-fa53239e.js";import"./FileSaver.min-f15414f3.js";function w({thread:e,comments:t,member:l,images:m}){const{t:n}=x(),a=(r,c)=>{r.preventDefault(),confirm("Are you sure to delete the thread?")&&f.post(route("member.forum.thread.destroy"),{id:c})};return i(u,{children:o("main",{className:"grid gap-8 container",children:[o("section",{className:"flex items-center gap-3",children:[i(p,{href:route("member.forum.index"),className:"text-primary",children:n("member_forums")}),i("div",{children:"/"}),i("div",{className:"font-bold",children:e==null?void 0:e.title})]}),i("section",{className:"flex justify-between items-center",children:i("h1",{className:"font-bold text-2xl",children:e==null?void 0:e.title})}),o("section",{className:"grid gap-6",children:[i("div",{className:"flex items-center gap-4",children:i(d,{color:"danger",onClick:r=>{a(r,e==null?void 0:e.id)},children:n("delete_thread")})}),i(s,{comment:e,type:"thread",images:m}),t&&(t==null?void 0:t.map(r=>i(s,{comment:r,member:l}))),i(s,{type:"input",member:l,thread:e})]})]})})}export{w as default};
