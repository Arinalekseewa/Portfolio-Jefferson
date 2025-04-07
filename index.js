import{A as x,S as L,N as k,M,K as O,a as h,i as P,b as _,c as l}from"./assets/vendor-BbBZ3pcz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const V=document.querySelector(".menu-btn"),A=document.querySelector(".nav-list"),I=document.querySelector(".burger-btn"),T=document.querySelector(".mobile-close-btn"),a=document.querySelector(".mobile-menu"),j=document.querySelectorAll(".mobile-navigation-link"),N=document.querySelector(".order-nav-mobile");V.addEventListener("click",H);function H(){A.classList.toggle("is-open")}function F(){a.classList.add("is-open"),document.body.classList.add("no-scroll")}function b(){a.classList.remove("is-open"),setTimeout(()=>{document.body.classList.remove("no-scroll")},300)}I.addEventListener("click",F);T.addEventListener("click",b);a.addEventListener("click",e=>{e.target===a&&b()});a.addEventListener("click",e=>{e.target===a&&b()});j.forEach(e=>{e.addEventListener("click",()=>{b()})});N.addEventListener("click",()=>{b()});document.addEventListener("DOMContentLoaded",function(){new x(".about-me-accordion",{duration:400,showMultiple:!0,collapse:!1}),document.querySelectorAll(".about-me-item").forEach((n,s)=>{const t=n.querySelector("div:nth-of-type(2)"),i=n.querySelector(".icon-arrow");t.classList.add("about-me-content"),s===0&&(n.classList.add("open"),t.style.maxHeight=t.scrollHeight+"px",i.style.transform="rotate(180deg)")}),document.querySelectorAll(".about-me-icon").forEach(n=>{n.addEventListener("click",function(){const s=this.closest(".about-me-item"),t=s.querySelector("div:nth-of-type(2)"),i=s.querySelector(".icon-arrow"),r=s.classList.toggle("open");t.style.maxHeight=r?t.scrollHeight+"px":"0px",i.style.transform=r?"rotate(180deg)":"rotate(0deg)"})});const o=new L(".about-me-swiper-container",{loop:!1,slidesPerView:2,modules:[k,M,O],navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:!0,roundLengths:!0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});o.on("slideChange",function(){document.querySelectorAll(".about-me-item-skils").forEach(t=>t.classList.remove("active"));const n=o.activeIndex,s=o.slides;s[n]&&s[n].classList.add("active")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".prev"),o=document.querySelector(".next"),n=new L(".swiper-container",{slidesPerView:1,spaceBetween:20,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},on:{afterInit:function(){s(this)},slideChange:function(){s(this)}}});e.addEventListener("click",()=>n.slidePrev()),o.addEventListener("click",()=>n.slideNext());function s(t){e.disabled=t.isBeginning,o.disabled=t.isEnd,e.classList.toggle("disabled",t.isBeginning),o.classList.toggle("disabled",t.isEnd)}});new x(".faq-list",{duration:400,showMultiple:!0,onToggle:function(e){const o=e.target.closest(".questions");o&&o.classList.toggle("is-active")}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),o=document.querySelectorAll(".covers-list");o.forEach(t=>{t.innerHTML+=t.innerHTML});const n={root:null,threshold:.5},s=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?o.forEach(r=>r.classList.add("animate")):o.forEach(r=>r.classList.remove("animate"))})},n);e&&s.observe(e)});const C=document.querySelector(".reviews-list"),$=document.querySelector(".swiper-controll-buttons");h.defaults.baseURL="https://portfolio-js.b.goit.study";const D=()=>h.get("/api/reviews").then(e=>e.data);function z(e){return`
    <li class="reviews-list-item swiper-slide">
      <img src="${e.avatar_url}" alt="${e.author}" class="reviews-list-item-img" />
      <h3 class="reviews-list-item-author">${e.author}</h3>
      <p class="reviews-list-item-text">${e.review}</p>
    </li>
  `}const R=e=>{const o=e.map(z).join("");C.insertAdjacentHTML("beforeend",o)},K=async()=>{try{const e=await D();R(e),new L(".reviews-swiper.swiper",{slidesPerView:1,spaceBetween:0,speed:700,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-button-next.button-next",prevEl:".swiper-button-prev.button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,mousewheel:!1})}catch(e){P.error({title:"Error",position:"topCenter",message:`Error fetching reviews: ${e}`}),C.insertAdjacentHTML("beforeend",'<p class="reviews-error-text">Not found</p>'),$.classList.add("is-hidden")}};K();document.addEventListener("DOMContentLoaded",()=>{_.init({duration:1200,easing:"ease-out-cubic",offset:100,once:!1,mirror:!0})});const c=document.querySelector(".js-form"),U={emailInput:c.querySelector(".js-email"),commentInput:c.querySelector(".js-comment"),emailError:c.querySelector(".js-email-error"),commentError:c.querySelector(".js-comment-error"),submitButton:c.querySelector(".connect__button")},{emailInput:m,commentInput:f,emailError:p,commentError:v,submitButton:Z}=U;c.addEventListener("submit",W);m.addEventListener("input",()=>{d("email",m,p),g()});f.addEventListener("input",()=>{d("comment",f,v),g()});g();async function W(e){var r,y,S,E;e.preventDefault(),q();const o=new FormData(c),n=(r=o.get("email"))==null?void 0:r.trim(),s=(y=o.get("comment"))==null?void 0:y.trim(),t=d("email",m,p),i=d("comment",f,v);if(!t||!i){Q();return}try{J();const{data:u}=await h.post("https://portfolio-js.b.goit.study/api/requests",{email:n,comment:s});l.close(),Y(u.title,u.message),c.reset(),q(),g()}catch(u){if(l.close(),console.error("Form submission error:",u),!navigator.onLine){showModalNoConnection();return}const B=((E=(S=u.response)==null?void 0:S.data)==null?void 0:E.message)||"Something went wrong. Please try again later.";G(B)}}function d(e,o,n,s=!0){const t=o.value.trim(),i=/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|net|org|ua|gov|edu)$/;return t?e==="email"&&!i.test(t)?(s&&(n.textContent="Please enter a valid email address.",n.style.color="#ff6b6b",o.classList.add("connect__input--invalid")),!1):(s&&(e==="email"?(n.textContent="✓ Email looks good.",n.style.color="#00ff99"):n.textContent="",o.classList.remove("connect__input--invalid")),!0):(s&&(n.textContent=e==="email"?"Email is required.":"Comment is required.",n.style.color="#ff6b6b",o.classList.add("connect__input--invalid")),!1)}function q(){p.textContent="",v.textContent="",p.style.color="#ff6b6b",v.style.color="#ff6b6b",m.classList.remove("connect__input--invalid"),f.classList.remove("connect__input--invalid")}function g(){const e=d("email",m,p,!1),o=d("comment",f,v,!1);Z.classList.toggle("is-disabled",!(e&&o))}function Y(e,o){l.fire({icon:"success",title:e,text:o,background:"#1c1d20",color:"white",customClass:{popup:"custom-popup",title:"custom-title",htmlContainer:"custom-text",confirmButton:"custom-button"}})}function G(e){l.fire({icon:"error",title:"Oops",text:e,background:"#1c1d20",color:"white",customClass:{confirmButton:"connect__button-modal"}})}function J(){l.fire({title:"Sending...",background:"#1c1d20",color:"white",allowOutsideClick:!1,didOpen:()=>l.showLoading(),customClass:{popup:"custom-popup",title:"custom-title",confirmButton:"custom-button"}})}function Q(){l.fire({icon:"warning",title:"Incomplete Fields",text:"Please fill in all required fields.",background:"#1c1d20",color:"white",customClass:{popup:"custom-popup",title:"custom-title",htmlContainer:"custom-text",confirmButton:"custom-button"}})}const w=document.querySelector(".scroll-top-btn"),X=document.querySelector("#about-me");window.addEventListener("scroll",()=>{const e=X.offsetTop;window.scrollY>=e?w.classList.add("show"):w.classList.remove("show")});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
