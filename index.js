import{S as g,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const F="48293872-b2eb1e8e6b9d94230c1481ee9",b="https://pixabay.com/api/";function L(o){const r=new URLSearchParams({key:F,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${b}?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function C(o){return o.map(({webformatURL:r,largeImageURL:t,tags:d,likes:e,views:s,comments:a,downloads:h})=>`<li class="gallery-item">
                <a class="gallery-link" href="${t}">
                    <img class="gallery-image" src="${r}" alt="${d}"/>
                </a>
                    <ul class="inform">
                        <li class="inform-link">
                            <h2 class="inform-title">Likes:</h2>
                            <p class="inform-dan">${e}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Views:</h2>
                            <p class="inform-dan">${s}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Comments:</h2>
                            <p class="inform-dan">${a}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Downloads:</h2>
                            <p class="inform-dan">${h}</p>
                        </li>
                    </ul>
                
        </li>`).join("")}const f=document.querySelector(".search-form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".load-more");l.style.display="none";i.style.display="none";let w="",c=1;const m=15,y=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});f.addEventListener("submit",p);function p(o){o.preventDefault();let r=o.target.elements.query.value.trim();if(u.innerHTML=" ",!r){n.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}l.style.display="flex",L(r).then(t=>{t.hits.length===0&&n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),c=1,u.insertAdjacentHTML("beforeend",C(t.hits)),y.refresh(),l.style.display="none",c*m<t.totalHits&&(i.style.display="flex")}).catch(t=>{n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${t.message}`,position:"topCenter"})}).finally(()=>o.target.reset())}async function q(){c+=1,i.disabled=!0,i.style.display="none",l.style.display="flex";try{const o=await creatingRequestPhoto(w,c);if(o.hits.length===0){n.info({message:"No results found for your query.",position:"bottomCenter",timeout:5e3}),i.style.display="none",l.style.display="none";return}u.insertAdjacentHTML("beforeend",creatGalleryCard(o.hits)),y.refresh(),l.style.display="none",c*m>=o.totalHits?(i.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:1e4})):i.style.display="flex";const r=document.querySelector(".gallery-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(o){n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${o.message}`,position:"topRight"})}finally{i.disabled=!1}}f.addEventListener("submit",p);i.addEventListener("click",q);
//# sourceMappingURL=index.js.map
