function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    for (let i = 2; i <=par; i +=2 ) {
        elemento = document.createElement('p');
    elemento.innerHTML = i;
    document.body.appendChild(elemento);
    }
    }
    