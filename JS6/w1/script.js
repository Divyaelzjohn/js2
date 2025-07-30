/*let name={
  firstname:"akshy",
  lastname:"Sachin",
  }
  printFullName=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" from"+hometown+" ,"+state);
    // name.printFullName()
  }
  printFullName.call(name,"Dehradun","Uttarakhand")
let name2={
  firstname:"asib",
  lastname:"tendu", 
}

// function borrowing

printFullName.call(name2,"Mubai","Maharashtra")

printFullName.apply(name2,["Mumbai","Maharashtra"])

// apply and call method in the call method passing argument in individually and apply method passing argument in list

// Bind method - gives copy of the same method

let printMyName=printFullName.bind(name2,"Mumbai","Maharashra")
console.log(printMyName);
printMyName();
*/


// Multiple statements group aaki single statement akkan block use cheyyunnath 

// var x=2;

// if(x%2==0){ 
//   console.log(x)
//   console.log("Even")
// }


// Closure

function x(){
  var a=10;
  function y(){
    console.log(a)
  }
  return y;
}
var result = x()
console.log(result)
result()

/* function along with its lexical 
scope closure is a function bind together its lexical environmet*/


// function statement = function declaration- way of writing function
a()
function a(){
  console.log("a called");
}

/* diffrence betwwen these2 hoisting */

// function expression - anonimous functuion-function withou name
b()
var b=function(){
  console.log("b called")
} 


// Diffrentce between argument and parameter

/* 
function sum(parameter1,parameter2){     //athine get cheyyan upayogikkunna identity ann parameter
  
} 
sum(1,2)  //pass avunna values aan argument */


// First class function - function argument aayi pass  oru function mattoru function return cheyyam   [oru function mattoru functione argument aayi pass cheyyan pattunnatho and athine return cheyyan pattunathum aaya function ability]

function abc(){

}
function xyz(){

}
xyz(abc)


// call back function - oru fun call cheythu athinakath mattoru function kudy pass chrythittund ahtine ann call back function enn parayunnath    [oru fun akath arg aayi pass avunna function aan callback function ]
// synchronus single thread languagil asynchronus ayyit js use chheyyan

/* 
setTimeout(()=>{
  console.log("timer")
},5000)

function x(y){
  console.log("x called")
  y()
}
x(function(){
  console.log(" Anon called")
})
*/

// Higher order function  - a function takes another function(s) as an argument(s)  and/or returns a function as a value

/* 
const radius=[2,4,6,8]


const area=(radius)=>{
  return Math.PI *radius[i]*radius[i]
}

const calculateDiameter=(radius)=>{
  const output=[]
  for(i=0;i<radius.length;i++){
    output.push(2*radius[i])
  }  
  return output
}
  console.log(calculateArea(radius))

  console.log(calculateDiameter(radius))
*/

