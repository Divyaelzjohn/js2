// const myArray=[10,20,30]
// console.log(myArray);
// console.log(myArray[0])
// myArray[0]=99;
// console.log(myArray)
/*
const myArray=[
  10,
  20,
  30
]
console.log(myArray)

console.log(myArray[1]);
myArray[0]=99;
console.log(myArray)

const arr=[1,'hello',true,{name:'socks'},[1,2]]
console.log(typeof[1,2])
console.log(Array.isArray([1,2]))

myArray.push(100);
console.log(myArray)

myArray.splice(0, 1)
console.log(myArray)
*/

/*
let i=1;
while(i<=5){
  console.log(i);
  i+=1;
}

for(let i=1; i<=5; i++){
  console.log(i)
}
*/

/**while vs For loop
 * standard loop=>for
 * non-standard loop=>while
 */
/* non-standard loop=> generate random number until one that's at lea 0.5*/

// let randomNumber=0
// while(randomNumber<0.5){
//   randomNumber=Math.random()
// }
// console.log(randomNumber)

// const todoList=[
//   'make dinner',
//   'wash dishes',
//   'watch youtube'
// ]

// for(let i=0; i<todoList.length-1;i++){
//   todoList[index]
//   // console.log(index)
//   console.log(value)
// }

/*
const nums=[1,1,3]
let total=0;

for(let i=0; i<nums.length; i++){
  const num= nums[i]
  total+=num
}
console.log(total)

const numsDoubled=[];

for(let i=0;i<nums.length;i++){
  const num=nums[i];
  numsDoubled.push(num * 2)
}
console.log(numsDoubled)
*/

// Arrays references

const array1=[1,2,3]
const array2=array1.slice();
array2.push(4)
console.log(array1);
console.log(array2);

const array3=[1,2,3];

const[firstValue, secondValue]=[1,2,3]

for(let i=1;i<=10;i++){
  if(i%3===0){
    continue;
  }
  console.log(i)
  i++
  // console.log(i)
  // if(i===8){
  //   break;
  // }
}

let i=1; 
while(i<=10){
  if(i%3===0)
  console.log(i);
  i++;
}

function doubleArray(nums){
  // const nums=[1,1,3]
  const numsDoubled=[] 

  for(let i=0;i<nums.length;i++){
    const num=nums[i];
    if(num===0){
      return numsDoubled
    }
    numsDoubled.push(num*2)
  }
  // console.log(numsDoubled)
  return numsDoubled;
}
// doubleArray([1,1,3]);
// doubleArray([2,2,5])

console.log(doubleArray([1,1,3]))
console.log(doubleArray([2,2,5,0,5]))

