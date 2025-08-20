/* What is a Function?
A function is a block of code designed to perform a specific task.
It helps you reuse code instead of writing the same logic again and again.
You "declare" (define) it once, and then "call" (use) it whenever needed.
Function Declaration is a way to define reusable blocks of code. They are hoisted(can be called before definition). Best for repeated tasks, calculations,validations etc.*/

// UseCase
/* 1.Greet Users 
function greetUser(name){
  coconsole.log("Welcome"+name+"!")
} greetUser("Divya");greetUser("Alex")*/
/*2.Math Calculation
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8*/
/*Repetitive Tasks 
function printLine(){
  console.log("-----------");
}printLine();console.log("Menu");printLine();*/

// Mini Project:Login Check
/*function login(username, password){
  if(username==="admin"&&password==="1234"){
    console.log("Login Successful");
  }else{
    console.log("Invalid Creentails")
  }
}
login("admin","1234")
login("user","1111")*/

// Declaration is hoisted -> can call before defining 
// Expression is not hoisted -> must define before using

// Function expression - unlike a function declaration,a function expression involves assigning a function to a variable. The function is stored in variable. It's usually not hoisted(canot call before defining).Can be anonymous(no name inside function) 
// Function Expression=function stored in a variable , Not hoisted, Very useful in callbacks, event handling , and dynamic logic.
// const variableName=function(parameters){};

/*const greet = function() {
  console.log("Hi");
};
greet(); // Output: Hi */

/* Use Cases of Function Expression 
1.Store in variables
2.Pass as arguments to other functions.
3.Use in callbacks*/

/* 1. Assigning to a Variable */
/*const add = function(a, b) {
  return a + b;
};
console.log(add(3, 7)); // 10*/

/* Passing Function as Argument 
function processUserInput(callback){                        
  let name="Divya";callback(name);
}const greet=function(user){console.log("Hello,"+user)};processUserInput(greet)*/

/* callback in array Methods 
let numbers=[1,2,3,4,5];
let squares=numbers.map(function(num){
  return num*num
});console.log(squares);*/

/* Mini Project:Simple Calculator 
const add=function(a,b){return a+b};
const subtract=function(a,b){return a-b};
const multiply=function(a,b){return a*b};
const divide=function(a,b){if(b===0)return "Can't divide by zero";return a/b;}
console.log("Add:",add(10,5))
console.log("Substract:",subtract(10,5))
console.log("Multiply:",multiply(10,5))
console.log("Divide:",divide(10,0))*/



// Arrow Function ->Arrow function are a shorter and cleaner way to write function expression.They were introduced in ES6

/*const greet=function(name){           // Normal function
  return "Hello"+name;
}
const greet=(name)=>{                 // Arrow function
  return "Hello"+name;
}*/

/*const square=x=>x*x; console.log(square(5))       //if there is only one parameter, you can skip parentheses:
const sayHi=()=> console.log("Hi");sayHi();       //if there are no parameters, use empty()
const add=(a,b)=>a+b; console.log(add(5,3))       //if the function body has only one return statement, you can skip return and {}*/


/*const numbers=[1,2,3];
const doubled=numbers.map(function(n){return n*2});console.log(doubled)
|
const double=numbers.map(n=>n*2);console.log(double)*/

/* Use cases of Arrow functions
1.Callbacks in arrays(map,filter,reducw, forEach)
2.Event handling in the browser.
3.Cleaner code for small utility function.
*/

// Mini projects with Arrow Functions
/* 1. Shopping Discount Calculator 
const prices=[100,200,300,400];
const discounted=prices.map(price=>price*0.9)
console.log(discounted)*/

/*2.Even Number Filter */
/*const numbers=[1,2,3,4,5,6];
const evens=numbers.filter(num=>num%2===0)
console.log(evens)*/

/* Todo App */
/*const todos=["Learn JS","Build Project","Practice"]
todos.forEach(todo=>console.log("Done "+todo))*/

/* Arrow functions do not have their own this. Better for callbacks and inline functions. Not hoisted (like function expressions) */

