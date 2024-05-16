function clique() {
    const caixa = parseInt(document.getElementById('caixa1').value);
    const impar = document.getElementById('paragrafo');
    if ((caixa%4==0 && caixa%100!=0) || (caixa%400==0 && caixa%100==0)) {
    impar.innerHTML = 'esse ano é bissexto';
    return;
    } 
    impar.innerHTML = 'esse ano não é bissexto';
    }