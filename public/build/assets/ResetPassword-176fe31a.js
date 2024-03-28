import{W as w,r as f,j as e,a as s,f as v}from"./app-985c7907.js";import{G as h}from"./GuestLayout-4ad3862c.js";import{I as m}from"./InputError-50406f64.js";import{I as i}from"./InputLabel-796633c2.js";import{B as g}from"./Button-74ae847b.js";import{T as l}from"./TextInput-c22d7f28.js";import"./moment-fbc5633a.js";import"./index-033d355d.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";import"./useTranslation-42b99a75.js";function R({token:n,email:p}){const{data:o,setData:r,post:d,processing:c,errors:t,reset:u}=w({token:n,email:p,password:"",password_confirmation:""});return f.useEffect(()=>()=>{u("password","password_confirmation")},[]),e(h,{children:[s(v,{title:"Reset Password"}),e("form",{onSubmit:a=>{a.preventDefault(),d(route("password.store"))},children:[e("div",{children:[s(i,{htmlFor:"email",value:"Email"}),s(l,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value)}),s(m,{message:t.email,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(i,{htmlFor:"password",value:"Password"}),s(l,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>r("password",a.target.value)}),s(m,{message:t.password,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value)}),s(m,{message:t.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",disabled:c,children:"Reset Password"})})]})]})}export{R as default};