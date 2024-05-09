function clique() {
const caixa = parseInt(document.getElementById('caixa1').value);
const caixona = parseInt(document.getElementById('caixa2').value);
const caixinha =  parseInt(document.getElementById('caixa3').value);
let elemento = document.createElement('p');
elemento.innerHTML = (caixa + caixona + caixinha) /3;
document.body.appendChild(elemento);
}