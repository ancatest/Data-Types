//STRINGS
const prompt=require("prompt-sync")();
//EX1
//const text =prompt("Insereaza sirul de caractere cu care v-om lucra: ");
//let fifthcharacterofstring= text[4];
//console.log(fifthcharacterofstring);

//EX2
//let text1 =prompt("Introdu nume: ");
//let text2 =prompt("Introdu data: ");
//console.log("Clientul pe nume " + text1 + " a semnat contractul la data de " + text2);

//EX3
//const text =prompt("Introdu mesajul: ");
//let length = text.length;
//console.log(length);

//EX4
//let text = "Eu invat cu mare drag JavaScript-ul";
//let bucata = text.slice(21,32);
//console.log(bucata);

//EX5--- aici oare se poate scrie cu litere mari fara sa-l extrag?
//let text = "Eu invat cu mare drag JavaScript-ul";
//let bucata = text.slice(21,32);
//let text1 = bucata.toLocaleUpperCase();
//console.log(text1);


//INTEGERS

//EX1
//const x =prompt("Introdu primul numar: ");
//const y =prompt("Introdu al doilea numar: ");
//let z = x+"y";
//console.log("Rezultatul adunarii este: "+ z);

//EX2
//let x =prompt("Introdu primul numar: ");
//let y =prompt("Introdu al doilea numar: ");
//let z =prompt("Introdu al treilea numar: ");
//let greater;

//if (x > y && x > z) {
  //greater = x;
//} 
//else if (y > x && y > z) {
  //greater = y;

//} 
//else {
  //greater = z;
//}

//console.log(greater);

//EX3
//let x =prompt("Introdu numarul de minute: ");
//let y=x*60;
//console.log(y);

//ARRAYS

//EX1
//let numbers =[12,13,14,15,16];
//numbers[2]= 33;
//console.log(numbers);

//EX2--- intrebare aici doar de confirmare ca splice e mai bine de fol pt un element din array decat pop sau delete
//let fruits =['mere','pere','banane','rosii','caise']
//let fruit = fruits[3];
//console.log(fruit);
//fruits.splice(3,1);
//console.log(fruits);

//EX3
//let fruits =['mere','pere','banane','rosii','caise'];
//fruits.sort();
//console.log(fruits);

//EX4
//let numbers =[12,13,14,15,16];
//numbers.reverse();
//console.log(numbers);

//EX5
//let month =['Mai','Iulie','August','Octombrie'];
//month.splice(1,0,"Iunie");
//month.splice(4,0,"Septembrie");
//console.log(month);

//FUNCTII
//EX2
//let car={type:"Fiat",model:"500",color:"White"};
//function showModel(car){
//console.log(car.model);

//}
//showModel(car);

//EX3

//let sirul =prompt("Introdu caracterele sirului: ");
//for(let i=0;i<sirul.length;i++){
 //if(sirul.indexOf(sirul[i])!==sirul.lastIndexOf(sirul[i])) 
   //{continue;}
//else 

  //console.log(sirul[i]);
//}

//EX4

//function extractnr(){


//let sirul =prompt("Introdu caracterele sirului: ");
//let matches = sirul.match(/\d+/g);
//if (matches){
  //console.log(matches[0]+','+matches[1]);
  //}
//}
//extractnr();

//EX6

 let sir =prompt("Introdu caracterele sirului: ");
  for (let i = 0; i < sir.length; i++){
  if (Number.isInteger(parseInt(sir[i])))
   {
    console.log(parseInt(sir[i])+33);
break;
  }
}
