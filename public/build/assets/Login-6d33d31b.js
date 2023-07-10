import{W as b,r as x,a as r,j as e,f as w,d as i}from"./app-08237c9a.js";import{C as v}from"./Checkbox-8a7f064f.js";import{G as N}from"./GuestLayout-11e299c5.js";import{I as n}from"./InputError-48489716.js";import{I as d}from"./InputLabel-5a809cad.js";import{P as y}from"./PrimaryButton-4a83e717.js";import{T as c}from"./TextInput-fcc370b2.js";import{A as C}from"./AuthImage-b31cf696.js";import{u as k}from"./useTranslation-e7741a3e.js";import"./index-9da7846b.js";import"./logo-5e7252b7.js";function R({status:m,canResetPassword:u}){const{data:a,setData:t,post:p,processing:f,errors:o,reset:h}=b({email:"",password:"",remember:!1});x.useEffect(()=>()=>{h("password")},[]);const g=s=>{s.preventDefault(),p(route("login"))},{t:l}=k();return r(N,{children:[e(w,{title:"Log in"}),r("div",{className:"grid lg:grid-cols-2 items-center",children:[e("div",{className:"hidden lg:block",children:e(C,{})}),r("div",{children:[r("div",{className:"mb-8",children:[e("h3",{className:"font-bold text-2xl mb-3",children:l("login_welcome")}),e("p",{children:l("login_welcome_text")})]}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),r("form",{onSubmit:g,children:[r("div",{children:[e(d,{htmlFor:"email",value:"Email"}),e(c,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>t("email",s.target.value)}),e(n,{message:o.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(d,{htmlFor:"password",value:"Password"}),e(c,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>t("password",s.target.value)}),e(n,{message:o.password,className:"mt-2"})]}),r("div",{className:"flex justify-between items-center mt-4",children:[r("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:a.remember,onChange:s=>t("remember",s.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]}),u&&e(i,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"})]}),r("div",{className:"flex items-center justify-between mt-8",children:[e(y,{disabled:f,children:"Log in"}),r("div",{children:["Not a member? ",e(i,{href:"/register",className:"font-bold text-primary",children:"Register here"})]})]})]})]})]})]})}export{R as default};
