//Essa primeira linha eu crio um elemento (p) e associo ele a variavel "P"
const p = document.createElement('p')
//Essa segunda linha eu defino o conteúdo de "p" como "Novo paragrafo"
p.innerHTML = "Novo parágrafo"
//nessa ultima linha eu adciono "p" a body
document.body.appendChild (p)