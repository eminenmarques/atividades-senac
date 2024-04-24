// Seleciona o formulário pelo ID 'emailForm' e armazena na variável 'emailForm'
const emailForm = document.getElementById('emailForm');
// Seleciona o campo de entrada de e-mail pelo ID 'emailInput' e armazena na variável 'emailInput'
const emailInput = document.getElementById('emailInput');
// Seleciona o elemento de mensagem de erro pelo ID 'error-msg' e armazena na variável 'errorMsg'
const errorMsg = document.getElementById('error-msg');
// Seleciona o elemento de mensagem pelo ID 'msg' e armazena na variável 'msg'
const msg = document.getElementById('msg');
// Adiciona um evento de escuta para o evento de envio do formulário
emailForm.addEventListener('submit', function(event) {
  // Impede o comportamento padrão do envio do formulário (que seria recarregar a página)
  event.preventDefault();
  // Verifica se o valor do campo de entrada de e-mail é válido
  if (!validateEmail(emailInput.value)) {
    // Se o e-mail for inválido, remove a classe 'hidden' da mensagem de erro para mostrá-la
    errorMsg.classList.remove('hidden');
  } else {
    // Se o e-mail for válido, adiciona a classe 'hidden' à mensagem de erro para ocultá-la
    errorMsg.classList.add('hidden');
    // Define o conteúdo HTML da mensagem com o texto "e-mail válido!"
    msg.innerHTML = "e-mail válido!";
  }
});
// Função para validar o endereço de e-mail usando uma expressão regular
function validateEmail(email) {
  // Define uma expressão regular para verificar se o e-mail tem um formato válido
  const re = /\S+@\S+\.\S+/;
  // Testa o e-mail com a expressão regular e retorna true se for válido, ou false caso contrário
  return re.test(email);
}
