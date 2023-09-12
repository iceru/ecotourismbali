import{r as m,W as I,b as e,j as l,F as E}from"./app-cebd207e.js";import{P as b}from"./PrimaryButton-803ec449.js";import{I as r}from"./InputLabel-0a9e7c84.js";import{T as d}from"./TextInput-3c1f2180.js";import{S as g}from"./SelectInput-7cce9648.js";import{u as P}from"./useTranslation-099d5374.js";const $=({member:c,categories:h})=>{const y=localStorage.getItem("agreement"),{t:s}=P(),[N,_]=m.useState(y||!1),[f,w]=m.useState(),[u,x]=m.useState(),[F,C]=m.useState(),{data:n,setData:i,post:j,processing:k,errors:t,reset:T}=I({company_name:c.company_name||null,business_name:c.business_name||null,address:c.address||null,image:c.image||null,sliders:null,name:c.user.name||null,position:c.position||null,email:c.user.email||null,phone:c.phone||null,description:c.description||null,city:c.city||null,province:c.province||null,website:c.website||null,category:c.category||h[0].id||null});m.useEffect(()=>{fetch("https://iceru.github.io/api-wilayah-indonesia/api/provinces.json").then(a=>a.json()).then(a=>{w(a);let o;n!=null&&n.province&&(o=a.find(p=>p.name===(n==null?void 0:n.province))),v(u||o.id||a[0].id)})},[]),m.useEffect(()=>{u&&v(u)},[u]);const v=a=>{fetch(`https://iceru.github.io/api-wilayah-indonesia/api/regencies/${a||u}.json`).then(o=>o.json()).then(o=>C(o))},S=a=>{a.preventDefault(),j(route("member.greenpal.store"),{onSuccess:()=>{}})},D=()=>{_(!0),localStorage.setItem("agreement",!0)};return e("div",{children:N?e(E,{children:l("form",{onSubmit:S,className:"w-full",children:[l("div",{className:"grid lg:grid-cols-2 gap-6 min-w-[50vw]",children:[l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"name",value:s("label_name_pic")}),e(d,{id:"name",name:"name",value:n.name,className:"block w-full",isFocused:!0,rows:8,onChange:a=>i("name",a.target.value)}),t.name&&e("span",{className:"text-red-600",children:t.name})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"job_title",value:s("job_title")}),e(d,{id:"job_title",name:"job_title",value:n.job_title,className:"block w-full",isFocused:!0,rows:8,onChange:a=>i("job_title",a.target.value)}),t.job_title&&e("span",{className:"text-red-600",children:t.job_title})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"business_name",value:s("business_name")}),e(d,{id:"business_name",name:"business_name",value:n.business_name,className:"block w-full",isFocused:!0,onChange:a=>i("business_name",a.target.value)}),t.business_name&&e("span",{className:"text-red-600",children:t.business_name})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"company_name",value:s("company_name")}),e(d,{id:"company_name",name:"company_name",value:n.company_name,className:"block w-full",isFocused:!0,onChange:a=>i("company_name",a.target.value)}),t.company_name&&e("span",{className:"text-red-600",children:t.company_name})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"email",value:s("email")}),e(d,{id:"email",name:"email",value:n.email,className:"block w-full",isFocused:!0,rows:8,onChange:a=>i("email",a.target.value)}),t.email&&e("span",{className:"text-red-600",children:t.email})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"phone",value:s("phone_whatsapp")}),e(d,{id:"phone",name:"phone",value:n.phone,className:"block w-full",isFocused:!0,type:"tel",onChange:a=>i("phone",a.target.value)}),t.phone&&e("span",{className:"text-red-600",children:t.phone})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"company_logo",value:s("company_logo")}),e("div",{children:e("input",{className:"mb-3",type:"file",name:"image",id:"image",onChange:a=>i("image",a.target.files[0])})}),t.image&&e("span",{className:"text-red-600",children:t.image})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"company_product",value:s("company_product")}),e("input",{className:"block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none",id:"sliders",multiple:!0,type:"file",name:"sliders",onChange:a=>{i("sliders",a.target.files)}}),t.sliders&&e("span",{className:"text-red-600",children:t.sliders})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"website",value:s("website")}),e(d,{id:"website",name:"website",value:n.website,className:"block w-full",isFocused:!0,onChange:a=>i("website",a.target.value)}),t.website&&e("span",{className:"text-red-600",children:t.website})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"category",value:s("category")}),e(g,{id:"category",name:"category",value:n.category,labelData:"name",valueData:"id",className:"block w-full",options:h,onChange:a=>i("category",a.target.value)})]})]}),l("div",{className:"grid gap-3 mt-6",children:[e(r,{htmlFor:"description",value:s("description")}),e(d,{id:"description",typeForm:"textarea",rows:7,name:"description",value:n.description,className:"block w-full",isFocused:!0,onChange:a=>i("description",a.target.value)})]}),l("div",{className:"grid lg:grid-cols-2 gap-6 min-w-[50vw] mt-6",children:[l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"provinces",value:s("provinces")}),e(g,{options:f,labelData:"name",valueData:"id",placeholder:"select_province",onChange:a=>{const o=a.nativeEvent.target.selectedIndex,p=a.nativeEvent.target[o].text;x(a.target.value),i("province",p)}}),t.provinces&&e("span",{className:"text-red-600",children:t.provinces})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"city",value:s("city")}),e(g,{options:F,labelData:"name",valueData:"id",placeholder:"select_city",onChange:a=>{const o=a.nativeEvent.target.selectedIndex,p=a.nativeEvent.target[o].text;i("city",p)}}),t.city&&e("span",{className:"text-red-600",children:t.city})]})]}),l("div",{className:"grid gap-3 mt-6 mb-2",children:[e(r,{htmlFor:"address",value:s("address")}),e(d,{id:"address",rows:4,name:"address",typeForm:"textarea",value:n.address,className:"block w-full",isFocused:!0,onChange:a=>i("address",a.target.value)}),t.address&&e("span",{className:"text-red-600",children:t.address})]}),e(b,{type:"submit",className:"w-full justify-center flex mt-4",disabled:k,children:s("submit")})]})}):l("div",{children:[e("h4",{className:"font-bold mb-2 text-lg",children:s("agreement_title")}),e("p",{className:"mb-4",children:s("agreement_text")}),e(b,{onClick:D,children:s("agreement_button")})]})})};export{$ as default};
