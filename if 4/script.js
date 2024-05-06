function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if (par==100) {
        impar.innerHTML = 'esse numero é igual a 100'; 

    } else if(par>100){
        impar.innerHTML = 'esse número é maior que 100';
    } else {
        impar.innerHTML = 'esse numero é menor que 100';
    }
    }
    