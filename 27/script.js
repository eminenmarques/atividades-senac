// Seleciona o elemento HTML com o ID 'aiai'
var handleClick = function() {
     // Função de callback que é executada quando o evento 'click' ocorre
    console.log('aiai');// Imprime 'aiai' no console
};
document.getElementById('aiai').addEventListener("click", handleClick);
// Remove o ouvinte de evento 'click' do elemento 'aiai'
document.getElementById('aiai').removeEventListener('click', handleClick);