import{a as i,j as o,d as p,y as f}from"./app-23f2fa96.js";import{B as d}from"./Button-534be8b8.js";import{G as u}from"./GuestLayout-e97bba32.js";import s from"./Comment-9f57274e.js";import{u as x}from"./useTranslation-14eb7045.js";import"./moment-fbc5633a.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./index-25fc1de7.js";import"./id-410e5203.js";import"./TextInput-e9e5d2e5.js";import"./BadgeColor-4e532531.js";import"./lodash-d0518ef4.js";import"./FileSaver.min-bb1d627c.js";function A({thread:e,comments:t,member:l,images:n}){const{t:m}=x(),a=(r,c)=>{r.preventDefault(),confirm("Are you sure to delete the thread?")&&f.post(route("member.forum.thread.destroy"),{id:c})};return i(u,{children:o("main",{className:"grid gap-8 container",children:[o("section",{className:"flex items-center gap-3",children:[i(p,{href:route("member.forum.index"),className:"text-primary",children:m("member_forums")}),i("div",{children:"/"}),i("div",{className:"font-bold",children:e==null?void 0:e.title})]}),i("section",{className:"flex justify-between items-center",children:i("h1",{className:"font-bold text-2xl",children:e==null?void 0:e.title})}),o("section",{className:"grid gap-6",children:[i("div",{className:"flex items-center gap-4",children:i(d,{color:"danger",onClick:r=>{a(r,e==null?void 0:e.id)},children:m("delete_thread")})}),i(s,{comment:e,type:"thread",images:n}),t&&(t==null?void 0:t.map(r=>i(s,{comment:r,member:l}))),i(s,{type:"input",member:l,thread:e})]})]})})}export{A as default};
