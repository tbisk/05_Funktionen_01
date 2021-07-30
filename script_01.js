/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call) - kann auch vorher aufgerufen werden
// test();

// Funktionsrumpf (body) | callee (der, den man aufruft)
function test()
{
    console.log("Hallo Kevin!");
}

// Funktionsaufruf (call)
// test();

/***** Funktionen 02a *****/
// 2a. Parametisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    const firstName = "Holger"; // Variable -> lokal scope
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamen();
// console.log(firstName); // Fehler -> lokal!

/***** Funktionen 02b *****/
// 2b. Parametisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) 
{
    console.log("Hallo " + firstName + "!");
}

ausgabeNamenParam("Kevin"); // -> Argument(e) | args
ausgabeNamenParam("Holger");
ausgabeNamenParam("Claudia");
ausgabeNamenParam(prompt("Bitte Vornamen eingeben:"));


