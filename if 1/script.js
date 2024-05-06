function clique() {
    var par = document.getElementById('caixa').value;
    var pos = document.getElementById('paragrafo');
    if (par>0) {
        pos.innerHTML = 'positivo';
    }
    if (par==0) {
        pos.innerHTML = 'Zero';
    }
    if (par<0) {
        pos.innerHTML = 'negativo';
    }
    
    }
    
    