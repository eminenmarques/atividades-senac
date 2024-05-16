function calcularMDC(a, b) {
    while (b != 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
function clique() {
    let no1 = document.getElementById('no1').value;
    let no2 = document.getElementById('no2').value;
    no1 = parseInt (no1, 10);
    no2 = parseInt (no2, 10);
    let resultado = calcularMDC(no1, no2);
    let p = document.createElement('p');
    p.textContent = `O MDC de ${no1} e de ${no2} é: ${resultado}`;
    document.body.appendChild(p);
}