// Kommentare werden mit // eingeleitet

console.log("hello world!"); // entspricht unserem print() Befehl aus Python

// Variablen deklarieren

// der standart Weg zum Variablen setzten
let user_let = "Bob";
user_let = "Bob_2";

const user_const = "Tony";
// user_const = "Tony_2" konstanten können nicht überschrieben werden

// alte methode, achtung hoisting!
// Hoisting ist ein Mechanismus bei dem die Deklaration(Reservierung des Speichers) 
// zeitlich an den Anfang gezogen wird, geschieht auch bei Funktionen.
var user_var = "Stacy";
user_var = "Stacy_2";


greet();
function greet() {
    console.log("hello from function");
};


// console.log(user_let)
// console.log(user_var)
// console.log(user_const)


//primitive datentypen

let my_string = "Bob";
let my_number = 42;
let my_bool = true;
let my_empty = null;
let undefined;

console.log(my_number)

// komplexen Datentypen

// Array

const my_array = ["Haus", "Maus", "Laus"]

my_array[2] = "Flaus"
my_array.pop() // entfernt das Letzte
my_array.shift() // entfernt das Erste

my_array.push("Maus") // fügt am Ende hinzu
my_array.unshift("Wassermelone") // fügt am Anfang hinzu

// .splice(), .reduce()

console.log(my_array)
console.log(my_array[0])

// Objekt 

const my_obj = {
    name: "Bob",
    alter: 30,
    email: "gmail@chucknorris.com"
}

// + operator

let ergebnis = 0

ergebnis = "hello" + " world!"
ergebnis = 5 + 2
ergebnis = "555" - 2
console.log(ergebnis)

// + macht Spaß
ergebnis = "5" + 2 + 2
console.log(ergebnis)

ergebnis = 2 + 2 + "5"
console.log(ergebnis)

ergebnis = true + true // false = 0 / true = 1
console.log(ergebnis)

ergebnis = "hi" + true // true wird zum string
console.log(ergebnis)

ergebnis = [] + 7 + 7 // ein leeres Array ist ein leerer String
console.log(ergebnis)

console.log(0.1 + 0.2)


let my_text = "hello"
let my_code = 123

console.log(`${my_text} and ${my_code}`)



let my_age = 25;

if (my_age > 18) {
    console.log("volljährig")
} else if (my_age == 18) {
    console.log("du bist 18")
} else {
    console.log("jünger als 18")
};

let day = "Montag";


switch (day) {
    case "Montag":
        console.log("Heute ist Montag.");
        break;
    case "Dienstag":
        console.log("Heute ist Dienstag.");
        break;
    case "Mittwoch":
        console.log("Heute ist Mittwoch.");
        break;
    default:
        console.log("Heute ist ein anderer Tag.");
}   


for (let i = 0; i < 7; i+=2) {
    console.log(i)
}

let counter = 0

while (counter < 5) {
    console.log(counter)
    counter++
}

do {
    console.log(counter)
    counter--
} while (counter > 0)


// Funktionen

function summe(zahl_1, zahl_2) {
    return  zahl_1 + zahl_2
}

console.log(summe(2,3))

class Auto {
    constructor(marke, farbe) {
        this.marke = marke
        this.farbe = farbe
    }

    hupen() {
        console.log("mööööp")
    }
}

const kit = new Auto("Pontiac", "Schwarz")

console.log(kit.marke, kit.farbe)

