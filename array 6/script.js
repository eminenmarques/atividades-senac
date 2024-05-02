const meio = document.getElementById('meiotroco');
const numero = [1,2,3,4,5,6,7,8,9,100,10];
const maior = numero.reduce((total, numero) => total = numero > total ? numero: total, numero[0]);
console.log(maior);
meio.innerHTML = maior;