// Troque pelo seu número: código do país + DDD + número, só dígitos
const WA='5511999999999';
const $=s=>document.querySelector(s);
$('#mb').onclick=()=>$('nav').classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>$('nav').classList.remove('open')));
$('#f').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);
const t='Olá, Nexdori TI! Quero abrir um chamado.\n\nNome: '+d.get('n')+'\nContato: '+d.get('c')+'\nTipo: '+d.get('t')+'\n\n'+d.get('m');
window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank','noopener');$('#ok').hidden=false};
