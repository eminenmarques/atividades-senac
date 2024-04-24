//puxei do HTML usando id e associei a variavel par
const ul = document.getElementById('lista');
// é uma função
function ai(){
//foi usado para criar um li
    const linha = document.createElement('li');
//usado para modificar o conteúdo de linha
    linha.innerHTML = "Texto item";
// coloca a linha como filha de ul
    ul.appendChild(linha);
}