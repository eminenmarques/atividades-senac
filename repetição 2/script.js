let par = 0;
while (par <= 10) {
    let elemento = document.createElement('p');
    elemento.innerHTML = par;
    document.body.appendChild(elemento);
    par+=2;
}