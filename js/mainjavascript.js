// creata Variabile Globale stampa
let totale;
let minorenne=false;

// chiedere all’utente il numero di chilometri che vuole percorrere + scelta categoria età

// selezione input

const kmUtente = document.querySelector(".inserimentokm");
const select = document.querySelector(".sceltaeta");
const prezzoKm = 0.21;
const scontoMinorenni = document.querySelector(".minorenne");
const scontoMaggiore = document.querySelector(".over");



// selezione pulsante

const buttonGenera = document.querySelector(".genera");

// console log button
console.log(buttonGenera);
console.dir( kmUtente);

// select.addEventListener("input",
//   function (event) {

//     console.log(event);

//     if(event.target.value=="-18"){
//       minorenne=true;
//     }

   

//   }
// )

// gestione interazione utente

buttonGenera.addEventListener ("click",

  function (event) {
    event.preventDefault()
   

    let risultatoPrezzoKmBase= prezzoKm * kmUtente.value;
    // sconto minori
    if (select.value=="-18"){
      let scontoMinorenni= 0.20;
      console.log(scontoMinorenni);
      let scontoFinaleMinori = risultatoPrezzoKmBase *(1 - scontoMinorenni);
      console.log(scontoFinaleMinori);
      document.querySelector(".scontistiche").innerHTML ="Ticket extra summer 20% giovani! ";
      document.getElementById("prezzoutente").innerHTML ="Costo complessivo applicazione sconto 20% iva inclusa =" +  scontoFinaleMinori.toFixed(2) + " euro";
      
    // sconto over
    } else if (select.value=="over-65"){
      let scontoMaggiore = 0.40;
      let scontoFinaleOver = risultatoPrezzoKmBase *(1 - scontoMaggiore);
      console.log(scontoFinaleOver);
      totale = scontoFinaleOver;
      document.querySelector(".scontistiche").innerHTML ="Ticket extra summer 40%! Senior  ";
      document.getElementById("prezzoutente").innerHTML ="Costo complessivo applicazione sconto 40% iva inclusa =  " +  scontoFinaleOver.toFixed(2) + " euro"; 
      // prezzo base 18-65
    } else {
      console.log(risultatoPrezzoKmBase);
      totale = risultatoPrezzoKmBase;
      document.querySelector(".scontistiche").innerHTML ="ticket standard ";
      document.getElementById("prezzoutente").innerHTML ="Costo complessivo iva inclusa = " +  risultatoPrezzoKmBase.toFixed(2) + " euro";
    }
    onsubmit="showAlert(); return false;"
    alert('le scontistiche sono soggette a variazioni si prega di leggere attentamente il regolamento adoperato buon viaggio!');
  } 
);




