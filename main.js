'use strict'

let offertaJson = {
    stato: ["bozza", "inviata", "vinta", "in lavorazione", "approvata", "attesa e contratti finanziari", "da validare", "completata"],
    indiceStatoCorrente: 0,
    getStato: function () { return this.indiceStatoCorrente },
    setStato: function (num) { this.indiceStatoCorrente = num }
}
let jIndex = offertaJson.indiceStatoCorrente;
const h2 = document.querySelector('h2');
h2.innerHTML = offertaJson.stato[jIndex];

const container = document.querySelector('.container');
const ul = container.querySelector('.list');
ul.innerHTML = fillList();
let list = ul.querySelectorAll('li');
list[0].classList.add('active');

const main = document.querySelector('.main');
main.classList.add('display_none');
let isVisibile = false;

//EVENTS
const changeBtn = document.querySelector('.change');
changeBtn.addEventListener('click', () => {
    scrollOfferta();
    h2.innerHTML = offertaJson.stato[jIndex];
    changeState(offertaJson.indiceStatoCorrente);
});

const showBtn = document.querySelector('.show');
showBtn.addEventListener('click', () => {
    changeVisibility()
});

//FUNCTION
function changeVisibility() {
    if (isVisibile) {
        main.classList.add('display_none');
        isVisibile = false;
    } else {
        main.classList.remove('display_none');
        isVisibile = true;
    }
}

function getIndiceStato() { return offertaJson.indiceStatoCorrente }

function changeState(jIndex) {
    const stati = offertaJson.stato;
    const ball = document.querySelectorAll('.ball');
    //Quando clicco sull'ultimo elemento, disabilito e nascondo bottone
    if (jIndex == stati.length - 2) {
        changeBtn.disabled = true;
        changeBtn.classList.add('display_none');
    }
    if (jIndex < stati.length) {
        list[jIndex].classList.remove('active');
        jIndex++
        ball[jIndex].classList.remove('circle_next');
        ball[jIndex].classList.add('circle_past');
        list[jIndex].classList.add('active');
        offertaJson.indiceStatoCorrente = jIndex;
    }
}

function fillList() {
    const stati = offertaJson.stato;
    let item = "";
    stati.forEach((element, index) => {
        item += `<li>
                    <p class="ball ${index == 0 ? "circle_past" : "circle_next"}"></p>${element}
                </li>`
    });
    return item;
}

function scrollOfferta() {
    const stati = offertaJson.stato;
    if (jIndex >= stati.length - 1) { jIndex = 0; return }
    jIndex++;
}   