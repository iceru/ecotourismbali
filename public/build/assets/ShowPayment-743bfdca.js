import{q as a,j as t,a as s}from"./app-a4df2cac.js";import{A as e}from"./AdminSection-11837ffe.js";import{A as l}from"./AdminLayout-31c0baaf.js";import c from"./BackTo-d35137d5.js";import{u as d}from"./useTranslation-f7347da2.js";import"./Button-f77666b4.js";import"./logo-5e7252b7.js";import"./index-56ab0417.js";import"./id-410e5203.js";import"./react-responsive-8ae21050.js";function A(){const{payment:o}=a().props,{t:r}=d(),i=(m,n)=>t("div",{className:"flex flex-wrap mb-4",children:[s("div",{className:"w-full lg:w-1/4 mb-3 lg:mb-0",children:s("div",{className:"font-bold",children:r(m)})}),s("div",{className:"w-full lg:w-3/4",children:n||"-"})]});return t(l,{children:[s(c,{link:"/admin/payment/index",title:"back_to_list_payment"}),t(e,{children:[i("payment_no",o==null?void 0:o.payment_no),i("payment_status",o==null?void 0:o.payment_status),i("name",o==null?void 0:o.member.business_name),i("payment_type",o==null?void 0:o.payment_type),i("invoice_number",o==null?void 0:o.status_code),i("amount",o==null?void 0:o.amount),i("bank",o==null?void 0:o.bank)]})]})}export{A as default};
