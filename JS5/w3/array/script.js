/*const arr=[10,20,30]
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}*/

// find maximum

/*const number=[5,6,2,9,1,7]
let max=number[0]

for (let i=1;i<number.length;i++){
  if(number[i]>max){
    max=number[i]
  }
}
console.log("Max: ",max)*/

// sum of array elements

/*const nums=[1,2,3,4]
let sum=0;
for(let i=0;i<nums.length;i++){
  sum+=nums[i]
}
console.log("Sum: ",sum)*/

/* reverse the array  */
/*const arra=[10,20,30,40]
for(let i=arra.length-1;i>=0;i--){
  console.log(arr[i])
}*/

// count even numbers

/*const numbers=[2,3,6,9,12,13];
let evenCount=0;
for(let i=0;i<numbers.length;i++){
  if(numbers[i]%2===0){
    evenCount++;
  }
}
console.log("Even numbers count:",evenCount)*/

// remove duplictes
/*const array=[1,,2,2,3,4,4]
const unique=[]

for (let i=0;i<array.length;i++){
  if(!unique.includes(array[i])){
    unique.push(array[i])
  }
}
console.log(unique)*/

// find second largest number

/*const arrr=[10,40,30,20];
let max=-Infinity;
let second=-Infinity;

for(let i=0;i<arrr.length;i++){
  if(arrr[i]>max){
    second=max;
    max=arrr[i]
  }else if(arrr[i]>second && arrr[i]!==max){
    second=arr[i]
  }
}
console.log("second largest: ",second)*/

// Find the minimum number

/*const arr=[8,3,9,1,7];
let min=arr[0]

for(let i=1;i<arr.length;i++){
  if(arr[i]<min){
    min=arr[i]
  }
}
console.log("Min: ",min)*/


// count positive and negative number

/*const arr=[3,-1,5,-7,0,2]

let positive=0;
let negative=0;

for(let i=0;i<arr.length;i++){
  if(arr[i]>0){
    positive++;
  }else if(arr[i]<0){
    negative++
  }
}
console.log("Positive:",positive,"Negative:",negative)*/

/*const arr=[4,7,9,2,5];
const target=9;

for(let i=0;i<arr.length;i++){
  if(arr[i]===target){
    console.log("Index of",target,"is",i);
    break;
  }
}
*/

// count how many times a number apperars

/*const arr=[1,2,2,3,2,4]
const target=2;
let count=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]===target){
    count++;
  }
}
console.log(target,"appears",count,"times")*/
