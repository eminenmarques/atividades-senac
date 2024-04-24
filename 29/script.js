// Seleciona todos os elementos <p> na página e os armazena na variável 'par'
const par = document.getElementsByTagName("P");
// Obtém o número de elementos <p> encontrados e armazena na variável 'impar'
const impar = par.length;
// Imprime o número de elementos <p> no console
console.log("Numero de elementos <p>:", impar);