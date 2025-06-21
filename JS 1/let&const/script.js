/* 
let and const declarations are hoisted there are hoisted very diffrently than the variable declaration

*/
// console.log(b)
/*let a=10
console.log(a)
var b=100*/
/* a cannot access before initialisation*/
/* Temporal deadlines
--  is the time since when the let variable is hoisted and till it is initialize value the time between that 
*/

// console.log("kjhg")
// let a=10
// console.log(a)
// var b=100           
// var b=100

// const b                  //syntax error --no duplicate declaration  
// b=1000

/*const b=1000            //type error -- 
b=10000                  
a=10

console.log(a)*/

/* 
reference error- when js trying to findout  a specific variable inside the memmory place and you can;t access it
syntax error--no duplicate declarations
reference error -- value  was never placed in the memmory 
*/

// it is the example of Temporal deadlines
// console.log(a)
// console.log(y)              //it is example of reference error
/*let a=1900
const b=100
a=10
console.log(a)*/

/* priorities--
1-const
2-let
3-var
*/







/*
what is a block in js
*/
// { 
//     //block is also known as compound statement
//     var a=10
//     console.log(a)
// }
// if(true) true                      //syntax error


// if (true){
//     var a=10
//     console.log(a)
// }

/* single statement */
// if(true) console.log("mnbvgbhn")


/* block scope-what all variables and functions we can access inside the block*/
/*var a=100
{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)          //10
*/
// console.log(b)       //b is not defined
// console.log(c)
/* a shadows variable of a */
/*  
let c=100
{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(c)
*/

// const c=100
// function x(){
//     const c=30
//     console.log(c)
// }
// console.log(c)

/* illegal shadowing */
// let a=20
// {
//     let a=20        //we can shadow like this
// }

// let a=20
// {
//     var a=20         //we cant show like this   and this is called illegal shadowing
// }


// let a=20
// function x(){
//     var a=20          //this is not a illegal shadowing
// }


const a=20
{
    const a=100
    {
        const a=200
        // console.log(a)
    }
    console.log(a)
}
// console.log(a)
/* block scopes also follow lexical scope*/