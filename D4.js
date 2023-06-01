/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function(l1, l2) {
    if(l1 !== NaN && l2 !== NaN){
        return l1 * l2
    }
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (int1, int2) {
    let sum = 0
    if(isNaN(int1) === true || isNaN(int2) === true) {
        console.log("Errore!Inserire numeri come argomenti")
    } else {
        if(int1 !== int2){
            sum += int1 + int2
        } else {
            sum += 3 * (int1 + int2)
        }
        return sum
    }

}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(subtrahend) {
    let diff
    if(isNaN(subtrahend) === true) {
        console.log("Errore!Inserire un numero come argomento")
    } else {
        if(subtrahend <= 19){
            diff = 19 - subtrahend
        } else {
            diff = 3 * (subtrahend - 19)
        }
        return Math.abs(diff)
    }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(integer) {
    if(isNaN(integer) === true) {
        console.log("Errore!Inserire un numero come argomento")
    } else {
        if(integer >= 20 && integer <= 100 || integer === 400) {
            console.log(true)
        } else {
            console.log(false)
        }
    } 
    
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(myString){
    let epifiedString = ''
    if(typeof myString === 'string'){
        if(myString.slice(0,7) !== 'EPICODE'){
            epifiedString = 'EPICODE' + ' ' + myString
        } else {
            console.log(myString)
        }
        return epifiedString
    }
    else {
        console.log("Errore! Il valore inserito non è accettato")
    }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numberToCheck){
    if(numberToCheck > 0){
        if(numberToCheck === 3 || numberToCheck === 7){
            console.log("Mi sa che hai scritto o 3 o 7")
        } else if(numberToCheck % 3 === 0 || numberToCheck % 7 === 0){
            console.log("Il tuo numero è un multiplo di 3 o 7")
        } else {
            console.log("Non è un multiplo di 3 o 7")
        }
    } else {
        console.log("Non è un numero positivo")
    }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringToReverse){
    let separateChar = stringToReverse.split('')
    let reversedChar = separateChar.reverse()
    let joinedChar = reversedChar.join('')
    return joinedChar
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(myString){
    if(typeof myString === 'string'){
        let words = myString.split(' ')
        for(let i=0; i<words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length)
        }
        return words.join(' ')
    }
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(myString){
    if(typeof myString === 'string'){
        let ciao = myString.slice(1, -1)
    return ciao
    }
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let random = function(){
    return Math.floor(Math.random() * 10) + 1
}

function giveMeRandom(myNum){ 
    let myArray = Array(myNum).fill(0).map(random)
    return myArray
}