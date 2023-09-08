import{W as s,j as i,b as e,f as a,d as m}from"./app-0823dc15.js";import"./moment-fbc5633a.js";import"./index-9a5202b6.js";import"./TextInput-bf51fc49.js";import{P as d}from"./PrimaryButton-69d7815a.js";import{M as l}from"./MemberLayout-b7b1d94e.js";import{A as u}from"./AdminSection-771080e2.js";import"./id-410e5203.js";import"./react-responsive-970fc0f0.js";import"./useTranslation-a6e517c4.js";function w({status:t}){const{post:o,processing:r}=s({});return i(l,{children:[e(a,{title:"Email Verification"}),i(u,{children:[e("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:n=>{n.preventDefault(),o(route("verification.send"))},children:i("div",{className:"mt-4 flex items-center justify-between",children:[e(d,{disabled:r,children:"Resend Verification Email"}),e(m,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Log Out"})]})})]})]})}export{w as default};