// funcão que altera a cor ao passar o mouse em cima
function alterarEstilo() {
const par = document.getElementById('aiai');
// Altera a cor de fundo para bisque
par.style.backgroundColor = "bisque";
}
window.onload = function() {
    //adiciona o evento a par
    const par = document.getElementById('aiai');
    par.addEventListener("mouseover", alterarEstilo);
};
