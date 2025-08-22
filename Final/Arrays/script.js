// What is an array in JS? An Array is a special type of object used to store multiple values in a single variable. It can hold numbers, string, objects, functions or even other arrays(nested arrays).
/*let arr = [10, 20, 30, 40];   // numbers
let fruits = ["apple", "banana", "mango"]; // strings
let mixed = [1, "hello", true, {name: "Divya"}, [2, 3]]; // mixed types*/


// Creating arrays
/*let arr1 = []; // empty array
let arr2 = [1, 2, 3]; // with values
let arr3 = new Array(5); // creates an array of length 5 [empty slots]
let arr4 = Array.of(10, 20, 30); // [10, 20, 30]*/

// Accesing Elements
/*let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango
console.log(fruits.length); // 3*/

// Looping Over Arrays
// for loop
/*let nums = [10, 20, 30];
for(let i=0; i<nums.length; i++){
  console.log(nums[i]);
}*/

// for...of
/*for(let n of nums){
  console.log(n)}*/

// forEach()
/*nums.forEach((n, index) => {
  console.log(index, n);
});*/



// Common Array Methods

// A.Adding / Removing Elements
/*//-push()->add at end 
let arr=[1,2]
arr.push(3)
console.log(arr)
// pop()-> remove from end
arr.pop();console.log(arr)
// unshift()->add at begining 
arr.unshift(0);console.log(arr)
// shift()-> remove from begining
arr.shift();console.log(arr)*/

// B.Extracting/Modifying
/*// slice(start,end)-> extracts part of array (does NOT change orginal)
let fruits = ["apple", "banana", "mango", "grape"];
console.log(fruits.slice(1, 3)); // ["banana", "mango"]

// splice(start,deleteCount,items)->add/remove/replace
fruits.splice(1, 1, "orange"); 
console.log(fruits); // ["apple", "orange", "mango", "grape"]*/

/*// Iteration & Transform
// map()->creates new array with modified values
let numbers = [1, 2, 3];
let squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9]  

// filter()-> keeps only matching elements
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2]

// find()->finds the first matching element
let firstEven=numbers.find(n=>n%2===0);
console.log(firstEven)

// forEach()->loop through each item(no return)
numbers.forEach(n=>console.log(n))

// D.Reduction->reduce()->reduce array to single value
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10*/


// Advanced Methods- 
/*//  includes()-> check if value exists
let nums = [1, 2, 3, 4];
console.log(nums.includes(3))
// indexOf()/lastIndexOf() ->find position
console.log(nums.indexOf(2))
// sort()->sort array
let arr=[10,5,30];
arr.sort((a,b)=>a-b);console.log(arr)
// reverse()
arr.reverse();console.log(arr)
// flat()-?flatten nested arrays
let nested=[1,[2,3],[4,[5]]];console.log(nested.flat(2))*/


// Shopping cart (using push & splice)
/*let cart = [];
cart.push("Shoes");
cart.push("T-shirt");
console.log(cart); // ["Shoes", "T-shirt"]
cart.splice(cart.indexOf("Shoes"), 1); // remove Shoes
console.log(cart); // ["T-shirt"]

// Todo List(map, filter)
let todos = ["Study", "Exercise", "Code"];
// Mark completed = remove
todos = todos.filter(task => task !== "Exercise");
console.log(todos); // ["Study", "Code"]

// Sum of Expenses(reduce)
let expenses=[200,500,1000];let total=expenses.reduce((acc, x)=>acc+x,0);console.log("Total:",total)*/





// push()->Adds element's to the end of an array. Returns the new length of the array.
/*let cart = ["Shoes", "T-shirt"];
cart.push("Watch");
console.log(cart); // ["Shoes", "T-shirt", "Watch"]

let fruits = [];
cart.push("apple");
cart.push("banana");
cart.push("mango");

let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log(numbers); // [1, 2, 3, 4, 5]*/

// 2.pop()-> Removes the last element from an array. Returns the element that was removed.

/*let fruits = ["apple", "banana", "mango"];
let removedItem = fruits.pop();
console.log(fruits);       // ["apple", "banana"]
console.log(removedItem);  // "mango"

let cart = ["Shoes", "Watch", "T-shirt"];
console.log("Cart before:", cart);
let removed = cart.pop();
console.log("Removed:", removed); 
console.log("Cart after:", cart);*/

/*let numbers = [1,2,3,4,5];
let removed = numbers.pop();
console.log("Cart after:", numbers)

let cart = ["Laptop", "Mouse", "Keyboard"];let remove=cart.pop();console.log(cart)

let fruits = [1,2,3,4,5]; while(fruits.length>0){fruits.pop()}console.log(fruits)*/


