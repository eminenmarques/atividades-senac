const par = document.getElementById('paragrafo');
const lista = ["eminen ","carlos ","pedro ","bernardo ","jessica","joana ","cybelle ","yasmin ","agatha","gabriella"];
const maior = lista.map(numero => numero + lista.indexOf (numero));
par.innerHTML = (maior);