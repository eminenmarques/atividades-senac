const par = document.getElementById('paragrafo');
const numero = [9,56,34,23,423,35,435,4,65,7,658,76,8,,123,]
const maior = numero.reduce((total, number) => total +(number ** 2 ), 0);
par.innerHTML = (maior);