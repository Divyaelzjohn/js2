// Arrow function->There' another very simple and concise syntax for creating syntax functions, that's often better than Function Expressions.It's called "arrow function",because it look like this                       let func=function(arg1,arg2,...,argN){ return expression }                                     this creates a function that accepts arguments arg1...argN , then evaluvates the expression on the right side with their  ue and returns its result.     

// Clousre
/*
a function remebers variables from it's outer scope , even after the outer function has finished 
 */

function counter(){
  let count=0;
  return function(){
    count++;
    console.log(count)
  }
}
const increment=counter()
increment()
increment()

// Promise
// used for handiling asynchronus operation like API calls  
const fetchData=new Promise((resolve, reject)=>{
  setTimeout(()=>resolve("Date loaded"),1000);
})
fetchData.then(data=>console.log(data))

// Async/await
/* a clear way to write async code using promise */
async function getData(){
  const response=await fetch('https://api.example.com/data')
  const data=await response.json()
  console.log(data)
}

// The event Loop 
console.log("Start")
setTimeout(()=> console.log("Inside setTimeout"),0)
console.log('End')

// Modules
/* break code into pieces using import and export */

export function add(a,b){
  return a+b;
}

import{add} from './math.js';
console.log(add(2,3
))

// Destucturing ->extract values from objects or arrays easily

const person={name:"John",age:30}
const {name,age}=person

// spread and Rest Operators

const nums=[1,2,3]
const moreNums=[...nums, 4,5]

function sum(...numbers){
  return numbers.reduce((a,b)=>a+b,0)
}