// 3.unshift -> Adds elemnts to the beginning of an array. Returns the new length of the array
/*let fruits = ["banana", "mango"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "mango"]

let todos = ["Study", "Exercise"];
todos.unshift("Wake up");
console.log(todos); 
// ["Wake up", "Study", "Exercise"]

let queue = ["Person2", "Person3"];
queue.unshift("Person1");
console.log(queue); 
// ["Person1", "Person2", "Person3"]

let colors = ["Blue", "Green"];
colors.unshift("Red");
console.log(colors); 

let cart = ["Shoes", "Watch"];
cart.unshift("bag");
console.log(cart); */

/*// 4.Shift() -> Removes the first element from an array. Returns the elemnts that was removed
let fruits = ["banana", "mango","apple"];
fruits.shift();
console.log(fruits);

let todos = ["Study", "Exercise","Wake up"];
todos.shift();
console.log(todos); 

let queue = ["Person2","Person1", "Person3"];
queue.shift();
console.log(queue); 

let colors = ["Blue", "Green","Red"];
colors.shift();
console.log(colors); 

let cart = ["Shoes", "Watch","bag"];
cart.shift();
console.log(cart);

let queue = ["A", "B", "C", "D"];

while (queue.length > 0) {
  queue.shift();
}
console.log(queue); // []*/

// slice()->slice(start,end) is used to extract part of an array without changing the original array. start=index where extraction begins(inclusive). end=index where extraction stops(exclusive). Returns a new array.

/*let fruits = ["apple", "banana", "mango", "grape"];
let part = fruits.slice(1, 3);
console.log(part);    // ["banana", "mango"]
console.log(fruits);  // ["apple", "banana", "mango", "grape"]  (unchanged)

let nums = [10, 20, 30, 40, 50];
let sliced = nums.slice(2);
console.log(sliced); // [30, 40, 50]

let letters = ["A", "B", "C", "D", "E"];
console.log(letters.slice(-2)); // ["D", "E"]

let products = ["Laptop", "Phone", "Tablet", "Watch", "Camera"];
let page1 = products.slice(0, 2);
let page2 = products.slice(2, 4);
console.log("Page 1:", page1); // ["Laptop", "Phone"]
console.log("Page 2:", page2); // ["Tablet", "Watch"]

let original = [1, 2, 3];
let copy = original.slice();
console.log(copy);     // [1, 2, 3]
console.log(original); // [1, 2, 3]*/

/*let colors = ["Red", "Blue", "Green", "Yellow", "Black"];
let extracted=colors.slice(1,3);
console.log(extracted); 

let nums = [1, 2, 3, 4, 5];
let sliced = nums.slice(2);
console.log(sliced);

let names = ["Divya", "Arun", "Sneha", "John"];
let copy=names.slice();;
console.log(copy)*/


// splice() -> splice(start,deleteCount,...items) start->index to begin,deleteCount->number of items to remove, items->elements to insert(optional)

/*let fruits = ["apple", "banana", "mango", "grape"];
fruits.splice(1, 2);  
console.log(fruits); // ["apple", "grape"]

// insert elements
let colors = ["red", "blue", "green"];
colors.splice(1, 0, "yellow");  
console.log(colors); // ["red", "yellow", "blue", "green"] 

// Replace elements
let nums = [10, 20, 30, 40];
nums.splice(2, 1, 99);  
console.log(nums); // [10, 20, 99, 40]     // At index 2 , removed 1 item(30), added 99.

// Shopping Cart:Remove item by name

let cart = ["Shoes", "Watch", "T-shirt"];
let index = cart.indexOf("Watch");
if (index !== -1) {
  cart.splice(index, 1); // remove 1 item at that index
}
console.log(cart); // ["Shoes", "T-shirt"]

// Todo List:Replace task
let tasks=["Wake up","Study","Play"];
tasks.splice(1,1,"Exercise");
console.log(tasks)*/

/*let colors = ["red", "blue", "green", "yellow"];
colors.splice(2, 1); // start at index 2, remove 1 element
console.log(colors); 
// ["red", "blue", "yellow"]

let nums = [1, 2, 3, 4];
nums.splice(1, 1, 99);
console.log(nums);

let tasks = ["Eat", "Code", "Sleep"];
tasks.splice(1, 1, "Study");
console.log(tasks);*/




// map()-> creates a new array by applying a function to each element of the original array. It does not modify the original array.

