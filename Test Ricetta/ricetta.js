let pas = "Spaghetti";
let ag = "Aglio";
let pe = "Peperoncino";
let ol = "Olio EVO";
let guests = "2";

let pasw = 90;
let agw = 9;
let pew = 3;
let olw = 28;

let pat = 13;
let olt = 3;
let oap = 4;
let patok = pat - 1;
let dif = 2;

let patd = pasw * guests;

console.log(
  "Gli ingredienti necessari per " +
    guests +
    " persone: " +
    pas +
    " " +
    patd +
    "g" +
    ", " +
    ag +
    " " +
    agw +
    "g" +
    ", " +
    pe +
    " " +
    pew +
    "g" +
    ", " +
    ol +
    " " +
    olw +
    "g" +
    "."
);

let coti = olt + oap + patok + dif;

let cowe = patd + agw + pew + olw;

// nella formula indicata non trovo l'errore per risolvere il conteggio sbagliato
/* UPDATE
ho aggiustato la formula dividendo le operazioni per arrivare al risultato corretto, cercando online ho visto che è
possibile fare direttamente l'operazione con un'unica funzione ma il risultato è errato, la funzione l'avevo indicata cosi

let altingr = (agw + per + olw) / 2;
console.log(altingr;)

Dalla console della funzione Ispeziona penso che il problema sia riconducibile ad una conversione delle variabili da numeri a stringhe (?).
*/
let altingrt = agw + pew + olw;
let altingr = altingrt / 2;

console.log(altingr);

let cowu = pasw + agw + pew + olw;

console.log(
  "Per una corretta cottura delle pasta si consiglia di utilizzare questo tempo di bollitura: " +
    patok +
    " minuti."
);

console.log("Il peso totale di tutti gli ingredienti è: " + cowe + "grammi.");

console.log(
  "Il peso totale del piatto per persona è: " + (pasw + altingr) + "grammi."
);

console.log("Il tempo totale di cottura è: " + coti + " minuti.");
