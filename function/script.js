// what is function -> is a set of instructions written in code to do something
function greet(){
  console.log("Hello!")
}greet()

/* function declaration -This is the basic way of creating a function
function parameters and arguments-You can pass values into functions.Let's say You want to greet diffrent people */

function greet(name){
  console.log("hello"+name)
}
greet("Divya")
greet("John")

// return statement-> A function can give something back toyou.

function add(a,b){
  return a+b
}
let result=add(3,5)

// function expression
let greet=function(){
  console.log("Hello there!")
};
greet()

// Arrow Function

const sayHi=()=>console.log("hi")
sayHi();

const square=x=>x*x
console.log(4)

// Default Parameteres

function greet(name="gsus"){
  console.log("Hello"+name)
}
greet()
greet("Anna")

// Rest parameter(...)
function sum(...numbers){
  let total=0;
  for(let num of numbers){
    total+=num
  }
  return total;
}
console.log(sum(1,2,3,4))

// Anonymouse function 
setTimeout saybye(){
  console.log("3 seconds passed").3000;
}

// Callnacknction a functuin passed the another functioniiff-innediately involked function 
// Recursion
