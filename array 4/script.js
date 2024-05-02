const pal = document.getElementById('cadetuuu');
let numeros = [1,2,3,4,5,6,7,8,9,10]
let soma = numeros.reduce((total, numero) => total + numero, 0);
console.log(soma);
soma/=10
pal.innerHTML = soma