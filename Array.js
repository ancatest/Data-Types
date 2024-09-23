let selectedColors = ['red','blue'];
selectedColors[2]='1';
console.log(selectedColors.length);

const cars =[];
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
console.log(cars);

const cars1= new Array("Ford","Peugeot","Fiat");
console.log(cars1);

const cars2 = ["Saab","Volvo","BMW"];
let car = cars2[0];
console.log(car);

// converts array to string using toString
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let arrayString = fruits.toString();
console.log(arrayString);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits1.length;
console.log(size);

// acceseaza ultimul element din array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2[fruits2.length - 1];
console.log(fruit);

// loop through array; li =list of elements si ul= unordered list element
const fruits3= ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits3.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits3[i] + "</li>";
}
text += "</ul>";
console.log(text);

// adaugare de elemente la array

const fruits4=["Banana","Orange","Apple"];
fruits4.push("Lemon");
console.log(fruits4);

//sau
const fruits5=["Banana","Orange","Apple"];
fruits5[fruits5.length]="Lemon";
console.log(fruits5);

//associatives arrays
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person.length);
console.log(person[0]);

// new array
const points1 = new Array(40, 100, 1, 5, 25, 10);
console.log(points1);

const points2 = new Array(40, 100, 1);
console.log(points2);

//// Create an array with 40 undefined elements:
let points3 = new Array(40);  
console.log(points3);
// Array is array iti arata tipul de array in js
const fruits6=["Banana","Orange","Apple"];
console.log(Array.isArray(fruits6));

//sau folosind instanceof
const fruits7 = ["Banana", "Orange", "Apple"];

console.log(fruits7 instanceof Array);
