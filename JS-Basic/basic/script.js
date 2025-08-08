// Variables -are containers for storing data(like numbers , text,etc)
// Datatypes
/*let userAge = 22;                
let seatType = "Premium";   
let isStudent = true;*/


// operators
/*let basePrice = 200;
let finalPrice = basePrice;
if (seatType === "Premium") {
  finalPrice += 100; 
}*/

// condition statement => Apply logic to give discounts or special pricing
/*if(userAge < 12) {
  finalPrice *= 0.5; 
} else if (userAge >= 60) {
  finalPrice *= 0.7; 
} else if (isStudent) {
  finalPrice *= 0.85; // 15% discount for students
}console.log("Final Ticket Price: "+finalPrice)*/

// Inputs
/*let userAge = 22;
let seatType="Premium";
let isStudent=true;

let basePrice= 200;
let finalPrice=basePrice;

if (seatType === "Premium") {
  finalPrice += 100;
}

if(userAge<12){
  finalPrice*=0.5;
} else if(userAge >= 60) {
  finalPrice *= 0.7;
} else if (isStudent) {
  finalPrice *= 0.85;
}
console.log("Final Ticket Price: ₹" + finalPrice);*/


/* Loops -> You repeat a block of code multiple times - useful when working with arrays, repeating tasks, showing product lists,quiz questions, etc.   */

/* for loop-> for(let i=0;i<5;i++){ocnsle.log("Count: ",i)} projects examples:Quiz App-Loop through an array of questions, Shopping Cart-calculate total form a list of prices ,invoice Genrator- Print serial numbers
let prices = [200, 150, 300];
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log("Total Amount:", total); // 650
 */

/* while loop -> let i=0; while(i<5){console.log("While Loop:",i);i++;} similar but condition is checked before every run .:  projectexamples:DIce Game-Keep rolling untile you get 6, Login Form-Give user 3 atttempts, Countdown Timer- run until time is 0
let attempts = 0;
let password = "";
while (password !== "admin") {
  password = prompt("Enter password:");
  attempts++;
}
console.log("Access granted in", attempts, "attempts.");
*/

/* do...while -> let i=0;do{console.log("Do While Loop: ",i);i++;}while(i<5) always rind at lest once : projrct examples:menu-Based Game or App- Show menu at least once,survey Form-ask questions until user quits;
let again;
do {
  let num = prompt("Enter a number");
  alert("You entered: " + num);
  again = confirm("Want to enter another?");
} while (again);
*/

/* for...of -> let fruits =["apple","banana","grape"];for(let fruit of fruits){console.log(fruit)} best for looping over array:  -> project Examples: Display items in cart, show each question/option in a quiz, play each song in a playlistlet 
let cartItems = ["Laptop", "Phone", "Tablet"];
for (let item of cartItems) {
  console.log("Cart Item:", item);
}
*/

/* for...in -> Loop over object keys :-> project examples: user profile viewer-Loop through user details, print  key-value pairs of invoice/order, show products specifications
let user = {
  name: "Divya",
  age: 25,
  isMember: true
};
for (let key in user) {
  console.log(key + ":", user[key]);
}
*/

/*const questions= [
  {
    question:"What is the capital of India?",
    options:["Mumbai","Delhi","Chennai","Kolkata"],
    answer:"Delhi"
  },
  {
    question:"What is 5+3?",
    options:["5","8","10","15"],
    answer:"8"
  },
  {
    question:"Which planet is known as the Red Planet?",
    options: ["Earth","Venus","Mars","Jupiter"],
    answer:"Mars"
  }
];

let playAgain;
do {
  let score=0;
  let i=0;

  while(i<questions.length){
    const q=questions[i];
    console.log(`Q${i + 1}: ${q.question}`);

    for(let opt of q.options){
      console.log("-"+opt)
    }

    const userAnswer=prompt(`Your answer ofr Q${i+1}:`)
    if(userAnswer===q.answer){
      alert("Correct!")
      score++;
    }else {
      alert("Wrong! Correct answer: "+q.answer)
    }

    i++;
  }
  const result = {
    totalQuestions: questions.length,
    correctAnswers:score,
    wrongAnswers: questions.length - score
  };

  console.log("Quiz Summary: ")
  for(let key in result){
    console.log(`${key}:${result[key]}`);
  }

  playAgain=confirm("Do you want to try the quiz again?");
}while(playAgain)*/



// FUNCTIONS -> functions are building blocks of any javascript app - reusable code you can call again and again

