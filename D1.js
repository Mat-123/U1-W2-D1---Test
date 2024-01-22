/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype primitivi sono:
String, rappresenta una stringa o una stringa di testo e può essere formata da lettere e numeri ma indicata obbligatoriamente con uno tra
apici singoli, apici doppi 

Number, rappresenta un valore numerico utilizzabile in funzioni matematiche, a differenza di un numero espresso come String tra "".

Boolean, operatore che può essere utilizzato per codice condizionale, restituendo come output i valori TRUE o FALSE a seconda delle condizioni
che indichiamo nel codice.

Undefined, è il valore assegnato a variabili non definite, ovvero a cui non è stato assegnato alcun valore:
es. let variabileesempio;

Null, è una stringa in cui il valore non viene specificato intenzionalmente dallo sviluppatore, pertanto riprendendo l'esempio sopra
il codice sarà:
let variabileesempio = "";

Invece i datatype primitivi complessi sono
:
bigInt

symbol
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Matteo";

console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);

let num1 = 12;
let num2 = 20;

console.log(num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

console.log(myName);

myName = "Montani";

console.log(myName);

const MYNAME = "Matteo";

/*
console.log(MYNAME);

MYNAME = "Montani";

console.log(myname === MYNAME);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

let num3 = 4;

console.log(num3 - x);

let subtraction = num3 - x;

console.log(subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

let verify = name1 === name2;

console.log("I due nomi corrispondono? " + verify);

let lcname2 = name2.toLocaleLowerCase();

console.log(name2);

console.log(lcname2);

let verify2 = name1 === lcname2;

console.log(
  "Avendo integrato la funzione LowerCase, ora i due nomi corrispondono? " +
    verify2
);
