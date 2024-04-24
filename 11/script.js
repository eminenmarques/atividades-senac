// é uma função
function clique() {
//puxei do HTML usando id e associei a variavel par
const par = document.getElementById('aiai');
//ela vai executa o comando da linha 7 se o display de par for block
if (par.style.display ==="block" ){
//vai trocar o display de par para none
par.style.display="none";
//vai ser executado se o displayde par não for block
}else {par.style.display="block";}
}