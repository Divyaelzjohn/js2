// let car="Fiat";
// document.getElementById("demo").innerHTML="car: "+car


// const person=new Object();
// person.firstName="John";
// person.lastName="Doe";
// person.age=50,
// person.eyeColor="blue"

// document.getElementById("demo").innerHTML=person.firstName+" is"+person.age+"years old"


// const person={
//   firstName:"John",
//   lastName:"Doe",
//   id:5566,
//   fullName: function(){
//     return this.firstName+" "+this.lastName;
//   }
// }
// document.getElementById("demo").innerHTML=person.fullName()


// const person={
//   firstName:"John",
//   lastName:"Doe",
//   id:5566,
//   fullName:function(){
//     return this.firstName+" "+this.lastName;
//   }
// }
// document.getElementById("demo").innerHTML=person.fullName();


/*


const person={
  firstname:"John",
  lastname:"Doe",
  age:50,
  eyecolor:"blue"
}
delete person.age;
document.getElementById("demo").innerHTML=person.firstname+" is"+person.age+"years old";
*/

/*const person={
  firstname:"John",
  lastname:"Doe",
  age:50,
  eyecolor:"blue"
};
document.getElementById("demo").innerHTML=person.firstname+"is"+person.age+"years old"*/


/*const person={
  firstname:"John",
  lastname:"Doe",
  age:50,
  eyecolor:"blue"
}
document.getElementById("demo").innerHTML=person["firstname"]+" is"+person["age"]+" years old"*/

/*
const person={
  firstname:"John",
  lastname:"Doe",
  age:50,
  eyecolor:"blue"
};

// document.getElementById("demo").innerHTML=person["firstname"]+" is"+person["age"]+"years old";

delete person.age;
document.getElementById("demo").innerHTML=person.firstname+" is"+person.age+" years old";
*/

/*const muObj={
  name:"John",
  age:30,
  myCars:{
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
document.getElementById("demo").innerHTML=myObj.myCars.car2;*/

/*const person={
  name:"John",
  age:30,
  city:"New York"
};

let myString=JSON.stringify(person);
document.getElementById("demo").innerHTML=myString;*/

/*
function Person(first,last,age,eye){
  this.firstName=first;
  this.lastName=last;
  this.age=age;
  this.eyeColor=eye;
  // this.fullName=function(){
  //   return this.firstName+" "+this.lastName
  // }
}

const myFather=new Person("John","Doe",50,"blue")
const myMother=new Person("Selly","Rally",48,"green")
myMother.changeName=function(name){
  this.lastName=name
}
myMother.changeName("Doe")
// Person.prototype.nationality="English";

// document.getElementById("demo").innerHTML="My father is "+myFather.age+"."+"My mother is"+myMother.age+"."+myMother.nationality

// document.getElementById("demo").innerHTML="My father is "+myFather.fullName()
document.getElementById("demo").innerHTML="My mother last name"+myMother.lastName
*/

// 1.create an object of a person with name, age, and city.print all values

/*let person={
  name:"Jon",
  age:25,
  city:"abc"
};
console.log(person.name)
console.log(person.age)
console.log(person.city)

person.gender="male";
console.log(person)

delete person.city;
console.log(person)

console.log("age" in person)
console.log("city " in person)

for(let i in person){
  console.log(i+":"+person[i])
}*/


// let car={
//   brand:"Toyota",
//   model:"Innova",
//   start:function(){
//     console.log("Car started")
//   }
// };
// car.start();


/*let student={
  name:"anu",
  marks:{
    math:90,
    science:85
  }
};
console.log(student.marks.math)*/

/*let fruit={
  name:"Mango",
  color:"Yellow"
};
console.log(Object.keys(fruit))
console.log(Object.values(fruit))
console.log(Object.entries(fruit))*/


/*let dog={
  bark:function(){
    console.log("woof")
  }
};
console.log(dog.bark())*/

/*let a=10;
let b=a;
b=20;
console.log(a)

let obj1={x:1};
let obj2=obj1;
obj2.x=5;
console.log(obj1.x)*/

/*let obj1={a:1};
let obj2={...obj1};
let obj3=Object.assign({},obj1)*/

/*let person={
  name:"divya",
  greet:function(){
    console.log("Hi , I am "+this.name)
  }
}
person.greet()*/


// let obj={};
// obj[10]="ten";
// console.log(obj["10"])

