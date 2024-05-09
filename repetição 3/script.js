let par = 1;
do {
    let elemento = document.createElement('p');
    elemento.innerHTML = par;
    document.body.appendChild(elemento);
    par+=2
}   while (par <= 5);