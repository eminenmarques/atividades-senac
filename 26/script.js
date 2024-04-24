// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de evento de clique ao botão "Adicionar Linha"
    document.getElementById("addRowBtn").addEventListener("click", function() {
        // Seleciona a tabela pelo ID e obtém a primeira tabela do corpo (tbody)
        var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        // Insere uma nova linha no final da tabela
        var newRow = table.insertRow(table.rows.length);
        // Insere células na nova linha e define o conteúdo das células
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = "Novo"; // Conteúdo da primeira célula
        cell2.innerHTML = "Usuário"; // Conteúdo da segunda célula
        cell3.innerHTML = "20"; // Conteúdo da terceira célula
    });
});