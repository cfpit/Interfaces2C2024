function iluminar(fila) {
    fila.style.background = 'yellow';
}

function apagar(fila) {
    fila.style.background = '';
}

function pintar(celda) {
    if (celda.style.background == 'red') {
        celda.style.background = '';
    } else {
        celda.style.background = 'red';
    }
}

