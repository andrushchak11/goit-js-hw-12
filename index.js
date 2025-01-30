import{a as F,S as b,i as n}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const w="48293872-b2eb1e8e6b9d94230c1481ee9",L="https://pixabay.com/api/";async function u(r,t=1){const a=new URLSearchParams({key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});try{return(await F.get(`${L}?${a}`)).data}catch(i){throw new Error(i.response.data.message)}}function y(r){return r.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:o,comments:c,downloads:g})=>`<li class="gallery-item">
                <a class="gallery-link" href="${a}">
                    <img class="gallery-image" src="${t}" alt="${i}"/>
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
                            <p class="inform-dan">${c}</p>
                        </li>
                        <li class="inform-link">
                            <h2 class="inform-title">Downloads:</h2>
                            <p class="inform-dan">${g}</p>
                        </li>
                    </ul>
                
        </li>`).join("")}const C=document.querySelector(".search-form"),m=document.querySelector(".gallery"),f=document.querySelector(".loader"),s=document.querySelector(".load-more");f.style.display="none";s.style.display="none";let d="",l=1;const p=15,h=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});C.addEventListener("submit",S);async function S(r){if(r.preventDefault(),d=r.target.elements.query.value.trim(),l=1,!d){n.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}f.style.display="flex",s.style.display="none",m.innerHTML="";try{const t=await u(d,l);if(t.hits.length===0){n.show({backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",position:"topCenter"});return}m.insertAdjacentHTML("beforeend",y(t.hits)),h.refresh(),l*p<t.totalHits&&(s.style.display="flex")}catch(t){n.show({backgroundColor:"#EF4040",message:t.message,messageColor:"#FFFFFF",position:"topCenter"})}finally{f.style.display="none",r.target.reset()}}async function q(){l+=1,s.disabled=!0,s.style.display="none",f.style.display="flex";try{const r=await u(d,l);if(r.hits.length===0){n.info({message:"No results found for your query.",position:"bottomCenter",timeout:5e3});return}m.insertAdjacentHTML("beforeend",y(r.hits)),h.refresh(),l*p>=r.totalHits?(s.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:1e4})):s.style.display="flex";const t=document.querySelector(".gallery-item");if(t){const a=t.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch(r){n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:`${r.message}`,position:"topRight"})}finally{s.disabled=!1}}s.addEventListener("click",q);
//# sourceMappingURL=index.js.map
