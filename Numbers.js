//Numbers
let x1 = 34.0;
console.log(x1);

let x2 = 34;
console.log(x2);

let x3 = 3.14;
console.log(x3);

let x11 = 34.0;
let x22 = 34;
let x33 = 3.14;
console.log(x11 + "\n" + x22 + "\n" + x33);

let y = 123e5;
let z = 123e-5;
console.log(y + "\n" + z);

let x111 = BigInt("123456789012345678901234567890");
console.log(x111);
console.log("${x111}");

// adding 2 numbers
let x4 = 10;
let y1 = 20;
let z1 = x4 + y1;
console.log(z1);

//adding 2 strings
let x5 = "10";
let y2 = "20";
let z2 = x5 + y2;
console.log(z2);

// adding a number and a string
let x6 = "10";
let y3 = 20;
let z3 = x6 + y3;
console.log(z3);

let x7 = 10;
let y4 = 20;
let z4 = "The result is:" + x7 + y4;
console.log(z4);

// NaN-Not a Number

let x8 = 100 / "Apple";
console.log(x8);

let x9 = 100 / "Apple";
console.log(isNaN(x9));

let x10 = NaN;
let y5 = 5;
let z5 = x10 + y5;
console.log(z5);

let x12 = NaN;
let y6 = "5";
let z6 = x12 + y6;
console.log(z6);

let myNumber = 32;
result7 = myNumber.toString(16);
console.log(result7);

//numbers defined as objects

let y7 = new Number(123);
console.log(y7);

//methods
//Number.isInteger()
let x13 = Number.isInteger(10);
console.log(x13);

let x14 = Number.isInteger(10.6);
console.log(x14);

//Number.isSafeInteger()
let x15 = Number.isInteger(12345678901234567890);
console.log(x15);

//toExponential() spatiul din paranteza poate ramane gol si atunci iti afiseaza x16
let x16 = 9.656;
result8 = x16.toExponential(6);
console.log(result8);

//toFixed() rotunjeste numarul in functie de cate zecimale ii pui in paranteza
// daca e goala paranteza sau scrie 0 atunci iti rotunjeste numarul
//daca e mai mare cifra din paranteza decat cate zecimale sunt iti pune 0 pana ajunge la nr de zecimale dat

let x17 = 9.656;
result9 = x17.toFixed(0);
console.log(result9);

// toPrecision()// VEZI LUNI DE CE NU MERGE SAU CUM ITI AFISEAZA CU 1 INTRE PARANTEZE
let x18 = 9.656;
result10 = x18.toPrecision();
console.log(result10);

//valueOf()
let num = 1234;
console.log(num.valueOf());

// Number() Method VEZI LUNI// nr de milisec de la 1970
let x19 = new Date("1970-01-01");
console.log(x19);

// parseInt() transforma un numar intr-un intreg

let x20 = parseInt("-10.33");
console.log(x20);

// parseFloat

let x21 = parseFloat("20.33");
console.log(x21);

// Number.isInteger()

let x23 = Number.isInteger(500);
console.log(x23);
