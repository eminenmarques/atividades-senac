//selecionar todos os elementos com a classe tabom e adcionalos a um array
const par = document.querySelectorAll(".tabom");
//va repetir a linha 5 para cada elemento de par
par.forEach(element => {
//adicionar a classe c1 a o elemnto
    element.classList.add('c1');
});