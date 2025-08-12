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

/* for loop-> for(let i=0;i<5;i++){console.log("Count: ",i)} projects examples:Quiz App-Loop through an array of questions, Shopping Cart-calculate total form a list of prices ,invoice Genrator- Print serial numbers
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

/* do...while -> let i=0;do{console.log("Do While Loop: ",i);i++;}while(i<5) always rind at least once : project examples:menu-Based Game or App- Show menu at least once,survey Form-ask questions until user quits;
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
coonsole.log(part)
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

/* Spread operator: the spread operator(...) expands arrays or objects into individual elemnts */
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
  { name: "Pen", price: 50 },
  { name: "Bag", price: 1000 }
];

const tot = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total); // Output: 1350*/

/*
 const marks = [45, 88, 67, 92, 76];
    let mark=marks.reduce((sum,marks)=>{
      return sum+marks
    },0)
    console.log("Total: ",total) */


/*const cart = [
  { name: "Book", price: 300, quantity: 2 },
  { name: "Pen", price: 50, quantity: 4 },
  { name: "Bag", price: 1000, quantity: 1 }
];
const total = cart.reduce((sum, item) => sum+(item.price * item.quantity), 0);
console.log(`Total cost:1800`);*/

/*const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const basket= fruits.reduce((sum,fruits)=>{
  // if(fruits in sum){sum[fruits]+=1}else{sum[fruits]=1}return sum
  sum[fruits]=(sum[fruits]||0)+1;return sum;
},{});console.log(basket)*/

