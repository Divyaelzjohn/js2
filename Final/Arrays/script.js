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


