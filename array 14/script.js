const par = document.getElementById('paragrafo');
const numero = [12,78,90,14,34,46,2,21,5,44,78,13,12,23,1,2,3,32];
const maior = numero.reduce((total, number) => total + number, 0 ) / numero.length;
par.innerHTML = (maior);