/*
1.Function Delclaration:const greet = function () {
  console.log("Hi from expression!");
};
greet();

2.Function-expression ->Store in a variable. Can be anonymous
const greet = function () {
  console.log("Hi from expression!");
};

greet();

3:Arrow Function : Shorter syntax , often used in modern projects.
const greet = () => {
  console.log("Hello from the arrow!");
};
greet();

4.parameters and return: parametrs= inout to the function
returoutout from the function
function add(a, b) {
  return a + b;
}
let result = add(3, 5); // 8
console.log(result);

const square = (x) => x * x;
console.log(square(4)); // 16



real-world use case: calculator app:function multiply(a, b) {
  return a * b;
}
let total = multiply(100, 5); // 500

Shopping cart: function calculateDiscount(price) {
  if (price > 1000) {
    return price * 0.9;
  }
  return price;
}

*/
/* Function scope in javascript -> scope defines where a variable is accessible */
/* Global Scope :let name = "Divya"; // accessible everywhere
function sayHi() {
  console.log("Hi " + name); // works fine
}
 accessible evrywhere */
/* local/function scope : function greet() {
  let message = "Hello";
  console.log(message);
}
greet();           // console.log(message);  Error: message is not defined outside*/
// Block scope:    //(let/const only){let city="Kochi";console.log(city)}



/*function isEven(num){
  return num%2===0
}
console.log(isEven(4))
console.log(isEven(9))*/

/*function square(x){return x*x} console.log(square(5))

function greet(name){return "Hello"+name }console.log(greet("Divya"))*/

/*function getGrade(marks){
  if(marks>90){console.log("A")};else if(marks>75){console.log("B")};else if(marks>50){console.log("C")};else{console.log("F")}
} */

/*function getGrade(marks){if(marks>90)return "A"; else if(marks>75)return "B";else if(marks>50)return "c";else return "F"}console.log(getGrade(85))    */

/*const students = [
  { name: "John", marks: 95 },
  { name: "Alice", marks: 72 },
  { name: "Bob", marks: 88 },
  { name: "Daisy", marks: 45 }
];
function getGrade(marks) {
  if (marks > 90) return "A";
  else if (marks > 75) return "B";
  else if (marks > 50) return "C";
  else return "F";
}
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const grade = getGrade(student.marks);
  console.log(student.name + " got " + student.marks + " marks and grade " + grade);
}*/


// Javascript Arrays -an array is collection of items. Stored in a single variable.
/*let fruits=["apple","banana","mango"];
let marks=[90,75,60]*/

/* Why use arrays in ral project-> we use arrays when you want to store and work with lists of things:
  Shopping cart-List of products
  Quiz App -List of questions or answers
  Weather App - List of temperatures for a week
  Attendance Tracker -List of present/ Absent Students
  Playlist App- List of songs

  Basic array concepts-.
  create array ->let fruits=["apple","banana","grape"];
  Access Item -> fruits[0]_>"apple"
  Change Item -> fruits[1]="orange" 
  Length -> fruits.length ->3
  Add at end -> fruits.push("melon")
  Remove from end -> fruits.pop()
  Add at start ->fruits.unshift("kiwi")
  Remove from start -> fruits.shift()
*/

/*let todoList=["Buy milk","Study JS","Walk dog"]
console.log(todoList[1]);todoList.push("Go to gym");todoList.shift();console.log(todoList.length);*/

/*let todos = ["Wake up", "Eat breakfast", "Study JavaScript"];
todos.push("Go for walk");
todos.shift()

for(let i=0;i<todos.length;i++){
  console.log(todos[i])
}*/

/*let cart = ["Book", "Pen", "Notebook"];
cart.push("pencil");
cart.pop()
console.log(cart)

let todos = ["Wake up", "Brush teeth", "Exercise"];
todos.unshift("Drink water");
todos.shift()
console.log(todos)*/

/*let arr = ["Tea", "Coffee"];
let arr1 = ["Juice", "Soda"];
let combine=arr.concat(arr1)
console.log(combine)
let jo=combine.join("|")
console.log(jo)*/

/*let items = ["Shirt", "Pants", "Shoes", "Hat"];
let selected = items.slice(1, 3);
console.log(selected)
console.log(items)*/

//changes the array by removing ,adding,item1,item2,...)
/*let arr = ["A", "B", "C", "D"];
arr.splice(2, 1);  
console.log(arr); */
/*let arr = ["A", "C"];
arr.splice(1, 0, "B");  
console.log(arr); */

/* let todo = ["Task1", "Task2", "Task3", "Task4"];
let part = todo.slice(1, 3);   
todo.splice(2, 1, "New Task"); 
console.log(part)
console.log(todo) */

/* indexof()->Finds the position(index) of an element in an array , Runs -1 if not found
includes()->checks if an item exists in the array  
*/
/*let cart = ["Pen", "Notebook", "Pencil", "Eraser"];

console.log(cart.indexOf("Pencil"));   
console.log(cart.includes("Eraser")); 
console.log(cart.includes("Scale"));*/

/* reverse() and sort() in javascript */

/*let names = ["Divya", "Arun", "Kiran", "Bhavya"];
names.sort();
console.log(names); 

names.reverse();
console.log(names);*/

// find : returns the first matching element in the array, if not found , returns undefined.

/*let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];
let result=products.find(p=> p.price>25000);
console.log(result)*/

//findIndex()->returns the index of the first matching element. If not found , returns -1   

