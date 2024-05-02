const par = document.getElementById('paragrafo')
const numero = [40,42,35,46,52,63,79,85,39,210];
const maior = numero.map(numero => numero * 2.54);
par.innerHTML = (maior);