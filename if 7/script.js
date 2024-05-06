function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if (par>=21) {
        impar.innerHTML = 'você tem a idade necessaria para entrar no clube'; 
    } else {
        impar.innerHTML = 'você não tem a idade necessaria para entrar no clube';
    }
    }
    