/* map keeps insertion order(useful for displaying in the same order). Can have keys of any type(objects, numbers, boolean... not just strings). Built-in .size property to get numbers of entries(instead of Object.keys().length) */

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const basket = fruits.reduce((map, fruit) => {
//   /* get current count or 0 if it doesn't exist yet */
//  const currentCount=map.get(fruit) || 0;
//   /* update the count */
//   map.set(fruit, currentCount + 1);
//   return map;                                     //pass amp  to next loop
// }, new Map());
// console.log(basket);

/*let basket = new Map();                         // this create an empty map*/
/*basket.set("apple", 3);                         // .set(key,value) _> stores key="apple",value=3 */
/*basket.get("apple"); // 3                       //.get(key)-> retrives the value for that key*/
/*basket.has("apple"); // true                    //.has(key)->checks if key exists*/








/* What is an Object- an object is a collection of key-value pairs that store related data and behavior *//*
const user = {
  name: "Divya",
  age: 25,
  isAdmin: true
};*/
/* accesing values */
/*console.log(user.name);     // Dot notation
console.log(user["age"]);   // Bracket notation
// adding/updating/Deleting
user.email="divya@example.com"
user.age = 20;                    // Update
delete user.isAdmin;              // Delete

// Looping through an object
for (let key in user) {
  console.log(key, user[key]);
}
// Methods inside objects -Objects can store function as values-> called methods
const user = {
  name: "Divya",
  greet: function() {
    console.log(`Hello, I am ${this.name}`);
  }
};

user.greet();

// Nested objects
const company = {
  name: "TechCorp",
  address: {
    city: "Bangalore",
    pincode: 560001
  }
};

console.log(company.address.city); // "Bangalore"
*/


/*const car = {
  name: "Toyota",
  model: "Camry",
  year: 2022,
  getDetails(){
    console.log(`${this.name} ${this.model} ${this.year}`)
  }
};
car.getDetails()
console.log(car.year=2024)
for(let key in car){
  console.log(key,car[key])
}*/

/*
function showDetails() {
  console.log(`${this.name} ${this.model} (${this.year})`);
}
const car1 = { name: "Toyota", model: "Camry", year: 2022, getDetails: showDetails };
const car2 = { name: "Honda", model: "Civic", year: 2023, getDetails: showDetails };
car1.getDetails(); // Toyota Camry (2022)
car2.getDetails(); // Honda Civic (2023)

// Same method works for multiple objects because of this.
*/


/*const student = {
  name: "Don",
  marks: [80,75,85],
  addMark:function(mark){this.marks.push(mark)},
  getAverage:function(){
    let sum=0;                                   
    for(let i=0;i<this.marks.length;i++){
      sum+=this.marks[i];
    }return sum/this.marks.length;
  }
};
// console.log("Average marks:", student.getAverage());
console.log(student.addMark(95))
// console.log("Average marks after adding:", student.getAverage());*/

/*const students = [
  {
    name: "Divya",
    marks: [80, 75, 85],
    getAverage: function() {
      let sum = 0;
      for (let mark of this.marks) {
        sum += mark;
      }
      return sum / this.marks.length;
    }
  },
  {
    name: "Rahul",
    marks: [90, 88, 95],
    getAverage: function() {
      let sum = 0;
      for (let mark of this.marks) {
        sum += mark;
      }
      return sum / this.marks.length;
    }
  },
  {
    name: "Priya",
    marks: [70, 68, 75],
    getAverage: function() {
      let sum = 0;
      for (let mark of this.marks) {
        sum += mark;
      }
      return sum / this.marks.length;
    }
  }
];
let topper = students[0];                                   // we assume th efirst student in the array is the topper for now. 
for (let student of students) {
  if (student.getAverage() > topper.getAverage()) {         //for each student we calculate their average using the getAverage() method, we compare it to current topper's average.if the current student average is greater they are the new topper
    topper = student;
  }
}
console.log(`Topper is ${topper.name} with average marks ${topper.getAverage()}`);*/

/*let bestSeller = products[0];
for (let product of products) {
  if (product.sales > bestSeller.sales) {
    bestSeller = product;
  }
}
console.log(`Bestseller: ${bestSeller.name}`);*/



// Object Destructuring and methods

/*const user = { name: "Divya", age: 25, city: "Chennai" };    //basic object destructuring

const { name, age } = user;

console.log(name, age);*/

/*const { name: userName, city: homeCity } = user;              //renaming variable while destructuring
console.log(userName, homeCity);
const { country = "India" } = user;                           //Default values
console.log(country);
function displayUser({ name, age }) {                         //destructuring in function paramrters
  console.log(`${name} is ${age} years old`);
}
displayUser(user);*/

/*
const car = {                                               //adding method to an object
  brand: "Toyota",
  year: 2022,
  getInfo() {
    return `${this.brand} - ${this.year}`;
  }
};
console.log(car.getInfo()); */

/*const student={
    name: "Priya",
    marks: [70, 68, 75],
    getAverage: function() {
      let sum = 0;
      for (let mark of this.marks) {
        sum += mark;
      }
      return sum / this.marks.length;
    }
}
const{name,getAverage}=student;
console.log(`student name: ${student.name}`);
console.log(`average marks:${student.getAverage()}`);*/

/*const students = [
  {
    name: "Priya",
    marks: [70, 68, 75],
    getAverage: function() {
      return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    }
  },
  {
    name: "Rahul",
    marks: [80, 90, 85],
    getAverage: function() {
      return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    }
  }
];
for (let student of students) {
  console.log(`${student.name} - Average: ${student.getAverage()}`);
}*/


// Object Destructuring
/*const user = { name: "Divya", age: 25, city: "Chennai" };
let name = user.name;
let age = user.age;
console.log(name, age);*/

/*const user = { name: "Divya", age: 25, city: "Chennai" };
const { name, age } = user;
console.log(name, age);*/

// Destructuring in a function
/*function displayUser({ name, city}) {      
  console.log(`User: ${name} from ${city}`);
}
const user = { name: "Divya", age: 25, city: "Kerala" };
displayUser(user);*/

//Method inside objects
/*const student = {
  name: "Priya",
  marks: [70, 68, 75],
  getAverage() {
    return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;  
  }
};
const { name, getAverage } = student;
console.log(`${name} - Average:${getAverage.call(student)}`);*/


/*const students ={
    name: "Priya",
    marks: [70,68,75],
    getAverage: function(){
      return this.marks.reduce((sum,m)=>sum+m,0)/this.marks.length;
    },
    getGrade:function(){
      const avg=this.getAverage();
      if(avg>=90){ return "A";}
      else if(avg>=75){ return "B";}
      else if(avg>=50){ return "C"}
      else {return "F"}
    }
  }
const { name, getAverage, getGrade } = students;
const avg = students.getAverage();
const grade = students.getGrade();
console.log(`student - ${name}`);
// console.log(`Average:${getAverage.call(students)}`)
// console.log(`Grade:${getGrade.call(students)}`)
console.log(`Average:${avg}`)        //using this we don't want to use call 
console.log(`Grade:${grade}`)*/

/*const students = [
  {
    name: "Priya",
    marks: [70, 68, 75],
    getAverage: function() {
      return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    },
    getGrade: function() {
      const avg = this.getAverage();
      if (avg >= 90) return "A";
      else if (avg >= 75) return "B";
      else if (avg >= 50) return "C";
      else return "F";
    }
  },
  {
    name: "Rahul",
    marks: [85, 90, 88],
    getAverage: function() {
      return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    },
    getGrade: function() {
      const avg = this.getAverage();
      if (avg >= 90) return "A";
      else if (avg >= 75) return "B";
      else if (avg >= 50) return "C";
      else return "F";
    }
  },
  {
    name: "Kiran",
    marks: [45, 55, 50],
    getAverage: function() {
      return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    },
    getGrade: function() {
      const avg = this.getAverage();
      if (avg >= 90) return "A";
      else if (avg >= 75) return "B";
      else if (avg >= 50) return "C";
      else return "F";
    }
  }
];
console.log("student Report Card:");
// students.forEach(s => {
//   console.log(`${s.name} - Average: ${s.getAverage()} - Grade: ${s.getGrade()}`);
// });

// students.forEach(({name,getAverage,getGrade}) => {
//   console.log(`${name} - Average: ${getAverage.call(students.find(s => s.name === name))} - Grade: ${getGrade.call(students.find(s => s.name === name))}`);
// });

students.forEach(({name,marks,getAverage,getGrade}) => {
    console.log(`${name} - Average: ${getAverage(marks)} - Grade: ${s.getGrade(marks)}`);
  });

// let topper = students[0];
// for (let student of students) {
//   if (student.getAverage() > topper.getAverage()) {
//     topper = student;
//   }
// }
let topper=students.reduce((best,current)=>current.getAverage()>best.getAverage()?current:best)
const { name: topperName, getAverage: topperAvg, getGrade: topperGrade } = topper;
console.log(`Topper: ${topper.name} with Average ${topper.getAverage()} & Grade ${topper.getGrade()}`);*/

/*const students = [
  { name: "Priya", marks: [70, 68, 75] },
  { name: "Rahul", marks: [85, 90, 88] },
  { name: "Kiran", marks: [45, 55, 50] }
];
const getAverage = marks => marks.reduce((sum, m) => sum + m, 0) / marks.length;
const getGrade = marks => {
  const avg = getAverage(marks);
  if (avg >= 90) return "A";
  else if (avg >= 75) return "B";
  else if (avg >= 50) return "C";
  else return "F";
};
console.log("Student Report Card:");
students.forEach(({ name, marks }) =>
  console.log(`${name} - Average: ${getAverage(marks)} - Grade: ${getGrade(marks)}`)
);
let topper=students.reduce((best,current)=>getAverage(current.marks)>getAverage(best.marks)?current:best)
console.log(`Topper: ${topper.name} with Average ${getAverage(topper.marks)} & Grade ${getGrade(topper.marks)}`);
*/



// Sorting students by average marks- we can use the sort() method on arrays. It compares two items at a time and decides their order.

/*const students = [
  { name: "Priya", marks: [70, 68, 75] },
  { name: "Rahul", marks: [85, 90, 88] },
  { name: "Kiran", marks: [45, 55, 50] }
];*/
// function getAverage(marks) {
//   return marks.reduce((sum, m) => sum + m, 0) / marks.length;
// }
/*students.sort((a,b)=>getAverage(b.marks)-getAverage(a.marks));  
console.log(students)
const topper = students[0];
console.log("Sorted by Average:");
students.forEach(s => {
  console.log(`${s.name} - Avg: ${getAverage(s.marks)}`);
});*/
/*const getAverage = marks => marks.reduce((sum, m) => sum + m, 0) / marks.length;
students.sort(({marks:m1},{marks:m2})=>getAverage(m2)-getAverage(m1))  
console.log("Sorted by Average:");
students.forEach(({ name, marks }) => {
  console.log(`${name} - Avg: ${getAverage(marks)}`);
});
const { name: topperName, marks: topperMarks } = students[0];
console.log(`Topper: ${topperName} - Avg: ${getAverage(topperMarks)}`);*/

/*const getAverage = m => m.reduce((sum, x) => sum + x, 0) / m.length;
const topper = students.reduce((best, curr) =>
  getAverage(curr.marks) > getAverage(best.marks) ? curr : best
);
console.log(`Topper: ${topper.name} - Avg: ${getAverage(topper.marks)}`);*/

/*let topper = students.reduce((best, current) => {
  const bestAvg = best.getAverage();
  const currAvg = current.getAverage();
  return currAvg > bestAvg ? current : best;
});*/




//this keyword - a function stored as a property inside an object.it allows the object to perform actions or calculatiote values using it's own data
/*const user = {
  name: "Divya",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
user.greet();  */


// const calculator = {
//   a: 5,
//   b: 3,
//   sum() {
//     return this.a + this.b;
//   },
//   multiply(){
//     return this.a * this.b;
//   }
// }
// console.log(calculator.sum()); 
// console.log(calculator.multiply()); 


//shorthand method syntax
// const obj = {                             //const obj={
//   greet: function() {                     //  greet(){
//     console.log("Hello");                 // console.log("Hello")
//   }
// };                                       // in this method we can write like this

//arrow function
/*const obj = {
  name: "Divya",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet();*/


//Object iteration in js

//1.using for...in loop - loops over all enumerable properties of an object
/*const user = {
  name: "Divya",
  age: 25,
  city: "Bangalore"
};
for (let key in user) {
  console.log(key, ":", user[key]);
}*/

// 2. Using Object.entries() - Return an array of keys, which you can loop over with .forEach() or for...of  
/*Object.keys(user).forEach(key => {
  console.log(key, ":", user[key]);
});*/

//3.using Object.entries()
/*for (const [key, value] of Object.entries(user)) {
  console.log(key, ":", value);
}*/

/*const book={
  title: "The Alchemist",
  author: "Paulo Coelho", 
  year: 1988
}
for (let key in book){
  console.log(key, ":", book[key]);
}
const keys = Object.keys(book);
keys.forEach(key => {
  console.log(key, ":", book[key]);
});
for (const [key, value] of Object.entries(book)) {
  console.log(key, ":", value);
}*/

/* usecase 
1.display data dynamically
const userProfile = {
  name: "Divya",
  email: "divya@example.com",
  age: 25
};
for(const[key,value] of Object.entries(userProfile)){console.log(`${key}:${value}`)}

2.form handling &validation
const formData = {
  username: "divya_dev",
  password: "12345",
  email: "divya@example.com"
};
Object.keys(formData).forEach(field=>{if(!formData[field]){console.log(`${field} is required`)}})

3.Filtering or Transforming Objects 
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true
};
const enabledSetting = Object.fromEntries(
  Object.entries(settings).filter(([key, value]) => value)
);
console.log(enabledSettings); 

4.Converting Object to arrays -many array methods like .map().filter() don't work directly on objects, so you convert the object to an array of entries or keys first
const scores = {
  Alice: 90,
  Bob: 75,
  Carol: 85
};

const scoreArray = Object.entries(scores);
scoreArray.forEach(([name, score]) => {
  console.log(`${name} scored ${score}`);
});

5.Debugging & Logging -> quickly inspect all keys and values inside an object dynamically without manually typing property names
*/

const user = {
  name: "Divya",
  age: 25,
  email: "divya@example.com",
  city: "Bangalore"
};
function displayUserInfo(userObj){
  for(const[key,value] of Object.entries(userObj)){
    console.log(`${key}:${value}`)
  }
}
displayUserInfo(user)

function listUserProperties(userObj){
 const keys=Object.keys(userObj);
    console.log("User properties:",keys.join(", "))
  }
listUserProperties(user)
