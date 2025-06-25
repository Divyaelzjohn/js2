// [].map()
// [].filter()
// [].reduce()

// const arr=[5,1,3,2,6]

//Double -[10,2,6,4,12]

//Triple - [15,3,6,18]

//Binary - ["101","1","11","10","110"]
/*
function double(x){
    return x*2
}

function triple(x){
    return x*3
}
*/
/*
function binary(x){
    return x.toString(2)
}
*/
/*const output = arr.map(double)
console.log(output)*/
/*const output=arr.map(triple)
console.log(output)*/
/*const output=arr.map(binary)
console.log(output)*/

/*
const output = arr.map(function binary(x){
    return x.toString(2)
})
console.log(output)
*/
/*
const output=arr.map((x)=> x.toString(2))
console.log(output)
*/


/* filter function */

// // const arr=[5,1,3,2,6]
/*
//filter odd values

function isOdd(x){
    return x%2
}
const output=arr.filter(isOdd)

console.log(output)
*/

// filter even values

/*const arr=[5,1,3,2,6]
function isEven(x){
    return x%2===0
}
const output=arr.filter(isEven)
console.log(output)
*/

/*
function greaterthan4(x){
    return x>4
}
const output=arr.filter(greaterthan4)
console.log(output)
*/
/*
const output=arr.filter(function greaterthan4(x){
    return x>4
})
console.log(output)
*/
// in arrow functioin
/*const output=arr.filter((x)=>x>4)
console.log(output)*/

// reduce function -reduce function basically used at a place where you have to take the elements of an array and come up with asingle value out of them

//sum or max 
/*
function findSum(arr){
  let sum=0
  for(let i=0;i<arr.length;i++){
      sum=sum+arr[i]
  }
  return sum
}
console.log(findSum(arr))
*/

// const output=arr.reduce(function(acc,curr){
  /* arr.reduce basically this function iterate over each and every element of an array 
  current[curr]->represent the values of the array[arr] and
  accumulator[acc] basically used to accumulate values or accumulate result what we have to
  ge out of those value present in an arrays
  curr->arr[i]
  acc->sum
  */
//  acc=acc+curr
//  return acc
// },0)
// console.log(output)


/* max value */
/*function findMax(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(findMax(arr))
*/
/* using reduce */
/*const output =arr.reduce(function(max,curr){
   if(curr>max){
        max=curr
    }
    return max
},0)
console.log(output)
*/



//map

const users =[
    { firstName:"akshy",lastName:"saini",age:26},
    { firstName:"donald",lastName:"trump",age:75},
    { firstName:"elon",lastName:"musk",age:50},
    { firstName:"deeoika",lastName:"padukone",age:26}
]

//list of full names
//["akshy saini","donald trump",....]
/*
const output=users.map(x=> x.firstName+" "+x.lastName)
console.log(output)
*/

//{ 26:2, 75:1, 50:1}
/*
const output=users.reduce(function(acc,curr){

if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age]
}
else{
    acc[curr.age]=1
}
    return acc
},{})
console.log(output)
*/


/* first name of user age <30 */
//["akshy","deepika"]
/* chain filter*/

/*const output=users.filter((x)=>x.age<30)
.map((x)=>x.firstName)
console.log(output)
*/

const output= users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstName)
    }
    return acc
},[])
console.log(output)
