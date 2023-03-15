'use strict'

let offertaJson = {
    stato: ["Bozza", "Inviata", "Vinta", "In Lavorazione", "Approvata", "Attesa", "contratti", "finanziari", "Da validare", "Completata"],
    indiceStatoCorrente: 0,
}
let jIndex = offertaJson.indiceStatoCorrente;
document.querySelector('h1').innerHTML = offertaJson.stato[jIndex];

function scrollOfferta() {
    const stati = offertaJson.stato;
    if (jIndex >= stati.length - 1) { jIndex = 0; return }
    jIndex++;
}

function getIndiceStato() { return offertaJson.indiceStatoCorrente }

document.querySelector('button').addEventListener('click', () => {
    scrollOfferta();
    document.querySelector('h1').innerHTML = offertaJson.stato[jIndex];
});