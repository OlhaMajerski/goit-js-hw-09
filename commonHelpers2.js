import"./assets/modulepreload-polyfill-3cfb730f.js";form.addEventListener("input",()=>{const e=new FormData(form),t=e.get("name"),a=e.get("message"),o={name:t,message:a};n("name",t),n("message",a),n("userData",o)});form.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(form),a=t.get("name"),o=t.get("message");console.log({name:a,message:o}),form.reset(),localStorage.removeItem("name"),localStorage.removeItem("message"),localStorage.removeItem("userData")});//!===============================================================
function n(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function s(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}window.addEventListener("DOMContentLoaded",()=>{const e=s("userData");form.elements.name.value=(e==null?void 0:e.name)??"Anonymous",form.elements.message.value=(e==null?void 0:e.message)??""});
//# sourceMappingURL=commonHelpers2.js.map
