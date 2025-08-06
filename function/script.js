// // what is function -> is a set of instructions written in code to do something
// function greet(){
//   console.log("Hello!")
// }greet()

// /* function declaration -This is the basic way of creating a function
// function parameters and arguments-You can pass values into functions.Let's say You want to greet diffrent people */

// function greet(name){
//   console.log("hello"+name)
// }
// greet("Divya")
// greet("John")

// // return statement-> A function can give something back toyou.

// function add(a,b){
//   return a+b
// }
// let result=add(3,5)

// // function expression
// let greet=function(){
//   console.log("Hello there!")
// };
// greet()

// // Arrow Function

// const sayHi=()=>console.log("hi")
// sayHi();

// const square=x=>x*x
// console.log(4)

// // Default Parameteres

// function greet(name="gsus"){
//   console.log("Hello"+name)
// }
// greet()
// greet("Anna")

// // Rest parameter(...)
// function sum(...numbers){
//   let total=0;
//   for(let num of numbers){
//     total+=num
//   }
//   return total;
// }
// console.log(sum(1,2,3,4))

// // Anonymouse function 
// setTimeout saybye(){
//   console.log("3 seconds passed").3000;
// }

// // Callnacknction a functuin passed the another functioniiff-imediately involked function 
// // Recursion

// let i = 1;

// while (i <= 5) {
//   console.log("divya ");
//   i++;
// }

// const greet = (name = "Guest") => {
//   console.log(`Hello, ${name}`);
// };

// greet();        // Hello, Guest
// greet("Arya");  // Hello, Arya


// const user={name:"Divya",age:20}
// const {name,age}=user;

// console.log(name)
// console.log(age)


// const city="Kochi"
// const Welcome=()=>{
//   console.log("Welcome to Kochi!")
// }
// Welcome()

// const greet=(name="Guest")=>{
//   console.log("welcome")
// }

/*let fruits=["apple","banana","mango"]

fruits.forEach(function(fruit){
  console.log(fruit)
})
fruits.forEach(fruit=>console.log(fruit))*/




// forEach() lets you go through every item in an array

/*let names=["Divya","elz","John"]

names.forEach(function(name){
  console.log("Hello, "+name)             //output  ->Hello, Divya, ->Hello, Arya ->Hello, John
})

names.forEach(name=>console.log("Hello, "+name) 

forEach() does not return anything . It's just used to do something with each item(like showing , printing , etc)
*/





// map() -> make a new array->creates a new array by modifying eack item in the original array.

/*
let prices=[100,200,300];
let discounted=prices.map(price=>price-10)
console.log(discounted)
map() always returns a new array- The original array is untouched
*/

// filter() -> Pick item that match-=> creates a new array that only includes items that match a condition 
/*let ages=[16,21,17,30,15]
let adults= ages.filter(age=>age>=18)
console.log(adults)*/





//find()- find first match only  ->searches through the array and gives you the first item that matches.

// Syntax->const result=Array.find((item)=>condition)
// find()-> The find method returns the first element in an array that matches in an array that matches a condition 
/*let names=["Div","Elz,"Jon]
 let found=names.find(name=>name==="Div")
*/

/*const students = [
  { name: "Ann", score: 45 },
  { name: "Ben", score: 60 },
  { name: "Cara", score: 30 }
];
const result=students.find(student=>student.score>=50)
console.log(result)*/


// Filter search Box
/*
const searchBox=document.getElementById("searchBox");  //This line finds the <input> box using its ID ,searchBox is connected to your input filed
const nameItems=document.querySelectorAll("#nameList li"); //this gets all li items inside the list 

searchBox.addEventListener("input",()=>{      //if someone types anything into searchBox, run this function
  let searchTerm=searchBox.value.toLowerCase();     //reads what the user typed
  let count=0;

  nameItems.forEach(item=> {
    
    let name=item.textContent.toLoweCase();

    if(name.includes(searchTerm)){       
      item.style.display="block";
      count++;
    } else {
      item.style.display="none" 
    }
  });    //loop through each <li> item, get its text(e.g.,'Divya'->'divya'), check does 'divya' include 'div', if yes, show it, if not,hide it

  document.getElementById("matchCount").textContent=`Matches:${count}`;

  const noMatch = document.getElementById("noMatch");

  
  if (count === 0) {
    noMatch.style.display = "block"; // Show message
  } else {
    noMatch.style.display = "none";  // Hide message
  }
});*/



 //includes() is a method used to check if,  .A string contains a piece of text or an array contains a specific value  it returns either: true->if it found what you are looking for , false->if it did not find it
//  includes() method checks if a value exixsts in an array or a string , return true or false

