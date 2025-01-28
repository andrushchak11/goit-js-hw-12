import{S as b,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const L="48293872-b2eb1e8e6b9d94230c1481ee9",w="https://pixabay.com/api/";function u(o){const s=new URLSearchParams({key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${w}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function m(o){return o.map(({webformatURL:s,largeImageURL:t,tags:d,likes:e,views:r,comments:a,downloads:F})=>`<li class="gallery-item">
                <a class="gallery-link" href="${t}">
                    <img class="gallery-image" src="${s}" alt="${d}"/>
                </a>
                    <ul class="inform">
                        <li class="inform-link">
                            <h2 class="inform-title">Likes:</h2>
                            <p class="inform-dan">${e}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Views:</h2>
                            <p class="inform-dan">${r}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Comments:</h2>
                            <p class="inform-dan">${a}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Downloads:</h2>
                            <p class="inform-dan">${F}</p>
                        </li>
                    </ul>
                
        </li>`).join("")}const y=document.querySelector(".search-form"),f=document.querySelector(".gallery"),l=document.querySelector(".loader"),i=document.querySelector(".load-more");l.style.display="none";i.style.display="none";let C="",c=1;const p=15,h=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("submit",g);function g(o){o.preventDefault();let s=o.target.elements.query.value.trim();if(f.innerHTML=" ",!s){n.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}l.style.display="flex",u(s).then(t=>{t.hits.length===0&&n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),c=1,f.insertAdjacentHTML("beforeend",m(t.hits)),h.refresh(),l.style.display="none",c*p<t.totalHits&&(i.style.display="flex")}).catch(t=>{n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${t.message}`,position:"topCenter"})}).finally(()=>o.target.reset())}async function q(){c+=1,i.disabled=!0,i.style.display="none",l.style.display="flex";try{const o=await u(C,c);if(o.hits.length===0){n.info({message:"No results found for your query.",position:"bottomCenter",timeout:5e3}),i.style.display="none",l.style.display="none";return}f.insertAdjacentHTML("beforeend",m(o.hits)),h.refresh(),l.style.display="none",c*p>=o.totalHits?(i.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:1e4})):i.style.display="flex";const s=document.querySelector(".gallery-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(o){n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${o.message}`,position:"topRight"})}finally{i.disabled=!1}}y.addEventListener("submit",g);i.addEventListener("click",q);
//# sourceMappingURL=index.js.map
