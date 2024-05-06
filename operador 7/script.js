function clique() {
    document.getElementById('paragrafo').innerHTML =
   document.getElementById('caixa').value%7==0 && document.getElementById('caixa').value%9==0? "é divisivel por 7 e por 9":"não é divisivel 7 e nem por 9"
}

