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

  /*let students = [
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
  console.log(grouped)*/


  // let students = [
  //   { name: "Divya", marks: 85 },
  //   { name: "Arun", marks: 40 },
  //   { name: "Sneha", marks: 72 },
  //   { name: "John", marks: 30 },
  //   { name: "Meera", marks: 65 },
  //   { name: "Ajay", marks: 90 }
  // ];
  // let A=students.filter(s=>s.marks>=80).map(s=>s.marks);
  // let B=students.filter(s=>s.marks>=60 && s.marks<80).map(s=>s.marks);
  // let C=students.filter(s=>s.marks<60).map(s=>s.marks);
  // console.log({A,B,C})

  /*let grouped=students.reduce((acc,s)=>{
    let grade="";
    if(s.marks>=80) grade="A";
    else if(s.marks>=60) grade="B";
    else grade="C";

    acc[grade].push(s.marks);
    return acc;
  },{A:[],B:[],C:[]});
  console.log(grouped)*/
  
 /* let grouped = students.reduce((acc, s) => {
    let grade = "";
    if (s.marks >= 80) grade = "A";
    else if (s.marks >= 60) grade = "B";
    else grade = "C";
    acc[grade].push(s);  // push whole object {name, marks}
    return acc;
  }, { A: [], B: [], C: [] });
  console.log(grouped);*/
  






// Ternary Operator -> it's short way to write an if...else. condition?valueTrue:valueFalse;

/*let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // Odd


let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult

let person = { name: "Divya", age: 16 };
let canVote = (person.age >= 18) ? "Yes" : "No";
console.log(`${person.name} can vote? ${canVote}`);

let marks = 72;
let grade = (marks >= 80) ? "A" :
            (marks >= 60) ? "B" :
            (marks >= 40) ? "C" : "Fail";
console.log(grade); // B*/

/*let num=-1;
let result=(num>0)?"Positive":
           (num<0)?"Negative":
           "Zero:";
console.log(result)

let mark = 40;
let status = (mark >= 50) ? "Pass" : "Fail";
console.log(status); // Fail*/


/*let students = [
  { name: "Divya", marks: 85 },
  { name: "Arun", marks: 40 },
  { name: "Sneha", marks: 72 },
  { name: "John", marks: 30 }
];

let results=students.map(s=>({
  name:s.name,
  result:(s.marks>=50)?"Pass":"Fail"
}))
console.log(results)*/



// find()->used ti find the first element in an array that matches a condition. It stops searching once it finds the first match.

/*let numbers = [1, 3, 5, 6, 8];
let firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 6 (first even number found)


let users = [
  { id: 1, name: "Divya" },
  { id: 2, name: "Arun" },
  { id: 3, name: "Sneha" }
];
let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Arun" }
*/


// forEach()->Loops through every element in the array.
/*let numbers=[1,2,3,4];
numbers.forEach(n=>console.log(n*2))

let cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 }
];
cart.forEach(product=>{
  console.log(`${product.item}:${product.price}`)
})*/



/*// 1. Find first age >= 18
let ages = [15, 22, 17, 19, 14];
let age = ages.find(n => n >= 18);  //use "n" instead of "age"
console.log(age); // 22

// 2. Find first student who failed
let students = [
  { name: "Divya", marks: 85 },
  { name: "Arun", marks: 40 },
  { name: "Sneha", marks: 72 },
  { name: "John", marks: 30 }
];
let std = students.find(n => n.marks < 50);
console.log(std); // { name: "Arun", marks: 40 }

// 3. Find fruit starting with "m"
let items = ["apple", "banana", "mango", "orange"];
let fruit = items.find(n => n.startsWith("m")); 
console.log(fruit); // "mango"

// 4. Multiply each number by 3 using forEach
let nums = [2, 4, 6, 8];
nums.forEach(n => console.log(n * 3)); // use "n", not "nums"

// 5. Print cart items
let cart = [
  { item: "Shirt", price: 500 },
  { item: "Shoes", price: 1200 },
  { item: "Watch", price: 800 }
];
cart.forEach(product => {
  console.log(`${product.item} → ₹${product.price}`); // formatted
});

// 6. Print languages
let languages = ["JavaScript", "Python", "C++", "Java"];
languages.forEach(n => {
  console.log(`I am learning ${n}`); // use backticks `` instead of ""
});*/




// Use when you want to searchand return the first matching Element.

