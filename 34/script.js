// Seleciona o formulário pelo ID 'sumForm' e armazena na variável 'sumForm'
const sumForm = document.getElementById('sumForm');
// Seleciona o primeiro campo de entrada de número pelo ID 'number1' e armazena na variável 'number1Input'
const number1Input = document.getElementById('number1');
// Seleciona o segundo campo de entrada de número pelo ID 'number2' e armazena na variável 'number2Input'
const number2Input = document.getElementById('number2');
// Seleciona a div de resultado pelo ID 'result' e armazena na variável 'resultDiv'
const resultDiv = document.getElementById('result');
// Adiciona um evento de escuta para o evento de envio do formulário
sumForm.addEventListener('submit', function(event) {
  // Impede o comportamento padrão do envio do formulário (que seria recarregar a página)
  event.preventDefault();
  // Verifica se ambos os valores inseridos são números válidos
  if (!isNaN(number1Input.value) && !isNaN(number2Input.value)) {
    // Calcula a soma dos dois números
    const sum = Number(number1Input.value) + Number(number2Input.value);
    // Exibe o resultado da soma na div de resultado
    resultDiv.textContent = `A soma é: ${sum}`;
  } else {
    // Se algum dos valores inseridos não for um número válido, exibe uma mensagem de erro na div de resultado
    resultDiv.textContent = 'Por favor, insira dois números válidos.';
  }
});