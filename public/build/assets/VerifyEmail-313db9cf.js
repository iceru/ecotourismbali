import{W as a,j as i,a as e,f as l}from"./app-564aa5bf.js";import"./moment-fbc5633a.js";import"./index-d6d3d862.js";import"./TextInput-2c4353c1.js";import{B as c}from"./Button-5c6aa829.js";import{M as d}from"./MemberLayout-00fd1426.js";import{A as f}from"./AdminSection-6264d2fc.js";import{u as p}from"./useTranslation-b7c2539f.js";import"./id-410e5203.js";import"./no-image-91387054.js";import"./react-responsive-1f42f9ff.js";function A({status:r}){const{post:n,processing:m}=a({}),{t}=p(),o=s=>{s.preventDefault(),n(route("verification.send"))};return i(d,{children:[e(l,{title:"Email Verification"}),i(f,{children:[e("div",{className:"text-lg text-center mb-2 font-bold",children:t("verify_thanks")}),e("div",{className:"mb-4 text-center lg:w-[70%] mx-auto",children:t("verify_email")}),r==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-center text-green-600",children:t("resend_email")}),e("form",{onSubmit:o,children:e("div",{className:"mt-4 flex items-center justify-center",children:e(c,{disabled:m,children:t("resend_email_button")})})})]})]})}export{A as default};
