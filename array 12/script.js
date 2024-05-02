const par = document.getElementById('paragrafo');
const numeros = [2345,356,463455,65,78543,1,3,5,-34,45435,87543,-4,3,45,2,45,43,21,787,34,-33,-23];
const maior = numeros.filter(number => number > 99 || number < -99);
par.innerHTML = (maior);