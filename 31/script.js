// Define uma função chamada alterarConteudo
function alterarConteudo() {
    // Obtém o valor do elemento com o ID 'opcoes' e armazena na variável 'par'
    const par = document.getElementById('opcoes').value; 
    // Inicia um switch statement com base no valor da variável 'par'
    switch (par) {
        // Caso o valor de 'par' seja "opcao1"
        case "opcao1":
            // Define o conteúdo de texto da div com o ID 'minhadiv' como "Conteudo da opção 1"
            minhadiv.textContent = "Conteudo da opção 1";
            // Sai do switch statement
            break;
        // Caso o valor de 'par' seja "opcao2"
        case "opcao2":
            // Define o conteúdo de texto da div com o ID 'minhadiv' como "conteudo da opção 2."
            minhadiv.textContent = "conteudo da opção 2.";
            // Não há break aqui, então a execução continua no próximo caso
        // Caso o valor de 'par' seja "opcao3"
        case "opcao3":
            // Define o conteúdo de texto da div com o ID 'minhadiv' como "conteudo da opção 3."
            minhadiv.textContent = "conteudo da opção 3.";
            // Sai do switch statement
            break;
        // Caso nenhum dos casos acima corresponda ao valor de 'par'
        default:
            // Define o conteúdo de texto da div com o ID 'minhadiv' como "conteudo padrão."
            minhadiv.textContent = "conteudo padrão.";
            // Sai do switch statement
            break;
    }
}