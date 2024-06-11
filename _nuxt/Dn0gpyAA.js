import{_ as It}from"./xKvVNz9K.js";import Ot from"./Cyd5QW_F.js";import{q as F,o as r,c as u,s as B,n as q,w as T,r as f,y as ft,z as Pt,v as _,a as l,A as gt,B as E,C as Ct,D as Tt,b as x,E as A,T as Ht,d as Y,p as jt,e as Ft,_ as bt,F as Ut,f as W,h as zt,G as V,H as mt,I as Rt,J as dt,x as Lt,K as R,L as it,M as St,t as lt,N as Vt,O as Wt}from"./B5XpfWyY.js";import"./PqkkD6AP.js";const Kt={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},qt=["href"],Jt=F({__name:"DropdownLink",props:{href:{},as:{}},setup(n){const o=n;return(t,a)=>{const m=It;return r(),u("div",null,[o.as==="button"?(r(),u("button",Kt,[B(t.$slots,"default")])):o.as==="a"?(r(),u("a",{key:1,href:o.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[B(t.$slots,"default")],8,qt)):(r(),q(m,{key:2,to:o.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:T(()=>[B(t.$slots,"default")]),_:3},8,["to"]))])}}}),Xt={class:"relative"},Zt=F({__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(n){const o=n;let t=f(!1);const a=v=>{t.value&&v.key==="Escape"&&(t.value=!1)};ft(()=>document.addEventListener("keydown",a)),Pt(()=>document.removeEventListener("keydown",a));const m=_(()=>({48:"w-48"})[o.width]),i=_(()=>o.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":o.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(v,g)=>(r(),u("div",Xt,[l("div",{onClick:g[0]||(g[0]=c=>gt(t)?t.value=!E(t):t=!E(t))},[B(v.$slots,"trigger")]),Ct(l("div",{class:"fixed inset-0 z-40",onClick:g[1]||(g[1]=c=>gt(t)?t.value=!1:t=!1)},null,512),[[Tt,E(t)]]),x(Ht,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:T(()=>[Ct(l("div",{class:A(["absolute z-50 mt-2 rounded-md shadow-lg",[E(m),E(i)]]),style:{display:"none"},onClick:g[2]||(g[2]=c=>gt(t)?t.value=!1:t=!1)},[l("div",{class:A(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[B(v.$slots,"content")],2)],2),[[Tt,E(t)]])]),_:3})]))}}),At=n=>(jt("data-v-c9d6339b"),n=n(),Ft(),n),Gt={class:"sticky bg-primary-500 z-50"},Qt={class:"flex items-center bg-gray-800 p-3 flex-wrap"},te={class:"lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"},ee={class:"ms-3 relative"},ae=At(()=>l("span",{class:"inline-flex rounded-md"},[l("button",{type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},[l("span",null,"Team"),l("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})])])],-1)),oe=At(()=>l("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),se=F({__name:"Navbar",setup(n){const o=f(!1),t=()=>o.value=!o.value;return(a,m)=>{const i=It,v=Ot,g=Jt,c=Zt;return r(),u("div",Gt,[l("nav",Qt,[x(i,{class:"text-white p-2 mr-4 inline-flex items-center",to:"/","aria-label":"Logo"},{default:T(()=>[Y("Logo")]),_:1}),l("button",{class:"text-white inline-flex p-3 hover:bg-primary-900 rounded lg:hidden ml-auto hover:text-white outline-none",onClick:t},[x(v,{name:"material-symbols:menu-rounded",size:"24"})]),l("div",{class:A(["inline-flex w-full lg:inline-flex lg:flex-grow lg:w-auto",{"hidden ":!E(o)}])},[l("div",te,[x(i,{class:"link__nav",to:"/"},{default:T(()=>[Y("Home")]),_:1}),x(i,{class:"link__nav",to:"/events"},{default:T(()=>[Y("Events")]),_:1}),x(i,{class:"link__nav",to:"/press"},{default:T(()=>[Y("Press")]),_:1}),l("div",ee,[x(c,{align:"right",width:"48"},{trigger:T(()=>[ae]),content:T(()=>[x(g,{href:"/team/meet-team"},{default:T(()=>[Y(" Meet the team ")]),_:1}),x(g,{href:"/team/about-team"},{default:T(()=>[Y(" About the team ")]),_:1}),oe]),_:1})])])],2)])])}}}),ne=bt(se,[["__scopeId","data-v-c9d6339b"]]);var re=Object.defineProperty,ie=(n,o,t)=>o in n?re(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,C=(n,o,t)=>(ie(n,typeof o!="symbol"?o+"":o,t),t);function le(n){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",o.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}le("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px;transform:translateZ(0)}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:'';position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount,0));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{from{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;--mobile-offset:16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 91%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 91%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 91%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 100%, 12%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 12%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");let ht=0;class de{constructor(){C(this,"subscribers"),C(this,"toasts"),C(this,"subscribe",o=>(this.subscribers.push(o),()=>{const t=this.subscribers.indexOf(o);this.subscribers.splice(t,1)})),C(this,"publish",o=>{this.subscribers.forEach(t=>t(o))}),C(this,"addToast",o=>{this.publish(o),this.toasts=[...this.toasts,o]}),C(this,"create",o=>{var t;const{message:a,...m}=o,i=typeof o.id=="number"||o.id&&((t=o.id)==null?void 0:t.length)>0?o.id:ht++,v=this.toasts.find(c=>c.id===i),g=o.dismissible===void 0?!0:o.dismissible;return v?this.toasts=this.toasts.map(c=>c.id===i?(this.publish({...c,...o,id:i,title:a}),{...c,...o,id:i,dismissible:g,title:a}):c):this.addToast({title:a,...m,dismissible:g,id:i}),i}),C(this,"dismiss",o=>(o||this.toasts.forEach(t=>{this.subscribers.forEach(a=>a({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:o,dismiss:!0})),o)),C(this,"message",(o,t)=>this.create({...t,message:o,type:"default"})),C(this,"error",(o,t)=>this.create({...t,type:"error",message:o})),C(this,"success",(o,t)=>this.create({...t,type:"success",message:o})),C(this,"info",(o,t)=>this.create({...t,type:"info",message:o})),C(this,"warning",(o,t)=>this.create({...t,type:"warning",message:o})),C(this,"loading",(o,t)=>this.create({...t,type:"loading",message:o})),C(this,"promise",(o,t)=>{if(!t)return;let a;t.loading!==void 0&&(a=this.create({...t,promise:o,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const m=o instanceof Promise?o:o();let i=a!==void 0;return m.then(v=>{if(v&&typeof v.ok=="boolean"&&!v.ok){i=!1;const g=typeof t.error=="function"?t.error(`HTTP error! status: ${response.status}`):t.error,c=typeof t.description=="function"?t.description(`HTTP error! status: ${response.status}`):t.description;this.create({id:a,type:"error",message:g,description:c})}else if(t.success!==void 0){i=!1;const g=typeof t.success=="function"?t.success(v):t.success,c=typeof t.description=="function"?t.description(v):t.description;this.create({id:a,type:"success",message:g,description:c})}}).catch(v=>{if(t.error!==void 0){i=!1;const g=typeof t.error=="function"?t.error(v):t.error,c=typeof t.description=="function"?t.description(v):t.description;this.create({id:a,type:"error",message:g,description:c})}}).finally(()=>{var v;i&&(this.dismiss(a),a=void 0),(v=t.finally)==null||v.call(t)}),a}),C(this,"custom",(o,t)=>{const a=(t==null?void 0:t.id)||ht++;return this.publish({component:o,id:a,...t}),a}),this.subscribers=[],this.toasts=[]}}const I=new de,ce=(n,o)=>{const t=(o==null?void 0:o.id)||ht++;return I.create({message:n,id:t,type:"default",...o}),t},ue=ce,pe=Object.assign(ue,{success:I.success,info:I.info,warning:I.warning,error:I.error,custom:I.custom,message:I.message,promise:I.promise,dismiss:I.dismiss,loading:I.loading}),Z=(n,o)=>{const t=n.__vccOpts||n;for(const[a,m]of o)t[a]=m;return t},ve={},ge={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stoke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},fe=l("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),me=l("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1),he=[fe,me];function be(n,o){return r(),u("svg",ge,he)}const ye=Z(ve,[["render",be]]),xe=()=>{const n=f(!1);return W(()=>{const o=()=>{n.value=document.hidden};return document.addEventListener("visibilitychange",o),()=>window.removeEventListener("visibilitychange",o)}),{isDocumentHidden:n}},we=["aria-live","data-styled","data-mounted","data-promise","data-removed","data-visible","data-y-position","data-x-position","data-index","data-front","data-swiping","data-dismissible","data-type","data-invert","data-swipe-out","data-expanded"],_e=["aria-label","data-disabled"],ke={key:0,"data-icon":""},Be={"data-content":""},$e=4e3,Ce=14,Te=20,ze=200,Se=F({__name:"Toast",props:{toast:{},toasts:{},index:{},expanded:{type:Boolean},invert:{type:Boolean},heights:{},gap:{},position:{},visibleToasts:{},expandByDefault:{type:Boolean},closeButton:{type:Boolean},interacting:{type:Boolean},duration:{},descriptionClass:{},style:{},cancelButtonStyle:{},actionButtonStyle:{},unstyled:{type:Boolean},loadingIcon:{},class:{},classes:{},icons:{},closeButtonAriaLabel:{},pauseWhenPageIsHidden:{type:Boolean},cn:{type:Function}},emits:["update:heights","removeToast"],setup(n,{emit:o}){const t=o,a=n,m=f(!1),i=f(!1),v=f(!1),g=f(!1),c=f(0),O=f(0),H=f(null),P=f(null),D=_(()=>a.index===0),N=_(()=>a.index+1<=a.visibleToasts),$=_(()=>a.toast.type),J=_(()=>a.toast.dismissible!==!1),ct=_(()=>{var e,p,y,k,b,S,U;return a.cn((e=a.classes)==null?void 0:e.toast,(y=(p=a.toast)==null?void 0:p.classes)==null?void 0:y.toast,(k=a.classes)==null?void 0:k.default,(b=a.classes)==null?void 0:b[a.toast.type||"default"],(U=(S=a.toast)==null?void 0:S.classes)==null?void 0:U[a.toast.type||"default"])}),ut=a.toast.style||{},G=_(()=>a.heights.findIndex(e=>e.toastId===a.toast.id)||0),pt=_(()=>a.toast.closeButton??a.closeButton),s=_(()=>a.toast.duration||a.duration||$e),d=f(0),h=f(0),z=f(s.value),M=f(0),w=f(null),j=_(()=>a.position.split("-")),Q=_(()=>j.value[0]),tt=_(()=>j.value[1]),et=typeof a.toast.title!="string",at=typeof a.toast.description!="string",ot=_(()=>a.heights.reduce((e,p,y)=>y>=G.value?e:e+p.height,0)),st=xe(),nt=_(()=>a.toast.invert||a.invert),K=_(()=>$.value==="loading");ft(()=>{if(!m.value)return;const e=P.value,p=e==null?void 0:e.style.height;e.style.height="auto";const y=e.getBoundingClientRect().height;e.style.height=p,O.value=y;let k;a.heights.find(b=>b.toastId===a.toast.id)?k=a.heights.map(b=>b.toastId===a.toast.id?{...b,height:y}:b):k=[{toastId:a.toast.id,height:y,position:a.toast.position},...a.heights],t("update:heights",k)});const L=()=>{i.value=!0,c.value=h.value;const e=a.heights.filter(p=>p.toastId!==a.toast.id);t("update:heights",e),setTimeout(()=>{t("removeToast",a.toast)},ze)},vt=()=>{var e,p;K.value||!J.value||(L(),(p=(e=a.toast).onDismiss)==null||p.call(e,a.toast))},Dt=e=>{K.value||!J.value||(H.value=new Date,c.value=h.value,e.target.setPointerCapture(e.pointerId),e.target.tagName!=="BUTTON"&&(v.value=!0,w.value={x:e.clientX,y:e.clientY}))},Nt=e=>{var p,y,k,b;if(g.value)return;w.value=null;const S=Number(((p=P.value)==null?void 0:p.style.getPropertyValue("--swipe-amount").replace("px",""))||0),U=new Date().getTime()-H.value.getTime(),rt=Math.abs(S)/U;if(Math.abs(S)>=Te||rt>.11){c.value=h.value,(k=(y=a.toast).onDismiss)==null||k.call(y,a.toast),L(),g.value=!0;return}(b=P.value)==null||b.style.setProperty("--swipe-amount","0px"),v.value=!1},Yt=e=>{var p;if(!w.value)return;const y=e.clientY-w.value.y,k=e.clientX-w.value.x,b=(j.value[0]==="top"?Math.min:Math.max)(0,y),S=e.pointerType==="touch"?10:2;Math.abs(b)>S?(p=P.value)==null||p.style.setProperty("--swipe-amount",`${y}px`):Math.abs(k)>S&&(w.value=null)};return W(()=>{h.value=G.value*Ce+ot.value}),W(e=>{if(a.toast.promise&&$.value==="loading"||a.toast.duration===1/0||a.toast.type==="loading")return;let p;const y=()=>{if(M.value<d.value){const b=new Date().getTime()-d.value;z.value=z.value-b}M.value=new Date().getTime()},k=()=>{d.value=new Date().getTime(),p=setTimeout(()=>{var b,S;(S=(b=a.toast).onAutoClose)==null||S.call(b,a.toast),L()},z.value)};a.expanded||a.interacting||a.pauseWhenPageIsHidden&&st?y():k(),e(()=>{clearTimeout(p)})}),W(()=>{a.toast.delete&&L()}),ft(()=>{if(P.value){const e=P.value.getBoundingClientRect().height;O.value=e;const p=[{toastId:a.toast.id,height:e,position:a.toast.position},...a.heights];t("update:heights",p)}m.value=!0}),Pt(()=>{if(P.value){const e=a.heights.filter(p=>p.toastId!==a.toast.id);t("update:heights",e)}}),(e,p)=>{var y,k,b,S,U,rt,yt,xt,wt,_t,kt,Bt;return r(),u("li",{"aria-live":e.toast.important?"assertive":"polite","aria-atomic":"true",role:"status",tabindex:"0",ref_key:"toastRef",ref:P,"data-sonner-toast":"",class:A(ct.value),"data-styled":!(e.toast.component||(y=e.toast)!=null&&y.unstyled||e.unstyled),"data-mounted":m.value,"data-promise":!!e.toast.promise,"data-removed":i.value,"data-visible":N.value,"data-y-position":Q.value,"data-x-position":tt.value,"data-index":e.index,"data-front":D.value,"data-swiping":v.value,"data-dismissible":J.value,"data-type":$.value,"data-invert":nt.value,"data-swipe-out":g.value,"data-expanded":!!(e.expanded||e.expandByDefault&&m.value),style:Lt({"--index":e.index,"--toasts-before":e.index,"--z-index":e.toasts.length-e.index,"--offset":`${i.value?c.value:h.value}px`,"--initial-height":e.expandByDefault?"auto":`${O.value}px`,...e.style,...E(ut)}),onPointerdown:Dt,onPointerup:Nt,onPointermove:Yt},[pt.value&&!e.toast.component?(r(),u("button",{key:0,"aria-label":e.closeButtonAriaLabel||"Close toast","data-disabled":K.value,"data-close-button":"",class:A(e.cn((k=e.classes)==null?void 0:k.closeButton,(S=(b=e.toast)==null?void 0:b.classes)==null?void 0:S.closeButton)),onClick:vt},[x(ye)],10,_e)):R("",!0),e.toast.component?(r(),q(it(e.toast.component),dt({key:1},e.toast.componentProps,{onCloseToast:L}),null,16)):(r(),u(V,{key:2},[$.value!=="default"||e.toast.icon||e.toast.promise?(r(),u("div",ke,[(e.toast.promise||$.value==="loading")&&!e.toast.icon?B(e.$slots,"loading-icon",{key:0}):R("",!0),e.toast.icon?(r(),q(it(e.toast.icon),{key:1})):(r(),u(V,{key:2},[$.value==="success"?B(e.$slots,"success-icon",{key:0}):$.value==="error"?B(e.$slots,"error-icon",{key:1}):$.value==="warning"?B(e.$slots,"warning-icon",{key:2}):$.value==="info"?B(e.$slots,"info-icon",{key:3}):R("",!0)],64))])):R("",!0),l("div",Be,[l("div",{"data-title":"",class:A(e.cn((U=e.classes)==null?void 0:U.title,(rt=e.toast.classes)==null?void 0:rt.title))},[et?(r(),q(it(e.toast.title),St(dt({key:0},e.toast.componentProps)),null,16)):(r(),u(V,{key:1},[Y(lt(e.toast.title),1)],64))],2),e.toast.description?(r(),u("div",{key:0,"data-description":"",class:A(e.cn(e.descriptionClass,e.toast.descriptionClass,(yt=e.classes)==null?void 0:yt.description,(xt=e.toast.classes)==null?void 0:xt.description))},[at?(r(),q(it(e.toast.description),St(dt({key:0},e.toast.componentProps)),null,16)):(r(),u(V,{key:1},[Y(lt(e.toast.description),1)],64))],2)):R("",!0)]),e.toast.cancel?(r(),u("button",{key:1,class:A(e.cn((wt=e.classes)==null?void 0:wt.cancelButton,(_t=e.toast.classes)==null?void 0:_t.cancelButton)),"data-button":"","data-cancel":"",onClick:p[0]||(p[0]=()=>{var X;L(),(X=e.toast.cancel)!=null&&X.onClick&&e.toast.cancel.onClick()})},lt(e.toast.cancel.label),3)):R("",!0),e.toast.action?(r(),u("button",{key:2,class:A(e.cn((kt=e.classes)==null?void 0:kt.actionButton,(Bt=e.toast.classes)==null?void 0:Bt.actionButton)),"data-button":"",onClick:p[1]||(p[1]=X=>{var $t;($t=e.toast.action)==null||$t.onClick(X),!X.defaultPrevented&&L()})},lt(e.toast.action.label),3)):R("",!0)],64))],46,we)}}}),Me=["data-visible"],Ee={class:"sonner-spinner"},Ie=F({__name:"Loader",props:{visible:{type:Boolean}},setup(n){const o=Array(12).fill(0);return(t,a)=>(r(),u("div",{class:"sonner-loading-wrapper","data-visible":t.visible},[l("div",Ee,[(r(!0),u(V,null,mt(E(o),m=>(r(),u("div",{key:`spinner-bar-${m}`,class:"sonner-loading-bar"}))),128))])],8,Me))}}),Pe={},Le={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Ae=l("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"},null,-1),De=[Ae];function Ne(n,o){return r(),u("svg",Le,De)}const Ye=Z(Pe,[["render",Ne]]),Oe={},He={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},je=l("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z","clip-rule":"evenodd"},null,-1),Fe=[je];function Ue(n,o){return r(),u("svg",He,Fe)}const Re=Z(Oe,[["render",Ue]]),Ve={},We={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Ke=l("path",{"fill-rule":"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule":"evenodd"},null,-1),qe=[Ke];function Je(n,o){return r(),u("svg",We,qe)}const Xe=Z(Ve,[["render",Je]]),Ze={},Ge={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Qe=l("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"},null,-1),ta=[Qe];function ea(n,o){return r(),u("svg",Ge,ta)}const aa=Z(Ze,[["render",ea]]),oa=["aria-label"],sa=["dir","data-theme","data-rich-colors","data-y-position","data-x-position"],na=3,Mt="32px",ra=4e3,ia=356,Et=14,la=typeof window<"u"&&typeof document<"u",da=F({name:"Toaster",inheritAttrs:!1,__name:"Toaster",props:{invert:{type:Boolean,default:!1},theme:{default:"light"},position:{default:"bottom-right"},hotkey:{default:()=>["altKey","KeyT"]},richColors:{type:Boolean,default:!1},expand:{type:Boolean,default:!1},duration:{default:ra},gap:{default:Et},visibleToasts:{default:na},closeButton:{type:Boolean,default:!1},toastOptions:{default:()=>({})},class:{default:""},style:{default:()=>({})},offset:{default:Mt},dir:{default:"auto"},icons:{},containerAriaLabel:{default:"Notifications"},pauseWhenPageIsHidden:{type:Boolean,default:!1},cn:{}},setup(n){function o(...s){return s.filter(Boolean).join(" ")}function t(){if(typeof window>"u"||typeof document>"u")return"ltr";const s=document.documentElement.getAttribute("dir");return s==="auto"||!s?window.getComputedStyle(document.documentElement).direction:s}const a=n,m=Ut(),i=f([]),v=_(()=>{const s=i.value.filter(d=>d.position).map(d=>d.position);return s.length>0?Array.from(new Set([a.position].concat(s))):[a.position]}),g=f([]),c=f(!1),O=f(!1),H=f(a.theme!=="system"?a.theme:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),P=_(()=>a.cn||o),D=f(null),N=f(null),$=f(!1),J=a.hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,"");function ct(s){i.value=i.value.filter(({id:d})=>d!==s.id)}const ut=s=>{var d,h;$.value&&!((h=(d=s.currentTarget)==null?void 0:d.contains)!=null&&h.call(d,s.relatedTarget))&&($.value=!1,N.value&&(N.value.focus({preventScroll:!0}),N.value=null))},G=s=>{s.target instanceof HTMLElement&&s.target.dataset.dismissible==="false"||$.value||($.value=!0,N.value=s.relatedTarget)},pt=s=>{s.target&&s.target instanceof HTMLElement&&s.target.dataset.dismissible==="false"||(O.value=!1)};return W(s=>{const d=I.subscribe(h=>{if(h.dismiss){i.value=i.value.map(z=>z.id===h.id?{...z,delete:!0}:z);return}Rt(()=>{const z=i.value.findIndex(M=>M.id===h.id);z!==-1?i.value.splice(z,1,h):i.value=[h,...i.value]})});s(()=>{d()})}),zt(()=>a.theme,s=>{if(s!=="system"){H.value=s;return}s==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?H.value="dark":H.value="light"),!(typeof window>"u")&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:d})=>{d?H.value="dark":H.value="light"})}),zt(()=>D.value,()=>{if(D.value)return()=>{N.value&&(N.value.focus({preventScroll:!0}),N.value=null,$.value=!1)}}),W(()=>{i.value.length<=1&&(c.value=!1)}),W(s=>{function d(h){const z=a.hotkey.every(j=>h[j]||h.code===j),M=Array.isArray(D.value)?D.value[0]:D.value;z&&(c.value=!0,M==null||M.focus());const w=document.activeElement===D.value||(M==null?void 0:M.contains(document.activeElement));h.code==="Escape"&&w&&(c.value=!1)}la&&(document.addEventListener("keydown",d),s(()=>{document.removeEventListener("keydown",d)}))}),(s,d)=>(r(),u("section",{"aria-label":`${s.containerAriaLabel} ${E(J)}`,tabIndex:-1},[(r(!0),u(V,null,mt(v.value,(h,z)=>{var M;return r(),u("ol",dt({key:h,ref_for:!0,ref_key:"listRef",ref:D,"data-sonner-toaster":"",class:s.class,dir:s.dir==="auto"?t():s.dir,tabIndex:-1,"data-theme":s.theme,"data-rich-colors":s.richColors,"data-y-position":h.split("-")[0],"data-x-position":h.split("-")[1],style:{"--front-toast-height":`${(M=g.value[0])==null?void 0:M.height}px`,"--offset":typeof s.offset=="number"?`${s.offset}px`:s.offset||Mt,"--width":`${ia}px`,"--gap":`${Et}px`,...s.style,...E(m).style},onBlur:ut,onFocus:G,onMouseenter:d[1]||(d[1]=w=>c.value=!0),onMousemove:d[2]||(d[2]=w=>c.value=!0),onMouseleave:d[3]||(d[3]=()=>{O.value||(c.value=!1)}),onPointerdown:pt,onPointerup:d[4]||(d[4]=w=>O.value=!1)},s.$attrs),[(r(!0),u(V,null,mt(i.value.filter(w=>!w.position&&z===0||w.position===s.position),(w,j)=>{var Q,tt,et,at,ot,st,nt,K,L;return r(),q(Se,{key:w.id,index:j,toast:w,duration:((Q=s.toastOptions)==null?void 0:Q.duration)??s.duration,class:A((tt=s.toastOptions)==null?void 0:tt.class),descriptionClass:(et=s.toastOptions)==null?void 0:et.descriptionClass,invert:s.invert,visibleToasts:s.visibleToasts,closeButton:((at=s.toastOptions)==null?void 0:at.closeButton)??s.closeButton,interacting:O.value,position:s.position,style:Lt((ot=s.toastOptions)==null?void 0:ot.style),unstyled:(st=s.toastOptions)==null?void 0:st.unstyled,classes:(nt=s.toastOptions)==null?void 0:nt.classes,cancelButtonStyle:(K=s.toastOptions)==null?void 0:K.cancelButtonStyle,actionButtonStyle:(L=s.toastOptions)==null?void 0:L.actionButtonStyle,toasts:i.value,expandByDefault:s.expand,gap:s.gap,expanded:c.value,pauseWhenPageIsHidden:s.pauseWhenPageIsHidden,cn:P.value,heights:g.value,"onUpdate:heights":d[0]||(d[0]=vt=>g.value=vt),onRemoveToast:ct},{"loading-icon":T(()=>[B(s.$slots,"loading-icon",{},()=>[x(Ie,{visible:w.type==="loading"},null,8,["visible"])])]),"success-icon":T(()=>[B(s.$slots,"success-icon",{},()=>[x(Ye)])]),"error-icon":T(()=>[B(s.$slots,"error-icon",{},()=>[x(aa)])]),"warning-icon":T(()=>[B(s.$slots,"warning-icon",{},()=>[x(Xe)])]),"info-icon":T(()=>[B(s.$slots,"info-icon",{},()=>[x(Re)])]),_:2},1032,["index","toast","duration","class","descriptionClass","invert","visibleToasts","closeButton","interacting","position","style","unstyled","classes","cancelButtonStyle","actionButtonStyle","toasts","expandByDefault","gap","expanded","pauseWhenPageIsHidden","cn","heights"])}),128))],16,sa)}),128))],8,oa))}}),ca=Wt('<div class="flex flex-col" data-v-61e65abc><label for="name" class="label__input" data-v-61e65abc>Name</label><input type="text" id="name" name="name" class="" data-v-61e65abc></div><div class="flex flex-col" data-v-61e65abc><label for="lastname" class="label__input" data-v-61e65abc>Last Name</label><input type="text" id="lastname" name="lastname" data-v-61e65abc></div><div class="flex flex-col" data-v-61e65abc><label for="email" class="label__input" data-v-61e65abc>Email</label><input type="email" id="email" name="email" data-v-61e65abc></div><div class="flex items-end" data-v-61e65abc><button type="submit" class="btn-primary-sm" data-v-61e65abc>Submit</button></div>',4),ua=[ca],pa=F({__name:"Form",setup(n){const o=()=>{console.log("envbiado"),pe.success("ready! you already belong to our newsletter")};return(t,a)=>(r(),u("form",{class:"flex gap-3 p-4",onSubmit:a[0]||(a[0]=Vt(m=>o(),["prevent"]))},ua,32))}}),va=bt(pa,[["__scopeId","data-v-61e65abc"]]),ga={},fa={class:"relative overflow-hidden bg-gray-800 text-white"},ma=l("div",{class:"text-center my-8"},[l("span",{class:"font-bold text-2xl"},"Subscribe to our newsletter to receive the latest news!")],-1),ha={class:"flex justify-center items-center"},ba=l("div",{class:"flex justify-center items-center"},[Y(" Logo "),l("div",{class:"border-s border-neutral-700 ps-5 ms-5"},[l("p",{class:"text-sm text-text-400"},"2024 Morgan Chen Productions. All rights reserved. ")])],-1);function ya(n,o){const t=va;return r(),u("footer",fa,[ma,l("div",ha,[x(t)]),ba])}const xa=bt(ga,[["render",ya]]),wa={class:"min-h-screen antialiased bg-gif"},Ca=F({__name:"default",setup(n){return(o,t)=>{const a=ne,m=xa;return r(),u("div",null,[x(E(da),{richColors:""}),l("div",wa,[x(a),l("main",null,[B(o.$slots,"default")])]),x(m)])}}});export{Ca as default};