/*let cart = [
  {id:1,name:"Book",price:200},
  {id:2,name:"Pen",price:20},
  {id:3,name:"Notbook",price:50}
];

let searchedItem=cart.find(item=>item.name==="Pen");
console.log(searchedItem)

let penIndex=cart.findIndex(item=>item.name==="Pen")
console.log(penIndex)*/

/* Use Case Ideas: find a specific product by ID or name.,Locate a user in the databasw by email,Check if a todo already exists before adding */

/*let products = [
  { id: 101, name: "Laptop", price: 55000 },
  { id: 102, name: "Phone", price: 25000 },
  { id: 103, name: "Tablet", price: 30000 },
  { id: 104, name: "Camera", price: 40000 }
];
// let searchedItem=products.find(item=>item.name==="Laptop");
// console.log(searchedItem)

let selectedItem=products.find(item=>item.name==="Laptop");
let searchedItemIndex=products.findIndex(item=>item.name==="Laptop");

if(searchedItem){
  console.log("product found:",searchedItem);
  console.log("Index:",searchedItemIndex)
}else{
  console.log("Product not found")
}*/

/*let cart=["Book","Pen","Notebook"]
let newItem="Pen"
if(cart.includes(newItem)){
  console.log("Item Already in cart")
}else{
  cart.push(newItem);
  console.log("Item added")
}*/

/*let todoList=["Study","Wakw up","Eat"]
let newTask="Code"
if(todoList.includes(newTask)){
  console.log("Already added")
}else{
  todoList.push(newTask);
  console.log("Task added",todoList)
}*/


/* Loops(for,while), function,if/else,Arrays,Array methods:push,pop,shift,unshift,concat,join,slice,splice,find,findIndex,includes
Destructuring ,spread operator,rest operator, reduce() method,Ternary operator
*/

/* Destructuring allows you to unpack values from arrays or properties from objects into separate variables easily */
/*const fruits = ["apple", "banana", "cherry"];
const [a, b, c] = fruits;
console.log(a);
console.log(b); 
console.log(c);*/

/*const user = {
  name: "Divya",
  age: 20,
  city: "Kochi"
};
const { name, age } = user;
console.log(name); 
console.log(age);  */

/*const response = {
  user: {
    name: "Divya",
    email: "divya@example.com",
    location: "India"
  }
};
const { name, email } = response.user;
console.log(`Welcome ${name}, your email is ${email}`);*/

/*const languages = ["JavaScript", "Python", "Java"];
const [ lang1,lang2] = languages;
console.log(`Your top languages are: ${lang1} and ${lang2}`);

const profile = {
  username: "divya",
  points: 150,
  level: "intermediate"
};
const { username, level } = profile;
console.log(`user ${username}, your email is ${level}`);*/

/* Spread operator: the spread operator(...) expands arrays or objects into individual elements */
/*let nums = [1,2,3];
console.log(...nums);
let fruits = ["apple", "banana"];
let veggies = ["carrot", "beans"];
let combined = [...fruits, ...veggies];


let orginal = [10, 20, 30];
let copy = [...orginal];

copy.push(40);
console.log("Orginal:", orginal);
console.log("Copy:", copy);        


let product = { name: "Phone", price: 25000 };
let newProduct = { ...product };
newProduct.price = 20000;

console.log(product);     
console.log(newProduct);  

let a = [1, 2];
let b = [3, 4];
let ab=[...a,...b]
console.log(ab);     

let person = { name: "Rahul", city: "Mumbai" };
let newPerson={...person}
newPerson.city="Chennai";
console.log(newPerson);     
console.log(person); */



/* Rest parameter-> the ... used in function parameters collects multiple argumnets into an array 
...rest collects extra values into an array, can only be used at the end of the parameter  list
*/
/*function greetAll(...names) {
  console.log(names);
}
greetAll("Divya", "Alex", "Sam");



function addAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  console.log("Total:", total);
}
addAll(10, 20, 30);
addAll(5,5);       */


/*function welcome(message,...users){
  for(let name of users){
    console.log(`${message},${name}!`);
  }
}

welcome("Hello", "Divya", "Alex", "John");*/

/*function multipleAll(...numbers){
  let result = 1;
  for(let num of numbers){
    result*=num
  }
  console.log("Result: ",result)
}*/



/* reduce()- It's a method that reduces an array to a single value - like sum,product,max etc */
/*
Syntax->
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
*/

/* accumulator-> store result as it goes,currentValue->current item in the array, initialValue -> starting value(e.g. 0,1,"") */

/*const numbers = [10, 20, 30];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);  

const nums = [2, 3, 4];
const product = nums.reduce((acc, val) => acc * val, 1);
console.log(product); 


const names = ["Divya", "Amit", "Christopher"];
const longest = names.reduce((longestSoFar, current) =>
  current.length  > longestSoFar.length ? current : longestSoFar
, "");
console.log(longest);

const cart = [
  { name: "Book", price: 300 },
  { name: "pen", price: 50 },
  { name: "Bag", price: 1000 }
];

const tot = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total); // Output: 1350*/
