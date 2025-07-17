
/*const regularFunction= function(param,param2){
  console.log('hello')
  return 5;
}

const arrowFunction=(param, param2)=>{
  console.log('hello');
  return 5;
}
arrowFunction()

const oneParam=param=>{
  console.log(param+1)
}
oneParam(2)

// const oneLine=()=>{
//   return 2+3
// }

const oneLine= () =>2+3;
console.log(oneLine())*/

/* Arrow function 
Mostly works the same as a regular function
*/
/*
[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(value, index => {
  if(value==='wash dishes'){
    return;
  }
  console.log(index);
  console.log(value);
});

const object2={
  method:()=>{

  },
  method(){

  }
}*/
//  passing a function into another function => use arrow function 



/*
const buttonElement=document.querySelector('.js-button')

// buttonElement.addEventListener('click',()=>{
//   console.log('click')
// });

// addEvent listener add multiple event listener for one event
// removeEventListener() we can remove an event listener 

const eventListener=()=>{
  console,log('click')
}

buttonElement.addEventListener('click',eventListener);

buttonElement.removeEventListener('clcik', eventListener)

buttonElement.addEventListener('click',()=>{
  console.log('click2')
})

// use addEventListener() instead of onclick="..."
*/


// filter()  
// create a new array[]
// return true,=>put value in array
// return false,=> not put value in array
console.log(
[1,-3,5].filter((value,index)=>{
 /* if(value>=0){
    return true;
  }else{
    return false
  }*/
  return value>=0
  // return flase;
}))


// map()- transform an array into another array

console.log([1,1,3].map((value,index)=>{
  // return value+10;
  return value*2;
}));



console.log([1,1,3].map(value=> value*2));