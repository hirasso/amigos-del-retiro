import{p as u,q as h,f as b,v as m}from"./web.924d250b.js";var w=r=>(n,s,o,{client:a})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!r.hasAttribute("ssr"))return;const d=a==="only"?u:h;let t={};if(Object.keys(o).length>0)if(m.context)r.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,c]of Object.entries(o))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=c;const{default:l,...f}=t,i=r.dataset.solidRenderId;d(()=>b(n,{...s,...f,children:l}),r,{renderId:i})};export{w as default};
