function clique() {
    const caixa = parseInt(document.getElementById('caixa1').value);
    let elemento = document.createElement('p');
    elemento.innerHTML = ((1+caixa)*caixa)/2;
    document.body.appendChild(elemento);
    }