//Function is a block of code

/*
function myFunc(){
    let a=5
    // console.log(a)
    myFuncTwo()
    return a
}

function myFuncTwo(){
    // let a=10
    // let b=15
    // let c=a+b
    // return c
    console.log("Completed")
}
function myFuncThree(){
    let a=5;
    myFuncTwo()
    return a
}
// myFunc()
// console.log(myFuncTwo())
// myFuncTwo()
console.log(myFunc())
console.log(myFuncThree())
 */


//passing parameter

// function myFunc(z){
//     let a=5;
//     let b=z
//     let c=a+b
//     return c
// }

// console.log(myFunc(10))

/* Arrow function */

// myFunc=(c)=>{
//     return c
// }

// myFunc=c=>c
// console.log(myFunc(10))


/* objects --has key and value*/

/*let user={
    firstName:"John",
    lastName:"Doe",
    age:45
};
console.log(user.firstName)*/

/* Array */

// let myArray=["h","ds"]
// console.log(myArray)
// console.log(myArray[1])


/* Methods */

//String method
/*let a="Debug M M"

console.log(a.length)
console.log(a.indexOf("b"))     //to check value in index
console.log(a.lastIndexOf("M"))
console.log(a.search('M'))
console.log(a.includes('Debug'))  //value indekil true allekil false
console.log(a.slice(2,5))    
console.log(a.slice(-4))
*/

//NUmber Method
/*
let a='15';
let b=10;

console.log(typeof parseInt(a))    //parse int used to convert string into number 
console.log(b.toString())   //convert integer to string
*/

//Array methods
/*
let myArray=["C","B","A"];
// myArray[0]="D"          //change cheyyan
// myArray.unshift('D')    //Add value in first of an array
// myArray.shift()         // to remove first eement in an array
// myArray.push('H')       //Add new
// myArray.pop()           // to remove
// console.log(myArray.length)

////// splice -- we can add or remove elements any position
// myArray.splice(0,1)       //to remove items  --(starting,ending)
// myArray.splice(3,0,"D","E")
// console.log(myArray)   

// let newArray=myArray.slice(1);      //using slice in array we can acces value want we want
// console.log(newArray);
// myArray.sort()
myArray.reverse()
console.log(myArray)
*/

// ObjectMethod

/*let myObj={
    firstName:"John",
    lastName:"Doe",
}


myObj.firstName="Jacob"
delete myObj.firstName;
console.log(myObj)
*/

// if
/*let johnAge=23
if(johnAge==45){
    console.log("You are old")
}else if(johnAge<=30&&johnAge>=20){
    console.log("You  are about to be old")
}
else{
    console.log("You are too young")
}
*/

// Switch
/*
let fruits ="Banana"
switch(fruits){
    case "Apple":
        console.log("I bought Apple");
        break;
    case "Banana":
        console.log("I bought Banana");
        break;
    default:
        console.log("No fruits found")
}*/


//loops

/* for loop */
// let count=10
// for(i=1;i<=10;i++){
//     console.log(i)
// }

/* while loop */
// let count=0
// while(count<=10){
//     console.log(count)
//     count++
// }

/* dowhile */
// do{
//     console.log(count);
//     count++;
// }while(count<=10)


// using for loop how to print array and objects 

/*
let myArray=["John","Doe","Jacob"];

for(let i=0;i<myArray.length;i++){
    document.write(myArray[i]+"<br>")
}
*/

// for of loop

/*let myArray=["John","Doe","Jacob"]
for(let x of myArray){
    document.write(x+"<br>")
}*/

// Object in an array 

/*let myObj={
    firstName:"John",
    lastName:"Doe",
    age:45
}

for(let x in myObj){
    document.write(myObj[x]+"<br>")
}*/

// events

let btn=document.getElementById('btn')

// function onAlert(){
//     alert("You have clicked the button");
// }
// // onAlert()

/*addEventListener("click",function(){
    this.alert("Clicked")
})
*/

addEventListener("click",myFunc)
function myFunc(){
    alert("Clicked")
}
/*  */

