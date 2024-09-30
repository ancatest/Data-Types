//performing a task-sa scrii ceva in consola

//function greet(name,lastName){
//console.log('Hello'+name+''+lastName);
//}
//greet('John','Smith');

// Calculating a value

//function square(number){
//  return number*number;
//}
//let number = square(2);
//console.log(number);

// SAU

//function square(number){
//  return number*number;
//}
//console.log(square(2));
// let a,b ;
// const x=function(a, b) {return a*b};
// console.log(a*b);

// const x=function (a,b){return a*b};
//let z= x(4,3);
//console.log(z);

//const myFunction =new Function("a","b","return a*b");
//let x= myFunction(4,3);
//console.log(x);

//outer variables
//let userName = 'John';

//function showMessage() {
//let message = 'Hello, ' + userName
//console.log (message);
//}

//showMessage(); // Hello, John

// sau

//let userName1= 'John';

//function showMessage() {
//let userName1 = "Bob"; // declare a local variable

//let message1 = 'Hello, ' + userName1; // Bob
//console.log(message1);
//}

// the function will create and use its own userName
//howMessage();

//console.log( userName1 ); // John, unchanged, the function did not access the outer variable

//function showMessage1(from, text) {

// from = '*' + from + '*'; // make "from" look nicer

//alert( from + ': ' + text );
//}

//let from = "Ann";

//showMessage1(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
//alert(from); // Ann

//function sum(a,b){
//return a+b;
//}
//let result= sum(1,2);
//console.log(result);

//const prompt=require("prompt-sync")();
//function checkAge(age){
//if(age>=18){
//return true;
// }else{
// return confirm('Do you have permission from your parents?');
//}
//}
//let age=prompt('How old are you?',18);
//if(checkAge(age)){
//console.log('Access granted');
//}else{
//console.log('Access denied');
//}
