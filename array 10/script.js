const par = document.getElementById('paragrafo');
const numero = [15,22,33,4,25,,26,17,83,9454,120];
const maior = numero.map (numero =>  (numero * 9/5 + 32));
par.innerHTML = (maior);