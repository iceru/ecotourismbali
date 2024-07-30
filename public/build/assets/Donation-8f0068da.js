import{r as u,W as x,a,j as t,y as D}from"./app-4c173c0b.js";import{B as k}from"./Button-8d89875c.js";import{T as c}from"./TextInput-1c9658ae.js";import{G as F}from"./GuestLayout-359b4f18.js";import{u as S}from"./useTranslation-43d81841.js";import"./moment-fbc5633a.js";import"./logo-5e7252b7.js";import"./index-fa95e02e.js";import"./index-25fc1de7.js";import"./id-410e5203.js";function V(){const{t:h}=S(),i=[1e5,25e4,5e5],[d,p]=u.useState(i[0]),[f,y]=u.useState(),{data:n,setData:r,post:v,processing:N,errors:o,reset:I}=x({name:"",email:"",company:"",amount:d});let g=sessionStorage.getItem("snapTokenDonation");const b=e=>{e.preventDefault();const l=s=>{snap.pay(s,{onSuccess:function(){setPayComplete(!0),setPayPending(!1),sessionStorage.clear("snapTokenDonation"),sessionStorage.setItem("paid",!0),D.visit("/donation/success")},onPending:function(){setPayPending(!0)},onError:function(){setPayPending(!1),sessionStorage.clear("snapTokenDonation")},onClose:function(){setPayPending(!0)}})};if(g)l(g);else{debugger;v(route("donation.store"),{onSuccess:()=>{axios.post(route("donation.pay"),{email:n==null?void 0:n.email,amount:n==null?void 0:n.amount}).then(function(s){sessionStorage.setItem("snapTokenDonation",s.data),l(s.data)}).catch(s=>{console.log(s)})}})}},m=e=>{let l=e;typeof e=="string"&&(l=e.replace(/[^0-9]/g,""));const s=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0}).format(l);p(parseInt(l)),y(s),r("amount",parseInt(l))};return u.useEffect(()=>{m(i[0])},[]),console.log(o),a(F,{children:t("main",{className:"container grid lg:grid-cols-2 gap-10",children:[t("section",{children:[t("h1",{className:"text-4xl font-bold font-sans leading-snug mb-4",children:["Donations for ",a("br",{})," Regenerative Bali"]}),t("p",{children:["Lorem ipsum dolor sit amet consectetur. Ut pharetra lorem nunc mi sed. Vitae egestas vitae leo augue. Nec nibh fames vitae libero et congue et pellentesque turpis. ",a("br",{})," ",a("br",{})," Fermentum sagittis sem consectetur integer volutpat scelerisque. Id lobortis maecenas aliquet praesent. Faucibus nam amet nullam volutpat orci. Amet arcu mauris eget phasellus sit."]})]}),t("form",{onSubmit:b,className:"p-6 rounded-3xl shadow-md bg-white relative z-10",children:[t("div",{className:"mb-4",children:[a("label",{htmlFor:"name",className:"mb-3 block",children:"Your Name"}),a(c,{id:"name",name:"name",required:!0,value:n.name,className:"block w-full",isFocused:!0,onChange:e=>r("name",e.target.value)}),(o==null?void 0:o.name)&&a("span",{className:"text-red-600",children:o.name})]}),t("div",{className:"mb-4",children:[a("label",{htmlFor:"email",className:"mb-3 block",children:"Your Email"}),a(c,{id:"email",name:"email",required:!0,value:n.email,className:"block w-full",isFocused:!0,onChange:e=>r("email",e.target.value)}),(o==null?void 0:o.email)&&a("span",{className:"text-red-600",children:o.email})]}),t("div",{className:"mb-4",children:[a("label",{htmlFor:"company",className:"mb-3 block",children:"Company (optional)"}),a(c,{id:"company",name:"company",value:n.company,className:"block w-full",isFocused:!0,onChange:e=>r("company",e.target.value)})]}),t("div",{children:[a("label",{htmlFor:"amount",className:"mb-3 block",children:"Select Amount"}),a("div",{className:"flex gap-4 mb-4",children:i==null?void 0:i.map(e=>a("button",{className:`w-full px-4 py-2 rounded-lg border-secondary border font-bold text-secondary 
                    text-center hover:bg-secondary hover:bg-opacity-70 hover:text-white transition ${d===e?"bg-secondary text-white":""}`,onClick:()=>{p(e),m(e)},children:e==null?void 0:e.toLocaleString("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0})}))})]}),t("div",{className:"mb-4",children:[a("label",{htmlFor:"company",className:"mb-3 block",children:"or Enter Amount"}),a(c,{id:"amount",name:"amount",value:f,className:"block w-full",isFocused:!0,onChange:e=>{m(e.target.value)}})]}),a("div",{children:a(k,{color:"secondary",className:"!font-bold w-full text-center justify-center",onClick:b,disabled:N,children:h("submit")})})]})]})})}export{V as default};
