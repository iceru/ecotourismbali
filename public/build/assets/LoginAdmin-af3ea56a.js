import{W as h,r as x,a as s,j as e,f as b,d as w}from"./app-a4ff7df0.js";import{C as v}from"./Checkbox-99cbb4a8.js";import{G as N}from"./GuestLayout-9b554971.js";import{I as i}from"./InputError-a6535c84.js";import{I as n}from"./InputLabel-fb47ab6a.js";import{P as y}from"./PrimaryButton-f5af1596.js";import{T as c}from"./TextInput-f6de99ea.js";import{L as C}from"./logo-5e7252b7.js";import{u as L}from"./useTranslation-ccc83ba9.js";import"./index-049481bc.js";function q({status:m,canResetPassword:d}){const{data:a,setData:t,post:u,processing:p,errors:o,reset:f}=h({email:"",password:"",remember:!1});x.useEffect(()=>()=>{f("password")},[]);const g=r=>{r.preventDefault(),u(route("login.admin.store"))},{t:l}=L();return s(N,{children:[e(b,{title:"Log in"}),e("div",{className:"lg:w-[50%] mx-auto items-center",children:s("div",{children:[s("div",{className:"mb-8 flex flex-col items-center",children:[e("img",{src:C,alt:"",className:"mb-6"}),e("h3",{className:"font-bold text-2xl mb-3",children:l("admin_login")}),e("p",{children:l("login_welcome_text")})]}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),s("form",{onSubmit:g,children:[s("div",{children:[e(n,{htmlFor:"email",value:"Email"}),e(c,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:r=>t("email",r.target.value)}),e(i,{message:o.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"password",value:"Password"}),e(c,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>t("password",r.target.value)}),e(i,{message:o.password,className:"mt-2"})]}),s("div",{className:"flex justify-between items-center mt-4",children:[s("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:a.remember,onChange:r=>t("remember",r.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]}),d&&e(w,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"})]}),e("div",{className:"flex items-center justify-between mt-8",children:e(y,{disabled:p,children:"Log in"})})]})]})})]})}export{q as default};