// rest
// spread operators
// Arrow function
// ForEach
// Map
// Filter
// Reduce
// Find
// Sort
// DOM Selectors
// ES10 Syntax

//---Spread operators----
/*
const globalPlayer={
    id:0,
    name:"Bot",
    powerLevel:100
};
const player1=globalPlayer

player1.powerLevel=50

console.log(player1)                    //o/p= powelevel both-50
console.log(globalPlayer)

// object arrays mutable ann

*/
// oru variable vere variablente ullil assign cheytha passbyreference 

/*
const myString="Rahul";
let player=myString;
player="Test";
console.log(player);                //o/p=Test,Rahul
console.log(myString);
*/
// string and integers are immutable -it is unchangable

/*
const globalPlayer={
    id:0,
    name:"Bot",
    powerLevel:100
};

const player1={...globalPlayer};      //using spread operator we can solve the 
// const player1=Object.assign({},globalPlayer)  //using object

player1.powerLevel=50;
console.log(player1)
console.log(globalPlayer)

*/
/*
const globalPlayer=["Rahul","Ajay","John"]
const globalPlayer1=["Ram","Don","Raj"]

// const player1=globalPlayer.concat(globalPlayer1)
// const player1=[...globalPlayer,...globalPlayer1]        //concatination using spread operator 
// const player1=[...globalPlayer]
// const player1=[...globalPlayer,"Test1"]    

console.log(player1)
// console.log(globalPlayer)
// console.log(globalPlayer1)
*/


// ---destructuring---

// const globalPlayer=["Rahul","Ajay","John"]
// // console.log(globalPlayer[0])

// const[first,second,third]=globalPlayer
// console.log(first)


/*using destructuring*/

// const globalPlayer={
//     id:0,
//     name:"Ajay",
//     age:20
// };
// const{name,id,age}=globalPlayer
// console.log(name,id,age)


// --rest--
// namk ippo id mathram mathy backi ullath kdy onnich vilikkunnathin ann fetch use cheyunnne

/*const globalPlayer={
    id:0,
    name:"Ajay",
    age:20
};
const{id,...rest}=globalPlayer
console.log(id)
console.log(rest)*/

// ---ArrowFunction------

/*function myFunc(){
    console.log("Running")
}
myFunc()
*/
// using arrow function

/*const myFunc=()=>{
    console.log("Running")
}
myFunc()*/

/*const myFunc=()=>console.log("Running")
myFunc()*/

// const myFunc=(value)=>value+5;
// const myFunc = value => value+5   // if an only one value we can write like this
// console.log(myFunc(5))

/* ---ForEach--- */

// const globalPlayer=[
//     {
//         id:0,
//         name:"Ajay",
//         age:20
//     },
//     {
//         id:1,
//         name:"Rahul",
//         age:25
//     },
//     {
//         id:2,
//         name:"John",
//         age:20
//     }
// ]

/*for(let i=0;i<globalPlayer.length;i++){
    console.log(globalPlayer[i])
}*/

// globalPlayer.forEach(function(value,index,array){
//     // console.log(value.name)
//     // console.log(index)
//     console.log(array)
// })

/* forEach use 3 methods value index array */

// for each function using arrow function

/*globalPlayer.forEach((value,indexed,array)=>{
    console.log(value.name)
})*/

// array function in one line

// globalPlayer.forEach((value,index,array)=>console.log(value.name))


/* ---map--- */

/*const globalPlayer=[
    {
        id:0,
        name:"Ajay",
        age:20
    },
    {
        id:1,
        name:"Rahul",
        age:35
    },
    {
        id:2,
        name:"John",
        age:20
    }
]*/
// const newArray=globalPlayer.map((value)=>value.age)

// // const newArray=[]
// // for(let i=0;i<globalPlayer.length;i++){
// //     newArray.push(globalPlayer[i].name)
// // }

// console.log(newArray)

/* ---filter--- */

// const newArray=globalPlayer.filter((value)=>value.age===20&& value.id==1)
// console.log(newArray)

/* reduce */

// const globalPlayer=[
//     {
//         id:0,
//         name:"Arun",
//         age:20
//     },
//     {
//         id:1,
//         name:"John",
//         age:21
//     },{
//         id:1,
//         name:"John",
//         age:20
//     }
// ]
// const numberArray=[15,10,20,5,50,66,88]

/*
let total=0
for(let i=0;i<numberArray.length;i++){
    // total=total+numberArray[i]
    total+=numberArray[i]
}*/
// ---reduce uses total,value,array,index
// const newArray=numberArray.reduce((total,value)=>total+value,0)
//using the 0 for total=0 we assign in the first
// console.log(newArray)

/* ---find--- */

// const globalPlayer=[
//     {
//         id:0,
//         name:"Ajay",
//         age:20
//     },
//     {
//         id:1,
//         name:"Rahul",
//         age:25
//     },
//     {
//         id:2,
//         name:"John",
//         age:20
//     }
// ]
// // return only one object

// const newObj=globalPlayer.find((value=>value.name==="Rahul"))
// console.log(newObj)

/* ---sort--- */

/*const globalPlayer=[
    {
        id:0,
        name:"Ajay",
        age:20
    },
    {
        id:1,
        name:"Rahul",
        age:25
    },
    {
        id:2,
        name:"John",
        age:20
    }
]*/

// const numberArray=[15,10,20,5,50,66,88]

// // numberArray.sort()                       //it only check left side of the number
// // to avoid that problem using this
// // const sortedNumber=numberArray.sort((a,b)=>a-b)
// const sortedNumber=numberArray.sort((a,b)=>b-a)

// console.log(numberArray)

/* ---flat--- */
// using flat function we can acccess one array

// const numberArray=[15,10,[20,5]]
// console.log(numberArray.flat())

// const numberArray=[15,10,[20,5],50,[66,88,[50,60,[88,99]]]]
// console.log(numberArray.flat(Infinity))               //using this we can access more than one nested array

// const globalPlayer={
//         id:1,
//         name:"Ajay",
//         age:20,
//         company:{
//             comp_name:"Google"
//         },
    // };

// console.log(globalPlayer.company.comp_name)  //it is an error
/*
if(globalPlayer && globalPlayer.company && globalPlayer.company.comp_name){
    console.log(globalPlayer.company.comp_name)
}*/
//write this code in simpleway  --- mit is called chaining in javascript
/*
if(globalPlayer?.company?.comp_name){
    console.log(globalPlayer.company.comp_name)
}
*/

// if(globalPlayer.company.comp_name){
//     console.log(globalPlayer.company.comp_name)              //it is an error condition
// }

// const numberArray=[15,10,20,5,60,80,90,100,12,14,20]

// const newArray=numberArray.map((value)=>value)

// const newArray=numberArray
//     .map((value)=>value)
//     .filter(data=>data>15)
//     .sort((a,b)=>a-b)
//     .reduce((total,value)=>total+value,0)

// console.log(newArray)


// document.getElementById("header").innerHTML="Hello"

// document.querySelector("#header").innerHTML="HI"        //we can access id using #, and we can access class using .
// document.querySelector(".header").style.color='red'

// document.querySelectorAll(".header").style.color="red"   //we give [0] enna mathr eith work avathulllu 

// const header=document.querySelectorAll('.header')
// header.forEach((data)=>(data.style.color="red"))

/*   */