function clique() {
    const caixa = parseInt(document.getElementById('caixa1').value);
    let elemento = document.createElement('p');
    elemento.innerHTML = Math.sqrt(caixa **2);
    document.body.appendChild(elemento);
    }