import{r as l,a as T}from"./app-9e00b5ef.js";var Te=Object.defineProperty,we=(e,t,r)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t,r)=>(we(e,typeof t!="symbol"?t+"":t,r),r);let Fe=class{constructor(){W(this,"current",this.detect()),W(this,"handoffState","pending"),W(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},D=new Fe,q=(e,t)=>{D.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function j(e){let t=l.useRef(e);return q(()=>{t.current=e},[e]),t}function Ce(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function P(){let e=[],t={addEventListener(r,n,i,f){return r.addEventListener(n,i,f),t.add(()=>r.removeEventListener(n,i,f))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Ce(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,i){let f=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:i}),this.add(()=>{Object.assign(r.style,{[n]:f})})},group(r){let n=P();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let i of e.splice(n,1))i()}},dispose(){for(let r of e.splice(0))r()}};return t}function ae(){let[e]=l.useState(P);return l.useEffect(()=>()=>e.dispose(),[e]),e}let C=function(e){let t=j(e);return T.useCallback((...r)=>t.current(...r),[t])};function oe(){let[e,t]=l.useState(D.isHandoffComplete);return e&&D.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>D.handoff(),[]),e}function w(e,t,...r){if(e in t){let i=t[e];return typeof i=="function"?i(...r):i}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}let se=Symbol();function Ge(e,t=!0){return Object.assign(e,{[se]:t})}function ue(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let r=C(n=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(n):i.current=n)});return e.every(n=>n==null||(n==null?void 0:n[se]))?void 0:r}function Q(...e){return e.filter(Boolean).join(" ")}var ce=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ce||{}),$=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))($||{});function fe({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:f=!0,name:d}){let s=de(t,e);if(f)return A(s,r,n,d);let u=i??0;if(u&2){let{static:o=!1,...c}=s;if(o)return A(c,r,n,d)}if(u&1){let{unmount:o=!0,...c}=s;return w(o?0:1,{[0](){return null},[1](){return A({...c,hidden:!0,style:{display:"none"}},r,n,d)}})}return A(s,r,n,d)}function A(e,t={},r,n){let{as:i=r,children:f,refName:d="ref",...s}=X(e,["unmount","static"]),u=e.ref!==void 0?{[d]:e.ref}:{},o=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let c={};if(t){let h=!1,v=[];for(let[p,a]of Object.entries(t))typeof a=="boolean"&&(h=!0),a===!0&&v.push(p);h&&(c["data-headlessui-state"]=v.join(" "))}if(i===l.Fragment&&Object.keys(ie(s)).length>0){if(!l.isValidElement(o)||Array.isArray(o)&&o.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let h=o.props,v=typeof(h==null?void 0:h.className)=="function"?(...a)=>Q(h==null?void 0:h.className(...a),s.className):Q(h==null?void 0:h.className,s.className),p=v?{className:v}:{};return l.cloneElement(o,Object.assign({},de(o.props,ie(X(s,["ref"]))),c,u,$e(o.ref,u.ref),p))}return l.createElement(i,Object.assign({},X(s,["ref"]),i!==l.Fragment&&u,i!==l.Fragment&&c),o)}function $e(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function de(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let i in n)i.startsWith("on")&&typeof n[i]=="function"?(r[i]!=null||(r[i]=[]),r[i].push(n[i])):t[i]=n[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](i,...f){let d=r[n];for(let s of d){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;s(i,...f)}}});return t}function ee(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ie(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function X(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let te=l.createContext(null);te.displayName="OpenClosedContext";var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function pe(){return l.useContext(te)}function Oe({value:e,children:t}){return T.createElement(te.Provider,{value:e},t)}function re(){let e=l.useRef(!1);return q(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Se(e=0){let[t,r]=l.useState(e),n=re(),i=l.useCallback(u=>{n.current&&r(o=>o|u)},[t,n]),f=l.useCallback(u=>!!(t&u),[t]),d=l.useCallback(u=>{n.current&&r(o=>o&~u)},[r,n]),s=l.useCallback(u=>{n.current&&r(o=>o^u)},[r]);return{flags:t,addFlag:i,hasFlag:f,removeFlag:d,toggleFlag:s}}function Ne(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function Y(e,...t){e&&t.length>0&&e.classList.add(...t)}function _(e,...t){e&&t.length>0&&e.classList.remove(...t)}function je(e,t){let r=P();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[f,d]=[n,i].map(u=>{let[o=0]=u.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,h)=>h-c);return o}),s=f+d;if(s!==0){r.group(o=>{o.setTimeout(()=>{t(),o.dispose()},s),o.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&o.dispose()})});let u=r.addEventListener(e,"transitionend",o=>{o.target===o.currentTarget&&(t(),u())})}else t();return r.add(()=>t()),r.dispose}function Re(e,t,r,n){let i=r?"enter":"leave",f=P(),d=n!==void 0?Ne(n):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=w(i,{enter:()=>t.enter,leave:()=>t.leave}),u=w(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),o=w(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return _(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Y(e,...s,...o),f.nextFrame(()=>{_(e,...o),Y(e,...u),je(e,()=>(_(e,...s),Y(e,...t.entered),d()))}),f.dispose}function Pe({container:e,direction:t,classes:r,onStart:n,onStop:i}){let f=re(),d=ae(),s=j(t);q(()=>{let u=P();d.add(u.dispose);let o=e.current;if(o&&s.current!=="idle"&&f.current)return u.dispose(),n.current(s.current),u.add(Re(o,r.current,s.current==="enter",()=>{u.dispose(),i.current(s.current)})),u.dispose},[t])}function S(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let I=l.createContext(null);I.displayName="TransitionContext";var xe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(xe||{});function Le(){let e=l.useContext(I);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ke(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=l.createContext(null);M.displayName="NestingContext";function U(e){return"children"in e?U(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function me(e,t){let r=j(e),n=l.useRef([]),i=re(),f=ae(),d=C((p,a=$.Hidden)=>{let g=n.current.findIndex(({el:m})=>m===p);g!==-1&&(w(a,{[$.Unmount](){n.current.splice(g,1)},[$.Hidden](){n.current[g].state="hidden"}}),f.microTask(()=>{var m;!U(n)&&i.current&&((m=r.current)==null||m.call(r))}))}),s=C(p=>{let a=n.current.find(({el:g})=>g===p);return a?a.state!=="visible"&&(a.state="visible"):n.current.push({el:p,state:"visible"}),()=>d(p,$.Unmount)}),u=l.useRef([]),o=l.useRef(Promise.resolve()),c=l.useRef({enter:[],leave:[],idle:[]}),h=C((p,a,g)=>{u.current.splice(0),t&&(t.chains.current[a]=t.chains.current[a].filter(([m])=>m!==p)),t==null||t.chains.current[a].push([p,new Promise(m=>{u.current.push(m)})]),t==null||t.chains.current[a].push([p,new Promise(m=>{Promise.all(c.current[a].map(([b,N])=>N)).then(()=>m())})]),a==="enter"?o.current=o.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(a)):g(a)}),v=C((p,a,g)=>{Promise.all(c.current[a].splice(0).map(([m,b])=>b)).then(()=>{var m;(m=u.current.shift())==null||m()}).then(()=>g(a))});return l.useMemo(()=>({children:n,register:s,unregister:d,onStart:h,onStop:v,wait:o,chains:c}),[s,d,n,h,v,c,o])}function He(){}let Ae=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function le(e){var t;let r={};for(let n of Ae)r[n]=(t=e[n])!=null?t:He;return r}function De(e){let t=l.useRef(le(e));return l.useEffect(()=>{t.current=le(e)},[e]),t}let qe="div",he=ce.RenderStrategy;function Ie(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:i,afterLeave:f,enter:d,enterFrom:s,enterTo:u,entered:o,leave:c,leaveFrom:h,leaveTo:v,...p}=e,a=l.useRef(null),g=ue(a,t),m=p.unmount?$.Unmount:$.Hidden,{show:b,appear:N,initial:E}=Le(),[y,B]=l.useState(b?"visible":"hidden"),ne=ke(),{register:x,unregister:L}=ne,V=l.useRef(null);l.useEffect(()=>x(a),[x,a]),l.useEffect(()=>{if(m===$.Hidden&&a.current){if(b&&y!=="visible"){B("visible");return}return w(y,{hidden:()=>L(a),visible:()=>x(a)})}},[y,a,x,L,b,m]);let z=j({enter:S(d),enterFrom:S(s),enterTo:S(u),entered:S(o),leave:S(c),leaveFrom:S(h),leaveTo:S(v)}),k=De({beforeEnter:r,afterEnter:n,beforeLeave:i,afterLeave:f}),G=oe();l.useEffect(()=>{if(G&&y==="visible"&&a.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[a,y,G]);let J=E&&!N,ge=(()=>!G||J||V.current===b?"idle":b?"enter":"leave")(),R=Se(0),be=C(O=>w(O,{enter:()=>{R.addFlag(F.Opening),k.current.beforeEnter()},leave:()=>{R.addFlag(F.Closing),k.current.beforeLeave()},idle:()=>{}})),ye=C(O=>w(O,{enter:()=>{R.removeFlag(F.Opening),k.current.afterEnter()},leave:()=>{R.removeFlag(F.Closing),k.current.afterLeave()},idle:()=>{}})),H=me(()=>{B("hidden"),L(a)},ne);Pe({container:a,classes:z,direction:ge,onStart:j(O=>{H.onStart(a,O,be)}),onStop:j(O=>{H.onStop(a,O,ye),O==="leave"&&!U(H)&&(B("hidden"),L(a))})}),l.useEffect(()=>{J&&(m===$.Hidden?V.current=null:V.current=b)},[b,J,y]);let K=p,Ee={ref:g};return N&&b&&E&&(K={...K,className:Q(p.className,...z.current.enter,...z.current.enterFrom)}),T.createElement(M.Provider,{value:H},T.createElement(Oe,{value:w(y,{visible:F.Open,hidden:F.Closed})|R.flags},fe({ourProps:Ee,theirProps:K,defaultTag:qe,features:he,visible:y==="visible",name:"Transition.Child"})))}function Me(e,t){let{show:r,appear:n=!1,unmount:i,...f}=e,d=l.useRef(null),s=ue(d,t);oe();let u=pe();if(r===void 0&&u!==null&&(r=(u&F.Open)===F.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[o,c]=l.useState(r?"visible":"hidden"),h=me(()=>{c("hidden")}),[v,p]=l.useState(!0),a=l.useRef([r]);q(()=>{v!==!1&&a.current[a.current.length-1]!==r&&(a.current.push(r),p(!1))},[a,r]);let g=l.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);l.useEffect(()=>{if(r)c("visible");else if(!U(h))c("hidden");else{let E=d.current;if(!E)return;let y=E.getBoundingClientRect();y.x===0&&y.y===0&&y.width===0&&y.height===0&&c("hidden")}},[r,h]);let m={unmount:i},b=C(()=>{var E;v&&p(!1),(E=e.beforeEnter)==null||E.call(e)}),N=C(()=>{var E;v&&p(!1),(E=e.beforeLeave)==null||E.call(e)});return T.createElement(M.Provider,{value:h},T.createElement(I.Provider,{value:g},fe({ourProps:{...m,as:l.Fragment,children:T.createElement(ve,{ref:s,...m,...f,beforeEnter:b,beforeLeave:N})},theirProps:{},defaultTag:l.Fragment,features:he,visible:o==="visible",name:"Transition"})))}function Ue(e,t){let r=l.useContext(I)!==null,n=pe()!==null;return T.createElement(T.Fragment,null,!r&&n?T.createElement(Z,{ref:t,...e}):T.createElement(ve,{ref:t,...e}))}let Z=ee(Me),ve=ee(Ie),Be=ee(Ue),Je=Object.assign(Z,{Child:Be,Root:Z});export{Je as $,pe as C,ee as D,ce as S,Ge as T,fe as X,q as a,j as b,P as c,F as d,re as f,oe as l,C as o,ae as p,D as s,Ce as t,w as u,ue as y};