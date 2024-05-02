const par = document.getElementById('paragrafo');
const numero = [1,-2,-19,8,23,-18];
const maior =numero.filter(number => number > 0);
par.innerHTML = (maior);