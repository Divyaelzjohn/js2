/* variables: var , let ,const -used to store data
DataTypes - Javascript has primitive (number,string,Boolean,Null,undefined,Symbol ) and reference types (object)
Operators- Arithmetic,Assignment, Comparison, Logical
Comments- //,li
Console
strict Mode -For Cleaner, error-free code ,2.Template Literals-Easier string formatting -- `Hello ${name}` 3.typeof & type Conversion typeof(42);typeof("42") 4.Falsy & Truthy values -Falsy:false,0,"",null,undefined,NaN 4.Ternary Operator-Short if-else  (condition)?true:False 6.nullish Coalescing operator(??) ->Fallback only if null or undefined (username??"Guest") 7.Optional Chaning(?.)- Avoids error when accessing deep prperties eg.let user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // "Alice"
console.log(user?.address?.city); // undefined (no error) 
8.spread Operator(...)-copy merge arrays/objects. 9.Destructuring->Extract values from arrays/objects easily
10.Function in All forms -Normal->function greet(name){return `Hello, ${name}`}  -Anonymous ->let sayHi=function(name){return `Hi , $${name}`}  -Arrow Function->let add=(a,b)=>a+b; -Default parameter->function multiple(a,b=2){return a*b}  11.Arrays 7 Object Shortcuts 12.Loop variable-> -for...of(arrays)->for(let fruit of fruits)console.log(fruit)  -for...in(objects)->for(let key i person) console.log(key,person[key])  -While loop-> let i=0,while(i<3){console.log(i)li++}  13.Short-circuit Evaluation 14.Math & Data basics  15.error Handling */


/* control flow-control flow decides "Which code runs, and  when" in your program. It's like the trafic lights for your js- green=g0, Yellow=choose , red=stop.  
A.Conditionals- Thses let you run code only if a condition is true
1.if  , 2.if...else, 3.if...else if...else , 4.switch-Good for checking one value against many options 
B.Loops-Loops repeat code until a condition changes
1.for-run code a set numbers of times, 2.while-Runs while conditions is true, 3.do...while->runs at least once, then checks conditionration , continues loop, 4.for...of-loop over arrays or iterable items, 5.for...in-.loop over object properties 
C.Break & Continue-Used inside loops 1.break-stops loop immediately.2.continue-Skips the current item
*/

/*let balance=5000;
let pin=1234;
let attemptsLeft=3

function checkPIN(){
  let enteredPIN=Number(document.getElementById("pinInput").value);

  if(enteredPIN===pin){
    document.getElementById("loginSection").style.display="none";
    document.getElementById("menuSection").style.display="block";
    document.getElementById("output").innerHTML="PIN correct. Welcome!";
  }else{
    attemptsLeft--;
    document.getElementById("attempts").innerHTML=`Wrong Pin!${attemptsLeft} attempts left.`;
    if(attemptsLeft===0){
      document.getElementById("output").innerHTML=`Card blocked!`;
      document.getElementById("pinInput").disabled= true;
    }
  }
}
function checkBalance(){
  document.getElementById("output").innerHTML=`Your balance is:${balance}`;
}
function deposit(){
  let amount=Number(prompt("Enter deposite amount:"))
  if(amount<=0){
    document.getElementById("output").innerHTML=`Invalid amount!`;
    return;
  }
  balance+=amount;
  document.getElementById("output").innerHTML=`${amount} deposite. New balance:${balance}`;
}

function withdraw(){
  let amount=Number(prompt("Enter deposit amount"));
  if(amount.balance){
    document.getElementById("output").innerHTML=`Not enough balance!`;
    return;
  }
  balance-=amount;
  document.getElementById("output").innerHTML=`${amount} withdrawn. New balance:${balance}`;
}
function exitATM(){
  document.getElementById("menuSection").style.display="none";
  document.getElementById("output").innerHTML=`Thank you for using our ATM!`;
}*/






