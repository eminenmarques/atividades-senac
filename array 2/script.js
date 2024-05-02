const pal = document.getElementById('palaglafo');
const numeros  = [1,2,3,4,5,6,7,8,9,10];
const dobrados = numeros.map(numeros => numeros * 2);
console.log(dobrados);
pal.innerHTML = (dobrados);
