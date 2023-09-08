import{W as f,r as h,j as s,b as e,f as v,d as w}from"./app-0823dc15.js";import{G as _}from"./GuestLayout-2e09d0fb.js";import{I as i}from"./InputError-d02cbded.js";import{I as l}from"./InputLabel-9fef5e1f.js";import{P as N}from"./PrimaryButton-69d7815a.js";import{T as n}from"./TextInput-bf51fc49.js";import{A as x}from"./AuthImage-5272739c.js";import{S as C}from"./SelectInput-3abfb7eb.js";import{q as k}from"./base-e8aaf39e.js";import{u as y}from"./useTranslation-a6e517c4.js";import"./moment-fbc5633a.js";import"./index-9a5202b6.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";const F="/build/assets/regisImage-5a8a67f9.jpg";function z({programs:u}){const c=k.parse(location.search),{data:m,setData:t,post:d,processing:p,errors:o,reset:b}=f({name:"",email:"",password:"",business_name:"",password_confirmation:"",subscribed:!0,program:u[(c==null?void 0:c.tribe)==="greenpal"?1:0].id}),{t:r}=y();h.useEffect(()=>()=>{b("password","password_confirmation")},[]);const g=a=>{a.preventDefault(),d(route("register"))};return s(_,{children:[e(v,{title:"Register"}),s("div",{className:"grid lg:grid-cols-2 items-center",children:[e("div",{className:"hidden lg:block",children:e(x,{image:F})}),s("div",{children:[s("div",{className:"mb-8",children:[e("h3",{className:"font-bold text-2xl mb-3",children:r("register_welcome")}),e("p",{className:"mb-2",children:r("register_welcome_text")})]}),s("form",{onSubmit:g,children:[s("div",{children:[e(l,{htmlFor:"name",value:r("form_label_name")}),e(n,{id:"name",name:"name",value:m.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value),required:!0}),e(i,{message:o.name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"business_name",value:r("business_name")}),e(n,{id:"business_name",name:"business_name",value:m.business_name,className:"mt-1 block w-full",autoComplete:"business_name",isFocused:!0,onChange:a=>t("business_name",a.target.value),required:!0}),e(i,{message:o.business_name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"program",value:r("program")}),e(C,{id:"program",name:"program",value:m.program,className:"mt-1 block w-full",labelData:"name",valueData:"id",options:u,onChange:a=>t("program",a.target.value),required:!0}),e(i,{message:o.program,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"email",value:r("form_label_email")}),e(n,{id:"email",type:"email",name:"email",value:m.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>t("email",a.target.value),required:!0}),e(i,{message:o.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"password",value:r("form_label_password")}),e(n,{id:"password",type:"password",name:"password",value:m.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password",a.target.value),required:!0}),e(i,{message:o.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"password_confirmation",value:r("form_label_password_confirmation")}),e(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:m.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password_confirmation",a.target.value),required:!0}),e(i,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"mt-4 flex items-center",children:[e("input",{type:"checkbox",id:"subscribed",name:"subscribed",value:m.subscribed,checked:m.subscribed,className:"mr-2 mt-1",onChange:a=>t("subscribed",!m.subscribed)}),e(l,{htmlFor:"subscribed",value:r("subscribe_checkbox")}),e(i,{message:o.subscribed,className:"mt-2"})]}),s("div",{className:"flex items-center justify-between mt-6",children:[e(N,{disabled:p,children:"Register"}),e(w,{href:route("login"),className:"text-sm text-primary font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:r("already_registered")})]})]})]})]})]})}export{z as default};