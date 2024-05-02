const cade = document.getElementById('cadetu');
const numero = [1,2,3,4,5,6,7,8,9,10];
const par = numero.filter(numero  => numero %2 === 0);
console.log ( par);
cade.innerHTML= ( par)
