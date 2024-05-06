function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if (par>=18) {
        impar.innerHTML = 'você tem a idade necessaria para comprar bebida '; 
    } else {
        impar.innerHTML = 'você não tem a idade necessaria para comprar bebida';
    }
    }
    