function clicar() {
    const par = document.getElementById('caixa').value;
if (par>17) {
    var sim = document.getElementById('simpode');
    sim.innerHTML = 'acesso liberado';
}
if (par<18) {
    var sin = document.getElementById('simtambem');
    sin.innerHTML = 'acesseso restrito';
}
}
    