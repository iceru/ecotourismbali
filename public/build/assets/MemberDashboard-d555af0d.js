import{a as o,j as e,F as g}from"./app-6dc2ec92.js";import{A as r}from"./id-a917ae66.js";import{P as s}from"./PrimaryButton-0b88ecea.js";import{M as p}from"./MemberLayout-40d73b65.js";import{F as c,l as u,n as f,o as m,m as d}from"./index-89dd456a.js";import{u as b}from"./useTranslation-8c161f2f.js";import"./logo-5e7252b7.js";import"./react-responsive-ed5597bb.js";function P({member:l}){const{t:n}=b(),h=()=>{let i=localStorage.getItem("snapToken");i?snap.pay(i,{onSuccess:function(a){console.log("success"),console.log(a),localStorage.clear("snapToken")},onPending:function(a){console.log("pending"),console.log(a)},onError:function(a){console.log("error"),console.log(a),localStorage.clear("snapToken")},onClose:function(){console.log("customer closed the popup without finishing the payment")}}):axios.post(route("member_payment.new_payment"),{}).then(function(a){i=a.data,localStorage.setItem("snapToken",a.data),snap.pay(i,{onSuccess:function(t){console.log(t),localStorage.clear("snapToken")},onPending:function(t){console.log(t),localStorage.clear("snapToken")},onError:function(t){console.log(t),localStorage.clear("snapToken")},onClose:function(){console.log("customer closed the popup without finishing the payment")}})})};return o(p,{children:[o("div",{className:"grid lg:grid-cols-2 gap-6 mb-6",children:[o(r,{children:[e("h2",{className:"font-bold text-[20px] mb-4",children:n("welcome_member")}),e("div",{children:o(s,{as:"link",href:route("member.profile"),className:"mb-4 !inline-block",color:"lightPrimary",children:[n("edit_profile"),e(c,{className:"ml-2",icon:u})]})}),l.status==="active"&&e("div",{children:o(s,{className:"!inline-block",as:"link",href:route("member.module.index"),color:"lightSecondary",children:[n("start_learning"),e(c,{icon:f,className:"ml-2"})]})})]}),e(r,{children:l.status==="active"?o(g,{children:[l&&l.badge?e("h2",{className:"font-bold text-[20px] mb-4",children:n("your_assessment")}):e("h2",{className:"font-bold text-[20px] mb-4",children:n("no_assessment")}),o("div",{className:"flex items-center",children:[l&&l.badge&&e("div",{children:e("img",{src:l.badge.image,alt:l.badge.name})}),o("div",{className:"grid gap-4",children:[o(s,{color:"lightPrimary",children:[n("start_assessment"),e(c,{icon:m,className:"ml-2"})]}),o(s,{color:"lightSecondary",children:[n("learn_more_assessment"),e(c,{icon:d,className:"ml-2"})]})]})]})]}):o("div",{children:[e("h2",{className:"font-bold text-[20px] mb-4",children:n("preview_member")}),o("div",{className:"grid gap-4",children:[e("div",{children:o(s,{color:"lightPrimary",as:"link",href:route("member.assessment.index"),children:[n("my_assessment"),e(c,{icon:m,className:"ml-2"})]})}),e("div",{children:o(s,{color:"lightSecondary",as:"link",href:route("member.module.index"),children:[n("e_learning"),e(c,{icon:d,className:"ml-2"})]})})]})]})})]}),l.status!=="active"&&o(r,{className:"flex flex-col items-center justify-center gap-4",children:[e("h2",{className:"font-bold text-xl",children:n("member_not_active")}),e("p",{className:"text-sm",children:n("member_locked_text")}),e(s,{onClick:()=>l.status!=="active"?h():null,children:n("member_locked_button")})]})]})}export{P as default};
