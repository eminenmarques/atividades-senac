function clique() {
    const par = parseInt(document.getElementById('caixa').value);
    const impar = parseInt(document.getElementById('caixa2').value);
    const pou = parseInt(document.getElementById('caixa3').value);
    if((par!=0&&impar!=0&&pou!=0) && ((par+impar) > pou || (par+pou) > impar || (impar+pou)> par)){
        if (par===impar && par===pou && impar===pou)  {
            let equilatero = document.createElement('p');
            equilatero.innerHTML = 'é equilatero';
            document.body.appendChild(equilatero);
        }
        else if (par===impar || par===pou || impar===pou) {
            let isoceles = document.createElement('p');
            isoceles.innerHTML = 'é isóceles';
            document.body.appendChild(isoceles);
        }
        else {
            let escaleno = document.createElement('p');
            escaleno.innerHTML = 'é escaleno';
            document.body.appendChild(escaleno);
        }
    } else{
        let escaleno = document.createElement('p');
        escaleno.innerHTML = 'não é um triângulo!';
        document.body.appendChild(escaleno);       
    }
}
