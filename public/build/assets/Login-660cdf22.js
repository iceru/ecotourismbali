import{W as b,r as x,j as r,a as e,f as w,d as l}from"./app-a4df2cac.js";import{C as v}from"./Checkbox-e4fe5d26.js";import{G as N}from"./GuestLayout-b8813ac5.js";import{I as n}from"./InputError-9d08f93c.js";import{I as d}from"./InputLabel-4aa9aaee.js";import{B as y}from"./Button-f77666b4.js";import{T as c}from"./TextInput-c2aa4c3e.js";import{A as C}from"./AuthImage-afe68318.js";import{u as k}from"./useTranslation-f7347da2.js";import"./moment-fbc5633a.js";import"./index-56ab0417.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";function P({status:m,canResetPassword:u}){const{data:t,setData:a,post:p,processing:f,errors:o,reset:h}=b({email:"",password:"",remember:!1});x.useEffect(()=>()=>{h("password")},[]);const g=s=>{s.preventDefault(),p(route("login"))},{t:i}=k();return r(N,{children:[e(w,{title:"Login"}),r("div",{className:"grid lg:grid-cols-2 items-center",children:[e("div",{className:"hidden lg:block",children:e(C,{})}),r("div",{children:[r("div",{className:"mb-8",children:[e("h3",{className:"font-bold text-2xl mb-3",children:i("login_welcome")}),e("p",{children:i("login_welcome_text")})]}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),r("form",{onSubmit:g,children:[r("div",{children:[e(d,{htmlFor:"email",value:"Email"}),e(c,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>a("email",s.target.value)}),e(n,{message:o.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(d,{htmlFor:"password",value:"Password"}),e(c,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>a("password",s.target.value)}),e(n,{message:o.password,className:"mt-2"})]}),r("div",{className:"flex justify-between items-center mt-4",children:[r("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:t.remember,onChange:s=>a("remember",s.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]}),u&&e(l,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"})]}),r("div",{className:"flex items-center justify-between mt-8",children:[e(y,{disabled:f,children:"Log in"}),r("div",{children:["Not a member? ",e(l,{href:"/register",className:"font-bold text-primary",children:"Register here"})]})]})]})]})]})]})}export{P as default};
