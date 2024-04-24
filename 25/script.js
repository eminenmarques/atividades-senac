// Seleciona o elemento HTML com o ID 'aiai' e armazena na variável 'impar'
const impar = document.getElementById('aiai');
// Seleciona o elemento HTML com o ID 'papa' e armazena na variável 'legal'
const legal = document.getElementById('papa');
// Obtém os elementos filhos do elemento com o ID 'aiai' e armazena na variável 'par'
const par = impar.children;
// Define o conteúdo HTML do elemento com o ID 'papa' como o número de filhos do elemento com o ID 'aiai'
legal.innerHTML = par.length;