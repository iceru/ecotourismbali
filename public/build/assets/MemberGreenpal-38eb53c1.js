import{r as m,W as I,b as e,j as l,F as E}from"./app-1ebe35dd.js";import{P as b}from"./PrimaryButton-8b065462.js";import{I as r}from"./InputLabel-4715be98.js";import{T as d}from"./TextInput-2a637073.js";import{S as g}from"./SelectInput-bcb48c8d.js";import{u as P}from"./useTranslation-030126f9.js";const $=({member:o,categories:h})=>{const y=localStorage.getItem("agreement"),{t}=P(),[N,_]=m.useState(y||!1),[f,w]=m.useState(),[u,x]=m.useState(),[F,C]=m.useState(),{data:n,setData:i,post:j,processing:k,errors:s,reset:T}=I({company_name:o.company_name||null,business_name:o.business_name||null,address:o.address||null,image:o.image||null,sliders:null,name:o.user.name||null,position:o.position||null,email:o.user.email||null,phone:o.phone||null,description:o.description||null,city:o.city||null,province:o.province||null,website:o.website||null,category:o.category||h[0].id||null});m.useEffect(()=>{fetch("https://iceru.github.io/api-wilayah-indonesia/api/provinces.json").then(a=>a.json()).then(a=>{w(a);let c;n!=null&&n.province&&(c=a.find(p=>p.name===(n==null?void 0:n.province))),v(u||c.id||a[0].id)})},[]),m.useEffect(()=>{u&&v(u)},[u]);const v=a=>{fetch(`https://iceru.github.io/api-wilayah-indonesia/api/regencies/${a||u}.json`).then(c=>c.json()).then(c=>C(c))},S=a=>{a.preventDefault(),j(route("member.greenpal.store"),{onSuccess:()=>{}})},D=()=>{_(!0),localStorage.setItem("agreement",!0)};return e("div",{children:N?e(E,{children:l("form",{onSubmit:S,className:"w-full",children:[l("div",{className:"grid lg:grid-cols-2 gap-6 min-w-[50vw]",children:[l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"name",value:t("label_name_pic")}),e(d,{id:"name",name:"name",value:n.name,className:"block w-full",isFocused:!0,rows:8,onChange:a=>i("name",a.target.value)}),s.name&&e("span",{className:"text-red-600",children:s.name})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"job_title",value:t("job_title")}),e(d,{id:"job_title",name:"job_title",value:n.job_title,className:"block w-full",isFocused:!0,rows:8,onChange:a=>i("job_title",a.target.value)}),s.job_title&&e("span",{className:"text-red-600",children:s.job_title})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"business_name",value:t("business_name")}),e(d,{id:"business_name",name:"business_name",value:n.business_name,className:"block w-full",isFocused:!0,onChange:a=>i("business_name",a.target.value)}),s.business_name&&e("span",{className:"text-red-600",children:s.business_name})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"company_name",value:t("company_name")}),e(d,{id:"company_name",name:"company_name",value:n.company_name,className:"block w-full",isFocused:!0,onChange:a=>i("company_name",a.target.value)}),s.company_name&&e("span",{className:"text-red-600",children:s.company_name})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"email",value:t("email")}),e(d,{id:"email",name:"email",value:n.email,className:"block w-full",isFocused:!0,rows:8,onChange:a=>i("email",a.target.value)}),s.email&&e("span",{className:"text-red-600",children:s.email})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"phone",value:t("phone_whatsapp")}),e(d,{id:"phone",name:"phone",value:n.phone,className:"block w-full",isFocused:!0,type:"tel",onChange:a=>i("phone",a.target.value)}),s.phone&&e("span",{className:"text-red-600",children:s.phone})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"company_logo",value:t("company_logo")}),e("div",{children:e("input",{className:"mb-3",type:"file",name:"image",id:"image",onChange:a=>i("image",a.target.files[0])})})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"company_product",value:t("company_product")}),e("input",{className:"block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none",id:"sliders",multiple:!0,type:"file",name:"sliders",onChange:a=>{i("sliders",a.target.files)}})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"website",value:t("website")}),e(d,{id:"website",name:"website",value:n.website,className:"block w-full",isFocused:!0,onChange:a=>i("website",a.target.value)})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"category",value:t("category")}),e(g,{id:"category",name:"category",value:n.category,labelData:"name",valueData:"id",className:"block w-full",options:h,onChange:a=>i("category",a.target.value)})]})]}),l("div",{className:"grid gap-3 mt-6",children:[e(r,{htmlFor:"description",value:t("description")}),e(d,{id:"description",typeForm:"textarea",rows:7,name:"description",value:n.description,className:"block w-full",isFocused:!0,onChange:a=>i("description",a.target.value)})]}),l("div",{className:"grid lg:grid-cols-2 gap-6 min-w-[50vw] mt-6",children:[l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"provinces",value:t("provinces")}),e(g,{options:f,labelData:"name",valueData:"id",placeholder:"select_province",onChange:a=>{const c=a.nativeEvent.target.selectedIndex,p=a.nativeEvent.target[c].text;x(a.target.value),i("province",p)}}),s.provinces&&e("span",{className:"text-red-600",children:s.provinces})]}),l("div",{className:"grid gap-3",children:[e(r,{htmlFor:"city",value:t("city")}),e(g,{options:F,labelData:"name",valueData:"id",placeholder:"select_city",onChange:a=>{const c=a.nativeEvent.target.selectedIndex,p=a.nativeEvent.target[c].text;i("city",p)}}),s.city&&e("span",{className:"text-red-600",children:s.city})]})]}),l("div",{className:"grid gap-3 mt-6 mb-2",children:[e(r,{htmlFor:"address",value:t("address")}),e(d,{id:"address",rows:4,name:"address",typeForm:"textarea",value:n.address,className:"block w-full",isFocused:!0,onChange:a=>i("address",a.target.value)}),s.address&&e("span",{className:"text-red-600",children:s.address})]}),e(b,{type:"submit",className:"w-full justify-center flex mt-4",disabled:k,children:t("submit")})]})}):l("div",{children:[e("h4",{className:"font-bold mb-2 text-lg",children:t("agreement_title")}),e("p",{className:"mb-4",children:t("agreement_text")}),e(b,{onClick:D,children:t("agreement_button")})]})})};export{$ as default};