/*let nums = [1, 2, 3, 4];
let squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9, 16]
console.log(nums);    // [1, 2, 3, 4] (unchanged)

let fruits = ["apple", "banana", "mango"];
let upperFruits = fruits.map(f => f.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "MANGO"]

// shopping Cart:Apply Discount
let prices = [100, 200, 300];
let discounted = prices.map(p => p * 0.9); // 10% off
console.log(discounted); // [90, 180, 270]

// Student Marks:Add Grace MArks
let marks = [40, 55, 70];
let newMarks = marks.map(m => m + 5);
console.log(newMarks); // [45, 60, 75]

// Extract specific Property
let users = [
  {name: "Divya", age: 22},
  {name: "Arun", age: 25},
  {name: "Sneha", age: 20}
];
let names = users.map(u => u.name);
console.log(names); // ["Divya", "Arun", "Sneha"]*/

/*let nums=[2, 4, 6, 8];
let newArr=nums.map(n=>n*n)
console.log(newArr)

let words = ["hello", "world"];
let newWord=words.map(w=>w.toUpperCase())
console.log(newWord)

let students = [{name:"A", marks:50}, {name:"B", marks:60}]
let stdName= students.map(s=>s.name)
console.log(stdName)*/


// filter()-> It creates a new array, Keeps only the elements that pass a condition(true/false test), Doesn't change original array.
// syntax
// array.filter((element, index,arr)=>{return condition;})
/*
let nums=[1,2,3,4,5,6];
let evens=nums.filter(n=>n%2===0);
console.log(evens);

let words=["hi","hello","world","js"];
let longWords=words.filter(w=>w.length>4);console.log(longWords)

let students = [
  { name: "A", marks: 30 },
  { name: "B", marks: 70 },
  { name: "C", marks: 80 }
];
let passed = students.filter(s => s.marks >= 50);
console.log(passed);
// [{name:"B", marks:70}, {name:"C", marks:80}]

let odds=nums.filter(n=>n%2!==0);
console.log(odds)

let cart=[
  { name: "A", price: 30 },
  { name: "B", price: 700 },
  { name: "C", price: 80 }
]
let price=cart.filter(n=>n.price<100)
console.log(price)*/


  // What is reduce()?-> reduce() reduces an array to a single value(like sum, product, total price etc).It takes a callback function an optional initial value.
  /*syntax
   array.reduce((accumulator, currentValue)=>{return something;},initialValue)
   accumulator-> stores the result as we go.
   currentValue->the current element in the array.
   initialValue->starting value(optional, but useful).*/

  /*let nums = [1, 2, 3, 4, 5];
  let sum = nums.reduce((acc, n) => acc + n, 0);
  console.log(sum); // 15*/

  /*let nums=[2,3,4];
  let product=nums.reduce((acc,n)=>acc*n,1);
  console.log(product)

  let cart=[
    { name: "Shoes", price: 1000 },
    { name: "Bag", price: 500 },
    { name: "Watch", price: 2000 }
  ];
  let total=cart.reduce((acc, item)=>acc+item.price,0)
  console.log(total)

  let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
  let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  console.log(count);
  // { apple: 3, banana: 2, orange: 1 }*/

  /*let nums = [1, 2, 1, 3, 2, 1, 4];
  let numbers=nums.reduce((acc,n)=>acc+n,0)
  console.log(numbers)

  let sentence = "code sleep code eat code sleep";
  let snet=sentence.split("").reduce((acc, word)=>acc+word.length,0);
  console.log(snet)

  let wordCount=sentence.split("").reduce((acc,word)=>{
    acc[word]=(acc[word]||0)+1;return acc;
  },{})
  console.log(wordCount)


    let students = [
    { name: "Divya", marks: 85 },
    { name: "Arun", marks: 40 },
    { name: "Sneha", marks: 72 },
    { name: "John", marks: 30 }
  ];
  let result=students.reduce((acc,s)=>{
    if(s.marks>=50){
      acc.pass++;
    }else{
      acc.fail++;
    }
    return acc;
  },{pass:0,fail:0})
  console.log(result)*/

  let students = [
    { name: "Divya", marks: 85 },
    { name: "Arun", marks: 40 },
    { name: "Sneha", marks: 72 },
    { name: "John", marks: 90 },
    { name: "Meera", marks: 65 },
    { name: "Ajay", marks: 20 }
  ];
  let grouped=students.reduce((acc,s)=>{
    let grade="";
    if(s.marks>=80)grade="A";
    else if(s.marks>=60) grade="B";
    else grade="C";
    acc[grade].push(s.name);return acc;
  },{A:[],B:[],C:[]})
  console.log(grouped)

