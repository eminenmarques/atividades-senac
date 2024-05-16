function clique() {
    const par = parseInt(document.getElementById('caixa').value);
    for (let i=1; i<11; i++) {
        if (i %2==1) {
        const elemento = document.createElement('p');
        elemento.innerHTML = par + 'x' +i+ '=' + par*i;
        document.body.appendChild(elemento);
    }
    }
    }
