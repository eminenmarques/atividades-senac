function clique() {
    const caixa = parseInt(document.getElementById('caixa1').value);
    let elemento = document.createElement('p');
    elemento.innerHTML = Math.floor (caixa/10) + (caixa%10);
    document.body.appendChild(elemento);
    }