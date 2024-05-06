function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if ((par%3==0) || (par%5==0)) {
        impar.innerHTML = 'esse número é multiplo de 3 ou 5'; 
    } else {
        impar.innerHTML = 'esse número não é multiplo de 3 ou 5';
    }
    }
    