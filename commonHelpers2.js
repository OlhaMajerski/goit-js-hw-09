import"./assets/modulepreload-polyfill-3cfb730f.js";const o="feedback-form-state";let t={email:"",message:""};const s=document.querySelector(".feedback-form");window.addEventListener("DOMContentLoaded",()=>{const e=r(o);e&&(t=e,s.elements.email.value=t.email||"",s.elements.message.value=t.message||"")});s.addEventListener("input",e=>{const{name:a,value:n}=e.target;t[a]=n.trim(),l(o,t)});s.addEventListener("submit",e=>{e.preventDefault(),!t.email||!t.message?alert("Fill please all fields"):(console.log(t),localStorage.removeItem(o),t={email:"",message:""},s.reset())});function l(e,a){const n=JSON.stringify(a);localStorage.setItem(e,n)}function r(e){const a=localStorage.getItem(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}
//# sourceMappingURL=commonHelpers2.js.map
