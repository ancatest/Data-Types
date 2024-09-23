
//STRING
let text = 16 + "Volvo";
console.log(text);

//let x= "Volvo"+16
//console.log(x);

let TEXT= 16+4+"Volvo";
console.log(TEXT);

let te= "Volvo"+16+4;
console.log(te);

let x;
x=5;
x="John";
console.log(x);

let carName1="Volvo XC60";
let carName2='Volvo XC60';
console.log(carName1+ "\n" +carName2);

let answer1="It's alright";
let answer2= "He is called 'Johnny'";
let answer3='He is called "Johnny"';
console.log(answer1+"\n"+answer2+"\n"+answer3);

let text1 = "We are the so-called \"Vikings\" from the north.";
console.log(text1);

let text2 ='it\'s alright.';
console.log(text2);

let text3 = "The character \\ is called backslash."
console.log(text3);
// lungimea sirului
let text4 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length =text4.length;
console.log(length);

//charAT()
// litera de pe pozitia pe care o pui tu in paranteza; incepe numaratoarea de la 0
let text5 ="HELLO WORLD";
let char = text5.charAt(0);
console.log(char);

//a3-a litera din cuvant; alternativa la name.at(2)
const name = "W3Schools";
let letter = name[2];
console.log(letter);

//charCodeAt()
// codul literei de pe poz pe care o pui tu in paranteza
let text6 = "HELLO WORLD";
let char1 = text6.charCodeAt(0);
console.log(char1);


//Slice()
// extrage o parte din string; de la pozitia 7 la pozitia 13 in acest caz

let text7 = "Apple, Banana, Kiwi";
let part = text7.slice(7,13);
console.log(part);

let A='Ram is going to school';
b=A.slice(0,5);
console.log(b);
c=A.slice(1);
console.log(c);
// -1 inseamna penultimul caracter
d=A.slice(3,-1);
console.log(d);
e=A.slice(6);
console.log(e);

//codePointAt()
//returneaza ascii code de pe poz indicata

let str = "gfg"
let result1 = str.codePointAt(0);
console.log(result1);
let result2 = str.codePointAt(1);
console.log(result2);
let result3 = str.codePointAt(2);
console.log(result3);

//undefined result pt ca nu exista valoarea

let str1 = "gfg"
let result = str1.codePointAt(3);
console.log(result);

//iterates over each character in the string "GeeksforGeeks" and prints the code value for each character

let str2 = "GeeksforGeeks";
for (let i=0;i<str2.length;i++){
    const result4=str2.codePointAt(i);
    console.log(result4);
};

let str3 = "????";
let result5 = str3.codePointAt(0);
console.log(result5);

// substr()
let str4 = "Apple, Banana, Kiwi";
let part1 = str4.substring(7,13);
console.log(part1);

let str5= "Apple, Banana, Kiwi";
let part2 = str5.substr(-4);
console.log(part2);

// to UPPER CASE and to LOWER CASE

let text8 = "Hello World!";
let text9 = text8.toUpperCase();
console.log(text9);

let text10 = "HELLO WORLD";
let text11 = text10.toLowerCase();
console.log(text11);

// concat-poate fi folosita in loc de +
let text12 = "Hello".concat("", "World!");
console.log(text12);

// trim() scoate spatiile goale din ambele parti ale stringului
//trimStart() si trimEnd() fac acelasi lucru dar elimina doar spatiile de la inceput(start) si de la sfarsit(end)

let text13 = "          Hello World!       ";
let text14 = text13.trim();
console.log(text14);

//padStart()
let text15 = "5";
let padded = text15.padStart(4,"0");
console.log(padded);

let text16 = "5";
let padded1 = text16.padStart(4,"x");
console.log(padded1);

//padStart dar cu convertirea unui numar la un string

let numb = 6;
let text17 = numb.toString();
let padded2 = text17.padStart(4,"0");
console.log(padded2);

//padEnd()
let text18 = "8";
let padded3 = text18.padEnd(4,"0");
console.log(padded3);

// repeat()
let text19 = "Hello world!";
let result6 = text19.repeat(4);
console.log(result6);

//replace()
let text20 = "Please visit Microsoft!";
let newText = text20.replace("Microsoft", "W3Schools");
console.log(newText);

//replaceAll()
let text21 = "I love cats. Cats are very easy to love. Cats are very popular."
text22 = text21.replaceAll("Cats","Dogs");
text23 = text22.replaceAll("cats","dogs");
console.log(text22);
console.log(text23);

// indexOf
let text24 = "Please locate where 'locate' occurs!";
let index = text24.indexOf("Please");
console.log(index);

//lastindexOf
let text25 = "Please locate where 'locate' occurs!";
let index1 = text25.lastIndexOf("locate");
console.log(index1);

// returneaza -1 pt ca nu gaseste John in textul dat
let text26 = "Please locate where 'locate' occurs!";
let index2 = text26.lastIndexOf("John");
console.log(index2);

// search
let text27 = "Please locate where 'locate' occurs!";
let index3=text27.search("locate");
console.log(index3);
//sau
let text28 = "Please locate where 'locate' occurs!";
let index4=text28.search(/locate/);
console.log(index4);

// match()
let text29 = "The rain in SPAIN stays mainly in the plain";
let myArr=text29.match("ain")
console.log(myArr);

// matchAll();
function myFunction() { 
  
    //Regular expression with the /g flag
    const regex = /e(xam)(ple(\d?))/g;
    //Reference string
    const str = 'example1example2example3';
    
    //Using matchAll() method
    const array = [...str.matchAll(regex)];
    
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}  
myFunction();

