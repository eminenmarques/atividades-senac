 //puxei do HTML usando id e associei a variavel par
const par = document.getElementById('papa');
//criei uma div e associei a variavel par
const impar = document.createElement('div');
// usei innerHTMl para excrever dentro da div
impar.innerHTML = 'aa'
//associei essa a div impar a variavel par  
par.appendChild (impar) 