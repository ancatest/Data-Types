// Object

let person= {
    name:'Anca',
    age: 30
}
//Dot Notation
person.name='John';

//Bracket Notation

let selection='name';
person[selection]='Mary';
console.log(person.name);

let car ="Fiat";
console.log(car);

const car1={type:"Fiat",model:"500",color:"White"};
console.log(car1);

let firstName = "Madalina";
let lastName = "TESt";
const person1={
    firstName:"John",
    lastName: "Doe",
    id:5566,
    fullName: function(){
        return this.firstName+""+this.lastName;
    }
}
console.log(person1);
console.log(firstName+lastName);

//Alert "John" by extracting information from the person object.

const person2 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  alert(person2.firstName);

  const person22 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  console.log(person22.firstName);