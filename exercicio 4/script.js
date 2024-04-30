function clicar() {
    const par = parseFloat(document.getElementById('caixa').value);
if (par%2===0){
    const pop = document.getElementById('resultado');
    pop.innerHTML = 'seu número é par';
}
if (par%2===1){
    const pop = document.getElementById('resultado');
    pop.innerHTML = 'seu numero é impar'
}
}