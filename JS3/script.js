/* Javascript is a language of the browser
-direct execution
-script language
-it runs on the client and on the sever aswell
-client side validation 
DOM manipulation
 */

// document.getElementById('header').innerHTML="Hello";
// document.getElementsByClassName('header')[0].innerHTML="World"
// document.getElementsByTagName('h1')[0].innerHTML="Today"

// document.getElementById('header').style.color="blue";
// document.getElementById('header').style.fontSize="30px";
// document.getElementById('header').style.backgroundColor="black"
// document.getElementById('header').style.display='block'

/* Variables - used to hold a value */
/* var-global scope, let and const is block scope */

// var test=document.getElementById('header')
// test.innerHTML="Hello"
// test.style.color="red"
// test.style.fontSize="15px"

// var test="Debug";
// console.log(test)
// document.getElementById("header").innerHTML=test

//arithemetic operator
/* var a,b,c;
a=10;
b=15;
c=a+b
// c++
c=c+1
c+=1
console.log('a='+a);
console.log('b='+b);
console.log('c='+c)
*/

// let

// var a=10;
// a=6;           //var piinetum declare cheyyan pattum
// var a=89
/*
let a=10;
a=6;
a=89            //let a declare once oru pravishyam declare cheythitt pinne a value change cheyyam 2 times let use cheyyanda karyam illa
console.log(a)

const b=40
console.log(b)      //const value marulla declare cehhyumbo thanne value kodukkanm

 const score="John"
 console.log(score)
*/

//Data Types
/*
let name="John"                 //string
let age=45;                     //number
let myArray=[]                  //object
let myString= null              //null  o/p-object
let error =undefined            //undefined
let err

console.log(typeof name)
console.log(typeof age)
console.log(typeof myArray)
console.log(typeof myString)
console.log(typeof error)
console.log(typeof err)
*/


/*diffrenece between undefined and not defined
variable declare cheyth value onnum assign cheythillenkil undefined
pakshe aganathe variable declare cheyyand vilikumbo notdefined
*/

//comparison operators
// let a=5
// let b=5
// console.log(a==b)

/* = assign
   == compare values
   === compare value and datatypes
*/

/*
let a=5
let b=5
console.log(a===b)
*/

//Loical Operator
/*
let a=5
let b=10
console.log(a==5 || b==10)
console.log(a>2 && b>2)
let value =true
console.log(!value)
*/


//Conditional or ternary operator
let x=5
let y = x==5 ? 10:x
/* let y= x!=5? true:false */
console.log(y)

