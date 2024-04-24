//selecionar todos os elementos com a classe tabom e adcionalos a um array
const par = document.querySelectorAll(".aiai");
//va repetir a linha 5 para cada elemento de par
par.forEach(element => {
//Essa linha eu defino o conteúdo de lement com "texto alterado"
element.innerHTML = 'Texto alterado';
});