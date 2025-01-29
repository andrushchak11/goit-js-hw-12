import{S as F,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b="48293872-b2eb1e8e6b9d94230c1481ee9",w="https://pixabay.com/api/";function m(r){const t=new URLSearchParams({key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page});return fetch(`${w}?${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function y(r){return r.map(({webformatURL:t,largeImageURL:s,tags:c,likes:e,views:o,comments:l,downloads:g})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                    <img class="gallery-image" src="${t}" alt="${c}"/>
                </a>
                    <ul class="inform">
                        <li class="inform-link">
                            <h2 class="inform-title">Likes:</h2>
                            <p class="inform-dan">${e}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Views:</h2>
                            <p class="inform-dan">${o}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Comments:</h2>
                            <p class="inform-dan">${l}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Downloads:</h2>
                            <p class="inform-dan">${g}</p>
                        </li>
                    </ul>
                
        </li>`).join("")}const L=document.querySelector(".search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".loader"),i=document.querySelector(".load-more");f.style.display="none";i.style.display="none";let d="",a=1;const p=15,h=new F(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});L.addEventListener("submit",C);async function C(r){if(r.preventDefault(),d=r.target.elements.query.value.trim(),a=1,!d){n.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}f.style.display="flex",i.style.display="none",u.innerHTML="";try{const t=await m(d,a);if(t.hits.length===0){n.show({backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",position:"topCenter"});return}u.insertAdjacentHTML("beforeend",y(t.hits)),h.refresh(),a*p<t.totalHits&&(i.style.display="flex")}catch(t){n.show({backgroundColor:"#EF4040",message:t.message,messageColor:"#FFFFFF",position:"topCenter"})}finally{f.style.display="none",r.target.reset()}}async function S(){a+=1,i.disabled=!0,i.style.display="none",f.style.display="flex";try{const r=await m(d,a);if(r.hits.length===0){n.info({message:"No results found for your query.",position:"bottomCenter",timeout:5e3});return}u.insertAdjacentHTML("beforeend",y(r.hits)),h.refresh(),a*p>=r.totalHits?(i.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:1e4})):i.style.display="flex";const t=document.querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch(r){n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${r.message}`,position:"topRight"})}finally{i.disabled=!1}}i.addEventListener("click",S);
//# sourceMappingURL=index.js.map
