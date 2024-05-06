function clique() {
    const par = document.getElementById('caixa').value;
    const impar = document.getElementById('paragrafo');
    if ((par>=5) && (par<7)) {
        impar.innerHTML = 'você precisa fazer recuperação'; 

    } else if(par>=7){
        impar.innerHTML = 'você está aprovado';
    } else {
        impar.innerHTML = 'você está reprovado';
    }
    }
    