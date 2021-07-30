/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Kevin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    const firstName = "Kevin"; // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamen();
// console.log(firstName);  // Fehler --> lokal!!!

