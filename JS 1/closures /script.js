/*function x(){
  var a=7
  function y(){
      console.log(a)
  }
  y()
}
x()*/
/*
closure is a function bind together within lexical environment
function along with lexical scope forms a clousre
closure is combination of a function together with reference to its surrounding state
*/
/*
function x(){
  var a=7
  y()
}
x(function y(){
  console.log(a)
})
*/
/*
function x(){
  var a=7
  function y(){
    console.log(a)
  }
  return y
}
var z=x()             //retuen functin y
console.log(z)
z()*/
/* we can reuse */
/* funcion along with lexical scope bundle together forms a closure*/


/*function x(){
  var a=7
  function y(){
    console.log(a)
  }
  a=100
  return y                //it return function y and a=100
}
var z=x()
console.log(z)
z()
*/

function z(){
  var b=900
  function x(){
    var a=7
    function y(){
      console.log(a,b)       //closure(x),closure(y)
    }
    y()
  }
  x()
}
z()

/* common uses
-module design pattern 
-currying
-functions like once -function which can only run once 
-memoize 
-maintaining state in async world
-setaTime outes
-Iterators 
*/

/*  */