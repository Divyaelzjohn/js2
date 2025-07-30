
/* Display scripts at the bottom of the <body> element improves the display speed , beacuse script interpreatation slows down the display */

/* javascript display possibilities
`innerHTML or innerText
-document.write()
-window.alert(
-console.log()) */

/* Use innerHTML when you want to chenge an HTML element
Use InnerText when you want to chenge the plain text */

// innerHTML ->document.getElementById("demo").innerHTML="<h2>Hello</h2>"
// innerText ->document.getElementById("demo").innerText="Hello WOrld"
// document.write method only used for testing, write content directly into an HTML document

/* var , let , const are used to declare variable in js */

// Var : variable declares with var are function-scoped or globally scoped. This means they are accessible throughout the entire function in which they ere declared, or globally if declared outside any function

// let : variable declared with let are block-scoped. This means they are only accesible within the block(code enclosed in {}) where they are delclared

// const:Variable declared with const are also block-scoped, similar to let.

// Diffrence between call() and apply()
/* call() method takes arguments separately
The apply() method takes arguments as an array. */

// let and const hoisted


// Hoisting -> js behaviour where variable and function declarations are conceptually moved to the top of their containg scope during the compailation phase , before teh code execution begind

// console.log(myVar)
// var myVar=10
// console.log(myVar)

// Everything in javascript happens inside an execution context
// Memmory Component -> All variables and functions are stored as key value pairs.also called as variable environment 
// Code Component -> place where code is executed line by line. Called as Thread of Execution. execute line by line .

// So javascript is a synchronus single threaded programming language and everything in javascript happens inside an execution context.


// Global Execution COntext Creation
// 1.Phase1- Memory Creation Phase
                            //memmory               //code 
/*
var n=2                     //n:undefined           //n:2
function square(num){
  var ans=num*num;
  return ans;
}
var squareN=square(n)      //squareN:undefined      //n:4
var square4=square(4)      //squre4:undefined
*/
//2.Function call  ->memmory component and code component


// Hoisting

/*
display();
console.log(x)
var x=8;
const display=()=>{
  console.log("Hello Javascript")
}
*/
// Variables functionsum ath initialize cheyyunnathin munb thanne access cheyyan pattunnath aan hoisting

// arrow functionnum ethelum function assign cgeyth vachalum ath work avula


// var x=1

// a()
// b()

// function a(){
//   var x=10;
//   console.log(x)
// }
// function b(){
//   var x=100;
//   console.log(x)
// }
// console.log(x)


/*ab()
console.log(b)

function ab(){
  console.log("Hello")
}
var a=10
let b=20*/


// let b;         let igane eythan pattum
// b=20

// const c;       ith igane eythan pattula
// c=30;


// Lexical scoping: A variable defined a function can be accessible inside another function defined after the variable declaration

/*function a(){
  b()
  function b(){
    console.log(x)
  }

}
var x=10
a()*/

// scope is directly depend on lexical environment


//  function b log x local memmory execution context memmory space .lexically insert global object

// first call a() , then call b()     execution context create akumbo appol okke lexical environement create avum

// lexical environment is local memmory+lexical environment of the parent



// Block
// multiple statements single statement aaki save cheyyan

/*var x=2;

if(x%2==0) {
  console.log(x)
  console.log("even")
}
*/


/*let b=100
{
  var a=10;
  let b=20;
  const c=30;

  console.log(a)
  console.log(b)
  console.log(c)
}

console.log(a)*/




// Function -> javascript function is a block of code designed to perform a particular task
// return _> function will stop executing
// it runs when something calls

/*
 functions  you can reuse code
  we can write code that can be used many times.
  Use can the same code with diffrent arguments, to produce diffrent result
 */

/*function toCelsius(f){
  return (5/9)*(f-32)
}
let value=toCelsius(77)
console.log(value)*/

// function without a name anonimus function

// const x=function(a,b)
// { return a*b }
// console.log(x(4,3))


// function functionName(){}  functionName()
/*
function sayHello(){
  console.log('function sayHello')
  greet()
  console.log('end of say hello')
}

function greet(){
  console.log('function greet')
  console.log('end of greeting')
}

console.log('main code start')
sayHello()
console.log('main code end')
*/

