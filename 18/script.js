//selecionar todos os elementos com a classe tabom e adcionalos a um array
const par = document.querySelectorAll(".oi");
//para cada element em par execute a linha a 5 é uma estrutura de repetição
par.forEach(element => {
//foi usado par aaumenta a fonte para 20px
    element.style.fontSize = '20px'
});