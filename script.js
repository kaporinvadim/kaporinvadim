"use strict";
const works = [{"name":"Микроволновка","sub":"Разговорный Reels · история","img":"images/microwave.webp","url":"https://drive.google.com/file/d/1B2iDVBz0YV7iEJiiA-Ti8UGwuYHPy0_s/view?usp=sharing"},{"name":"Саша Nordic 2.0","sub":"Артист / Reels / B-roll","img":"images/nordic.webp","url":"https://drive.google.com/file/d/1ojNvMNzCqxje_vCoaOPcC7ek5c9b-v9_/view?usp=sharing"},{"name":"6 серия","sub":"Серийный короткий формат","img":"images/series6.webp","url":"https://drive.google.com/file/d/1GrNmbvvgvIKDfHGLY_zmu0Q8CfwiQGnJ/view?usp=sharing"},{"name":"5 серия","sub":"Серийный короткий формат","img":"images/series5.webp","url":"https://drive.google.com/file/d/1nIJatAI0eC3k-BmsFZD4AGbcBTaLywDd/view?usp=sharing"},{"name":"Девушки · Право","sub":"Экспертный Reels · право","img":"images/legal.webp","url":"https://drive.google.com/file/d/1DGq3ACh6KnhFC6zEBQAcrBGQQxjQmqww/view?usp=sharing"},{"name":"KiraPrompts","sub":"AI-видео · монтаж Reels","img":"images/kiraprompts.webp","url":"https://drive.google.com/file/d/1XNxusK_kf2D7ZC3HjorWyeMS9JpGhE4V/view?usp=sharing"},{"name":"Заработок на нейросетях","sub":"Экспертное видео · AI","img":"images/earnai.webp","url":"https://drive.google.com/file/d/1UxXWAoyfNz0QfGiiwZlSnJ0isC_XRDDN/view?usp=sharing"},{"name":"Бизнес ошибка","sub":"Экспертный Reels · B-roll","img":"images/business.webp","url":"https://drive.google.com/file/d/1w_et2mX-7zczoPxjNLP_Gce7s2oghFwW/view?usp=sharing"},{"name":"First Aid","sub":"Экспертный Reels","img":"images/firstaid.webp","url":"https://drive.google.com/file/d/1PGkXCLndm8eM3gZwzU0XcxIoFfRdB8Qr/view?usp=sharing"},{"name":"Petrolero","sub":"Автомобильное видео · анимация","img":"images/petrolero.webp","url":"https://drive.google.com/file/d/1SlQvyICY4RGPyMLV-ivna8nTT_QfMLQ4/view?usp=sharing"},{"name":"Artist","sub":"Разговорный Reels","img":"images/artist.webp","url":"https://drive.google.com/file/d/15ssT-Fh4Mrq714Waiqy9H5E0WGPnHRPQ/view?usp=sharing"},{"name":"Полностью поменяй жизнь","sub":"Разговорное видео","img":"images/life.webp","url":"https://drive.google.com/file/d/18WcRjx7i4mVRNI-795WADM6xROE-cGeX/view?usp=sharing"},{"name":"Квартира","sub":"Динамичный монтаж","img":"images/apartment.webp","url":"https://drive.google.com/file/d/15IR0-SgFdlHUSdKWmZXhWXZ3_NXgBG4t/view?usp=sharing"},{"name":"Продвижение в соцсетях","sub":"Экспертный Reels","img":"images/social.webp","url":"https://drive.google.com/file/d/1Q_RT-Lnbx1cKti7JA3koKhp4cTAjS8HT/view?usp=sharing"},{"name":"Claude","sub":"Технологии · экранные вставки","img":"images/claude.webp","url":"https://drive.google.com/file/d/1Tk_WYD3aZsiYjFCfjOhLySS2mKLJ1_xe/view?usp=sharing"},{"name":"Food","sub":"Лайфстайл","img":"images/food.webp","url":"https://drive.google.com/file/d/1zBiXUWP8P14IML0VvLMtUq6CZ1O7cR0d/view?usp=sharing"},{"name":"Ямалмото","sub":"Динамичный монтаж · экшен","img":"images/yamalmoto.webp","url":"https://drive.google.com/file/d/1paUGtR9cQ0Z6M3uIms-xc1JtEEMX8aBL/view?usp=sharing"},{"name":"Делайте рекламу одежды","sub":"Рекламный Reels · одежда","img":"images/advertising-clothes.webp","url":"https://drive.google.com/file/d/1maNDR_-2Y6nf_A2wPONRtQaHcsOfxdY1/view?usp=sharing"}];
const posterWall = document.getElementById('posterWall');
const posters = [...posterWall.querySelectorAll('.poster')];
const featured = [0,17,2,1,3];
const selectedName = document.getElementById('selectedName');
const watchSelected = document.getElementById('watchSelected');
let selectedPoster = 1;
let lastPointerType = "";
let lastFocus = null;
const lightbox = document.getElementById('lightbox');
const panel = lightbox.querySelector('.lightbox__panel');
const videoHost = document.getElementById('videoHost');
const closeButton = document.getElementById('closeLightbox');
const driveLink = document.getElementById('driveLink');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
function selectPoster(i) {
 if (i<0 || i>=posters.length) return;
 selectedPoster = i;
 posters.forEach((poster,j) => {
  poster.classList.toggle('is-active',j===i);
  poster.setAttribute('aria-current',j===i ? 'true' : 'false');
 });
 selectedName.textContent = works[featured[i]].name;
}
posters.forEach((poster,i) => {
 poster.addEventListener('pointerdown',event=>{lastPointerType=event.pointerType});
 poster.addEventListener('pointerenter', (event) => {if (event.pointerType==='mouse') selectPoster(i)});
 poster.addEventListener('focus',()=>{if(poster.matches(':focus-visible')) selectPoster(i)});
 poster.addEventListener('click',event => {
  if(event.button!==0 || event.metaKey||event.ctrlKey||event.shiftKey||event.altKey) return;
  event.preventDefault();
  // First tap selects on touch devices; another tap or the mobile CTA opens the selected project.
  const touchInteraction=(lastPointerType==='touch'||lastPointerType==='pen'||!finePointer.matches);
  lastPointerType='';
  if(touchInteraction && selectedPoster!==i) { selectPoster(i);return; }
  openVideo(featured[i]);
 });
 poster.addEventListener('keydown',event=>{
  if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
   event.preventDefault();const j=Math.max(0,Math.min(posters.length-1,i+(event.key==='ArrowRight'?1:-1)));
   posters[j].focus();
  }
 });
});
watchSelected.addEventListener('click',()=>openVideo(featured[selectedPoster]));
for (const link of document.querySelectorAll('.work-row')) {
 link.addEventListener('click',(event)=>{
  if(event.button!==0 || event.metaKey||event.ctrlKey||event.shiftKey||event.altKey) return;
  event.preventDefault();
  openVideo(Number(link.dataset.work));
 });
}
function openVideo(i){
 const work=works[i];
 if(!work) return;
 lastFocus=document.activeElement;
 document.getElementById('lightboxTitle').textContent=work.name;
 document.getElementById('lightboxDescription').textContent=work.sub;
 driveLink.href=work.url;
 videoHost.replaceChildren();
 videoHost.classList.toggle('is-landscape',/Заработок на нейросетях/i.test(work.name));
 const frame=document.createElement('iframe');
 const match=/\/d\/([a-zA-Z0-9_-]+)/.exec(work.url);
 if(!match){window.open(work.url,'_blank','noopener,noreferrer');return;}
 frame.src='https://drive.google.com/file/d/'+match[1]+'/preview';
 frame.title='Просмотр: '+work.name;
 frame.setAttribute('allow','autoplay; fullscreen; picture-in-picture');
 frame.setAttribute('allowfullscreen','');
 frame.referrerPolicy='strict-origin-when-cross-origin';
 videoHost.append(frame);
 lightbox.hidden=false;
 document.body.classList.add('lock-scroll');
 closeButton.focus({preventScroll:true});
}
function closeVideo(){
 if(lightbox.hidden) return;
 lightbox.hidden=true;
 videoHost.replaceChildren(); // destroys iframe; playback stops
 document.body.classList.remove('lock-scroll');
 if(lastFocus?.isConnected) lastFocus.focus({preventScroll:true});
}
closeButton.addEventListener('click',closeVideo);
lightbox.querySelector('[data-close]').addEventListener('click',closeVideo);
document.addEventListener('keydown',e=>{
 if(lightbox.hidden) return;
 if(e.key==='Escape'){e.preventDefault();closeVideo();return;}
 if(e.key==='Tab'){
   const nodes=[...panel.querySelectorAll('a[href],button:not([disabled]),iframe')].filter(el=>el.getClientRects().length);
   if(!nodes.length)return;
   const first=nodes[0],last=nodes[nodes.length-1];
   if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus()}
   else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus()}
 }
});
selectPoster(selectedPoster);
