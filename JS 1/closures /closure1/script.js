/*function x(){
  var i=1
  setTimeout(function(){
    console.log(i)
  },3000)                           //it output come after 3 seconds
  console.log("Hello JavaScript")   //java script does't wait anyone
}
x()*/

/*
function x(){
  for(var i=1;i<=5;i++){
    setTimeout(function(){
      console.log(i)
    },i*1000)
  }
  console.log("Hello Java Script")
}
x()
*/

/*function x(){
  for (let i=1;i<=5;i++){
    setTimeout (function(){
      console.log(i)
    },i*1000)
  }
  console.log("Hello JS")
}
x()*/
/* let is a block scope that create new copy of every time the loop is executed
block scope means each and every time loop iteration
whenever evry time loop runs i is the new variable all together it is new copy of i all together
*/

/*using closure*/
/*with out using let*/
function x(){
  for(var i=1;i<=5;i++){
    function close(x){
      setTimeout(function(){
        console.log(x)
      },x*1000)
    }
    close(i)
  }
  console.log("Hello JavaScript")
}
x()

/* examples of clousure */

/* function along with reference to its outer environment like together forms are closure
closure is a combination of a function and its lexical scope bundled together forms a closure 
its like each and every function in javascript has access to its outer lexical environment 
that means like access to variables and functions which is present in the enviroment of its parents
so it has each and every function access to them so even when the function is like executed in some 
other scope not in a original scope but even if is executed in other scope 
it still remembers its outer lexical environment here it was originally prsented in
the code */

/*function outer(){
  var a=10
  function inner(){
    console.log(a)
  }
  return inner
}
// outer()()             // it is calling the inner functions

var close= outer()        //it both have same mean
close()
*/
/*  */

/*function outer(){
  function inner(){
    console.log(a)
  }
  var a=10
  return inner
}
var close=outer()
close()*/

//it will still form a closure
/* the inner function forms a closure with a outside environment and
not a particular sequence where it is present in the code*/

//what happends when var change into let

/*function outer(){
  function inner(){
    console.log(a)
  }
  let a=10
  return inner
}
var close =outer()
close()*/

/* a variable has a block scope here we cant access a outside but it behaves the same way*/

//if a parameter b 

/*function outer(b){
  function inner(){
    console.log(a,b)
  }
  let a=10
  return inner
}
var close=outer("Hello World")
close()*/

/* in this case it behave the same way
this happends because function forms a closure with inner outer envirnment
and b is a also part of a outer environment of inner function
and also b is treated in the same way and it forms a inner forms closure with b also
*/

/* what if your outer function is nested inside the function,what will happend then*/
/* the outer function is like present like nested insidelike one more function it will again form a closure with 
the environment of that function also*/
// example

/*function outest(){
  var c=20
  function outer(b){
    function inner(){
      console.log(a,b,c)
    }
    let a=10
    return inner
  }
  return outer
}
var close =(outest())("Helloworlkd")      //so when this outest is called it returns the outer function , and helloworld call the parameter
close()*/

/* what if had a global variable with a  conflict name*/

/*function outest(){
  var c=20
  function outer(b){
    function inner(){
      console.log(a,b,c)
    }
    // let a=10           //when we didn't have this line yet it print 100
    return inner
  }
  return outer
}
let a=100               // when this line is note here ir print a reference error
var close=(outest())("Hello world")
close()
*/

/* this inner functon forms a closure with a
let a is completely new variable in the global scope
so these two variable are completely diffrent variables
what will happen is this will form a closure with outer and
 it still print only 10*/

/* advantage of closure */
/* closure is very useful and closure is the most beautiful part in javascript and closure has a lot of advantages
it is used in module pattern , it is used in function curry, it helps in data encapsulation and data hidding that is really very important
*/

/* data hidding and encapsulation */
/* data hidding  is like suppose we have a variable and we want to like have some data privacy over it so that like 
other functions or other pieces of codes cant have access to particular data so that is known as dat hidding
we can encapsulate data so that other functions or other part of program cant access it
*/
//example

// var counter=0                     //any one can access this code
// function incrementCounter(){
//   counter++
// }

/*
function counter(){                   //using closure no one can access counter
  var count=0
  return function incrementCounter(){   //using return we can remove the error
    count++
    console.log(count)
  }
}
// console.log(count)                    //console.log cant access the count
var counter1=counter()
counter1()                               //using this we can access counter, and the count is hidden
counter1()                               //o/p=1,2

// if we add counter 2

var counter2=counter()                   //o/p==1,2,1,2,3,4
counter2()
counter2()
counter2()
counter2()*/


//to decrease code use constructor

/*function Counter(){
  var count=0
  this.incrementCounter = function incrementCounter(){
    count++
    console.log(count)
  }
  this.decrementCounter = function(){
    count--
    console.log(count)
  }
}
var counter1=new Counter()                    //it is a constructor variable so use new keyword here
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()
counter1.decrementCounter()*/

// disadvantage of closure
/* there could be over consumptions of memmory it consumes of a lot of memmory
some times that close over variables are not garbage collector*/

// garbage collector
/* freeze up unutalized memmory*/

// relation between garbage collector and closure

// function a(){
//   var x=0
//   return function b(){
//     console.log(x)
//   }
// }
// var y=a()
// y()

// /* smart garbage colection mechanism*/
// // example
// function a(){
//   var x=0,z=10                           
//   return function b(){
//     console.log(x)
//   }
// }
// var y=a()
// y()