import{r as s,a as e,j as m,F as g,d as f}from"./app-a4df2cac.js";import{t as u}from"./transition-54d00183.js";const c=s.createContext(),a=({children:t})=>{const[o,n]=s.useState(!1),r=()=>{n(i=>!i)};return e(c.Provider,{value:{open:o,setOpen:n,toggleOpen:r},children:e("div",{className:"relative",children:t})})},h=({children:t})=>{const{open:o,setOpen:n,toggleOpen:r}=s.useContext(c);return m(g,{children:[e("div",{onClick:r,children:t}),o&&e("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},x=({align:t="right",width:o="48",contentClasses:n="py-1 bg-white",children:r})=>{const{open:i,setOpen:p}=s.useContext(c);let l="origin-top";t==="left"?l="origin-top-left left-0":t==="right"&&(l="origin-top-right right-0");let d="";return o==="48"&&(d="w-48"),e(g,{children:e(u,{as:s.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${d}`,onClick:()=>p(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:r})})})})},v=({className:t="",children:o,...n})=>e(f,{...n,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:o});a.Trigger=h;a.Content=x;a.Link=v;const y=a;export{y as D};
