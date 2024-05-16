function clique() {
    const par = parseInt(document.getElementById('caixa').value);
    const impar = parseInt(document.getElementById('caixa2').value);
    const pou = parseInt(document.getElementById('caixa3').value);
    for (let i=impar; i<pou; i++) {
        const elemento = document.createElement('p');
        elemento.innerHTML = par + 'x' +i+ '=' + par*i;
        document.body.appendChild(elemento);
    }
    }
