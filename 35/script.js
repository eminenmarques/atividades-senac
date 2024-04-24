// Seleciona o formulário pelo ID 'textForm' e armazena na variável 'textForm'
const textForm = document.getElementById('textForm');
// Seleciona o campo de entrada de texto pelo ID 'textInput' e armazena na variável 'textInput'
const textInput = document.getElementById('textInput');
// Seleciona o botão de conversão pelo ID 'convertButton' e armazena na variável 'convertButton'
const convertButton = document.getElementById('convertButton');
// Seleciona a div de resultado pelo ID 'result' e armazena na variável 'resultDiv'
const resultDiv = document.getElementById('result');
// Adiciona um evento de escuta para o evento de clique no botão de conversão
convertButton.addEventListener('click', function() {
  // Obtém o texto inserido pelo usuário no campo de entrada
  const text = textInput.value;
  // Converte o texto para maiúsculas usando o método toUpperCase()
  const upperCaseText = text.toUpperCase();
  // Define o conteúdo de texto da div de resultado como o texto convertido para maiúsculas
  resultDiv.textContent = upperCaseText;
});