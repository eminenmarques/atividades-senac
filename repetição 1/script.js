let elemento = null
for (let i = 1; i<11;i++)
    {elemento=document.createElement('p');
        elemento.innerHTML = i;
        document.body.appendChild(elemento);
    }