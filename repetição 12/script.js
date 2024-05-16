    const par = document.getElementById('paragrafo');
    let numeros = [100,23242,323,-3454353454,34535,-4566,39877,-3248,88876544569,56410];
    let maior=-Infinity;
    let menor= Infinity;    
    for (let i=0; i<numeros.length; i++) {
       maior = numeros[i]>maior? numeros[i]:maior;
       menor = numeros[i]<menor? numeros[i]:menor;
    }
    const elemento= document.createElement('p');
    elemento.innerHTML = maior + ' ' + menor;
    document.body.appendChild(elemento);
    
   
 