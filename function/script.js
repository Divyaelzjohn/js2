/* CLOSURE -> A closure is a function that remebers the variable from its outer function, even after the outer function has finished executing , In other words , if a function can access variable s from its outer scope , it is calleed closure.*/

// oru functionu athinte scopeinu purathulla variableine access cheyyan kazhiyumbol closure ennparayunnu

// closure is a function bind together within lexical environment
// function along with lexical scope forms a clousre
// closure is combination of a function together with reference to its surrounding state

// function outer(){
//   let count=0;
//   function inner(){
//     count++;
//     console.log(count)
//   }
//   return inner;
// }
// const counter=outer()
// counter()

// A promise and async await
/* PROMISE->Promise is a js object that represents the result of an asynchronus operation */
/* in js many task (like  fetching data from a server) data from a take time  */
// const promise=new Promise((resolve,reject)=>{
//   const success=true;
//   if(success){
//     resolve("Data loaded")
//   }else{
//     reject("Error occured")
//   }
// })


/*Promise.then((data)=>{
  console.log("Success",data)
})
.catch((error)=>{
  console.log("Failed",error)
})*/

// async function loadData(){
//   try{
//     const data=await Promise;
//     console.log("Success",data)
//   }catch(error){
//     console.log("Error",error)
//   }
// }

//a function is a block of code that does a specific task and runs only when you call it

/*function greet(){
  console.log("Hello!")
}
greet()*/

// function parameter and arguments -you can pass a values to functions using parameters

/*function greet(name){
  console.log("Hello"+name);
}
greet("Divya")*/

// Return statement

/*function add(a,b){
  return a+b;
}
let result=add(3,4)*/

// Function Expression -You can store a function in a variable

/*let sayHello=function(){
  console.log("Hello from function expression")
}
sayHello()*/

// Arrow Function
// const add=(a,b)=>a+b;
// console.log(add(5,2))

// Rest Parameters

/*function sum(...numbers){
  return numbers.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4))*/

// Anonymous function
// setTimeout(function(){
//   console.log("hello")
// },3000);


// Callback function -passing one function into another
/*function greet(name,callback){
  console.log("Hello"+name)
  callback()
}
function sayBye(){
  console.log("Goodbye!")
}
greet("Divya",sayBye)*/

// Closure - a function remembers variables from its outer scope

// Hoisted - function declarations are hoisted to the top of the code

// sayHi()
// function sayHi(){
//   console.log("Hi")
// }

// this keyword refers to diffrent objects depending on how it is used

/*function myDisplayer(some){
  document.getElementById("demo").innerHTML=some
}

let myPromise=new Promise(function(myResolve, myReject){
  let x=0;
  if(x==0){
  myResolve();
  }else{
  myReject()  
  }
})

myPromise.then(
  function(value){myDisplayer(value)},
  function(error){myDisplayer(error)}
)*/

// setTimeout(function(){
//   myFunction("I love you")
// },3000)

// function myFunction(value){
//   document.getElementById("demo").innerHTML=value
// }
/*
const fruits=[
  {name:"apples",quantity:300},
  {name:"bananas",quantity:500},
  {name:"oranges",quantity:200},
  {name:"Kiwi",quatity:150}
];

function myCallback({quantity}){
  return quantity>200?"ok":"low";
}

const result=Object.groupBy(fruits,myCallback)

let text="These fruits are ok:<br>";
for(let [x,y] of result.ok.entries()){
  text+=y.name+" "+y.quantity+" <br>"
}
text+="<br>Thses fruits are low:<br>"
for(let[x,y] of result.low.entries()){
  text+=y.name+" "+y.quantity+"<br>"
}
document.getElementById("demo").innerHTML=text*/


/*const frits=new Map([
  ["apples",500],
  ["bananas",300],
  ["oranges",200]
])
let numb=fruits.get("apples");
document.getElementById("demo").innerHTML="Thsere are"+numb+"apples."*/

/*
const ages=[32,33,16,40]
document.getElementById("demo").innerHTML=ages.filter(checkAdult);

function checkAdult(age){
  return age>=18;
}*/
