import{W as n,j as a,a as e,c as d}from"./app-23f2fa96.js";import{G as u}from"./GuestLayout-e97bba32.js";import{I as p}from"./InputError-8c3dbd1e.js";import{B as c}from"./Button-534be8b8.js";import{T as f}from"./TextInput-e9e5d2e5.js";import"./moment-fbc5633a.js";import"./logo-5e7252b7.js";import"./index-28d59fa5.js";import"./index-25fc1de7.js";import"./id-410e5203.js";import"./useTranslation-14eb7045.js";function P({status:s}){const{data:o,setData:r,post:m,processing:i,errors:l}=n({email:""});return a(u,{children:[e(d,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),a("form",{onSubmit:t=>{t.preventDefault(),m(route("password.email"))},children:[e(f,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:t=>r("email",t.target.value)}),e(p,{message:l.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(c,{className:"ml-4",disabled:i,children:"Email Password Reset Link"})})]})]})}export{P as default};
