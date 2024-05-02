const par = document.getElementById('paragrafo');
let numeros = ["oi Eminen ","oi Pedro ","oi carlos ","oi Bernardo"]
let soma = numeros.reduce((total, numero) => total + numero,);
console.log(soma);
par.innerHTML = soma