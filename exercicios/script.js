function clicar() {
var par = document.getElementById('caixa').value;
if (par>0) {
    var pos = document.getElementById('positivo');
    pos.innerHTML = 'positivo';
}
if (par==0) {
    var zer = document.getElementById('zero');
    zer.innerHTML = 'Zero';
}
if (par<0) {
    var neg = document.getElementById('negativo');
    neg.innerHTML = 'negativo';
}

}


