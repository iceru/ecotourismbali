import{W as p,j as t,a as e,d as u}from"./app-8020c353.js";import{h as x}from"./moment-fbc5633a.js";import{T as c}from"./TextInput-9e20f7d7.js";import{G as g}from"./GuestLayout-17fb1d9c.js";import{B as v}from"./Button-d7a470d0.js";import{b as N}from"./BadgeColor-74f67957.js";import{F as f,w,x as b}from"./index-d2c3e273.js";import{u as y}from"./useTranslation-b104940f.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";import"./lodash-ad8ea7d8.js";function M({member:l}){var r,n,d;const{t:i}=y();console.log(l);const{data:o,setData:s,post:m,errors:C}=p({title:"",text:"",images:null,file:null,category:"thread"}),h=a=>{a.preventDefault(),m(route("member.forum.thread.store"),{})};return t(g,{children:[t("section",{className:"flex items-center gap-3 mb-4 text-sm",children:[e(u,{href:route("member.forum.index"),className:"text-primary",children:i("member_forums")}),e("div",{children:"/"}),e("div",{className:"font-bold",children:i("create_topic")})]}),e("h1",{className:"font-bold text-2xl mb-6",children:i("create_topic")}),t("form",{onSubmit:h,className:"p-6 rounded-xl bg-lightPrimary flex bg-opacity-30 shadow-lg flex-wrap",children:[t("div",{className:"w-full lg:w-1/5 flex mb-4 lg:mb-0",children:[e("div",{children:e("img",{src:"",alt:""})}),t("div",{children:[e("h4",{className:"text-lg font-bold mb-1",children:l==null?void 0:l.business_name}),t("div",{className:"flex gap-2 items-center",children:[e("div",{children:e("img",{className:"max-h-[32px]",src:"/storage/badges/"+((r=l==null?void 0:l.badge)==null?void 0:r.image)})}),t("div",{className:`text-center whitespace-nowrap  ${N((n=l==null?void 0:l.badge)==null?void 0:n.name,"text")}`,children:[(d=l==null?void 0:l.badge)==null?void 0:d.name," Member"]})]})]})]}),t("div",{className:"w-full lg:w-4/5",children:[e("div",{className:"font-bold text-sm text-primary mb-2",children:x().format("LLL")}),e("div",{children:e(c,{className:"mb-4 w-full",placeholder:"Title",value:o.title,isFocused:!0,onChange:a=>s("title",a.target.value)})}),e("div",{children:e(c,{typeForm:"textarea",className:"w-full mb-2",placeholder:"Topic Content",value:o.text,onChange:a=>s("text",a.target.value)})}),t("div",{className:"flex items-center mb-4",children:[t("div",{className:"whitespace-nowrap mr-2 font-bold",children:["Add Images ",e(f,{icon:w})," :"]}),e("input",{type:"file",multiple:!0,name:"images",onChange:a=>s("images",a.target.files),className:`block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-secondary file:text-white`})]}),t("div",{className:"flex items-center mb-4",children:[t("div",{className:"whitespace-nowrap mr-2 font-bold",children:["Add File ",e(f,{icon:b})," :"]}),e("input",{type:"file",name:"file",onChange:a=>s("file",a.target.files[0]),className:`block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-secondary file:text-white`})]}),e(v,{className:"py-3",children:e("div",{className:"w-full",children:i("submit")})})]})]})]})}export{M as default};
