//selecionar todos os elementos com a classe tabom e adcionalos a um array
const par = document.querySelectorAll(".paragrafo");
 //puxei do HTML usando id e associei a variavel impar
const impar = document.getElementById('papa');
//ela contou o numero de elementos em par
impar.innerHTML = par.length;