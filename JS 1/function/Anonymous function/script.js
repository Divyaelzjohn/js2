
/* what was first class function in javascript */
/* 
function statement 
function expression
function declaration
*/

// Function Statement are also known as function declaration
/* This is a function */
// a()  
/*function a(){
    console.log("a called")
}
a()                      //--function call*/
// Function expression
/*var b=function(){
    console.log("b called")
}
b()                         //--function call*/

/*diffrence between function statement and function expression */
//Hoisting
//in function statement we can call function before it is createdand in function expression we can call function before function created

// Function Declaration
/* also known as function statement */


// Anonymous function - That is a function without a name 
// it doesnt have their own identity where funcions used as values
// function(){
    
// }
/*anonymous function are used in a place where functions are used as a values*/

// Named Function Expression
/*
function a(){
    console.log("a called")
}
var b=function xyz(){               //this is known as name dfunction expression
    // console.log("b called")
    console.log(xyz)                //o/p - function
}
a()
b()
xyz()                               //there is an error
*/
/*  */
// Difference between Parameters & Arguments 
/*
function a(){
    console.log("a called")
}

var b=function(para1,para2){  // para1 and para2 local variable in the function
    console.log("b called")
}
a()
b(1,2)                        // this is argument
*/

// First CLass Function -- The ability to use functions as values is known as first classs functions
// the ability of functions to use theirs values and can be passed into argument to another function can be returned from the function this ability known  
// the ability of functions to use value that assigned to a variable and can be passed into another function and can be returned out of another function known as
// they are treated as a value passed into another function or return from the another function 
/*function a(){
    console.log("a called")
}

// var b=function(para1){
const b=function(para1){}
    return function(){
        
    }
}
console.log(b())
*/
// functions are first class citizens -


// Arrow Function 
