let acumulador =0;
for (let i = 1; i<=100;i++) {
    acumulador += i;

}
elemento=document.createElement('p');
        elemento.innerHTML = acumulador;
        document.body.appendChild(elemento);
