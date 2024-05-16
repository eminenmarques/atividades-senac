function clique() {
    const caixa = parseInt(document.getElementById('caixa1').value);
    let elemento = document.createElement('p');
    elemento.innerHTML = (5*caixa*((caixa/2)*(1/Math.tan(Math.PI/5))/2));
    document.body.appendChild(elemento);
    }