// forEach() -> Use when you want to loop and perform an action
// todo-print tasks

/*let todos=[
  {id:1,task:"LearnJS", done:true},
  {id:2,task:"Practice coding",done:false},
  {id:3,task:"Drink Water",done:false}
]
// let pending=todos.find(t=>!t.done);
// console.log(pending)
todos.forEach(t => console.log(`${t.id}. ${t.task} : ${t.done}`));

// E-commerce-Find a product
let products=[
  {id:1,name:"Laptop",price:60000},
  {id:2,name:"Phone",price:30000},
  {id:3, name:"Watch",price:5000}
];
let cheap=products.find(p=>p.price<10000);
console.log(cheap)


let cart = [
  { item: "Shirt", price: 500 },
  { item: "Shoes", price: 1200 },
  { item: "Watch", price: 800 }
];
cart.forEach(c=>console.log(`${c.item}:${c.price}`))
let total=cart.reduce((acc, c)=>acc+c.price,0);
console.log("Total: "+total)*/

/*let user = [
  { id: 1, profile: { name: "Divya", active: true } },
  { id: 2, profile: { name: "Arun", active: false } },
  { id: 3, profile: { name: "Sneha", active: true } }
];
let result = user.find(p => p.profile.active === false);
console.log(result); // {id: 2, profile: {name:"Arun", active:false}}

let words = ["apple", "grape", "banana", "strawberry", "kiwi"];
let word = words.find(w => w.length > 5);
console.log(word); // banana 


let students = [
  { name: "Ravi", marks: 40, age: 17 },
  { name: "Priya", marks: 60, age: 18 },
  { name: "Akhil", marks: 55, age: 19 }
];
let student = students.find(s => s.marks >= 50 && s.age < 19);
console.log(student); // {name: "Priya", marks: 60, age: 18}

let nums = [5, 10, 15, 20];
let sum = 0;
nums.forEach(n => sum += n);
console.log(sum); // 50 


let names = ["Alex", "Arun", "Sneha"];
names.forEach(n => {
  // Capitalize only first letter
  console.log(n[0].toUpperCase() + n.slice(1).toLowerCase());
});
// Alex, Arun, Sneha 


let cart = [
  { item: "Bag", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 1500 }
];
// Print with 10% discount
cart.forEach(n => {
  console.log(`${n.item} → ₹${n.price * 0.9}`);
});*/
/*
Bag → ₹900
Shoes → ₹1800
Watch → ₹1350
*/


// Mini Project: Shopping Cart Search+bill

/*let cart = [
  { item: "Shirt", price: 800, quantity: 2 },
  { item: "Shoes", price: 2000, quantity: 1 },
  { item: "Watch", price: 1500, quantity: 1 },
  { item: "Bag", price: 1200, quantity: 3 }
];
console.log("Cart Items:");
cart.forEach(product => {
  console.log(`${product.item} → ₹${product.price} × ${product.quantity}`);
});

let searchItem = "Watch";
let found = cart.find(p => p.item === searchItem);
if (found) {
  console.log(`\n Found: ${found.item} → ₹${found.price}`);
} else {
  console.log(`\n ${searchItem} not found in cart`);
}

let total = 0;
cart.forEach(p => total += p.price * p.quantity);
console.log(`\n Total Bill = ₹${total}`);*/


/*// Includes()-> check if a value exists in an array .Return true or false
let nums=[1,2,3,4,5];
console.log(nums.includes(3));
console.log(nums.includes(10));

// IndexOF()/lastIndexOf->find position of a value ->returnsindex(position).Returns -1 if not found
let fruits = ["apple", "banana", "mango", "banana"];
console.log(fruits.indexOf("banana"));     // 1 (first occurrence)
console.log(fruits.lastIndexOf("banana")); // 3 (last occurrence)

// sort()->sort array ->By default sorts as string order(even numbers).For numbers,pass a function(a,b)=>a-b.
let numbers = [40, 10, 30, 20];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [10, 20, 30, 40]
numbers.sort((a, b) => b - a); // descending
console.log(numbers); // [40, 30, 20, 10]

// reverse() -> reverse order of array
let arr=[1,2,3,4];arr.reverse();console.log(arr)

// flat()->flatten nested arrays->Flattens nested arrays into one. Argument=depth of flattening.

let nested=[1,[2,3],[4,[5,6]]];
console.log(nested.flat());
console.log(nested.flat(2))*/

