import{W as f,r as h,j as s,b as e,f as v,d as w}from"./app-b9ba7320.js";import{G as N}from"./GuestLayout-12162b84.js";import{I as o}from"./InputError-23b1d868.js";import{I as n}from"./InputLabel-7090ca46.js";import{P as _}from"./PrimaryButton-1410e6bf.js";import{T as l}from"./TextInput-364987d5.js";import{A as x}from"./AuthImage-391f39ca.js";import{g as y}from"./greenpal-f0e012ed.js";import{S as F}from"./SelectInput-ad21d6a5.js";import{q as k}from"./base-e8aaf39e.js";import{u as C}from"./useTranslation-4c7cdb87.js";import"./moment-fbc5633a.js";import"./index-fc8df744.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";const I="/build/assets/regisImage-5a8a67f9.jpg",T="/build/assets/green_force-78b16c45.png";function K({programs:d}){const c=k.parse(location.search),{data:r,setData:t,post:u,processing:p,errors:m,reset:b}=f({name:"",email:"",password:"",business_name:"",password_confirmation:"",subscribed:!0,program:d[(c==null?void 0:c.tribe)==="greenpal"?1:0].id}),{t:i}=C();h.useEffect(()=>()=>{b("password","password_confirmation")},[]);const g=a=>{a.preventDefault(),u(route("register"))};return s(N,{children:[e(v,{title:"Register"}),s("div",{className:"grid lg:grid-cols-2 items-center",children:[e("div",{className:"hidden lg:block",children:e(x,{image:I})}),s("div",{children:[s("div",{className:"mb-8",children:[e("h3",{className:"font-bold text-2xl mb-3",children:i("register_welcome")}),e("p",{className:"mb-2",children:i("register_welcome_text")})]}),s("form",{onSubmit:g,children:[s("div",{children:[e(n,{htmlFor:"name",value:i("form_label_name")}),e(l,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value),required:!0}),e(o,{message:m.name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"business_name",value:i("business_name")}),e(l,{id:"business_name",name:"business_name",value:r.business_name,className:"mt-1 block w-full",autoComplete:"business_name",isFocused:!0,onChange:a=>t("business_name",a.target.value),required:!0}),e(o,{message:m.business_name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"program",value:i("program")}),e(F,{id:"program",name:"program",value:r.program,className:"mt-1 block w-full",labelData:"name",valueData:"id",options:d,onChange:a=>t("program",a.target.value),required:!0}),e(o,{message:m.program,className:"mt-2"})]}),e("div",{className:"text-sm text-gray-500 mt-3",children:r.program==1?s("div",{className:"flex",children:[e("img",{src:T,className:"w-16 h-16 mr-2",alt:""}),s("p",{children:[e("strong",{children:"Green Force"})," is divided into members who conduct self-assessments and verified members who Eco Tourism Bali expert verifiers have verified. Green Force is Eco Tourism Bali's leading partner company in providing eco-friendly and sustainable products to complement the amenity needs of Bali's accommodation and restaurant businesses. Green Force will be a business accelerator and key actor in driving Bali's transformation as a sustainable tourism destination."]})]}):s("div",{className:"flex",children:[e("img",{src:y,className:"w-16 h-16 mr-2",alt:""}),s("p",{children:[e("strong",{children:"Green Pal"})," is a whole community that joins together with Eco Tourism Bali for free consisting of small scale suppliers, community and travel who have the same vision to support Bali to become a Green Tourism Destination and sustainability. Green Force Tribe is a group of accommodation and restaurant businesses that have become members of Eco Tourism Bali and have undertaken self-assessment."]})]})}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"email",value:i("form_label_email")}),e(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>t("email",a.target.value),required:!0}),e(o,{message:m.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"password",value:i("form_label_password")}),e(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password",a.target.value),required:!0}),e(o,{message:m.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"password_confirmation",value:i("form_label_password_confirmation")}),e(l,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password_confirmation",a.target.value),required:!0}),e(o,{message:m.password_confirmation,className:"mt-2"})]}),s("div",{className:"mt-4 flex items-center",children:[e("input",{type:"checkbox",id:"subscribed",name:"subscribed",value:r.subscribed,checked:r.subscribed,className:"mr-2 mt-1",onChange:a=>t("subscribed",!r.subscribed)}),e(n,{htmlFor:"subscribed",value:i("subscribe_checkbox")}),e(o,{message:m.subscribed,className:"mt-2"})]}),s("div",{className:"flex items-center justify-between mt-6",children:[e(_,{disabled:p,children:"Register"}),e(w,{href:route("login"),className:"text-sm text-primary font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:i("already_registered")})]})]})]})]})]})}export{K as default};
