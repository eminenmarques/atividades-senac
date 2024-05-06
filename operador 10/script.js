function clique() {
    document.getElementById('paragrafo').innerHTML =
   document.getElementById('caixa').value%3==0 || document.getElementById('caixa').value%5==0? "é multiplo por 5 ou por 3":"não é multiplo de 5 e nem de 3"
}