/* let name="Divya";
console.log(name.includes("iv"))    //true
console.log(name.includes("z"))     //false

let fruits=["apple","banana","mango"]
console.log(fruits.includes("banana"))
console.log(fruits.includes("grape"))*/
/*
const fruits = ["Apple", "Banana", "Grape", "Pineapple", "Orange", "Mango"];
const input = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  suggestions.innerHTML = "";

  const filtered = fruits.filter(fruit =>
    fruit.toLowerCase().includes(query)
  );

  filtered.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    suggestions.appendChild(li);
  });
});
*/


// Destructuring-> take values frim array or object easily

// const colors=["red","blue","green"]
// const[a,b,c]=colors;
// console.log(a);
// console.log(b)
// console.log(c)

/* const person={ name:"Divya",age:22}; const {name,age}=person ; console.log(name); console.log(age) */
/* const items=["Pen","Pencil","earaser"] const {a,b,c}=items  console.log(a) console.log(b) conosle.log(c)*/



// Spread(...)-> spread elements of array or objects
/* spread in array->   const arr1=[1,2]; const arr2=[3,4]; const combined=[...arr1, ...arr2]; console.log(combined)  */
/* const obj1={a:1} const obj2={b:2} const merged={...obj1,...obj2}; console.log(merged) */
/* const u1={name:"Divya"} const u2={age:20} const combine={...u1,...u2} console.log(combine) */


// Rest(...) - collect remaining values
/* const[first,...others]=[10,20,30,40]; console.log(first);console.log(other);
in function->
function add(...num){return nums.reduce((total,n)=>total+n);} console.log(add(1,2,3)) */
/* const[x,...rest]=[1,2,3,4] console.log(x) console.log(rest) */



//reduce helps to add all numbers
/* [1,2,3].reduce((total, n)=>totsl+n)  1->total=1,n=2->1+2=3, total=3, n=3-> 3+3=6 */
/* Basic syntax->array.reduce(9accumulator,current)=>{return accumulator+current;},initialValue) */
// let total=nums.reduce((acc,num)=>acc+num,0)
// console.log(total)
// const nums=[5,10,15]
// const total=nums.reduce((acc,num)=>{
//   return acc+num;
// },0);
// console.log(total)




// Ternary Operator(condition?true:false)
/* let age=20; let message=age>=18?"adult":"Minor"; console.log(message) */

/* let mark=75; let result= (mark>50)?"pass":"false"*/

// function multiplyAll(...nums)
//   return nums.reduce((total, n)=>total*n, 1)    // starts with 1 and multiplys everything
// }
// console.log(multiplyAll(2,3))
// conosle.log(multiplyAll(2,3,4))
// console.log(multiplyAll())

/* Destructuring inside a loop */
// const students=[
//   {name:"abs",age:20},
//   {name:"cds",age:28},
//   {name:"efg",age:22}
// ]
// for(let{name,age} of students){
//   conosle.log(`${name} is ${age} years old.`);
// }

// let nums=[1,2,3];
/*let total=0;
for(let i=0;i<nums.length;i++){
  total=total+nums[i]
}
console.log(total)*/




/*const student1={
  name:"Div"'
  math:85,
  english:90,
  science:88
}

function generateReport({name,...subjects}){
  // console.log("Name:",name)
  // console.log("Subjects:",subjects)
  const marks=Object.values(subjects)
  const total=marks.reduce((sum,mark)=>sum+mark,0)
  const average=total/marks.length
  const result=average>=50?"Pass:"Fail"

  console.log(`${name} scored an average of ${average.toFixed(2)};${result}`)
}
generateReport(student1)
const student2={...student1,name:"Alex",math:40}
generateReport(student2)
*/


/*const cart=[
  {name:"Shoes",quantity:2,price:2000},
  {name:"T-Shirt",quantity:1,price:1000},
  {name:"Cap",quantity:3,price:300}
];

function calculateCart(...items){
  let total=items.reduce((sum,{quantity,price})=>{
    return sum+(quantity*price);
  },0);
  const discount=total>5000?0.1:0;
  const finalTotal=total-(total*discount);
  const discountText=dicount?"yes":"No"

  console.log("Your Cart:");
  items.forEach(({name,quantity,price})=>{
    console.log(`-${name}x${quantity}:${quantity*price}`);
  })
  console.log(`\nTotal:${total}`)
  console.log(`Discount Applied:${discountText}`);
  console.log(`Final Total:${finalTotal}`)
}
  const newCart=[...cart,{name:"Bag",quantity:1,price:1200}]
  calculateCart(...newCart)
*/

// const student={
//   name:"Alce",
//   marks:[60,70,80]
// }
// const {name,marks}=student;

// function studentReport(name,marks){