// includes()->checks if an array contains a specific value. Return true or false. Case-sensitive("Apple"≠"apple)

/*let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("grape")); // false*/


  // shopping app
 /* let cart = ["Shoes", "Watch", "Bag"];
  let item = "Watch";
  if(cart.includes(item)){
    console.log("Item already in cart!");
  } else {
    cart.push(item);
    console.log("Item added:", cart);
  }*/

  /*let color=["blue","green","yellow","red","black"];
  if(color.includes("red")){
    console.log("Yes, red is available")
  }else{
    console.log("No, red is not here")
  }

  let num=[5,8,10,15,20];if(num.includes(10)){console.log("Number found")}else{console.log("Number is not find")}

  let user=["arun","Alex","Joy","Rose"];if(user.includes("Alex")){console.log("Welcome Alex")}else{console.log("User is not found")}*/

  /*let products = ["Laptop", "Phone", "Tablet", "Headphones", "Camera"];
  function searchProduct(item) {
    if(products.includes(item)) {
      console.log(`${item} is available `);
    } else {
      console.log(`${item} is not found `);
    }
  }

  searchProduct("Phone");   // Phone is available 
  searchProduct("Watch");   // Watch is not found */



  /*// indexOf(value) -> finds the first position(index) of the given value. If not found, it returns -1
let colors = ["red", "green", "blue", "green"];
console.log(colors.indexOf("green"));   // 1 (first "green")
console.log(colors.indexOf("yellow"));  // -1 (not found)
console.log(colors.lastIndexOf("green"))

let fruits=["apple","banana","mango","banana","orange"];
console.log(fruits.indexOf("banana"));console.log(fruits.indexOf("banana"));

let num=[10,20,30,40,20,50];console.log(num.indexOf(20));console.log(num.lastIndexOf(20))*/

// Shopping cart item check -> Imagin you have a cart where a user may accidentally add the same product multiple times.

/*// Check if "Shoes" exists
let cart = ["Shirt", "Shoes", "Watch", "Shoes", "Bag"];
// Check if "Shoes" exists
if (cart.indexOf("Shoes") !== -1) {
  console.log("Shoes is in the cart at position:", cart.indexOf("Shoes"));
  console.log("Last Shoes found at position:", cart.lastIndexOf("Shoes"));
} else {
  console.log(" Shoes is not in the cart");
}
// Add new item only if it doesn't exist
let newItem = "Watch";
if (cart.indexOf(newItem) === -1) {
  cart.push(newItem);
  console.log(`${newItem} added to cart`);
} else {
  console.log(`${newItem} already exists in cart!`);
}

console.log(" Final Cart:", cart);*/


/*let cart = ["Joy", "Alex", "Bella", "Rose", "Bob","Bella"];
if (cart.indexOf("Bella") !== -1) {
  console.log("Bella", cart.indexOf("Bella"));
} else {
  console.log(" Bella is not in the names");
}
console.log("Last Bella:",cart.lastIndexOf("Bella"));*/


/*// sort() -> By default, sort() sorts strings alphabetically.
let fruits = ["banana", "apple", "orange", "grape"];
fruits.sort();
console.log(fruits); 
// ["apple", "banana", "grape", "orange"]

let num = [50, 10, 40, 20, 30];
num.sort((a, b) => a - b); // Ascending
console.log(num); // [10, 20, 30, 40, 50]

num.sort((a, b) => b - a); // Descending
console.log(num); // [50, 40, 30, 20, 10]

let name = ["Rose", "Alex", "Joy", "Bella"];
console.log(name.sort()); 
// ["Alex", "Bella", "Joy", "Rose"]

let cart = [
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 1500 },
  { item: "Bag", price: 1000 },
  { item: "Shirt", price: 800 }
];
cart.sort((a, b) => a.price - b.price);
console.log("Low → High:", cart);

// Sort by price (high → low)
cart.sort((a, b) => b.price - a.price);
console.log("High → Low:", cart);*/



// reverse()? It reverse the order of elements in the array. It changes(mutates) the original array

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); 

let names = ["Alex", "Bella", "Joy", "Rose"];
names.reverse();
console.log(names); 
// ["Rose", "Joy", "Bella", "Alex"]


let word = "hello";
let reversed = word.split("").reverse().join("");
console.log(reversed); 
// "olleh"