// Functions->
/* 1.Function Declaration-his is the classic way to write a function.-can be used before it's defined(hoisted - meaning you can call them above theor definition.).Starts with th Function keyword, reusable ,readable
eg.. sayhello();function saHello(){console.log("Hellofrom a function declaration!")}sayHello();
simple-interst calculateor->function calculaeSimpleIntersr(principal,rate,time){return(principal*rate*time)/100;}console.log(calculateSimpleInterest(1000,5,2))
*/
/*.2Function Expression-Here the function is Stored in a variable, Not hoisted(must be defined before use). A function expression is when we create a function and assign it to variable.  1.not Hoisted,2. Anonumous or Named ,3.Used as Data    eg.const greetUser=function(){console.log("Hellofrom a function expression!")}greetUser();   
Random Quote Generator -*/
/*const getRandomQuote = function() {
  const quotes = [
      "Believe you can and you're halfway there.",
      "Don't watch the clock; do what it does. Keep going.",
      "The future depends on what you do today."
  ];
  let randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomIndex]);
};
getRandomQuote();*/
//Square & Cube Calculator
/*const squre=function(num){return num*num;};const cube=function(num){return num*num*num;};console.log(squre(4));console.log(cube(3))*/
// timer     
/*const startTimer = function(seconds) {
  let counter = seconds;
  const interval = setInterval(function() {
    console.log(counter);
    counter--;
    if (counter < 0) {
      clearInterval(interval);
      console.log("Time's up!");
    }
  }, 1000);
};
startTimer(5);*/

 /*3.ArrowFunctions-a shorter way to write functions,-Does not have it's own this or arguments . Great for short callbacks , An arrow function is a shorter way to write a function , introduced in ES6(2015). It uses the => syntax     

 -shorter Syntax->less typing compared to function keyword,2.implicit return ->if the bofy has only one statement, you can skip {} and return.3.No this Binding->it inherit this from its surrounding scope(important for event handlers and objects). 4.No argumnets Object-> You can't use arguments inside arrow functions.*/
//  const greet=()=>console.log("Hello from arrow function!");greet();
// const add=(a,b)=>a+b;console.log(add(5,3))
/*const doubleNumbers=(numbers)=>numbers.map(num=>num*2);console.log(doubleNumbers([1,2,3])) 
const countTodos=(todos)=>todos.filter(todo=>!todo.done).length;
const myTodos=[{task:"Buy milk",done:false},{task:"Study Js",done:true},{task:"Go for walk",done:false}];console.log(`Pending tasks:${countTodos(myTodos)}`)*/
// Random Color Generator
// const getRandomColor=()=>{const hex=Math.floor(Math.random()*1677777215).toString(16);return `#${hex}`};console.log(getRandomColor())

/*4.Parameters& Arguments -parameters=variables listed in the function definition, Arguments=actual values passedd when calling the function. 
function createGreeting(name,occasion){console.log(`Dear ${name},wishing you a wonderful ${occasion}!`)}createGreeting("Divya","Birthday");createGreeting("John","Anniversary")
function calculateTotal(price,quantity){return price*quantity;} console.log(`Total:${calculateTotal(50,3)}`)
*/

/*5.Return Values-Function can send back a value using return.
function convertToUSD(inr){const rate=0.012;return inr*rate}let usdAmount=convertToUSD(1000);console.log(`$${usdAmount.toFixed(2)}`);
function calculateGrade(marks){if(marks>=90) return"A";if(marks>=75) return "B";if(marks>=50) return "C";return "F";}console.log(calculateGrade(85));console.log(calculateGrade(45));
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(findMax(10, 20)); // 20
*/

/*6.Default Parameters - if no argument is given , use a default value.
function calculatePrice(price,discount=10){let finalPrice=price-(price*(discount/100));return finalPrice}console.log(calculatePrice(1000));console.log(calculatePrice(1000,20))

// Travel ticket price
function getTicketPrice(destination, price=500){
  console.log(`Ticket to ${destination} cost ${price}`)
} getTicketPrice("Delhi");getTicketPrice("Goa",1200)

// Email Generator
function generateEmail(name,domain="gmail.com"){return `${name}@${domain}`} console.log(generateEmail("divya"));console.log(generateEmail("John","yaho.come")) 
 */


