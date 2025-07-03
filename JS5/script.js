/* js variable can be declared in 4 ways  */
/* Let 
-blockscope
-let must be declared before use
-let canot be redeclared in the same scope */


/* Block Scope - variable declared inside a{} block canot be accessed from outside the block */

// {
//   let x=2      // x can not be used here
// }


/* Global scope-
variable declared with var inside a{} block can be accessed the block */

// {
//   var x=2;
// }

// cant be redeclared 

// let x="john"
// let x=0

// const PI=3.1415
// PI = 3.14;
// // PI=PI+10

// console.log(PI)

// const car={type:"Fiat",model:"500",color:"White"}

// car.color='red'

// car.owner="Johnson"

// document.getElementById("demo").innerHTML="Car owner is "+car.owner

// Function

// function myFunction(p1,p2){
// return p1*p2;
// }
// let result = myFunction(4,3);
// document.getElementById("demo").innerHTML=result


// let x=myFunction(4,3);
// function myFunction(a,b){
//   return a*b;
// }

// function heit(f){
//   return (5/9)*(f-32)
// }
// let value=heit();
// document.getElementById("demo").innerHTML=value


// function toCelsius(f){
//   return (5/9)*(f-32)
// }
// let value=toCelsius;
// document.getElementById("demo").innerHTML=value

// let text="Outside: "+typeof cancelAnimationFrame;
// document.getElementById("demo").innerHTML=text;

// function myFunction(){
//   let carName="Volvo";
//   let text="Inside: "+typeof carName+" "+carName;
//   document.getElementById("demo").innerHTML=text
// }


// let car="Fiat"
// document.getElementById("demo").innerHTML="Car: "+car

/*const car = {
type:"Fiat",
model:"500",
color:"white"
};
document.getElementById("demo").innerHTML="The car type is "+car.type*/

/*const person={
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue"
}
document.getElementById("demo").innerHTML=person.firstName+ "is"+person.age+"year old"*/

/*const person={};
person.firstName="John";
person.lastName="Doe";
person.age=50;
person.eyeColor="blue";

document.getElementById("demo").innerHTML=person.firstName+" is "+person.age+" years old"*/

/*const person={
  firstName:"John",
  lastName:"Doe",
  id: 5566,
  fullName:function(){
    return this.firstName+" "+this.lastName;
  }
}
document.getElementById("demo").innerHTML=person.fullName()*/

// const person={
//   firstName:"John",
//   lastName:"Doe",
//   age:50,
//   eyeColor:"blue"
// }
// const x=person;
// x.age=10;

/* An object is an unordered collection of properties
properties are the most important part of javascript objects.
properties can be changed , added, deleted, and some are read only */

// const person={
//   firstname:"John",
//   lastname:"Doe",
//   age:50,
//   eyecolor:"blue"
// };
// document.getElementById("demo").innerHTML=person.firstname+" is "+person.age+" years old"

// document.getElementById("demo").innerHTML=person["firstname"]+" is "+person["age"]+" years old."

// let x="firstName";
// let y="age";
// document.getElementById("demo").innerHTML=person[x]+" is "+person[y]+" year old"
//  person.nationality="english"
//  document.getElementById("demo").innerHTML=person.firstname+" is"+person.nationality+"."

// delete person={
//   firstname:"John",
//   lastname:"Doe",
//   age:50,
//   eyecolor:"blue"
// }
// delete person["age"]

// document.getElementById("demo").innerHTML=person.firstname+" is"+person.age+" year old"


// const myObj={
//   name:"John",
//   age:30,
//   myCars:{
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }
// // document.getElementById("demo").innerHTML=myObj.myCars.car2;
// // document.getElementById("demo").innerHTML=myObj.myCars["car2"]
// document.getElementById("demo").innerHTML=myObj["myCars"]

const person={
  firstName:"John",
  lastName:"Doe",
  id:5566,
  fullName:function(){
    return this.firstName+" "+this.lastName
  }
}

// document.getElementById("demo").innerHTML=person.fullName()

person.name=function(){
  return this.firstName+" "+this.lastName;
}

document.getElementById("demo").innerHTML="My father is "+person.name()

/**/
