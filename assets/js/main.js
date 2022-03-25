// quanti km vuoi percorrere?
const km_da_percorrere = prompt('Quanti km vuoi percorrere?');
if (km_da_percorrere > 0) {
    console.log('Hai inserito ' + km_da_percorrere + ' km');
} else {
    false;
    alert('ERRORE: Inserisci i km da percorrere');
}
document.log
// quanti anni hai?
const età = prompt('Quanti anni hai?');
if (età > 0) {
    console.log('Hai inserito ' + età + ' anni');
} else {
    false;
    alert('ERRORE: Inserisci la tua età');
}

//prezzo del biglietto - 0.21 € al km
const prezzo_biglietto = km_da_percorrere * 0.21;

// 20% sconto per i minorenni
const prezzo_minorenni = prezzo_biglietto - (prezzo_biglietto * 0.2);

// 40% sconto per gli over 65
const prezzo_over_65 = prezzo_biglietto - (prezzo_biglietto * 0.4);

// prezzo con due decimali per indicare i centesimi sul prezzo
if (età < 18 && età > 0) {
    console.log(prezzo_biglietto.toFixed(2) + ' €');
    console.log(prezzo_minorenni.toFixed(2) + ' € prezzo scontato per i minorenni');
} else if (età > 65) {
    console.log(prezzo_biglietto.toFixed(2) + ' €');
    console.log(prezzo_over_65.toFixed(2) + ' € prezzo scontato per gli over 65');
} else if (età >= 18 || età <= 65) {
    console.log(prezzo_biglietto.toFixed(2) + ' €');
} else {
    false
}

