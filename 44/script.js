function clique() {
    const caixa = parseInt(document.getElementById('caixa1').value);
    const impar = document.getElementById('paragrafo');
    for (let i = 2; i<6; i++) {
    let elemento = document.createElement('p');
    elemento.innerHTML = i*caixa;
    document.body.appendChild(elemento);
}
}