/* Function Parameters & Arguments*/
/*function greet(name) {   // name = parameter (empty box)
  console.log("Hello " + name);
}
greet("Divya"); // "Divya" = argument (value we pass)
greet("Alex");*/


// Multiple Parameter
/*function add(a, b) {
  console.log(a + b);
}
add(5, 3);  // 8
add(10, 20); // 30*/


// Default Parameters -> If no value is passed, you can give a default.
/*function greetUser(name = "Guest") {
  console.log("Welcome, " + name);
}
greetUser("Divya"); // Welcome, Divya
greetUser();        // Welcome, Guest*/


// Rest Parameters(...) -> sometimes don't know how many arguments will come-> use ...(rest operator).
/*function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumAll(1, 2, 3));        // 6
console.log(sumAll(10, 20, 30, 40)); // 100*/



// Argument object(old way) -Every function has a hidden arguments object(like an array)
/*function showArgs() {
  console.log(arguments);
}
showArgs(1, "apple", true);*/


// simple Calculator
/*function calculator(a,b,operator="+") {
  switch(operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Can't divide by 0";
    default: return "Invalid Operator";
  }
}
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5));      // 15 (default +)*/

// Average score calculator
/*function average(...scores) {
  let total = 0;
  for (let s of scores) {
    total += s;
  }
  return total / scores.length;
}
console.log(average(80, 90, 70)); // 80
console.log(average(50, 60, 100, 90)); // 75*/


// Return statement - A function can either: just do something(like print to console) or give back a value using return. return sends a value back to the place where the function was called
/*function add(a, b) {
  return a + b;  // sends the result back
}
let result = add(5, 3);
console.log(result); // 8*/

/* Rules of return
1.Once a function executes return , it stops immediately.->function test(){return "Hello";console.log("This will never run");}
2.You can store return values in variables, or use them directly->console.log(add(2,3));let sum=add(10,20) */

// Use Cases of return 
/* Math Calculations */
/*function multiply(a, b) {
  return a * b;
}
let area = multiply(5, 6); 
console.log("Area:", area); // 30
// Validation Functions
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false*/


/* Reusable Utility Functions-> instead of repeating code: */
/*function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(toCelsius(98.6)); // 37
)*/

// Decision Making
/*function canVote(age) {
  if (age >= 18) {
    return "Yes, you can vote";
  }
  return "No, you are too young";
}
console.log(canVote(20)); // Yes
console.log(canVote(15)); // No*/

// Projects
/* Project1:Discount Calculator */
/*function applyDiscount(price, discount) {
  return price - (price * discount / 100);
}
console.log(applyDiscount(1000, 10)); // 900
console.log(applyDiscount(500, 20));  // 400*/


// Grade checker
/*function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 50) return "C";
  return "F";
}
console.log(getGrade(85)); // B*/



// function scope ->scope means "Where a variable or function can be accessed inside your code."
/* There are 3 main types of scope in JS
1.Global Scope->Variable declared outside any function->available everywhere
->let globalVar = "I am global";
function show() {
  console.log(globalVar); // can access global
}
show();
console.log(globalVar); // also works here
2.Function Scope(Local scope)->variables declared inside a function -> exist only inside that function.
function test() {
  let localVar = "I am local";
  console.log(localVar);  // works here
}
test();
// console.log(localVar); // Error: not defined
3.Block Scope(let & const)-> Variable declared with let or const inside{}->only available inside that block.
if (true) {
  let blockVar = "Inside block";
  console.log(blockVar); // works here
}
// console.log(blockVar); // Error
*/

// Scope Chain-> if JS doesn't find a variable in the current scope,it looks outside(parent scope) untile it reaches global
/* Why Scope is important?
1.AVoid conflicts(same variable name in diffrent places).
2.Security(Keeps some data privvte inside functions)
3.Memory management(local variable removed after function finishes).
*/

/*let outer = "I am outer";
function parent(){
  let inner = "I am inner";
  function child() {
    console.log(inner); // child can see parent's variable
    console.log(outer); // child can see global too
  }child();
}
parent();*/


// Mini Project using Scope
/* counter function (private variable using function scope)
function createCounter() {
  let count = 0; // private (cannot be accessed outside)

  return function() {
    count++;
    return count;
  };
}
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
*/

// Shopping Cart(Global vs Local Scope)
/*let cart = []; // global scope
function addItem(item) {
  let message = item + " added"; // local scope
  cart.push(item);
  return message;
}
console.log(addItem("Shoes")); // Shoes added
console.log(addItem("T-Shirt")); // T-Shirt added
console.log("Cart:", cart); // ["Shoes", "T-Shirt"]*/


// Closure->a closure happens when a function "remembers" variables from it's parent scope even after the parent function has finished running 

/*function outer() {
  let count = 0; // outer variable
  function inner() {
    count++; // inner still has access to count
    return count;
  }
  return inner; // return inner function
}
let counter = outer(); // outer runs once
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3*/
