import{q as v,W as g,j as a,a as e,d as x}from"./app-985c7907.js";import{I as m}from"./InputError-50406f64.js";import{I as o}from"./InputLabel-796633c2.js";import{B as N}from"./Button-74ae847b.js";import{T as l}from"./TextInput-c22d7f28.js";import{t as y}from"./transition-30bd1d1d.js";function j({mustVerifyEmail:c,status:d,className:u=""}){const r=v().props.auth.user,{data:i,setData:s,post:f,errors:n,processing:p,recentlySuccessful:h}=g({name:r.name,email:r.email});return a("section",{className:u,children:[a("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),a("form",{onSubmit:t=>{t.preventDefault(),f(route("profile.update"))},className:"mt-6 space-y-6",children:[a("div",{children:[e(o,{htmlFor:"name",value:"Name"}),e(l,{id:"name",className:"mt-1 block w-full",value:i.name,onChange:t=>s("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e(m,{className:"mt-2",message:n.name})]}),a("div",{children:[e(o,{htmlFor:"email",value:"Email"}),e(l,{id:"email",type:"email",className:"mt-1 block w-full",value:i.email,onChange:t=>s("email",t.target.value),required:!0,autoComplete:"username"}),e(m,{className:"mt-2",message:n.email})]}),c&&r.email_verified_at===null&&a("div",{children:[a("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e(x,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),d==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),a("div",{className:"flex items-center gap-4",children:[e(N,{disabled:p,children:"Save"}),e(y,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{j as default};