/*7.rest Parameters-Lets you handle an unlimited number of aruguments , rest parameter allow a function to accept any number of arguments as an array.It uses the ... syntax before the parameter name.  
eg-function showNumbers(...nums) {
    console.log(nums);
}
showNumbers(1, 2, 3, 4); 
//parameters and rest parameter
function intro(firstName,...hobbies){console.log(`Name:${firstName}`);console.log(`Hobbies:${hobbies.join(", ")}`)} intro("Divya","Reading","Coding","Traveling");
*/
// Shopping cart Total
/*function cartTotal(...prices){return  prices.reduce((total,price)=>total+price,0)};console.log(cartTotal(100,250,50,30)) */
// Average score Calculator
/*function averageScore(...scores){let total=scores.reduce((sum,score)=>sum+score,0);return(total/scores.length).toFixed(2)}console.log(averageScore(85,90,78,92))*/      
// dynamic Greeting 
/*function greetPeople(greeting,...names){names.forEach(name=>console.log(`${greeting},${name}!`))}greetPeople("Hello","Divya","John","Sara")*/

/*8.Closures-A closure happens when a function remenbers variables from it's outer scope even after that outer function done.A closure happens when a function remembers variables from its outer scope even agter the outer functionhas finished running .
function outer(){let outerVar="I am outside!"; function inner(){console.log(outerVar)}return innerFunction;}
function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const myCounter = counter();
myCounter(); 
myCounter(); 
myCounter(); 
*/

//Bank Account
/*  
function createAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ₹${amount}, Balance: ₹${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrew: ₹${amount}, Balance: ₹${balance}`);
      }
    },
    checkBalance() {
      console.log(`Balance: ₹${balance}`);
    }
  };
}
const myAccount = createAccount(1000);
myAccount.deposit(500);   // ₹1500
myAccount.withdraw(300);  // ₹1200
myAccount.checkBalance(); // ₹1200
*/

// Quiz Score keeper
/*function createScoreKeeper() {
  let score = 0;
  return function(points) {
    score += points;
    console.log(`Score: ${score}`);
  };
}
const player1Score = createScoreKeeper();
player1Score(10); // Score: 10
player1Score(5);  // Score: 15
*/

// ID Generator
/*function createIDGenerator(start=1){let id=start;return function(){return id++;}}
const generateID=createIDGenerator(1000);console.log(generateID());console.log(generateID());console.log(generateID())*/

/*function createTodoApp() {
  let tasks = [];
  function listTasks() {
      const ul = document.getElementById("taskList");
      ul.innerHTML = "";
      tasks.forEach((task, index) => {
          const li = document.createElement("li");
          li.innerHTML = `${task.done ? "✔️" : "❌"} ${task.text}
              <button onclick="markDone(${index})">Done</button>
              <button onclick="deleteTask(${index})">Delete</button>`;
          ul.appendChild(li);
      });
  }
  const add = function(taskText = "Untitled Task") { 
      tasks.push({ text: taskText, done: false });
      listTasks();
  };
  const mark = (index) => {
      tasks[index].done = true;
      listTasks();
  };
  const del = (index) => {
      tasks.splice(index, 1);
      listTasks();
  };
  const addMultiple = (...taskArray) => {
      taskArray.forEach(task => tasks.push({ text: task, done: false }));
      listTasks();
  };
  return {
      add,
      mark,
      del,
      listTasks,
      addMultiple
  };
}
const myTodo = createTodoApp();
function addTask() {
  const input = document.getElementById("taskInput");
  myTodo.add(input.value); 
  input.value = "";
}
function markDone(index) {
  myTodo.mark(index);
}
function deleteTask(index) {
  myTodo.del(index);
}
myTodo.addMultiple("Learn JS Functions", "Practice Closures", "Build Todo App");*/