/*function myFunction(x,y){
  if(y===undefined){
    y=2;
  }
  return x*y
}
console.log(myFunction(4))*/


/*function findMax(){
  let max=-Infinity;
  for(let i=0;i<arguments.length;i++){
    if(arguments[i]>max){
      max=arguments[i]
    }
  }
  return max;
}
console.log(findMax(4,5,6))*/

// function invocation

/*const myObject={
  firstName:"John",
  lastName:"Doe",
  fullName:function(){
    return this.firstName+" "+this.lastName
  }
}
myObject.fullName()

console.log(myObject.fullName())*/


// Closure

// function x(){
//   var a=7;
//   function y(){
//     console.log(a)
//   }
//   return y
// }
// // var z=x()
// // console.log(z)
// x()

/* x is gone.*/


/*function add(a,b){
  function myAdd(){
    const c=a+b;
    return c;
  }
  return myAdd
}
function main(){
  const res=add(3,4);
  const val=res()
  console.log(res);
}
main()*/

let name={
  firstname:"Akshy",
  lastname:"Sanini",
  }
  let printFullName=function (hometown,state){
    console.log(this.firstname+" "+this.lastname+"from"+hometown+",");
    printFullName();
  }

  printFullName.call(name,"Dehradun","Uttaraband")
let name2={
  firstname:"Sachin",
  lastName:"Tendulkar",

}

// function borrowing
printFullName.call(name2,"Mumbai","Maharashtra")

// function call
/* WIth call()  method you can write that can be used on diffrent objects

const person={
fullName:function(){
return this.firstName+" "+this.lastName;
}
}
const person1={
firstName:"John",
lastName:"Doe"
}
const person2={
firstName="Mary",
lastName="Doe"}

person.fullName.call(peroson1)
*/

// call() method , you can write a method that can be used on diffrent objects

/* const person ={
firstName:"John",
lastName:"Doe",
fullName:function(){
return this.function+" "+thyis.lastName;}} 
person.fullName()
*/

/* 
const person={
fullName:function(){
return this.firstName+" "+this.lastName;
}}
const person1={
firstName:"John",
lastName:"Doe"
}
const person2={
firstName:"Mary",
lastName:"Doe"
}
person.fullName.call(person1)
person.fullName.call(person2)
*/

/* const person={
fullName :function(*{
return this.firstName+""+this.lastName;}}
const person1={
firstName:"John",
lastName:"Doe"
}
document.getElementById("demo").innerHTML=person.FullName.apply(person1)
  */
 

/* const person={
firstName:"John",
lastName:"Doe",
display:function(){
let x=document.getElementById("demo")
x.innerHTML=this.firstName+""+this.lastName}} 
person.displau() */


/* 
The bind() method solves the problem 
In the foloowing exapmple , the n=vind() method is used to bind display to person
This example will display the person  name  after 3 seconds
const person
bind() method solves this problem . In the following example the bind() method is used to bind person.display to person

const person ={
firstName:"John",
lastName:"Doe",
display:function(){
let x=document.getElementById("demo");
x.innerHTML=this.firstName+" "+this.lastName;}}
let display=person.display.bind(person)
setTimeout(display,3000)
*/

/* Javascript variable can belong to The local scope or the Global scope globalScope
Global variable can be made local(private) with closure.
Closure makes it possible for a function to have "private" variable */

/* aLocal variable is a "private" variable defined inside a function.
A function can access all variable in the local scope

function myFUnction(){
let a=4;
return a*a}

a global variable is a "public"  variable defined outside a function
A function can accesss all variable in the global scope
let a=4;
function myFunction(){
return a*a}

function add(){
let counter=0,
counter+=1;
return counter;
}
let x=0;
x=add();
x=add();
x=add()
*/

/* function add(){
let counter =0;
function plus(){counter+=1;}
plus()
return counter;
} */

/* 
function myCounter(){
lert counter=0;
return function(){
counteR++;
return counter;
}}
const add=myCounter()
add()
add()
add()
*/

/* The add is assigned to the return value of a function
The function only runs once. It sets the counter to zero (0) , and return a function expression This is called a closure . it makes it possible  it possible  for  a function to have  "private" variable . 
*/

/* class to create a class 
always add a methid named constructor()

class className{
constructor ({..}  class Car{
constructor(name,year)}
{
this.name=name;
this.year=year
} */
