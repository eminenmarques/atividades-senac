function clique() {
    document.getElementById('paragrafo').innerHTML =
   document.getElementById('caixa').value%3==0 && document.getElementById('caixa').value%5==0? "é divisivel por 5 e por 3":"não é divisivel 5 e nem por 3"
}

