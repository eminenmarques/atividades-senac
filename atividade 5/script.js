function clicar() {
    const par = document.getElementById('caixa').value;
    const i=new Date();
    const horas=i.getHours();
    if ((horas>=6) && (horas<=12)) {
        const pop = document.getElementById('paragrafo');
        pop.innerHTML = 'Bom dia ' + par;
    }
    if ((horas>=12) && (horas<=19)) {
        const pop = document.getElementById('paragrafo');
        pop.innerHTML = 'Boa tarde ' + par;
    }
    if ((horas>=19) || (horas<6)) {
        const pop = document.getElementById('paragrafo');
        pop.innerHTML = 'Boa noite ' + par;
    }
}