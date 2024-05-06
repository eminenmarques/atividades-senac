function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if ((par>=0 && par<=50) || (par<0 && par>=-50)) {
       impar.innerHTML = 'esse número é positivo e menor que 50, ou negativo e maior que -50';
       return;
    } 
    impar.innerHTML = 'esse número não é positivo e menor que 50, ou negativo e maior que -50';
    }
    