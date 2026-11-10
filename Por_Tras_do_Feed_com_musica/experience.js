(()=>{
const canvas=document.getElementById('movie'),ctx=canvas.getContext('2d');
const colors=['#e85330','#aaa3f0','#7db39a','#e6bd64'],names=['Tecnologia','Música','Esportes','Cinema'];
const captions=[
'01 · O feed começa equilibrado: duas publicações de cada categoria.',
'02 · Uma curtida em tecnologia envia um sinal de interesse ao perfil.',
'03 · Tecnologia passa de 1 para 3 pontos. As outras categorias ficam com 1.',
'04 · O sistema distribui oito vagas: 4 de tecnologia, 2 de música, 1 de esportes e 1 de cinema.',
'05 · Agora a regra muda: uma vaga é reservada para cada categoria, com as mesmas curtidas.',
'06 · Com diversidade: 3 de tecnologia, 2 de música, 2 de esportes e 1 de cinema. Mesmo perfil, outro feed.'
];
let clock=0,playing=false,last=0,speed=1,previousPhase=-1;const duration=36;
const ease=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)};
const blend=(a,b,t)=>a+(b-a)*t;
const initial=[0,1,2,3,0,1,2,3],personal=[0,1,2,3,0,1,0,0],diverse=[0,1,2,3,0,1,2,0];
function box(x,y,w,h,fill){ctx.fillStyle=fill;ctx.beginPath();ctx.roundRect(x,y,w,h,10);ctx.fill()}
function label(text,x,y,size=18,color='#fff',align='left'){ctx.fillStyle=color;ctx.font=`${size}px system-ui`;ctx.textAlign=align;ctx.fillText(text,x,y)}
function card(x,y,c,alpha=1){ctx.globalAlpha=alpha;box(x,y,130,43,colors[c]);label(names[c],x+12,y+27,16,'#17202b');ctx.globalAlpha=1}
function draw(){
const phase=Math.min(5,Math.floor(clock/6)),u=(clock%6)/6;
ctx.clearRect(0,0,1100,450);
label('PUBLICAÇÕES DISPONÍVEIS',35,38,15,'#c4cbd5');label('PERFIL DE INTERESSE',395,38,15,'#c4cbd5');label('FEED · 8 VAGAS',770,38,15,'#c4cbd5');
for(let i=0;i<4;i++){card(35,75+i*79,i);card(65,96+i*79,i,.45)}
ctx.strokeStyle='#566172';ctx.lineWidth=2;ctx.setLineDash([5,7]);ctx.beginPath();ctx.moveTo(235,222);ctx.lineTo(357,222);ctx.moveTo(660,222);ctx.lineTo(745,222);ctx.stroke();ctx.setLineDash([]);
let pts=[1,1,1,1];if(phase>=2)pts=[3,1,1,1];
for(let i=0;i<4;i++){
 const grow=phase===2?ease(u*2):phase>2?1:0;
 const value=i===0?blend(1,3,grow):1;
 label(names[i],395,90+i*72,17,colors[i]);box(395,100+i*72,220,13,'#343d4b');box(395,100+i*72,Math.max(5,value/3*220),13,colors[i]);label(`${Math.round(value)} ponto${Math.round(value)>1?'s':''}`,632,112+i*72,15,'#fff');
}
if(phase===1){const t=ease(u);box(blend(165,400,t),blend(93,100,t),42,34,'#fff');label('♥',blend(186,421,t),blend(117,124,t),25,colors[0],'center')}
let target=phase>=5?diverse:phase>=3?personal:initial;
let prior=phase>=5?personal:initial;
for(let i=0;i<8;i++){
 const x=770+(i%2)*150,y=70+Math.floor(i/2)*79;
 box(x-3,y-3,136,49,'#3b4554');
 if(phase===3||phase===5){
 const t=ease((u-i*.045)*2.2);card(blend(35,x,t),blend(75+target[i]*79,y,t),target[i],blend(.45,1,t));
 if(t<.5)card(x,y,prior[i],1-t*2);
 }else card(x,y,target[i]);
}
label(phase>=4?'DIVERSIDADE LIGADA':'SELEÇÃO PROPORCIONAL',770,418,15,phase>=4?'#a9dfc4':'#c4cbd5');
label(phase>=4?'1 vaga por categoria + 4 proporcionais':'mais pontos → mais vagas',395,418,15,'#c4cbd5');
if(phase!==previousPhase){document.getElementById('movieCaption').textContent=captions[phase];document.getElementById('phaseDots').innerHTML=captions.map((_,i)=>`<span class="${i<=phase?'on':''}"></span>`).join('');previousPhase=phase}
document.getElementById('movieTime').textContent=`${Math.floor(clock)}s / ${duration}s`;
}
// Trilha instrumental: inicia somente depois do clique do visitante.
const movieMusic=document.getElementById('movieMusic');
const toggleMusic=document.getElementById('toggleMusic');
let musicEnabled=true;
movieMusic.volume=0.16;
function syncMusic(){
  if(playing && musicEnabled){movieMusic.play().catch(()=>{});}
  else movieMusic.pause();
}
toggleMusic.onclick=()=>{musicEnabled=!musicEnabled;toggleMusic.textContent=musicEnabled?'Som: ligado ♪':'Som: desligado';toggleMusic.setAttribute('aria-pressed',String(musicEnabled));syncMusic()};
function frame(ts){if(playing){if(last)clock=Math.min(duration-.001,clock+(ts-last)/1000*speed);last=ts;draw();if(clock>=duration-.001){playing=false;syncMusic();document.getElementById('playMovie').textContent='Reproduzir novamente';last=0}}else last=0;requestAnimationFrame(frame)}
document.getElementById('playMovie').onclick=()=>{if(clock>=duration-.01)clock=0;playing=!playing;syncMusic();document.getElementById('playMovie').textContent=playing?'Pausar':'Continuar';draw()};
document.getElementById('stepMovie').onclick=()=>{playing=false;syncMusic();clock=Math.min(30,Math.floor(clock/6)*6+6);document.getElementById('playMovie').textContent='Continuar';draw()};
document.getElementById('resetMovie').onclick=()=>{playing=false;syncMusic();movieMusic.currentTime=0;clock=0;document.getElementById('playMovie').textContent='Reproduzir animação';draw()};
document.getElementById('movieSpeed').onchange=e=>speed=Number(e.target.value);draw();requestAnimationFrame(frame);
// Read-only copy of the project notes. Render as text to keep their content inert.
const menu=document.getElementById('noteMenu');projectNotes.forEach((note,i)=>{const b=document.createElement('button');b.textContent=note.title;b.setAttribute('aria-pressed',String(i===0));b.onclick=()=>{menu.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');document.getElementById('noteText').textContent=note.text};menu.append(b)});document.getElementById('noteText').textContent=projectNotes[0].text;
// Presentation route: seven scenes, ten-minute suggested running time.
const ids=[document.querySelector('main>section').id||'abertura','filme','laboratorio','regras','conclusao','processo','fontes'];
document.querySelector('main>section').id=ids[0];
const tips=['1 min · Apresente a pergunta e o objetivo do projeto.','2 min · Reproduza a animação; pause para explicar pontos e vagas.','3 min · Reinicie, curta tecnologia, atualize e compare com diversidade.','1 min · Mostre a fórmula e o desempate por maiores restos.','1 min · Explique o que os resultados permitem concluir e seus limites.','1 min · Mostre o mapa, o Trello e as notas do Obsidian.','1 min · Cite as fontes, explique o apoio de IA e abra para perguntas.'];
let slide=0,start=0,timer=null;
document.querySelectorAll('a[href="#laboratorio"]').forEach(a=>a.addEventListener('click',e=>{if(document.body.classList.contains('presenting')){e.preventDefault();slide=2;showSlide()}}));
function showSlide(){document.querySelectorAll('main>section').forEach(x=>x.classList.remove('slide-active'));document.getElementById(ids[slide]).classList.add('slide-active');document.getElementById('slideCount').textContent=`${slide+1} / ${ids.length}`;document.getElementById('slideNote').textContent=tips[slide];document.getElementById('prevSlide').disabled=slide===0;document.getElementById('nextSlide').disabled=slide===ids.length-1;window.scrollTo(0,0)}
function exit(){document.body.classList.remove('presenting');clearInterval(timer);playing=false;syncMusic();if(document.fullscreenElement)document.exitFullscreen().catch(()=>{})}
document.getElementById('startPresentation').onclick=()=>{slide=0;start=Date.now();document.body.classList.add('presenting');showSlide();clearInterval(timer);timer=setInterval(()=>{const sec=Math.floor((Date.now()-start)/1000);document.getElementById('talkTime').textContent=`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')} / 10:00`},1000);document.documentElement.requestFullscreen?.().catch(()=>{})};
document.getElementById('prevSlide').onclick=()=>{if(slide>0){slide--;showSlide()}};document.getElementById('nextSlide').onclick=()=>{if(slide<ids.length-1){slide++;showSlide()}};document.getElementById('endPresentation').onclick=exit;
document.addEventListener('keydown',e=>{if(!document.body.classList.contains('presenting')||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;if(e.key==='Escape')exit();if(e.key==='ArrowRight'){e.preventDefault();document.getElementById('nextSlide').click()}if(e.key==='ArrowLeft'){e.preventDefault();document.getElementById('prevSlide').click()}});
})();
