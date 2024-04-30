function clicar() {
    const par = parseFloat(document.getElementById('caixa').value);
    const impar = parseFloat(document.getElementById('caixatambem').value);

if (par<impar) {
    var pop = document.getElementById('resultado');
    pop.innerHTML = impar + ' é o maior número';
}
if (par>impar) {
    var top = document.getElementById('resultado');
    top.innerHTML = par + ' é o maior número';
    console.log (par+','+impar);
}
if (impar==par) {
    var pot = document.getElementById('resultado');
    pot.innerHTML = 'os números são iguais';
}
}