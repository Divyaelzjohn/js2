//function work and variable environment
/*
var x=1
a()
b()
console.log(x)

function a(){
    var x=10
    console.log(x)
}
function b(){
    var x=100
    console.log(x)
}*/


/* this===window   //0/p::true  */
/* */

/* anything which not inside  of the any function  is the global space*/

/*var a=10
function b(){
    var x=10
}
console.log(window.a)
console.log(a)
console.log(this.a)*/

/*
var a=7           //undefined

console.log(a)    //Not-undefined*/
/*
var a
a=10
console.log(a)
if(a===undefined){
    console.log("a is undefined")
}
else{
    console.log( "a is not undefined")
}*/
/* Javascript is loosly type language
dosn't attached to any variable and datatype
it also konwn as weekly type language
*/ 

// var a
// console.log(a)
// a=10
// console.log(a)
// a="Hello world"
// console.log(a)
 
// a=undefined--is wrong
// console.log(a)

/* Scope in javascript */
/*function a(){
    // console.log(b)
    var b=10
    c()
    function c(){
        // console.log(b)
    }
}
// var b=10
a()
console.log(b)*/

/* scope means where you can access variable and function in a code
scope is related to lexical environment
lexical environment->hierrchy where is the specific code present physically inside the code*/

function a(){
    var b=10
    c()
    function c(){
        console.log(b)
    }
}
a()

