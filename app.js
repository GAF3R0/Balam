let dias = 62;
let horas = 18;
let minutos = 0;
let segundos = 0;

cargarTiempo();

function cargarTiempo() {
    actualizarDisplay();
    setTimeout(cargaseg, 1000);
}

function cargaseg() {
    if (segundos === 0) {
        segundos = 59;
        cargaminutos();
    } else {
        segundos--;
    }
    actualizarDisplay();
    setTimeout(cargaseg, 1000);
}

function cargaminutos() {
    if (minutos === 0) {
        minutos = 59;
        cargahoras();
    } else {
        minutos--;
    }
}

function cargahoras() {
    if (horas === 0) {
        horas = 23;
        cargadias();
    } else {
        horas--;
    }
}

function cargadias() {
    if (dias > 0) {
        dias--;
    }
}

function actualizarDisplay() {
    document.getElementById('seg').innerHTML = segundos < 10 ? `0${segundos}` : segundos;
    document.getElementById('min').innerHTML = minutos < 10 ? `0${minutos}` : minutos;
    document.getElementById('horas').innerHTML = horas < 10 ? `0${horas}` : horas;
    document.getElementById('dias').innerHTML = dias < 10 ? `0${dias}` : dias;
}
