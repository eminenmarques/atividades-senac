function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if ((par%7==0) && (par%9==0)) {
        impar.innerHTML = 'esse número é divisivel por 7 e por 9'; 
    } else {
        impar.innerHTML = 'esse número não é divisivel por 7 e por 9';
    }
    }
    