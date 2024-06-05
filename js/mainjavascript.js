// creata Variabile Globale stampa
let totale;

// chiedere all’utente il numero di chilometri che vuole percorrere + scelta categoria età

// selezione input

const kmUtente = document.querySelector(".inserimentokm");
const ageUtente = document.querySelector("sceltaeta")
const  prezzoKm = 0.21;


// selezione pulsante

const buttonGenera = document.querySelector(".genera");

// console log button
console.log("buttonGenera");



console.log("il km scelto dall'utente è:",kmUtente);

// gestione interazione utente

buttonGenera.addEventListener ("click",

function () {
  let inputValue = prezzoKm * kmUtente.value;
  
  console.log(inputValue);
}
);


// // chiedere l’età del passeggero.

// let ageUtente = parseInt(prompt("inserisci la tua età"));

// console.log("l'età dell'utente è:", ageUtente);


// // // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// const  prezzoKm = 0.21;

// let risultatoPrezzoKmBase = prezzoKm * kmUtente;

// console.log("il risultato del prezzo viaggio tot è: ", risultatoPrezzoKmBase);


// // // va applicato uno sconto del 20% per i minorenni
// // const scontoMinorenni = 0.20;
// //  // va applicato uno sconto del 40% per gli over 65.
// // const scontoMaggiore = 0.40;

// if (ageUtente < 18) {
  
//     let scontoFinaleMinori = risultatoPrezzoKmBase *(1 - scontoMinorenni);
//     console.log("il prezzo finale con sconto del 20% minorenni è:", scontoFinaleMinori );
//     totale = scontoFinaleMinori;

    
// }else if (ageUtente > 65){
    
//     let scontoFinaleOver = risultatoPrezzoKmBase *(1 - scontoMaggiore);

//     console.log("il prezzo finale con sconto del 40% Over 65 è:", scontoFinaleOver);
//     totale = scontoFinaleOver; 


//   }else   {
//     (ageUtente > 17 < 66)
//     console.log("Il prezzo finale x sconto non applicato se si è >=18 è:",  risultatoPrezzoKmBase );
//     totale = risultatoPrezzoKmBase;
// }
// // L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// // document.getElementById("prezzoutente").innerHTML ="Totale =  " + totale.toFixed(2) + " euro";

