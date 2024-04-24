// Define uma função chamada alterarEstilo
function alterarEstilo() {
    // Obtém o valor do elemento com o ID 'selecionarEstilo' e armazena na variável 'par'
    let par = document.getElementById("selecionarEstilo").value;
    // Obtém o elemento com o ID 'texto' e armazena na variável 'texto'
    let texto = document.getElementById("texto");
    // Inicia um switch statement com base no valor da variável 'par'
    switch(par) {
        // Caso o valor de 'par' seja "normal"
        case "normal":
            // Define o estilo de fonte do elemento com o ID 'texto' como normal
            texto.style.fontWeight = "normal";
            // Define o estilo de fonte do elemento com o ID 'texto' como normal
            texto.style.fontStyle = "normal";
            // Define o estilo de texto do elemento com o ID 'texto' como normal
            texto.style.textDecoration = "none";
            // Sai do switch statement
            break;
        // Caso o valor de 'par' seja "negrito"
        case "negrito":
            // Define o estilo de fonte do elemento com o ID 'texto' como negrito
            texto.style.fontWeight = "bold";
            // Sai do switch statement
            break;
        // Caso o valor de 'par' seja "italico"
        case "italico":
            // Define o estilo de fonte do elemento com o ID 'texto' como itálico
            texto.style.fontStyle = "italic";
            // Sai do switch statement
            break;
        // Caso o valor de 'par' seja "sublindo"
        case "sublinhando":
            // Define o estilo de texto do elemento com o ID 'texto' como sublinhado
            texto.style.textDecoration = "underline";
            // Sai do switch statement
            break;
        // Caso nenhum dos casos acima corresponda ao valor de 'par'
        default:
            // Não faz nada
            break;
    }
}