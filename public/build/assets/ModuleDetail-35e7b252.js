import{a as e,j as r}from"./app-cb8b64cf.js";import{A as n}from"./AdminSection-6a333a96.js";import{M as o}from"./MemberLayout-1949f8d0.js";import s from"./TitleSection-b56ad5ca.js";import m from"./BackTo-28112e70.js";import{u as l}from"./useTranslation-736b70f5.js";import"./Button-d441ef7e.js";import"./index-70e2ddcc.js";import"./id-410e5203.js";import"./no-image-91387054.js";import"./react-responsive-7d765fc3.js";function N({module:t}){const{t:i,i18n:a}=l();return e(o,{children:r(n,{children:[e(m,{title:"back_to_list_module",link:route("member.module.index"),className:"text-sm"}),r("div",{className:"grid",children:[e(s,{title:"e_learning",className:"mb-3"}),e("div",{className:"font-bold text-primary mb-10",children:i("module_learning",{number:t.id})}),e("div",{className:"text-center font-bold text-xl mb-3",children:t.title}),r("div",{className:"mb-6 text-center text-sm text-gray-700",children:[i("form_label_author"),":"," ",e("span",{className:"font-bold",children:t.author})]}),e("div",{className:"flex justify-center mb-8",children:t.video?e("video",{src:`/storage/modules/${t.video}`,alt:t.name,controls:!0}):e("img",{src:`/storage/modules/${t.image}`,alt:t.name})}),e("div",{className:"text-justify module__content",dangerouslySetInnerHTML:{__html:a.language==="en"?t.content_en:t.content}})]})]})})}export{N as default};