//   // Calculate total
//   const total=marks.reduce((sum,mark)=>sum+mark,0)
//   const average=total/marks.length;
//   const result=average>=40?"Pass":"Fail"
//   console.log("Student: ",name);
//   console.log("Marks",marks.join(","))
//   console.log("Total Marks: ",total)
//   console.log("Average:",average.toFixed(2))
//   console.log("result:",result)
// }
// // studentReport("John",78,82,90)
// studentReport({name:"Alice",marks:[60,70,80]})
// const student2={...student1}
// console.log(student2)

/*function calculateCartTotal(...prices){
  const total=prices.reduce((sum,price)=>sum+price,0)
  console.log("Cart Total:"+total)
}calculateCartTotal(199, 399, 149); */






// map()-Transform each value in an array ->map() is used to change each item in an array and give back a new array   
// const newArray= originalArray.map((item)=>{
//   return modifiedItem;
// })

/*const numbers = [10, 20, 30];
const updated = numbers.map((n) => n + 10);
console.log(updated);                           //output->[20,30,40]


const names=["Arathy","Avani","Ajin"]
const capital=names.map((n)=>n.toUpperCase())

console.log(capital)

const prices=[100,200,300]
const tax=prices.map((price)=>price+price*0.18)
console.log(tax)*/




// filter()-keep only matching values in an array  => filter() is used to keep only those items in an array that meet a condition. It remove  the rest .

/*const numbers=[30,80,20,100]
const result=numbers.filter((n)=>n>50);
console.log(result)


const names=["Alice","Bob","Anu","Divya"]
const filtered=names.filter(name=>name.startsWith("A"))
console.log(filtered)


const marks=[25,45,60,30,90];
const passing=marks.filter(mark=>mark>=35)
console.log(passing)*/

/*const products = [
  { name: "T-Shirt", price: 80 },
  { name: "Shoes", price: 150 },
  { name: "Bag", price: 90 },
  { name: "Watch", price: 200 }
];

const taxedProducts = products.map(item => {      
  return {
    ...item,
    price: item.price + item.price * 0.10
  };
});

const expensiveItems = taxedProducts.filter(item => item.price > 100);
console.log("Expensive products: ")
expensiveItems.forEach
(item=>{
  console.log(`${item.name}-${item.price}`)
})*/

/*-const students = [
  { name: "Alice", score: 44 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 48 },
  { name: "David", score: 30 }
];

const updatedStudent = students.map(student => {      
  return {
    ...student,
    score: student.score+5
  };
});

const passedStudents = updatedStudent.filter(student => student.score>=50);
console.log("Expensive products: ")

passedStudents.forEach
(student=>{
  console.log(`${student.name}-${student.score}`)
})*/




// sort()->is used to arrange elements of an array in order-either alphabetic or numerical , ascending or descending.

/*const nums=[10,5,20]
console.log(nums.sort((a,b)=>a-b))
console.log(nums.sort((a,b)=>b-a))*/



// every()- returns true only if every element passes the condition
/*const ages =[22,17,25]
const allAdults=ages.every(age=>age>18);
console.log(allAdults)*/


// some()- at least one passes=> returns true if any one element passes the condition

/*const scores=[30,45,40]
const hasPassed=scores.some(score=>score>=50)
console.log(hasPassed)*/

/*const orders = [
  {
    customer: "Alice",
    items: [
      { name: "Phone", price: 10000, delivered: true },
      { name: "Charger", price: 1500, delivered: true }
    ]
  },
  {
    customer: "Bob",
    items: [
      { name: "Laptop", price: 50000, delivered: true },
      { name: "Mouse", price: 2000, delivered: false }
    ]
  }
];
orders.forEach(order=>{
  const allDelivered=order.items.every(item=>item.delivered)
  const someNotDeliverd=order.items.some(item=>!item.delivered)

  const total=order.items.reduce((sum, item)=>sum+item.price, 0)

  if(allDelivered){
    console.log(`${order.customer}:All items delivered Total:${total}`)
  }else if(someNotDeliverd){
    console.log(`${order.customer}:Some items not deliverd Total:${total}`)
  }
})
*/


/*const students = [
  {
    name: "Rahul",
    assignments: [
      { title: "Maths", submitted: true },
      { title: "Science", submitted: true }
    ]
  },
  {
    name: "Divya",
    assignments: [
      { title: "English", submitted: true },
      { title: "History", submitted: false }
    ]
  }
];

students.forEach(student=>{
  const allSubmitted=student.assignments.every(assignments=>assignments.submitted)
  const someNotSubmitted=student.assignments.some(assignments=>!assignments.submitted)

  if(allSubmitted){
    console.log(`${student.name}:All assignments submitted`)
  }else if(someNotSubmitted){
    console.log(`${student.name}:Some assignments missing`)
  }
})*/




