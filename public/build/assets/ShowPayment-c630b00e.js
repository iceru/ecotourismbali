import{q as a,j as t,a as s}from"./app-69a25a5e.js";import{A as e}from"./AdminSection-72e97085.js";import{A as l}from"./AdminLayout-e141aab5.js";import c from"./BackTo-cb26b33e.js";import{u as d}from"./useTranslation-33c16b92.js";import"./PrimaryButton-7c111780.js";import"./logo-5e7252b7.js";import"./index-e4881126.js";import"./id-410e5203.js";import"./react-responsive-d8f9ff71.js";function A(){const{payment:o}=a().props,{t:r}=d(),i=(m,n)=>t("div",{className:"flex flex-wrap mb-4",children:[s("div",{className:"w-full lg:w-1/4 mb-3 lg:mb-0",children:s("div",{className:"font-bold",children:r(m)})}),s("div",{className:"w-full lg:w-3/4",children:n||"-"})]});return t(l,{children:[s(c,{link:"/admin/payment/index",title:"back_to_list_payment"}),t(e,{children:[i("payment_no",o==null?void 0:o.payment_no),i("payment_status",o==null?void 0:o.payment_status),i("name",o==null?void 0:o.member.business_name),i("payment_type",o==null?void 0:o.payment_type),i("invoice_number",o==null?void 0:o.status_code),i("amount",o==null?void 0:o.amount),i("bank",o==null?void 0:o.bank)]})]})}export{A as default};