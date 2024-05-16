function clique() {
    const par = parseInt(document.getElementById('caixa').value);
    for (let i=1; i<11; i++) {
        const elemento = document.createElement('p');
        elemento.innerHTML = par + 'x' +i+ '=' + par*i;
        document.body.appendChild(elemento);
    }
    }