// find()->returns the first  element in an array that matches a condition
/*
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const user=users.find(u=>u.id===2)
console.log(user)

// findIndex()=>returns the index(position) of the first matching element

const numbers = [10, 20, 30, 40];
const index=numbers.findIndex(n=>n===30)
console.log(index)

*/






// SLICE ->non destucturing -> returns a copy of a portion of an array , withput changing the orginal array
/*const colors = ["red", "green", "blue", "yellow", "orange"];
const sliced = colors.slice(1, 4); // from index 1 to 3*/

// console.log(sliced); // ["green", "blue", "yellow"]
// console.log(colors); // original array stays same


// SPLICE -destructive => changes an array removing , replacing  , or adding elements at a certain index

/*const fruits = ["apple", "banana", "grape", "mango"];
fruits.splice(1, 2); // start at index 1, remove 2 items
console.log(fruits); // ["apple", "mango"]*/

/*
const fruits = ["apple", "banana", "grape", "mango"];
fruits.splice(1,1,"kiwi")
console.log(fruits)*/
/*
let shoppingList = ["Milk", "Bread", "Eggs", "Butter", "Juice"];        //holds our items

const listElement = document.getElementById("shopping-list");           //This line gets reference to the <ul id="shopping-list"> from the HTML page

function renderList(items) {                                  // this function shows a given list(items) on the page 
  listElement.innerHTML = "";                                 // clear the old list before adding the new one
  items.forEach((item, index) => {
    const li = document.createElement("li");                  // create li
    li.textContent = `${index}: ${item}`;                     // sets the text of the list item.
    listElement.appendChild(li);                              // Adds the <li> to the <ul> 
  });
}

function replaceItem() {
  const newItem = document.getElementById("newItem").value;                   //Gets the value the user typed in the input with id newItem
  const index = parseInt(document.getElementById("itemIndex").value);         //Gets the index value(postion) from the input field with id itemIndex, and converts into a number                               
  if (index >= 0 && index < shoppingList.length && newItem) {                 // the index is valid (not negative and within the list's size) and newItem is not empty
    shoppingList.splice(index, 1, newItem);                                   //replace 1 item at position index with the new item 
    renderList(shoppingList);
  }
}

function removeItem(){
  const index=parseInt(document.getElementById("itemIndex").value)            //Gets Index to remove from the input field.
  if(index >= 0 && index < shoppingList.length){                              //the index is valid 
    shoppingList.splice(index,1)                                              // removes 1 item at the given index
    renderList(shoppingList)
  }
}

function showTopItems(){
  const top3=shoppingList.slice(0,3);
  renderList(top3)
}
function showFullList(){
  renderList(shoppingList)
}
renderList(shoppingList)
*/





// reverse() -> reverse the order of elementa in the original array
/* display newitems first */

/*let fruits = ["Apple", "Banana", "Mango"];
fruits.reverse();
console.log(fruits)*/

// flat-> flattens nested arrays into a single array
/*
let nested = [1, 2, [3, 4], [5, [6]]];
console.log(nested.flat()); */


// flatMap() combines map()+flat(1)

/*let nums = [1, 2, 3];
let doubled = nums.flatMap(num => [num, num * 2]);

console.log(doubled);*/

// join()->combine all array elements into a single string  
/*  the join() method joins all elements of an array into a single string , seprated  by a separator (like comma, space , hyphen etc)*/

/*const fruits = ["Apple", "Banana", "Mango"];
// const result = fruits.join();                           // Default separator is comma
const result=fruits.join(" ")                              // space between items
console.log(result); */

// split -> method splits a string into an array using a separator
/*const data = "Apple,Banana,Mango";
const fruits = data.split(",");
console.log(fruits);*/


/*function reverseWords(){
  const input=document.getElementById("sentence").value;
  const words=input.split(" ");
  const reversed=words.reverse();
  const result=reversed.join(" ")
  document.getElementById("result").textContent=result
}*/


// trim() -> removes extra spaces from both ends of a string 

/*const messy=" Hello world! "
console.log(messy.trim())*/


// startsWith() ->checks if a string starts with a specific word or letter

/*const message="Javascript is fun"
console.log(message.startsWith("Java"))*/

// endsWith()-cheks if a string ends with a specific word or letter
/*const message = "Learn coding";
console.log(message.endsWith("coding"));*/

/*function checkName() {
  const input = document.getElementById("username").value;
  const trimmed = input.trim(); // removes extra spaces

  const startsWithA = trimmed.startsWith("A");
  const endsWithN = trimmed.endsWith("n");

  let message = `Cleaned name: ${trimmed} <br>`;

  if (startsWithA && endsWithN) {
    message += "Name starts with 'A' and ends with 'n'";
  } else {
    message += "Name does not match the criteria";
  }

  document.getElementById("result").innerHTML = message;
}*/
