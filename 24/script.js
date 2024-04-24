
 //puxei do HTML usando id e associei a variavel impar
const impar = document.getElementById('uiui');
 //puxei do HTML usando id e associei a variavel per
const per = document.getElementById('opa');
 //puxei do HTML usando id e associei a variavel par
const par = per.parentNode; 
//usei para remover per de par
par.removeChild(per);
//usei para adicionar per a impar
impar.appendChild (per);