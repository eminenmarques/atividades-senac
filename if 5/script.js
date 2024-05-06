function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if ((par%4==0 && par%100!=0) || (par%400==0 && par%100==0)) {
       impar.innerHTML = 'esse ano é bissexto';
       return;
    } 
    impar.innerHTML = 'esse ano não é bissexto';
    }
    