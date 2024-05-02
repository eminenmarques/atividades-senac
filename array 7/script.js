const par = document.getElementById('paragrafo');
const numero = ["eminen,eminen,eminen,eminen,eminen,eminen,eminen,eminen,eminen,eminen,eminen,eminen,eminen,eminen"];
const maior = numero.map(numero => numero.toUpperCase());
console.log(maior);
par.innerHTML = (maior); 