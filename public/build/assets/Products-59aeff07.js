import{r,j as a,a as e,f as c}from"./app-985c7907.js";import{G as m}from"./GuestLayout-4ad3862c.js";import{S as d}from"./SelectInput-0f139266.js";import"./TextInput-c22d7f28.js";import{B as t}from"./Button-74ae847b.js";import"./lodash-5cd7077f.js";import{T as p,P as u}from"./TitlePage-14fd8b82.js";import f from"./Filter-1204d220.js";import{F as o,v as g,w as h}from"./index-033d355d.js";import v from"./ProductItem-d54401e9.js";import{u as N}from"./useTranslation-42b99a75.js";import"./moment-fbc5633a.js";import"./id-410e5203.js";import"./logo-5e7252b7.js";const x="/build/assets/icon-res-d70e25b0.svg";function D({programs:b,categories:S,badges:w,members:l}){const i=[{label:"Name - Ascending",value:"name-ascending"},{label:"Name - Descending",value:"name-descending"}],{t:s}=N();return r.useState("all"),r.useState(),r.useState(),r.useState(),r.useState(i[0].value),r.useState({}),a(m,{children:[e(c,{title:"Hotel List"}),e(p,{title:"hotel_bookings"}),a("div",{className:"flex flex-wrap justify-between mb-6 pb-6 border-b",children:[a("div",{className:"mb-6 lg:mb-0 lg:pr-4 flex items-end gap-2",children:[a(t,{color:"primary",children:[e(o,{icon:g,className:"mr-2"})," ",s("hotel")]}),a(t,{color:"altPrimary",className:"group",children:[e("div",{className:"mr-2",children:e("img",{src:x,className:"group-hover:brightness-0 group-hover:invert",alt:""})}),s("restaurant")]}),a(t,{color:"altPrimary",children:[e(o,{className:"mr-2",icon:h}),s("product")]})]}),a("div",{className:"flex justify-center items-end gap-2",children:[e(t,{color:"secondary",children:s("list_items")}),e(t,{color:"altSecondary",children:s("maps")})]}),e("div",{children:a("div",{className:"ml-auto flex items-center gap-4",children:[e("div",{className:"font-bold text-lg inline-flex",children:s("sort")}),e("div",{className:"flex",children:e("div",{className:"flex items-center",children:e(d,{options:i,onChange:n=>changeSort(n.target.value)})})})]})})]}),a("div",{className:"flex flex-wrap",children:[e("div",{className:"sidebar w-full lg:w-1/5",children:e(f,{})}),a("div",{className:"lg:w-4/5 lg:pl-6",children:[e("div",{className:"grid h-fit",children:Array(1,2,3,4,5).map(()=>e(v,{}))}),e(u,{class:"mt-6",links:l==null?void 0:l.links})]})]})]})}export{D as default};