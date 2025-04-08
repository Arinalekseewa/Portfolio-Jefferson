import{A as C,S as y,N as B,M as P,K as A,a as h,i as O,b as V,c as a}from"./assets/vendor-BbBZ3pcz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const _=document.querySelector(".menu-btn"),I=document.querySelector(".nav-list"),T=document.querySelector(".burger-btn"),j=document.querySelector(".mobile-close-btn"),l=document.querySelector(".mobile-menu"),N=document.querySelectorAll(".mobile-navigation-link"),H=document.querySelector(".order-nav-mobile");_.addEventListener("click",F);function F(){I.classList.toggle("is-open")}function $(){l.classList.add("is-open"),document.body.classList.add("no-scroll")}function g(){l.classList.remove("is-open"),setTimeout(()=>{document.body.classList.remove("no-scroll")},300)}T.addEventListener("click",$);j.addEventListener("click",g);l.addEventListener("click",e=>{e.target===l&&g()});l.addEventListener("click",e=>{e.target===l&&g()});N.forEach(e=>{e.addEventListener("click",()=>{g()})});H.addEventListener("click",()=>{g()});document.addEventListener("DOMContentLoaded",function(){new C(".about-me-accordion",{duration:400,showMultiple:!0,collapse:!1}),document.querySelectorAll(".about-me-item").forEach(t=>{const s=t.querySelector("div:nth-of-type(2)"),i=t.querySelector(".icon-arrow-about-me"),o=t.querySelector(".about-me-title");s.classList.add("about-me-content"),t.classList.remove("open"),s.style.maxHeight="0px",i.style.transform="rotate(0deg)",o.classList.remove("active"),i.classList.remove("active")}),document.querySelectorAll(".about-me-icon").forEach(t=>{t.addEventListener("click",function(){const s=this.closest(".about-me-item"),i=s.querySelector("div:nth-of-type(2)"),o=s.querySelector(".icon-arrow-about-me"),n=s.querySelector(".about-me-title"),r=s.classList.toggle("open");r?(i.style.maxHeight=i.scrollHeight+"px",n.classList.add("active"),o.classList.add("active")):(i.style.maxHeight="0px",n.classList.remove("active"),o.classList.remove("active")),o.style.transform=r?"rotate(180deg)":"rotate(0deg)"})})});const w=new y(".about-me-swiper-container",{loop:!0,slidesPerView:1,modules:[B,P,A],navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:!0,roundLengths:!0,breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});w.on("slideChange",function(){const e=w.slides[w.activeIndex];e&&(document.querySelectorAll(".about-me-item-skils").forEach(t=>t.classList.remove("active")),e.classList.add("active"))});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".prev"),t=document.querySelector(".next"),s=new y(".swiper-container",{slidesPerView:1,spaceBetween:20,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},on:{afterInit:function(){i(this)},slideChange:function(){i(this)}}});e.addEventListener("click",()=>s.slidePrev()),t.addEventListener("click",()=>s.slideNext());function i(o){const n=o.isBeginning,r=o.isEnd;e.disabled=n,t.disabled=r,e.classList.toggle("disabled",n),t.classList.toggle("disabled",r),e.classList.toggle("active",!n),t.classList.toggle("active",!r)}});new C(".faq-list",{duration:400,showMultiple:!0,onToggle:function(e){const t=e.target.closest(".questions");t&&t.classList.toggle("is-active")}});document.querySelectorAll(".questions").forEach((e,t)=>{const s=e.querySelector(".btn-answer"),i=e.querySelector(".title-item-list"),o=document.querySelectorAll(".ac-panel")[t];s.addEventListener("click",()=>{i.classList.toggle("active"),o.classList.toggle("open"),s.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),t=document.querySelectorAll(".covers-list");t.forEach(o=>{o.innerHTML+=o.innerHTML});const s={root:null,threshold:.5},i=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting?t.forEach(r=>r.classList.add("animate")):t.forEach(r=>r.classList.remove("animate"))})},s);e&&i.observe(e)});const M=document.querySelector(".reviews-list"),D=document.querySelector(".swiper-control-buttons"),z=document.querySelector(".swiper-slide");z.classList.add("no-transition");h.defaults.baseURL="https://portfolio-js.b.goit.study";const R=()=>h.get("/api/reviews").then(e=>e.data);function K(e){return`
    <div class="reviews-card swiper-slide">
      <img src="${e.avatar_url}" alt="${e.author}" class="reviews-card-img" />
      <h3 class="reviews-card-author">${e.author}</h3>
      <p class="reviews-card-text">${e.review}</p>
    </div>
  `}const U=e=>{const t=e.map(K).join("");M.insertAdjacentHTML("beforeend",t)},Z=async()=>{try{const e=await R();U(e),new y(".reviews-swiper.swiper",{slidesPerView:1,speed:300,freeMode:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next.button-next",prevEl:".swiper-button-prev.button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,mousewheel:!1})}catch(e){O.error({title:"Error",position:"topCenter",message:`Error fetching reviews: ${e}`}),M.insertAdjacentHTML("beforeend",'<p class="reviews-error-text">Not found</p>'),D.classList.add("is-hidden")}};Z();document.addEventListener("DOMContentLoaded",()=>{V.init({duration:300,easing:"ease-out-cubic",offset:100,once:!1,mirror:!0})});const c=document.querySelector(".js-form"),W={emailInput:c.querySelector(".js-email"),commentInput:c.querySelector(".js-comment"),emailError:c.querySelector(".js-email-error"),commentError:c.querySelector(".js-comment-error"),submitButton:c.querySelector(".connect__button")},{emailInput:m,commentInput:f,emailError:p,commentError:v,submitButton:Y}=W;c.addEventListener("submit",G);m.addEventListener("input",()=>{d("email",m,p),b()});f.addEventListener("input",()=>{d("comment",f,v),b()});b();async function G(e){var r,S,q,E;e.preventDefault(),x();const t=new FormData(c),s=(r=t.get("email"))==null?void 0:r.trim(),i=(S=t.get("comment"))==null?void 0:S.trim(),o=d("email",m,p),n=d("comment",f,v);if(!o||!n){ee();return}try{X();const{data:u}=await h.post("https://portfolio-js.b.goit.study/api/requests",{email:s,comment:i});a.close(),J(u.title,u.message),c.reset(),x(),b()}catch(u){if(a.close(),console.error("Form submission error:",u),!navigator.onLine){showModalNoConnection();return}const k=((E=(q=u.response)==null?void 0:q.data)==null?void 0:E.message)||"Something went wrong. Please try again later.";Q(k)}}function d(e,t,s,i=!0){const o=t.value.trim(),n=/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|net|org|ua|gov|edu)$/;return o?e==="email"&&!n.test(o)?(i&&(s.textContent="Please enter a valid email address.",s.style.color="#ff6b6b",t.classList.add("connect__input--invalid")),!1):(i&&(e==="email"?(s.textContent="✓ Email looks good.",s.style.color="#00ff99"):s.textContent="",t.classList.remove("connect__input--invalid")),!0):(i&&(s.textContent=e==="email"?"Email is required.":"Comment is required.",s.style.color="#ff6b6b",t.classList.add("connect__input--invalid")),!1)}function x(){p.textContent="",v.textContent="",p.style.color="#ff6b6b",v.style.color="#ff6b6b",m.classList.remove("connect__input--invalid"),f.classList.remove("connect__input--invalid")}function b(){const e=d("email",m,p,!1),t=d("comment",f,v,!1);Y.classList.toggle("is-disabled",!(e&&t))}function J(e,t){a.fire({icon:"success",title:e,text:t,background:"#1c1d20",color:"white",customClass:{popup:"custom-popup",title:"custom-title",htmlContainer:"custom-text",confirmButton:"custom-button"}})}function Q(e){a.fire({icon:"error",title:"Oops",text:e,background:"#1c1d20",color:"white",customClass:{confirmButton:"connect__button-modal"}})}function X(){a.fire({title:"Sending...",background:"#1c1d20",color:"white",allowOutsideClick:!1,didOpen:()=>a.showLoading(),customClass:{popup:"custom-popup",title:"custom-title",confirmButton:"custom-button"}})}function ee(){a.fire({icon:"warning",title:"Incomplete Fields",text:"Please fill in all required fields.",background:"#1c1d20",color:"white",customClass:{popup:"custom-popup",title:"custom-title",htmlContainer:"custom-text",confirmButton:"custom-button"}})}const L=document.querySelector(".scroll-top-btn"),te=document.querySelector("#about-me");window.addEventListener("scroll",()=>{const e=te.offsetTop;window.scrollY>=e?L.classList.add("show"):L.classList.remove("show")});L.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
