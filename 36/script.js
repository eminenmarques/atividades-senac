function clique() {
const caixa = parseInt(document.getElementById('caixa1').value);
const caixinha =  parseInt(document.getElementById('caixa2').value);
let elemento = document.createElement('p');
elemento.innerHTML = caixa + caixinha;
document.body.appendChild(elemento);
}