//esta é a basa para criar a array strings
const par =  ["item1","item2","item3"];
//puxei do HTML usando id e associei a variavel par
const ul = document.getElementById('lista');
//para cada elemento de par, execute as linhas 7 8 e 9
par.forEach(element => {
//foi usado para criar um li
    const linha = document.createElement('li');
//usado para modificar o conteúdo de linha
    linha.innerHTML = element;
// coloca a linha como filha de ul
    ul.appendChild(linha);
});