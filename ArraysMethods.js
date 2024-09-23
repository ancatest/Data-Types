// at()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);
//sau
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits1[2];
console.log(fruit1);


//Array join()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2=fruits2.join("*");
console.log(fruit2);

//Array pop()--scoate ultimul element din array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruits3.pop();
console.log(fruit3);

//Array push()--adauga element nou,dar la sfarsit
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.push("Kiwi");
console.log(fruits4);
// sau sa arate si lungimea--- intreaba luni si vezi care e diferenta de afisare aici
const fruits5= ["Banana", "Orange", "Apple", "Mango"];
let length= fruits5.push("Kiwi");
console.log(fruits5);

//Array shift()--elimina primul element din array si le muta pe rstul pe o poz mai mica
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.shift();
console.log(fruits6);

//Array unshift()--adauga un element nou la array la inceput si le muta pe celelalte
const fruits7= ["Banana", "Orange", "Apple", "Mango"];
fruits7.unshift("Lemon");
console.log(fruits7);

// delete in Array
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits8[0];
console.log(fruits8);

// Array concat()--nu schimba un array existent ci returneaza intotdeauna un array nou
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//sau
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1);

// merging an array with values
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren2 = arr4.concat("Peter");
console.log(myChildren2);

//Array copyWithin()
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.copyWithin(2, 0);
console.log(fruits9);

const fruits10 = ["Banana", "Orange", "Apple", "Mango","Kiwi","Pear"];
fruits10.copyWithin(5, 0);
console.log(fruits10);

//Array flat()-- creaza un array nou folosindu-se de array-uri mai mici pe care le concateneaza
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//splice()-- adauga itemi noi la array la pozitia specificata--2 in acest caz
const fruits11= ["Banana", "Orange", "Apple", "Mango"];
fruits11.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits11);

//splice-primul parametru reprezinta poz pe care se adauga elementul,
//iar urmatorul parametru cate elemente sa taie din array
const fruits12= ["Banana", "Orange", "Apple", "Mango"];
fruits12.splice(2, 3, "Lemon", "Kiwi");
console.log(fruits12);

// using splice()to remove elements--primul parametru arata poz unde se introduc elementele
//iar al 2-lea parametru arata cate elemente din array se taie
const fruits13= ["Banana", "Orange", "Apple", "Mango"];
fruits13.splice(0, 1);
console.log(fruits13);

//toSpliced---creaza un nou array pastrandu-l si pe cel original
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

// slice()--taie o bucata din array
const fruits14 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits14.slice(3);
console.log(fruits14);
console.log(citrus);

//cand ai 2 parametri iti face array nou cu elementul de pe poz primului parametru
// si restul de elemente pana la poz indicata de ultimul parametru,dar fara sa-l includa
const fruits15 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits15.slice(1,3);
console.log(fruits15);
console.log(citrus1);

//indexOf()--cauta in array un element si ii returneaza valoarea
const fruits16 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits16.indexOf("Apple") + 1;
console.log(position);

//lastIndexOf()
const fruits17 = ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits17.lastIndexOf("Apple") + 1;
console.log(position1);

//Array includes()
const fruits18 = ["Banana", "Orange", "Apple", "Mango"];
fruits18.includes("Mango"); // is true
console.log(fruits18);

//Array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

//Array findIndex()-- returneaza indexul elementului care respecta conditia din functie
const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 25;
}
console.log(first1);

//findLast() Method --pleaca de la sfarsitul array-ului si returneaza valoarea primului element care indeplineste o conditie
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high);

//findLastIndex()--gaseste indexul ultimului element care satisface o conditie
const temp1= [27, 28, 30, 40, 42, 35, 30];
let pos = temp1.findLastIndex(x => x > 40);
console.log(pos);

//sort
const fruits19= ["Banana", "Orange", "Apple", "Mango"];
fruits19.sort();
console.log(fruits19);

//reverse()
const fruits20 = ["Banana", "Orange", "Apple", "Mango"];
fruits20.reverse();
console.log(fruits20);